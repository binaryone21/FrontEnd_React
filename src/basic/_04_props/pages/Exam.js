import React from "react";

import {Link, Routes, Route} from 'react-router-dom';
import Table from '../components/Table';

const Exam = () => {
    return (
        <div>
            <h2>성적표</h2>

            <nav>
                <Link to="table/1">1학년</Link>&nbsp;|&nbsp;
                <Link to="table/2">2학년</Link>&nbsp;|&nbsp;
                <Link to="table/3">3학년</Link>&nbsp;|&nbsp;
                <Link to="table/4">4학년</Link>
            </nav>

            <Routes>
                <Route path="table/:level" element={<Table/>} />
            </Routes>
        </div>
    );
}

export default Exam;