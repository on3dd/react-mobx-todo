import {
  makeObservable,
  observable,
  action,
  runInAction,
} from 'mobx';

import { Todo } from '@react-mobx-todo';

import Store from '../store';

import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../../api/todos';

export default class TodosStore extends Store {
  todos: Todo[] = [];
  fetching: boolean = false;

  constructor() {
    super();

    makeObservable(this, {
      todos: observable,
      fetching: observable,
      fetchTodos: action,
      createTodo: action,
      updateTodo: action,
      deleteTodo: action,
    });
  }

  async fetchTodos() {
    this.toggleFetching();

    const { data } = await fetchTodos();

    runInAction(() => {
      this.todos = data;
    });

    this.toggleFetching();
  }

  async createTodo(title: string) {
    try {
      const { data } = await createTodo(title);

      runInAction(() => {
        this.todos = [...this.todos, data];
      });

      this.success('Item added successfully!');
    } catch (err: unknown) {
      console.error(err);

      this.danger('Error while adding item!');
    }
  }

  async updateTodo(id: number, title: string) {
    try {
      const { data } = await updateTodo(id, title);

      runInAction(() => {
        this.todos = this.todos.map((el) => {
          return el.id === data.id ? data : el;
        });
      });

      this.success('Item updated successfully!');
    } catch (err: unknown) {
      console.error(err);

      this.danger('Error while updating item!');
    }
  }

  async deleteTodo(id: number) {
    try {
      await deleteTodo(id);

      const data = this.todos.find((el) => el.id === id) as Todo;

      runInAction(() => {
        this.todos = this.todos.filter((el) => el.id !== data.id);
      });

      this.success('Item deleted successfully!');
    } catch (err: unknown) {
      console.error(err);

      this.danger('Error while deleting item!');
    }
  }

  private toggleFetching() {
    runInAction(() => {
      this.fetching = !this.fetching;
    });
  }
}
