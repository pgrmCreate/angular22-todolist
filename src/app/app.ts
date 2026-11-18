import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from '../interfaces/Task';
import { TasksList } from './components/tasks-list/tasks-list';
import { TaskAdd } from './components/task-add/task-add';

// @todo Faire un répo avec 3 composant contenant les 3 types de formulaire

@Component({
    imports: [RouterOutlet, TasksList, TaskAdd],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    // L'état de l'application tient dans un signal : le parent est le seul
    // à posséder la liste, les composants enfants la reçoivent ou la modifient par lui.
    protected readonly tasks = signal<Task[]>([
        {
            id: 1,
            title: 'Promener le chien',
            isDone: false,
        },
        {
            id: 2,
            title: 'Faire à manger',
            isDone: false,
        },
    ]);

    protected addTask(newTaskName:string) {
        // On ne fait pas this.tasks().push(...) : on crée une COPIE du tableau
        // avec le spread [...] puis on ajoute la nouvelle tâche à la fin.
        // Un signal compare l'ancienne et la nouvelle valeur par référence :
        // si on modifiait le même tableau, Angular ne verrait aucun changement.
        this.tasks.set([...this.tasks(), {
            id: 3,
            title: newTaskName,
            isDone: false,
        }])
    }
}
