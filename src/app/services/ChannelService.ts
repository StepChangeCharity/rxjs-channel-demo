import {Injectable} from 'angular2/angular2';
import * as Rx from 'rx';


class Channel {
  name: string;
  isPersistent: boolean;
  subject: Rx.Subject;

  constructor(name: string, isPersistent: boolean, subject: Rx.Subject) {
    this.name = name;
    this.isPersistent = isPersistent;
    this.subject = subject
  }
}

@Injectable()
export class ChannelService {

  channels: Array<Channel>;

  constructor() {
    this.channels = new Array<Channel>();
  }

  // Calling the createChannel method will first check for an already-existing
  // channel of the same name. If this exists that channel will be returned;
  // if not a new channel is created and added to the array of channels in the
  // class properties.
  //
  // If the 'isPersistent' flag is set to 'true', a reusable ReplaySubject will
  // be created; if 'false' a single-shot Subject will be created.
  // - at least that's how I understand it right now.
  createChannel(name, isPersistent) {
    this.checkNameValid(name);
    var channel = this.checkChannelExists(name);

    if(channel !== undefined)
    {
      console.log("Channel exists - returning channel " + name);
      return channel;
    }
    else {
      console.log("Channel does not already exist - creating new channel " +
        name + ", persistent: " + isPersistent);

        if(isPersistent === true) {
          this.channels.push(new Channel(name, true, new Rx.ReplaySubject()));
        }
        else {
          this.channels.push(new Channel(name, false, new Rx.Subject()));
        }
    }
  }

  // Returns the channel of name passed to method; checks if name passed is
  // a valid channelname first
  getChannel(name):Channel {
    this.checkNameValid(name);
    return this.channels.find(x => x.name === name);
  }

  // Posts an event to a particular channel, with a value
  postToChannel(name, value) {
    var channel = this.getChannel(name);
    console.log(channel);
    if(channel !== undefined) {
      console.log("channel " + name + " found - posting value: " + value);
      // When the 'onNext' method is triggered on an observable, it passes
      // the value parameter to anything subscribed to it - in this case,
      // the right hand pane is subscribed to the left channel.
      channel.subject.onNext(value);
    }
  }

  // Check the name passed to the method is a string.
  // Will throw an error if not.
  checkNameValid(name) {
    if(typeof name === 'string') {
      console.log("channel name '" + name + "' was valid");
    }
    else { throw Error("Name of channel must be a string") }
  }

  // When passed a name, checks if a channel already exists with that name in
  // the 'channels' array.
  checkChannelExists(name):Object {
    return this.channels.find(x => x.name === name)
  }
}
