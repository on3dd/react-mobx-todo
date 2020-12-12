import { makeObservable, observable, action } from 'mobx';

import { Todo } from '@react-mobx-todo';

import { fetchTodos } from '../../api/todos';

export default class TodosStore {
  todos: Todo[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      loadTodos: action,
    });
  }

  loadTodos = () => {
    fetchTodos().then((todos) => {
      this.todos = todos.data;
    });
  };
}
