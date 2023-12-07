import React from 'react';

import styled from 'styled-components';
import mq from '../../MediaQuery';

const FoodListContainer = styled.div`
  /** 갤러리 */
  .food-gallery {
    display: flex;
    flex-wrap: wrap;
    
    .food-item {
      flex: none;
      width: 25%;
      padding: 20px 10px;
      
      ${mq.maxWidth('md')`
        width: 50%;
      `}
      
      ${mq.maxWidth('sm')`
        width: 100%;
      `}
      
      a {
        display: block;
        
        .img-wrapper {
          width: 100%;
          height: 360px;
          // 이미지가 이 박스를 벗어날 경우 잘라냄
          overflow: hidden;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease-in-out;
          }
        }
        
        &:hover img {
          transform: scalle(1.1, 1.1);
        }
        
        .food-content {
          padding: 15px 10px;
          text-align: center;
          
          h2 {
            font-size: 22px;
            margin-bottom: 12px;
            line-height: 130%;
          }
          
          p {
            font-size: 16px;
            font-weight: 300;
            line-height: 120%;
          }
        }
      }
    }
  }

  /** 페이지 번호 영역 */

  .pageNation {
    display: flex;
    justify-content: center;
    
    li {
      width: 32px;
      height: 32px;
      
      &:active {
        background-color: #000;
        
        a {
          color: #fff;
        }
      }
      
      a {
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 18px;
        justify-content: center;
        align-items: center;
        
        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;

const FoodList = React.memo(({data}) => {
	return (
		<FoodListContainer>
			<ul className="food-gallery">
				{data.map((v, i) => {
					return (
						<li className="food-item" key={v.id}>
							<a href="#">
								<div className="img-wrapper">
									<img src={"/basic/_10_food_log_demo" + v.img} />
								</div>
								<div className="food-content">
									<h2>{v.title}</h2>
									<p>{v.content}</p>
								</div>
							</a>
						</li>
					)
				})}
			</ul>

			<ul className="pageNation">
				<li><a href="#">&lt;</a></li>
				<li className="active"><a href="#">1</a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
				<li><a href="#">4</a></li>
				<li><a href="#">5</a></li>
				<li><a href="#">&gt;</a></li>
			</ul>
		</FoodListContainer>
	);
});

export default FoodList;