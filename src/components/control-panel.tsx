import React from 'react';
import io from 'socket.io-client';
import store from '../service/store';
import Test from './test';

const socket = io('http://localhost:9001');

interface ControlPanelState {
    word: string;
}

class ControlPanel extends React.Component<{}, ControlPanelState> {
    constructor(props: any) {
        super(props);
        this.state = {
            word: ''
        }

        socket.on('connection', () => {
            console.log('Okay okay I\'m listening.');
        });
        
        socket.on('tick', (client: any) => {
            this.setState({ word: client.word });
        });
    }
    render() {
        return (
            <div className="ControlPanel">
                <span className="ControlPanel__word">
                    <Test word={this.state.word} />
                </span>
                <div className="ControlPanel__buttons">
                
                </div>
            </div>
        );
    }
}

export default ControlPanel;
