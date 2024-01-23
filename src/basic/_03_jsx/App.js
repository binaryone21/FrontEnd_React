import React from 'react';

import { Link, Routes, Route } from 'react-router-dom';

/** 각 예제별 컴포넌트 import */
import _01_Expr from './pages/_01_Expr';
import _02_If1 from './pages/_02_If1';
import _03_If2 from './pages/_03_If2';
import _04_If3 from './pages/_04_If3';
import If4 from './pages/If4';
import Loop1 from './pages/Loop1';
import Loop2 from './pages/Loop2';
import Loop3 from './pages/Loop3';

const App = () => {
    return (
        <div>
            <h1>03-jsx</h1>
            {/* Link 구성 */}
            <nav>
                <Link to="expr">[Expr]</Link>
                <Link to="if1">[If1]</Link>
                <Link to="if2">[If2]</Link>
                <Link to="if3">[If3]</Link>
                <Link to="if4">[If4]</Link>
                <Link to="loop1">[Loop1]</Link>
                <Link to="loop2">[Loop2]</Link>
                <Link to="loop3">[Loop3]</Link>
            </nav>
            <hr />

            {/* 각 예제 페이지 Route 적용 */}
            <Routes>
                <Route path="/expr"     element={<_01_Expr />}/>
                <Route path="/if1"      element={<_02_If1 />}/>
                <Route path="/if2"      element={<_03_If2 />}/>
                <Route path="/if3"      element={<_04_If3 />}/>
                <Route path="/if4"      element={<If4 />}/>
                <Route path="/loop1"    element={<Loop1 />}/>
                <Route path="/loop2"    element={<Loop2 />}/>
                <Route path="/loop3"    element={<Loop3 />}/>
            </Routes>
        </div>
    )
}

export default App;