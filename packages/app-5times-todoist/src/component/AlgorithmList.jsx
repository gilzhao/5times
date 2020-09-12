import React, { useState } from 'react'
import dayjs from 'dayjs'

import Algorithm from './Algorith'

export default function AlgorithmList(props) {
	const { today } = props
	const [weekList, setWeekList] = useState(getWeekList(today))

	function getWeekList(day) {
		const getDay = dayjs(day).day()
		const list = []
		for (let i = 1; i <= 7; i++) {
			if (getDay - i >= 0) {
				list.push(dayjs(day).subtract(getDay - i, 'day').format('YYYY-MM-DD'))
			} else {
				list.push(dayjs(day).add(i - getDay, 'day').format('YYYY-MM-DD'))
			}
		}
		return list
	}

	return (
		<>
			<div className="algorithm-calendar-operating">
				<a onClick={() => setWeekList((list) => {
					list.pop()
					list.unshift(dayjs(list[0]).subtract(1, 'day').format('YYYY-MM-DD'))
					return [...list]
				})}>前移一天</a>
				<a onClick={() => setWeekList((list) => {
					list.shift()
					list.push(dayjs(list[list.length-1]).add(1, 'day').format('YYYY-MM-DD'))
					return [...list]
				})}>后移一天</a>
				<a onClick={() => setWeekList((list) => {
					list = getWeekList(dayjs(list[0]).subtract(2, 'day').format('YYYY-MM-DD'))
					return [...list]
				})}>上一周</a>
				<a onClick={() => setWeekList((list) => {
					list = getWeekList(dayjs(list[list.length-1]).add(2, 'day').format('YYYY-MM-DD'))
					return [...list]
				})}>下一周</a>
			</div>
			<div className="algorithm-calendar">
				{weekList.map((item) => {
					return (
						<dl key={item}>
							<dt className={(dayjs(item).day() == 6 || dayjs(item).day() == 0) ? 'weekend' : ''}>{dayjs(item).format('MM-DD')}<br/>({dayjs(item).format('dd')})</dt>
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