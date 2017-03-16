import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
    }

    toggleOpen() {
        this.setState(state => ({
            modalOpen: !state.modalOpen
        }));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <button onClick={this.toggleOpen.bind(this)}></button>

                <Modal visible={this.state.modalOpen}>
                    <h1>Hello world</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eum, impedit fugiat laboriosam ullam autem et, maxime adipisci consectetur ex delectus! Sed voluptate asperiores consectetur recusandae tempora dolorum, perferendis veritatis!</p>
                </Modal>
            </div>
        );
    }
}

export default App;
