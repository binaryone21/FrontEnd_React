import React from 'react';
import styled from 'styled-components';
import Table from '../components/Table';

/** Table 컴포넌트의 CSS 를 확장한 컴포넌트 */
const TableEx = styled(Table)`
  margin-top: 50px;
  margin-bottom: 15px;
  
  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;
    
    .field {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }
    label {
      margin-left: 7px;
      margin-right: 10px;
      
      input {
        margin-right: 10px;
      }
    }
  }
`;

const GradeAdd = React.memo(() => {
	return (
		<form>
			<TableEx>
				<colgroup>
					<col width="120" />
					<col />
				</colgroup>
				<tbody>
					<tr>
						<th>이름</th>
						<td className="inputWrapper"><input className="field" type="text" name="name" /></td>
					</tr>
					<tr>
						<th>학년</th>
						<td className="inputWrapper">
							<select name="level" className="field">
								<option value="">--- 선택하세요 ---</option>
								<option value="1">1학년</option>
								<option value="2">2학년</option>
								<option value="3">3학년</option>
								<option value="4">4학년</option>
							</select>
						</td>
					</tr>
					<tr>
						<th>성별</th>
						<td className="inputWrapper">
							<input className="field" type="number" name="" placeholder="숫자만 입력 (0~100)" />
						</td>
					</tr>
					<tr>
						<th>성별</th>
						<td className="inputWrapper">
							<label><input type="radio" name="sex" value="남자" />남자</label>
							<label><input type="radio" name="sex" value="여자" />여자</label>
						</td>
					</tr>
					<tr>
						<th>국어</th>
						<td className="inputWrapper">
							<input className="field" type="number" name="" placeholder="숫자만 입력 (0~100)" />
						</td>
					</tr>
					<tr>
						<th>성별</th>
						<td className="inputWrapper">
							<input className="field" type="number" name="" placeholder="숫자만 입력 (0~100)" />
						</td>
					</tr>
					<tr>
						<th>성별</th>
						<td className="inputWrapper">
							<input className="field" type="number" name="" placeholder="숫자만 입력 (0~100)" />
						</td>
					</tr>
				</tbody>
			</TableEx>
		</form>
	);
});

export default GradeAdd;