import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hashControl = new FormControl('LEHV6nWB2yk8pyo0adR*.7kCMdnj');
  sizeControl = new FormControl(512);
  resolutionControl = new FormControl(64);
  punchControl = new FormControl(4);
}
