import {observable} from 'mobx';

const appState = observable({
count : 0,
})
appState.Increament = function(){
    this.count++
}
appState.Decreament = function() {
    this.count--
}
export default appState;
