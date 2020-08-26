import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    .fiveCount {
      color: white;
    }
  `]
})
export class AppComponent {
  display = false;
  log = [];

  toggleDisplay() {
    this.display = !this.display;
    this.log.push(new Date());
  }
}
