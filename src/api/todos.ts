import { AxiosResponse } from 'axios';

import { Todo } from '@react-mobx-todo';

import axiosService from '../utils/axiosService';
import { API_ENDPOINTS, API_PARAMS } from '../utils/constants';

export const fetchTodos = async (): Promise<
  AxiosResponse<Todo[]>
> => {
  return await axiosService.get(API_ENDPOINTS.todos.all);
};

export const createTodo = async (
  title: string,
): Promise<AxiosResponse<Todo>> => {
  return await axiosService.post(API_ENDPOINTS.todos.all, {
    title,
    userId: API_PARAMS.userId,
    completed: API_PARAMS.completed,
  });
};

export const updateTodo = async (
  id: number,
  title: string,
): Promise<AxiosResponse<Todo>> => {
  return await axiosService.patch(API_ENDPOINTS.todos.id(id), {
    title,
  });
};
