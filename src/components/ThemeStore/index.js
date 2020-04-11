import {observer} from 'mobx-react';
class ThemeStore {
    @observable selectedTheme
    constructor(){
        this.themeStore.onThemeOption='light-moode'
    }
    setCurrentTheme() {
        if(this.onThemeOption === 'light-mode') {
            this.themeStore.onThemeOption
        }
    }
    
    
    
    
    
}


const themeStore = new ThemeStore()
export default themeStore