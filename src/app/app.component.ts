import { Component } from '@angular/core';

interface ITask {
  title: string;
  checked: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODO';
  tasks: ITask[] = [];

  changedArray(item: string) {
    const task: ITask = {
      title: item,
      checked: false
    };
    this.tasks.push(task);
    console.log(this.tasks)
  }

  changeParams(index) {
    this.tasks[index].checked = !this.tasks[index].checked;
  }

}
