import { Component, OnInit } from '@angular/core';

interface ITask {
  title: string;
  checked: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TODO';
  tasks: Array<ITask> = [];

  ngOnInit(): void {
    if (localStorage.getItem('itms')){
      this.tasks = JSON.parse(localStorage.getItem('itms')); 
    }
  }

  saveLocalStorage() {
    localStorage.setItem('itms', JSON.stringify(this.tasks));
  }

  changedArray(item: string) {
    const task: ITask = {
      title: item,
      checked: false
    };
    this.tasks.push(task);
      this.saveLocalStorage();
    console.log(this.tasks);
  }

  clearFunc() {
    this.tasks.length = 0;
    localStorage.removeItem('itms');
  }

  changeParams(index) {
    this.tasks[index].checked = !this.tasks[index].checked;
    this.saveLocalStorage();
  }

  delTask(index) {
    this.tasks.splice(index, 1);
    this.saveLocalStorage();
  }

  trackByFn(index) {
    return index;
  }

}
