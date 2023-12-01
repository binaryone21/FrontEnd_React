import React from 'react';
// yarn add react-router-dom
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <div>
            <h1>02-simple-spa</h1>
            <hr />
            <nav>
                <Link to="">[Home]</Link>
                <Link to="about">[About]</Link>
            </nav>
            {/* --- 페이지 역할을 할 컴포넌트를 명시하기 --- */}
            <Routes>
                {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true} 를 명시해야 한다. */}
                {/* 첫 페이지로 사용되는 컴포넌트는 path 에 "/"를 권장 */}
                <Route path="/"         element={<Home />}  exact={true} />
                <Route path="/about"    element={<About />} exact={true} />
            </Routes>
        </div>
    );
}

export default App;
