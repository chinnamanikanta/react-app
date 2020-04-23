import {create} from 'apisauce';
import {networkCallWithApisauce } from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import usersResponse from '../../fixtures/getUsersResponse'

class TodosFixtureService {
    

getTodosApi(){
    return new Promise((resolve,reject)=> {
        resolve(usersResponse)
    })
}

}
export default TodosFixtureService;