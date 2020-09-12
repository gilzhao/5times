import React from 'react'
import dayjs from 'dayjs'

import { timesIntervalEnum, algorithmData } from '../algorithm'

export default function Algorithm(props) {
	const { day, today } = props
	const intervalList = Object.values(timesIntervalEnum);
	
	const reviewList = intervalList.map(item => {
		if (item === 0) return
		return dayjs(day).subtract(item, 'day').format('YYYY-MM-DD')
	})

	return (
		<div className="todo-list">
			<div className="day">
			{
				algorithmData[day] ? (
						<>
							{ algorithmData[day] && algorithmData[day].length ? (
								algorithmData[day].map((aItem) => {
									return <p><a href={aItem.linkUrl}>{aItem.title}</a></p>
								})
							) : null}
						</>
				) : <div className="none">-</div>
			}
			</div>

			{reviewList && reviewList.map((item, index) => {
				if (item !== today && algorithmData[item] && algorithmData[item].length) {
					return (
						<div className={`list t${index >= 1 ? index + 1 : ''}`} key={index}>
							<h4>T:{index + 1}</h4>
							<div>
							{ algorithmData[item] && algorithmData[item].length ? (
								algorithmData[item].map((aItem) => {
									return <p><a href={aItem.linkUrl}>{aItem.title}</a></p>
								})
							) : null}
							</div>
						</div>
					)
				}
			})}
		</div>
	)
}