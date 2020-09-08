import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'test server'}];

  onServerAdded(data: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: data.serverName,
      content: data.serverContent
    });
  }

  onBlueprintAdded(data: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: data.blueprintName,
      content: data.blueprintContent
    });
  }
}
