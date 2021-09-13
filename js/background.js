var Background = Class.create({
    initialize: function() {
        this.assignEventHandlers();
    },
    assignEventHandlers: function() {
    ・・・
    },
    get***Config: function() {
        var value = localStorage["***"];
        if (value) {
            return value;
        } else {
            return "初期値の値";
        }
    },
    set***Config: function(value) {
        localStorage["***"] = value;
    }
});
var bg = new Background();
