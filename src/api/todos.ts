import { AxiosResponse } from 'axios';

import { Todo } from '@react-mobx-todo';

import axiosService from '../utils/axiosService';
import { API_ENDPOINTS } from '../utils/constants';

export const fetchTodos = async (): Promise<
  AxiosResponse<Todo[]>
> => {
  return await axiosService.get(API_ENDPOINTS.todos);
};
