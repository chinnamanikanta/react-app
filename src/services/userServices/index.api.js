import {create} from 'apisauce';
import {networkCallWithApisauce } from '../../E-Commerce/utils/APIUtils';
import {apiMethods} from '../../E-Commerce/utils/APIConstants';

class UserService {
    api
    constructor(){
        this.api = create ({
            baseURL: 'https://jsonplaceholder.typicode.com/',
        })
    }

getUsers(){
    return networkCallWithApisauce(
            this.api,
            'users/',
            {},
            apiMethods.get
            )
       
}

}
export default UserService;