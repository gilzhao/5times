import React from 'react';
import dayjs from 'dayjs';
import logo from './logo.svg';
import './App.css';
import { algorithmData } from './algorithm';
import AlgorithmList from './component/AlgorithmList';
import Algorithm from './component/Algorith';

function App() {
	const today = dayjs().subtract(0, 'day').format('YYYY-MM-DD');
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<div className="times-wrap">
				<h3>
					{today} {dayjs(today).format('ddd')}
				</h3>
				<h4>今日新题</h4>
				<Algorithm day={today} today={today} />
				<AlgorithmList data={algorithmData} today={today} />
				<ol>
					<li>
						读题 + 思考 （如果基础薄弱 可以给自己10分钟 最多15分钟）这里不能略过 有思路 直接做 直接写 ||
						超时 ——&gt;&gt; 直接看解法！注意！多解法，比较解法优劣（理解学习和运用算法 不是让你去造轮子）
						背诵、默写这样好的写法（并不是死记硬背即可，先背诵记住了之后，一般来说肯定就能理解了。很多题目以后看到就条件反射了）（不能打击自己的积极性）
					</li>
					<li>
						马上自己写（一开始可能会有bug 没关系 debug debug debug 修改修改修改） ——&gt; LeetCode提交
						多种写法、体会 ——&gt; 优化！(最重要的是执行时间）
					</li>
					<li>过了24 小时的时间以后，再次重复做题 不同解法的熟练程度 ——&gt; 专项练习</li>
					<li>过了一周之后: 反复回来练习相同的题目</li>
					<li>面试前一周恢复性的训练</li>
				</ol>
			</div>
		</div>
	);
}

export default App;
