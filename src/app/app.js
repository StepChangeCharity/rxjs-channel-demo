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
var angular2_1 = require('angular2/angular2');
var ChannelService_1 = require('./services/ChannelService');
var LeftPane_1 = require('./components/LeftPane');
var RightPane_1 = require('./components/RightPane');
var AppComponent = (function () {
    function AppComponent(channelService) {
        // Create two channels upfront on the service - the service is injected
        // into the components, which can subscribe to either channel.
        channelService.createChannel('Left', true);
        channelService.createChannel('Right', true);
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            // Angular directives are similar to WebComponents.
            // If we define and import a class and add it to the directives
            // We can then put a placeholder for it in the template.
            directives: [LeftPane_1.LeftPane, RightPane_1.RightPane],
            styles: ["\n    .main {\n      display: inline-block;\n      width: 800px;\n    }\n\t\t.leftPanel, .rightPanel {\n      width: 300px;\n      float: left;\n      border: 1px solid;\n      margin-right: 10px;\n      min-height: 100px;\n      padding: 5px;\n    };\n  "],
            template: "\n  <div class=\"main\">\n    <div class=\"leftPanel\">\n      <left-pane></left-pane>\n    </div>\n    <div class=\"rightPanel\">\n      <right-pane></right-pane>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [ChannelService_1.ChannelService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [ChannelService_1.ChannelService]);
//# sourceMappingURL=app.js.map