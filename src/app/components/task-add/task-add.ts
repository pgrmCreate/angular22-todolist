import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-task-add',
    styleUrl: './task-add.css',
    templateUrl: './task-add.html',
})
export class TaskAdd {
    addTask = output<string>();

    handleAddTask(newTaskName:string) {
        this.addTask.emit(newTaskName);
    }
}
