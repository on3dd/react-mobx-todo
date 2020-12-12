import { observable, action } from 'mobx';

import { Todo } from '@react-mobx-todo';

import { fetchTodos } from '../../api/todos';

export default class TodosStore {
  @observable todos: Todo[] = [];

  @action
  loadTodos = () => {
    fetchTodos().then((todos) => {
      console.log('todos', todos);
      this.todos = todos.data;
      console.log('this.todos', this.todos);
    });
  };
}
