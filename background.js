'use strict';

var move = function(last){    
  chrome.bookmarks.move(last.id,dest);
}

chrome.bookmarks.onCreated.addListener(
  (id) => chrome.bookmarks.move(id, { index: 0 })
);

chrome.bookmarks.onMoved.addListener(
  (id,info) => change_folder(id,info)
);

function change_folder(id,info) {
  if (info.parentId != info.oldParentId) {
    chrome.bookmarks.move(id, { index: 0 });
  }
}