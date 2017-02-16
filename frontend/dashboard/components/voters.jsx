import React, {Component} from 'react';
class Voters extends Component {
    constructor(props) {
        super(props);
    }

    renderVoters() {
        return this.props.voters.map(voter => {
            return (
                <li className="voter">
                    <img className="voter-img" src={voter.picture} alt=""/>
                    <div className="voter-text-wrapper">
                        <p className="voter-name">{voter.name}</p>
                        <p className="voter-vote">{voter.vote}</p>
                    </div>
                </li>
            );
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