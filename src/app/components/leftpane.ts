import {Component, View, Inject} from "angular2/angular2";
import {ChannelService} from "../services/ChannelService";

@Component({
	selector: 'left-pane',
})

@View({
	directives: [],
	styles:[``],
	template:
	`
    <div>
      <button (click) = "registerClick()">Click Me</button>
    </div>
	`
})

export class LeftPane {

  channelService: ChannelService;

	constructor(
    channelService : ChannelService
  ){
    this.channelService = channelService;
    console.log(channelService.channels);
  }

  // When the 'Click Me' button is clicked, send a message to the 'left'
  // channel (second parameter).
  registerClick() {
    this.channelService.postToChannel("Left", "Button Clicked!");
  }
}
