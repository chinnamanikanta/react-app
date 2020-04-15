import {observable,action} from 'mobx';
class ThemeStore  {
    @observable selectedTheme = "Mode-Dark";
    
    @action.bound
    onChangeSelectedTheme(){
        if(this.selectedTheme === "Mode-Dark"){
            this.selectedTheme = "Mode-Light"
        }
        else {
            this.selectedTheme = "Mode-Dark";
        }
    }
    
    
}
const themeStore = new ThemeStore();
export default themeStore;