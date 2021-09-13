var Background = Class.create({
  initialize: function () {
    this.assignEventHandlers();
  },
  assignEventHandlers: function () {
    chrome.tabs.onUpdated.addListener(function (id, changeInfo, tab) {
      this.onSelectionChanged(id);
    }.bind(this));
  },
  onSelectionChanged: function(tabId) {
    chrome.tabs.executeScript(tabId, {
      file: "js/content.js"
    });
  }
});
var bg = new Background();
