import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        console.log("ClassComponent - Constructor");
        super(props);
        this.state = {count : 0};
    }

    render() {
        console.log("ClassComponent - render");
        return (
            <>
                <h1>ClassComponent</h1>
                <h2>You clicked {this.state.count} times</h2>
                <button onClick={() => {this.setState({count : this.state.count + 1})}}>Click Me!</button>
            </>
        );
    }

    componentDidMount() {
        console.log("ClassComponent - componentDidMount");
    }

    componentDidUpdate() {
        console.log("ClassComponent - componentDidUpdate");
    }
}

export default ClassComponent;