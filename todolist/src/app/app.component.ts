import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  public taskvalue = "";
  list: Todo[] = [];

  ngOnInit () {
    this.list = [];
    this.taskvalue = "";
  }
  additem() {
    if (this.taskvalue !== "") {
      const item:Todo = {
        id: Date.now(),
        value: this.taskvalue,
        isdone: false
      }
      this.list.push(item);
    }
    this.taskvalue = "";
  }

  deleteitem(id:number) {
    this.list = this.list.filter(item => item.id !== id);
  } 

}
