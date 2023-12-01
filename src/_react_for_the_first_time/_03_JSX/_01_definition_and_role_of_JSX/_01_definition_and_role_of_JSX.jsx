import React from "react"

const element = <h1>Hello, world!</h1>

class Hello1 extends React.Component {
    render() {
        return <div>Hello { this.props.toWhat }</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
);

class Hello2 extends React.Componenet {
    render() {
        return React.createElement('div', null, `Hello ${ this.props.toWhat }`);
    }
}

ReactDOM.render(
    React.createElement(Hello, { toWhat : 'World' }, null),
    document.getElementById('root')
);

// JSX를 사용한 코드
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
)

// JSX를 사용하지 않은 코드
const element = React.createElement (
    'h1',
    { className : 'greeting' },
    'Hello, world!'
)

const element = {
    type : 'h1',
    props : {
        className : 'greething',
        children : 'Hello, world!'
    }
}