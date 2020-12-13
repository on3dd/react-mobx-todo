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

    const { data } = await fetchTodos();

    this.todos = data;

    this.toggleFetching();
  }

  async createTodo(title: string) {
    const { data } = await createTodo(title);

    console.log('created todo', data);

    this.todos = [...this.todos, data];

    console.log('this.todos', toJS(this.todos));
  }

  async updateTodo(id: number, title: string) {
    const { data } = await updateTodo(id, title);

    console.log('updated todo', data);

    this.todos = this.todos.map((el) => {
      return el.id === data.id ? data : el;
    });

    console.log('this.todos', toJS(this.todos));
  }

  private toggleFetching() {
    this.fetching = !this.fetching;
  }
}
