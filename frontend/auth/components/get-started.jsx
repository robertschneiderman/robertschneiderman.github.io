import React, {Component} from 'react';
import {router, hashHistory} from 'react-router';
class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // debugger;
        hashHistory.push('dashboard');
        window.location.reload();
    }
    
    render() {
    const { handleSubmit } = this.props;
    return (
      <div className="page-auth">
        <form className="form">
          <h2 className="heading">Login with Microsoft Graph API</h2>
            <button onClick={this.handleClick} className="btn btn-primary" action="submit">
            <img className="btn-image" src="http://res.cloudinary.com/stellar-pixels/image/upload/v1486929540/microsoft_logo_nltpky.svg" alt=""/>
            <span className="btn-text">Login with Microsoft Graph API</span>
          </button>
        </form>
      </div>
    );
        
    }
}

export default GetStarted;