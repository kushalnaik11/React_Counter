class App extends React.Component {
    constructor(props) {
    super();
        this.state = {
            count: 0
        }
    }

    increment(e) {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement(e) {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment.bind(this)}>Count Up!!</button>
                <button onClick={this.decrement.bind(this)}>Count down!!</button>
            </div>
        )
    }
}

React.render(
    <App/>,
    document.getElementById('app-container')
);
