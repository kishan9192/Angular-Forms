import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  public topics = ['Angular', 'React', 'Vue'];

  /* having a userModel. We can consider instance like autofilled form when we want to change/edit
     the shipment details or address while buying something, Data that already appears "prefilled" in the form*/
  userModel  = new User('Rob', 'rob@gmail.com', 5454544, 'Vue', 'morning', true);
}
