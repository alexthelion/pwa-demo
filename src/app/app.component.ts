import {Component} from '@angular/core';
import {UpdateSWService} from './update-sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PWA demo application';

  constructor(private sw: UpdateSWService) {
    // check the service worker for updates
    this.sw.checkForUpdates();
  }

  showWelcomeDialog() {
    alert('Welcome to PWA demo app');
  }
}
