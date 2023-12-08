/**
 * <head> 태그 내의 SEO 처리 및 기본 참조 리소스 명시
 */

/** 패키지 참조 */
// 기본 참조 객체
import React from 'react';
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from 'react-helmet-async';
// 미리보기 이미지 샘플
// import sample from './assets/img/sample.png';

/** SEO 처리 컴포넌트 */
const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset='utf-8' />
                {/* SEO 태그 */}
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta name='subject' content={props.subject} />
                <meta name='copyright' content={props.copyright} />
                <meta name='content-language' content="ko" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:url" content={props.url} />
                <meta property='og:image' content={props.image} />

                <link rel="icon" href={props.icon} type="image/png" />
                <link rel="short cut" href={props.shortcutIcon} type="image/png" />
                <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />
                {/* 웹폰트 적용을 위한 외부 리소스 참조 */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossirigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                {/* font awesome */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: 'React Example',
    description: 'React.js 예제 입니다.',
    keywords: 'React',
    url: window.location.href,
};

export default Meta;