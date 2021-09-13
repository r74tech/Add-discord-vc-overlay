// (function() {
//     var Popup = Class.create({
//         initialize: function() {
//             this.bg = chrome.extension.getBackgroundPage().bg;
//             window.addEventListener("load", function(evt) {
//                 this.start();
//             }.bind(this));
//         },
//         start: function() {
//             this.assignMessages();
//             this.assignEventHandlers();
//         },
//         assignMessages: function() {
//             var hash = {
//                 "popup_opttitle": "popup_opttitle",
//                 "popup_optdiscript": "popup_optdiscript",
//         ・・・
//         };
//             for (var key in hash) {
//                 $(key).innerHTML = chrome.i18n.getMessage(hash[key]);
//             }
//         },
//         assignEventHandlers: function() {
//             $("***").onclick = this.onClick***.bind(this);
//         },
//         onClick***: function(evt) {
//             // 設定値を取得
//             var ***Config = this.bg.get***Config();
//         },
//         ・・・
//     });
//     new Popup();
// })();
function connect() {
    let serverId = document.getElementById("server-id").value;
    let channelId = document.getElementById("channel-id").value;

    let serverTest = /^[0-9]{18}$/.test(serverId);
    let channelTest = /^[0-9]{18}$/.test(channelId);

    if (serverTest && channelTest) {
        let config = {'serverId':serverId, 'channelId':channelId};
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                send: config
            });
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#connect-button').addEventListener('click', connect);
});
