var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var ChannelService_1 = require("../services/ChannelService");
var RightPane = (function () {
    function RightPane(channelService) {
        var _this = this;
        this.channelService = channelService;
        // Subscribe to activity on the 'Left' channel - i.e. when the button is
        // clicked. When it is clicked the message sent on the button click
        // event is posted to the right pane.
        channelService.getChannel('Left').subject.subscribe(function (x) {
            return _this.messageFromLeft = x;
        });
    }
    RightPane = __decorate([
        angular2_1.Component({
            selector: 'right-pane',
        }),
        angular2_1.View({
            directives: [],
            styles: [""],
            template: "\n    <div>\n      {{messageFromLeft}}\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [ChannelService_1.ChannelService])
    ], RightPane);
    return RightPane;
})();
exports.RightPane = RightPane;
//# sourceMappingURL=RightPane.js.map