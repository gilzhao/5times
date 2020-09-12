import React, { useState } from 'react';
import dayjs from 'dayjs';
import './App.css';
import { algorithmData } from './algorithm';
import AlgorithmList from './component/AlgorithmList';
import Algorithm from './component/Algorith';

function App() {
	const today = dayjs().subtract(0, 'day').format('YYYY-MM-DD');
	const [showDay, setShowDay] = useState(today);
	const [weekList, setWeekList] = useState(getWeekList(today));

	function getWeekList(day) {
		const getDay = dayjs(day).day();
		const list = [];
		for (let i = 1; i <= 7; i++) {
			if (getDay - i >= 0) {
				list.push(
					dayjs(day)
						.subtract(getDay - i, 'day')
						.format('YYYY-MM-DD')
				);
			} else {
				list.push(
					dayjs(day)
						.add(i - getDay, 'day')
						.format('YYYY-MM-DD')
				);
			}
		}
		return list;
	}

	return (
		<div className="App">
			<div className="times-wrap">
				<h3>
					{showDay === today ? (
						<>
							今日新题
							<span>
								{today} ({dayjs(showDay).format('ddd')})
							</span>
						</>
					) : (
						<>
							{showDay}
							<span>({dayjs(showDay).format('ddd')})</span>
						</>
					)}
					<span
						className="btn"
						onClick={() => {
							setShowDay(today);
							setWeekList(getWeekList(today));
						}}
					>
						Today
					</span>
				</h3>
				<div className="todo-list-wrap">
					<Algorithm day={showDay} today={today} />
				</div>
				<AlgorithmList
					data={algorithmData}
					today={today}
					setShowDay={setShowDay}
					weekList={weekList}
					setWeekList={setWeekList}
					getWeekList={getWeekList}
				/>
				<div className="info">
					刷题狂魔：<a href="https://jinshuju.net/f/BQXggl/">每日一题打卡表</a>
					<ol>
						<li>
							<p>读题 + 思考 （基础薄弱 10~15分钟）不能略过!!</p>
							<p>有思路: 直接做，直接写</p>
							<p>
								超时 ——&gt;&gt; 直接看解法！注意！多解法，比较解法优劣（理解学习和运用算法
								不是让你去造轮子）
							</p>
							<p>
								背诵、默写好的写法（不是死记硬背，先背诵记住了之后，一般来说肯定就能理解了。很多题目以后看到就条件反射了）（不能打击自己的积极性）
							</p>
						</li>
						<li>
							<p>
								马上自己写（一开始可能会有bug 没关系 debug debug debug 修改修改修改） ——&gt;
								LeetCode提交
							</p>
							<p>多种写法、体会 ——&gt; 优化！（最重要的是执行时间）</p>
						</li>
						<li>
							<p>过了24 小时的时间以后，再次重复做题 不同解法的熟练程度 ——&gt; 专项练习</p>
						</li>
						<li>
							<p>过了一周之后: 反复回来练习相同的题目</p>
						</li>
						<li>
							<p>面试前一周恢复性的训练</p>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default App;
