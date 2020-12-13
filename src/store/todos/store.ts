import { makeObservable, observable, action } from 'mobx';

import { Todo } from '@react-mobx-todo';

import { fetchTodos } from '../../api/todos';

export default class TodosStore {
  todos: Todo[] = [];
  fetching: boolean = false;

  constructor() {
    makeObservable(this, {
      todos: observable,
      fetching: observable,
      loadTodos: action,
    });
  }

  async loadTodos() {
    this.toggleFetching();

    const res = await fetchTodos();

    this.todos = res.data;

    this.toggleFetching();
  }

  private toggleFetching() {
    this.fetching = !this.fetching;
  }
}
