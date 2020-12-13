declare module '@react-mobx-todo' {
  export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  export interface TodoDraft {
    id?: number;
    title?: string;
  }
}
