import React, {Component} from 'react';
import Typist from 'react-typist';
import PollsSvg from './polls_svg';

class Splash extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        // let typistOptions = {
            let cursor = {
                show: true,
                blink: true,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 3000                
            };
        // };

        return(
            <div className="page-home">
                <div className="c c-splash">
                    <div className="c-temp">
                        <div className="hl-wrap">
                            <Typist className="hl hl-flushed" cursor={cursor} avgTypingDelay={20} stdTypingDelay={0} >
                                Create polls for your people and see what your people say
                            </Typist>
                        </div>
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                    <div className="img-wrap">
                        <PollsSvg />
                    </div>
                </div>            
            </div>
        );
                        // <img src="../images/poll.svg" alt="" className="img-large" />
    }
}

export default Splash;