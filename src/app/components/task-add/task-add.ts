import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-task-add',
    styleUrl: './task-add.css',
    templateUrl: './task-add.html',
})
export class TaskAdd {
    // output() : événement envoyé au parent. Le parent l'écoute avec (addTask)="...".
    addTask = output<string>();

    handleAddTask(newTaskName:string) {
        // Ce composant ne connaît pas la liste : il prévient seulement le parent.
        this.addTask.emit(newTaskName);
    }
}
