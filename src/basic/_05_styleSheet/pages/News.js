import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import NewsCard from '../components/NewsCard'
import NewsList from '../components/NewsList'
import NewsData from "../NewsData";

const News = () => {
    return (
        <div>
            <h2>헤드라인 뉴스</h2>
            <nav>
                <Link to='news_card'>카드형</Link>&nbsp;|&nbsp;
                <Link to='news_list'>리스트형</Link>
            </nav>

            <Routes>
                {/* Route 에 연결된 컴포넌트에 props 전달 */}
                <Route path='/news_card' element={<NewsCard news={NewsData} />} />
                <Route path='/news_list' element={<NewsList news={NewsData} />} />
            </Routes>
        </div>
    );
};

export default News;