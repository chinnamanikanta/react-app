import {observable} from 'mobx';

const appState1 = observable({
count1 : 0     
})
appState1.Increament = function(){
    this.count1++;
}
appState1.Decreament = function() {
    this.count1--;
}
export default appState1;
