import React from 'react';
import {withRouter} from 'react-router-dom';
import "./file.css";
class BackButton extends React.Component {
    handleClick=()=>{
        let {history} = this.props;
        history.goBack();
    }
    render(){
        return <div>
        <button type="button" className="back-button" onClick={this.handleClick}>Back</button>
        </div>
    }
}
export default withRouter(BackButton);
