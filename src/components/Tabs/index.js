import React from 'react'
import {Tab1, Tab2, Tab3, Tab4} from './Tab'
import cn from 'classnames'

export default function Tabs() {
	const [tab, setTab] = React.useState(1)
	return (
		<>
			<ul className="flex justify-between max-w-md">
				<li>
					<span
						role="button"
						className={cn(
							'text-sm sm:text-base md:text-lg md:font-semibold cursor-pointer',
							{
								'text-sec line_active': tab === 1,
							},
						)}
						onClick={() => setTab(1)}
					>
						Main Skills
					</span>
				</li>
				<li>
					<span
						role="button"
						className={cn(
							'text-sm sm:text-base md:text-lg md:font-semibold cursor-pointer',
							{
								'text-sec line_active': tab === 2,
							},
						)}
						onClick={() => setTab(2)}
					>
						Other Skills
					</span>
				</li>
				<li>
					<span
						role="button"
						className={cn(
							'text-sm sm:text-base md:text-lg md:font-semibold cursor-pointer',
							{
								'text-sec line_active': tab === 3,
							},
						)}
						onClick={() => setTab(3)}
					>
						Experience
					</span>
				</li>
				<li>
					<span
						role="button"
						className={cn(
							'text-sm sm:text-base md:text-lg md:font-semibold cursor-pointer',
							{
								'text-sec line_active': tab === 4,
							},
						)}
						onClick={() => setTab(4)}
					>
						Education
					</span>
				</li>
			</ul>
			<div>
				{tab === 1 && <Tab1 />}
				{tab === 2 && <Tab2 />}
				{tab === 3 && <Tab3 />}
				{tab === 4 && <Tab4 />}
			</div>
		</>
	)
}
