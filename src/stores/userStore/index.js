import {observable,action} from 'mobx';
/*global fetch*/;
import { API_INITIAL, API_FAILED, API_FETCHING, API_SUCCESS  } from '@ib/api-constants'
import EachTodoModel from './EachModel.js';
import { create } from 'apisauce';
import {networkCallWithApisauce } from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import UserFixtureService from '../../services/userServices/index.fixture.js';
class UserStore {
    @observable getUsersApiStatus;
    @observable getUsersApiError;    @observable usersList;
    userService
    constructor(userService){
        this.userService = userService;
        this.init()
    }
    @action.bound
    setUsersApiResponse(users){

        this.usersList = users.map((user)=> user.name);
                
        
    }
    @action.bound
    setUsersApiError(error){

        this.getUsersApiError = error;
                
        
    }
    @action.bound 
    setUsersApistatus(apiStatus){
        this.getUsersApiStatus = apiStatus;
        
    }
    @action.bound
    getUsersApi(){
        
        const userPromise = this.userService.getUsers();
        return bindPromiseWithOnSuccess(userPromise)
        .to(this.setUsersApistatus,this.setUsersApiResponse)
        .catch(this.setUsersApiError)
        
        
        
    }
    @action
    init() {
        this.getUsersApiStatus = API_INITIAL;
        this.getUsersApiError = null;
        this.usersList = []
    }
    @action
    clearStore(){
        this.init();
    }
    
}

export default UserStore