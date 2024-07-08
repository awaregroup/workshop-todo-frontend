import { Todo } from '@/models/todo';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your API base URL

export interface ITodoService {
    getAllTodos(): Promise<Todo[]>;
    getTodoById(id: string): Promise<Todo>;
    createTodo(todo: Todo): Promise<Todo>;
    updateTodo(id: string, todo: Todo): Promise<Todo>;
    deleteTodo(id: string): Promise<void>;
    deleteTodoById(id: string): Promise<void>;
}

export class TodoService implements ITodoService {
    private readonly axiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: BASE_URL,
        });
    }

    async getAllTodos(): Promise<Todo[]> {
        const response = await this.axiosInstance.get('api/todos');
        return response.data;
    }

    async getTodoById(id: string): Promise<Todo> {
        const response = await this.axiosInstance.get(`api/todos/${id}`);
        return response.data;
    }

    async createTodo(todo: Todo): Promise<Todo> {
        const response = await this.axiosInstance.post('api/todos', todo);
        return response.data;
    }

    async updateTodo(id: string, todo: Todo): Promise<Todo> {
        const response = await this.axiosInstance.put(`api/todos/${id}`, todo);
        return response.data;
    }

    async deleteTodo(id: string): Promise<void> {
        await this.axiosInstance.delete(`api/todos/${id}`);
    }

    async deleteTodoById(id: string): Promise<void> {
        await this.axiosInstance.delete(`api/todos/${id}`);
    }
}