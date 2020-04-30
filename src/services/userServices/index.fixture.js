import {create} from 'apisauce';
import {networkCallWithApisauce } from '';
import {apiMethods} from '../../E-Commerce/utils/APIConstants';
import usersResponse from '../../fixtures/getUsersResponse'

class UserFixtureService {
    

getUsersAPI(){
    return new Promise((resolve,reject)=> {
        resolve(usersResponse)
    })
}

}
export default UserFixtureService;