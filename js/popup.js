(function() {
    var Popup = Class.create({
        initialize: function() {
            this.bg = chrome.extension.getBackgroundPage().bg;
            window.addEventListener("load", function(evt) {
                this.start();
            }.bind(this));
        },
        start: function() {
            this.assignMessages();
            this.assignEventHandlers();
        },
        assignMessages: function() {
            var hash = {
                "popup***": "popup***",
        ・・・
        };
            for (var key in hash) {
                $(key).innerHTML = chrome.i18n.getMessage(hash[key]);
            }
        },
        assignEventHandlers: function() {
            $("***").onclick = this.onClick***.bind(this);
        },
        onClick***: function(evt) {
            // 設定値を取得
            var ***Config = this.bg.get***Config();
            // Ajax通信
        this.bg.load***({
                onSuccess: function(res) {
                ・・・
                }.bind(this)
            });
      ・・・
        },
    ・・・
});
    new Popup();
})();
