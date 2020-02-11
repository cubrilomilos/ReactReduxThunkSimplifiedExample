import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './Redux/store';
import { updateFirst, updateSecond } from './Redux/actions';

// const select = state => state.secondObject.description;
// let currentValue = select(store.getState());
// const handleChange = () => {
// 	let previousValue = currentValue
// 	currentValue = select(store.getState())

// 	if (previousValue !== currentValue) {
// 		console.log(
// 			'Some deep nested property changed from',
// 			previousValue,
// 			'to',
// 			currentValue
// 		)
// 	}
// }

class App extends Component {
	constructor() {
		super();
		this.state = this.getStateFromStore();
	}

	getStateFromStore = () => {
		return store.getState();
	}

	updateStateFromStore = () => {
		const newState = store.getState();

		if (this.state !== newState) {
			this.setState(newState);
		}
	}

	componentDidMount = () => {
		this.unsubscribe = store.subscribe(this.updateStateFromStore);
	}

	componentWillUnmount = () => {
		this.unsubscribe();
	}

	triggerAction = () => {
		// const action = updateFirst({
		// 	name: 'updated name for the first object'
		// });
		const action = updateSecond({
			name: 'name is updated',
			description: 'description is updated'
		})
		console.log('dispatching', action)
		store.dispatch(action)
		console.log('next state', store.getState())
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
						  </p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					  </a>
				</header>
				<button
					title="Trigger action"
					onClick={this.triggerAction}
				>
					Trigger action
					</button>
				<label style={{ display: 'block' }}>{this.state.secondObject.name}</label>
				<label style={{ display: 'block' }}>{this.state.secondObject.description}</label>
			</div>
		);
	}
}


export default App;
