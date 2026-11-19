import { Component, inject, output, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { TaskService } from '../../services/task.service';

@Component({
    imports: [FormField],
    selector: 'app-task-add',
    styleUrl: './task-add.css',
    templateUrl: './task-add.html',
})
export class TaskAdd {
    protected taskService = inject(TaskService);
    protected readonly newTask = signal({
        title: '',
    });
    protected readonly newTaskForm = form(this.newTask, (path) => {
        required(path.title, { message: 'Veuillez indiquer le nom de la tâche' });
    });

    handleAddTask() {
        if(this.newTaskForm().invalid())
            return;

        this.taskService.addTask(this.newTaskForm.title().value());
        this.newTaskForm.title().value.set('');

        return;
    }
}
