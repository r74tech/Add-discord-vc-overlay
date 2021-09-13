// (function() {
//     var Options = Class.create({
//         initialize: function() {
//             this.bg = chrome.extension.getBackgroundPage().bg;
//             window.addEventListener("load", function(evt) {
//                 this.start();
//             }.bind(this));
//         },
//         start: function() {
//             this.assignMessages();
//             this.assignEventHandlers();
//             this.restoreConfigurations();
//       ・・・
//         },
//         assignMessages: function() {
//             var hash = {
//                 "opt_options_title": "opt_options_title",
//                 "opt_limit_speaking": "opt_limit_speaking",
//                 "opt_small_avatars": "opt_small_avatars",
//                 "opt_hide_names": "opt_hide_names",
//         };
//             for (var key in hash) {
//                 $(key).innerHTML = chrome.i18n.getMessage(hash[key]);
//             }
//         },
//         assignEventHandlers: function() {
//             $("***").onclick = this.onClick***.bind(this);
//         },
//         restoreConfigurations: function() {
//             $("***").value = this.bg.get***Config();
//         },
//         onClick***: function(evt) {
//             var value = $("***").value;
//             this.bg.set***Config(value);
//         },
//         ・・・
//     });
//     new Options();
// })();
