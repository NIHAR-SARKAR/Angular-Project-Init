import { Component, Input, ViewChild } from '@angular/core';
import { ChildComponent } from './child/Child.Component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ChildValue = 'Hello new World';
  @ViewChild(ChildComponent) Child: ChildComponent;

}
