import UserStore from './userStore';
import UserService from '../services/userServices/index.api';
import TodoStore from './TodoStores/todoStores.js'
import TodoService from '../services/todoServices/index.api';

const todoStore = new TodoStore(new TodoService())

const userStore = new UserStore(new UserService())
export default {userStore,todoStore};