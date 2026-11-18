// Interface TypeScript : elle décrit la forme d'une tâche.
// Elle n'existe qu'à la compilation et ne produit aucun code JavaScript.
export interface Task {
    id: number;
    title: string;
    isDone: boolean;
}
