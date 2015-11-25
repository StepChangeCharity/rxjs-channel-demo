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
var Rx = require('rx');
var Channel = (function () {
    function Channel(name, isPersistent, subject) {
        this.name = name;
        this.isPersistent = isPersistent;
        this.subject = subject;
    }
    return Channel;
})();
var ChannelService = (function () {
    function ChannelService() {
        this.channels = new Array();
    }
    // Calling the createChannel method will first check for an already-existing
    // channel of the same name. If this exists that channel will be returned;
    // if not a new channel is created and added to the array of channels in the
    // class properties.
    //
    // If the 'isPersistent' flag is set to 'true', a reusable ReplaySubject will
    // be created; if 'false' a single-shot Subject will be created.
    // - at least that's how I understand it right now.
    ChannelService.prototype.createChannel = function (name, isPersistent) {
        this.checkNameValid(name);
        var channel = this.checkChannelExists(name);
        if (channel !== undefined) {
            console.log("Channel exists - returning channel " + name);
            return channel;
        }
        else {
            console.log("Channel does not already exist - creating new channel " +
                name + ", persistent: " + isPersistent);
            if (isPersistent === true) {
                this.channels.push(new Channel(name, true, new Rx.ReplaySubject()));
            }
            else {
                this.channels.push(new Channel(name, false, new Rx.Subject()));
            }
        }
    };
    // Returns the channel of name passed to method; checks if name passed is
    // a valid channelname first
    ChannelService.prototype.getChannel = function (name) {
        this.checkNameValid(name);
        return this.channels.find(function (x) { return x.name === name; });
    };
    // Posts an event to a particular channel, with a value
    ChannelService.prototype.postToChannel = function (name, value) {
        var channel = this.getChannel(name);
        console.log(channel);
        if (channel !== undefined) {
            console.log("channel " + name + " found - posting value: " + value);
            // When the 'onNext' method is triggered on an observable, it passes
            // the value parameter to anything subscribed to it - in this case,
            // the right hand pane is subscribed to the left channel.
            channel.subject.onNext(value);
        }
    };
    // Check the name passed to the method is a string.
    // Will throw an error if not.
    ChannelService.prototype.checkNameValid = function (name) {
        if (typeof name === 'string') {
            console.log("channel name '" + name + "' was valid");
        }
        else {
            throw Error("Name of channel must be a string");
        }
    };
    // When passed a name, checks if a channel already exists with that name in
    // the 'channels' array.
    ChannelService.prototype.checkChannelExists = function (name) {
        return this.channels.find(function (x) { return x.name === name; });
    };
    ChannelService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChannelService);
    return ChannelService;
})();
exports.ChannelService = ChannelService;
//# sourceMappingURL=ChannelService.js.map