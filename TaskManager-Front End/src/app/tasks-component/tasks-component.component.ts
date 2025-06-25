import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './tasks-component.component.html',
  styleUrl: './tasks-component.component.css'
})
export class TasksComponentComponent {

tasks: any[] = [];
showTaskForm: boolean = false;
isEditMode: boolean = false;
formTask: any = {}; // used for both add & edit

constructor(private taskService:TasksService,private router:Router) {}

ngOnInit(): void {
  this.getTasks();
}

getTasks() {
  this.taskService.get().subscribe(
    (data:any) => {
      const allTasks=data;
      console.log(allTasks);
      if(allTasks.data.length>0){
        this.tasks = allTasks.data;

      }
      else{
        this.tasks=[];
      }
      
    },
    (error) => {
      console.error('Error fetching tasks:', error);
    }
  );
}

openAddForm() {
  this.isEditMode = false;
  this.formTask = {};
  this.showTaskForm = !this.showTaskForm;
}

onEdit(task: any) {
  this.isEditMode = true;
  this.formTask = { ...task }; // clone object
  this.showTaskForm = true;
}

submitTask() {
  if (this.isEditMode) {
    this.taskService.put(this.formTask).subscribe(
      (res) => {
        this.getTasks(); // refresh table
        this.showTaskForm = false;
      },
      (err) => {
        console.error('Update error:', err);
      }
    );
  } else {
    console.log(this.formTask);
    this.taskService.post(this.formTask).subscribe(
      (res) => {
        this.getTasks(); // refresh table
        this.showTaskForm = false;
      },
      (err) => {
        console.error('Add error:', err);
      }
    );
  }
}

onAssign(task: any) {
  // Show a modal or inline form to assign task
  alert(`Assign task ${task.id} to a user`);
  this.isEditMode = true;
  this.formTask = { ...task }; // clone object
  this.showTaskForm = true;
}

logOut(){
  this.router.navigate(['/']);
}


}
