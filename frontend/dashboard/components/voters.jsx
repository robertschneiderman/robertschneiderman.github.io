import React, {Component} from 'react';
import Expire from './expire';

class Voters extends Component {
    constructor(props) {
        super(props);
    }

    renderVoters() {
        return this.props.voters.slice(0, 6).reverse().map((voter, i) => {
            let className = "voter fadeIn";
            if (this.props.voters.length > 5 && i === 0) {
                return '';
            } else {
                let style = {};
                return (
                    <li className={className} style={style} key={voter.dob}>
                        <img className="voter-img" src={voter.picture} alt=""/>
                        <div className="voter-text-wrapper">
                            <p className="voter-name">{voter.name}</p>
                            <p className="voter-vote">{voter.vote}</p>
                        </div>
                    </li>
                );
            }
        });
    }


    render() {
        return(
            <div className="voters-wrapper">
                <ul className="voters">
                    {this.props.voters ? this.renderVoters() : ''}
                </ul>
            </div>
        );
    }
}

export default Voters;