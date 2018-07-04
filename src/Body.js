import React, { Fragment } from 'react';
import './Body.css'

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <div className="split left">
                    <div className="centered">
                        here
                        <button className="square" onClick={function() { alert('click'); }}>
                        </button>
                    </div>
                </div>
                <div className="split right">
                    <div className="centered">
                        here2
                    </div>
                </div>
            </div>
        );
    }
}