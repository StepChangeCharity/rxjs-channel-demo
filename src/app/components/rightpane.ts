import {Component, View, Inject} from "angular2/angular2";
import {ChannelService} from "../services/ChannelService";

@Component({
	selector: 'right-pane',
})

@View({
	directives: [],
	styles:[``],
	template:
	`
    <div>
      {{messageFromLeft}}
    </div>
	`
})

export class RightPane {

  channelService: ChannelService;
  messageFromLeft: string;

	constructor(
    channelService : ChannelService
  ){
    this.channelService = channelService;

    // Subscribe to activity on the 'Left' channel - i.e. when the button is
    // clicked. When it is clicked the message sent on the button click
    // event is posted to the right pane.
    channelService.getChannel('Left').subject.subscribe(x =>
      this.messageFromLeft = x);
  }
}
