import { Component } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eShepherdClient';
  // menuIcon:any;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  showFiller = false;
}
