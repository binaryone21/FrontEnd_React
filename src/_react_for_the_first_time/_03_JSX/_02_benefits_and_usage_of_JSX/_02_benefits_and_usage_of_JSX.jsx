import React from "react"

// JSX 사용함
let element = <div>Hello, {name}</div>

// JSX 사용 안함
React.createElement('div', null, `Hello, ${ name }`);

const title = reponse.potentiallyMaliciousInput;

// 이 코드는 안전합니다.
const element1 = <h1>{ title }</h1>

const name = '소플';
const element2 = <h1>안녕, { name }</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : 'Inje',
    lastName : 'Lee'
};

const element3 = (
    <h1>
        Hello, { formatUser(user) }
    </h1>
);

ReactDOM.render(
    element3,
    document.getElementById('root')
);

function getGreeting(user) {
    if(user) {
        return <h1>Hello, { formatName(user) }!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}

// 큰따옴표 사이에 문자열을 넣거나
const element4 = <div tabIndex="0"></div>;

// 중괄호 사이에 자바스크립트 코드를 넣으면 됨!
const element5 = <img src={ user.avatarUrl }></img>;

const element6 = (
    <div>
        <h1>안녕하세요</h1>
        <h2>열심히 리액트를 공부해 봅시다!</h2>
    </div>
);