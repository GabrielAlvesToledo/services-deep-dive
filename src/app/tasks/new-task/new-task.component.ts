import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(private tasksService:TasksService){}
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  
  onAddTask(title: string, description: string) {
    this.tasksService.addTask({title, description})
    this.formEl()?.nativeElement.reset();
  }
}
