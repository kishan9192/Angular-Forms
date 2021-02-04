import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  public topics = ['Angular', 'React', 'Vue'];

  public topicHasError = true;
  /* having a userModel. We can consider instance like autofilled form when we want to change/edit
     the shipment details or address while buying something, Data that already appears "prefilled" in the form*/
  userModel  = new User('', 'rob@gmail.com', 5454544, 'default', 'morning', true);

  public validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  constructor(public enrollmentservice: EnrollmentService) { }

  onSubmit() {
    console.log(this.userModel);

    this.enrollmentservice.enroll(this.userModel)
    .subscribe(
      (data: any) => console.log('success', data),
      (error: any) => console.error('Error!', error)
    )
  }

  
}
