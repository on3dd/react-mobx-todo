import {
  makeObservable,
  observable,
  action,
  runInAction,
  toJS,
} from 'mobx';

import { Todo } from '@react-mobx-todo';

import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../../api/todos';

export default class TodosStore {
  todos: Todo[] = [];
  fetching: boolean = false;

  constructor() {
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
    const { data } = await createTodo(title);

    console.log('created todo', data);

    runInAction(() => {
      this.todos = [...this.todos, data];
    });

    console.log('this.todos', toJS(this.todos));
  }

  async updateTodo(id: number, title: string) {
    const { data } = await updateTodo(id, title);

    console.log('updated todo', data);

    runInAction(() => {
      this.todos = this.todos.map((el) => {
        return el.id === data.id ? data : el;
      });
    });

    console.log('this.todos', toJS(this.todos));
  }

  async deleteTodo(id: number) {
    await deleteTodo(id);

    const data = this.todos.find((el) => el.id === id) as Todo;

    console.log('deleted todo', toJS(data));

    runInAction(() => {
      this.todos = this.todos.filter((el) => el.id !== data.id);
    });

    console.log('this.todos', toJS(this.todos));
  }

  private toggleFetching() {
    runInAction(() => {
      this.fetching = !this.fetching;
    });
  }
}
