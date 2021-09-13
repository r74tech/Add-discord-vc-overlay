(function () {
  var Popup = Class.create({
    initialize: function () {
      this.bg = chrome.extension.getBackgroundPage().bg;
      window.addEventListener("load", function (evt) {
        this.start();
      }.bind(this));
    },
    start: function () {
      this.assignMessages();
      this.assignEventHandlers();
    },
    assignMessages: function () {
      var hash = {
        "popup_opttitle": "popup_opttitle",
        "popup_optdiscript": "popup_optdiscript",
      };
      for (var key in hash) {
        $(key).innerHTML = chrome.i18n.getMessage(hash[key]);
      }
    },
    assignEventHandlers: function () {
      $("save-button").onclick = this.onClick_connect.bind(this);
      $("reload-button").onclick = this.onClick_reload.bind(this);
    },
    onClick_connect: function (evt) {
      // 設定値を保存
      let serverId = document.getElementById("server-id").value;
      let channelId = document.getElementById("channel-id").value;
      console.log(serverId);
      console.log(channelId);
      this.set_Id_Config(serverId, channelId);
    },
    onClick_reload: function () {
      this.get_Config("serverId", "server-id");
      this.get_Config("channelId", "channel-id");
    },
    set_Id_Config: function (serverId, channelId) {
      if((serverId!="")&&(channelId!="")){
        let data = {"serverId": serverId, "channelId": channelId};
        chrome.storage.local.set(data, function() {
          // 保存できたら、画面にメッセージを表示(0.75秒だけ)
          var status = document.getElementById('status');
          status.textContent = 'Options saved Id.';
          setTimeout(function() {
            status.textContent = '';
          }, 750);
          console.log(data);
        });
      }
    },
    get_Config: function (value, ele) {
      chrome.storage.local.get(null, function (item) {
        value = item[value];
        document.getElementById(ele).value = value;
      });
    }
  });
  new Popup();
})();

function connect() {
  let serverId = document.getElementById("server-id").value;
  let channelId = document.getElementById("channel-id").value;

  let serverTest = /^[0-9]{18}$/.test(serverId);
  let channelTest = /^[0-9]{18}$/.test(channelId);

  if (serverTest && channelTest) {
    let config = {'serverId': serverId, 'channelId': channelId};
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        send: config
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#connect-button').addEventListener('click', connect);
});
