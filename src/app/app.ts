import {bootstrap, Component, View} from 'angular2/angular2';
import {ChannelService} from './services/ChannelService';
import {LeftPane} from './components/LeftPane';
import {RightPane} from './components/RightPane';

@Component({
    selector: 'my-app'
})

@View ({
	// Angular directives are similar to WebComponents.
	// If we define and import a class and add it to the directives
	// We can then put a placeholder for it in the template.
	directives: [LeftPane, RightPane],
  styles:[`
    .main {
      display: inline-block;
      width: 800px;
    }
		.leftPanel, .rightPanel {
      width: 300px;
      float: left;
      border: 1px solid;
      margin-right: 10px;
      min-height: 100px;
      padding: 5px;
    };
  `],
	template: `
  <div class="main">
    <div class="leftPanel">
      <left-pane></left-pane>
    </div>
    <div class="rightPanel">
      <right-pane></right-pane>
    </div>
  </div>
  `
})

class AppComponent {

  constructor(
    channelService : ChannelService
  ){
    // Create two channels upfront on the service - the service is injected
    // into the components, which can subscribe to either channel.
    channelService.createChannel('Left', true);
    channelService.createChannel('Right', true)
  }
}

bootstrap(AppComponent, [ChannelService]);
