import { makeObservable, observable, action, toJS } from 'mobx';

import { Todo } from '@react-mobx-todo';

import { fetchTodos, createTodo, updateTodo } from '../../api/todos';

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

    console.log('this.todos', toJS(this.todos));
  }

  async updateTodo(id: number, title: string) {
    const res = await updateTodo(id, title);

    console.log('updated todo', res.data);

    const idx = this.todos.findIndex((el) => el.id === res.data.id);
    this.todos.splice(idx, 1, res.data);

    console.log('this.todos', toJS(this.todos));
  }

  private toggleFetching() {
    this.fetching = !this.fetching;
  }
}
