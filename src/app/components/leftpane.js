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
var LeftPane = (function () {
    function LeftPane(channelService) {
        this.channelService = channelService;
        console.log(channelService.channels);
    }
    // When the 'Click Me' button is clicked, send a message to the 'left'
    // channel (second parameter).
    LeftPane.prototype.registerClick = function () {
        this.channelService.postToChannel("Left", "Button Clicked!");
    };
    LeftPane = __decorate([
        angular2_1.Component({
            selector: 'left-pane',
        }),
        angular2_1.View({
            directives: [],
            styles: [""],
            template: "\n    <div>\n      <button (click) = \"registerClick()\">Click Me</button>\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [ChannelService_1.ChannelService])
    ], LeftPane);
    return LeftPane;
})();
exports.LeftPane = LeftPane;
//# sourceMappingURL=LeftPane.js.map