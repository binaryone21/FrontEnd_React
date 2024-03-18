import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import MyProps from './pages/_01_MyProps';
import MyPropTypes from "./pages/_02_MyPropTypes";
import MyChildren from "./pages/_03_MyChildren";
import GradeTable from "./pages/_04_GradeTable";
import Exam from './pages/_05_Exam';

const App = () => {
    return (
        <div>
            <h1>04-props</h1>
            <nav>
                <Link to="myProps">MyProps</Link>&nbsp;|&nbsp;
                <Link to="myPropTypes">MyPropTypes</Link>&nbsp;|&nbsp;
                <Link to="myChildren">MyChildren</Link>&nbsp;|&nbsp;
                <Link to="grade_table">GradeTable(demo)</Link>&nbsp;|&nbsp;
                <Link to="exam">성적표(연습문제)</Link>
            </nav>
            <hr />

            {/* Route 처리할 컴포넌트 정의 */}
            <Routes>
                <Route path="/myProps" element={<MyProps />} />
                <Route path="/myPropTypes" element={<MyPropTypes />} />
                <Route path="/myChildren" element={<MyChildren />} />
                <Route path="/grade_table" element={<GradeTable />} />
                <Route path="/exam/*" element={<Exam/>} />
            </Routes>
        </div>
    );
};

export default App;