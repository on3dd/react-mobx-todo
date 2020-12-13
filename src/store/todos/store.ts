import { makeObservable, observable, action } from 'mobx';

import { Todo } from '@react-mobx-todo';

import { fetchTodos, createTodo } from '../../api/todos';

export default class TodosStore {
  todos: Todo[] = [];
  fetching: boolean = false;

  constructor() {
    makeObservable(this, {
      todos: observable,
      fetching: observable,
      fetchTodos: action,
    });
  }

  async fetchTodos() {
    this.toggleFetching();

    const res = await fetchTodos();

    this.todos = res.data;

    this.toggleFetching();
  }

  async createTodo(title: string) {
    const res = await createTodo(title);

    console.log('created todo', res.data);

    this.todos = [...this.todos, res.data];
  }

  private toggleFetching() {
    this.fetching = !this.fetching;
  }
}
