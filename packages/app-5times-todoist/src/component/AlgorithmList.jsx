import React from 'react'
import dayjs from 'dayjs'

import Algorithm from './Algorith'

export default function AlgorithmList(props) {
	const { today, setShowDay, weekList, setWeekList, getWeekList } = props

	return (
		<>
			<div className="algorithm-calendar-operating">
				<span onClick={() => setWeekList((list) => {
					list.pop()
					list.unshift(dayjs(list[0]).subtract(1, 'day').format('YYYY-MM-DD'))
					return [...list]
				})}>前一天</span>
				<span onClick={() => setWeekList((list) => {
					list.shift()
					list.push(dayjs(list[list.length-1]).add(1, 'day').format('YYYY-MM-DD'))
					return [...list]
				})}>后一天</span>
				<span onClick={() => setWeekList((list) => {
					list = getWeekList(dayjs(list[0]).subtract(2, 'day').format('YYYY-MM-DD'))
					return [...list]
				})}>上一周</span>
				<span onClick={() => setWeekList((list) => {
					list = getWeekList(dayjs(list[list.length-1]).add(2, 'day').format('YYYY-MM-DD'))
					return [...list]
				})}>下一周</span>
			</div>
			<div className="algorithm-calendar">
				{weekList.map((item) => {
					return (
						<dl key={item} className={(dayjs(item).day() === 6 || dayjs(item).day() === 0) ? 'weekend' : ''} onClick={() => setShowDay(item)}>
							<dt>{dayjs(item).format('MM-DD')}<br/>({dayjs(item).format('dd')})</dt>
							<dd>
								<Algorithm today={today} day={item} />
							</dd>
						</dl>
					);
				})}
			</div>
		</>
	);
}