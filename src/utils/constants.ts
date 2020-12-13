export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const API_ENDPOINTS = {
  todos: {
    all: '/todos?userId=1',
    id: (id: number) => `/todos/${id}`,
  },
};

export const API_PARAMS = {
  userId: 1,
  completed: false,
};
