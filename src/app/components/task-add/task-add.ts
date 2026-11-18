import { Component, output, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
    imports: [FormField],
    selector: 'app-task-add',
    styleUrl: './task-add.css',
    templateUrl: './task-add.html',
})
export class TaskAdd {
    protected readonly newTask = signal({
        title: '',
    });

    protected readonly newTaskForm = form(this.newTask, (path) => {
        required(path.title, { message: 'Veuillez indiquer le nom de la tâche' });
    });
    // output() : événement envoyé au parent. Le parent l'écoute avec (addTask)="...".
    addTask = output<string>();

    handleAddTask() {
        if(this.newTaskForm().invalid())
            return;

        this.addTask.emit(this.newTaskForm.title().value());
        this.newTaskForm.title().value.set('');

        return;
    }
}
