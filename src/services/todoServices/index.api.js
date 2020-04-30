import {create} from 'apisauce';
import {networkCallWithApisauce } from '../../E-Commerce/utils/APIUtils';
import {apiMethods} from '../../E-Commerce/utils/APIConstants';

class TodoService {
    api
    
    constructor(){
        this.api = create({
            baseURL : 'https://jsonplaceholder.typicode.com/'
        })
    }
    
    getTodosApi(){
        return networkCallWithApisauce(
            this.api,
            'todos/',
            {},
            apiMethods.get
            )
    }
}
export default TodoService;