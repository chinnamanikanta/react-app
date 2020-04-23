import React from 'react';
/*global fetch*/
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
// import stores from '../../stores/index.js';
// import EachTodo from './todoList.js';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView/'


@inject('userStore')
@observer
class UsersPage extends React.Component {
    
    componentDidMount(){
        this.doNetworkCalls()
    }
    
    doNetworkCalls=()=> {
        this.props.userStore.getUsersApi()
    }
    rendersUsersList=()=>{
        const {usersList} = this.props.userStore;
        if(usersList.length === 0){
            return <NoDataView/>
       }
        return usersList.map((userName,index) => <div key = {index}>{userName}</div> )
    }
    render(){
        const {getUsersApiStatus,getUsersApiError} = this.props.userStore

        return(
            <div>
            
               
                <LoadingWrapperWithFailure 
                apiStatus = {getUsersApiStatus}
                apiError = {getUsersApiError}
                onRetryClick = {this.doNetworkCalls}
                renderSuccessUI = {this.rendersUsersList}
                
                />
            </div>
    
            )
    }
    
}
export default UsersPage;