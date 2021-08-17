import React from 'react'
import {Tab1, Tab2, Tab3, Tab4} from './Tab'
import cn from 'classnames'
import {AnimateSharedLayout, motion} from 'framer-motion'

const texts = ['Main Skills', 'Other Skills', 'Experience', 'Education']

function Item({text, selected, onClick}) {
	return (
		<li className="relative">
			<span
				role="button"
				className={cn(
					'text-sm sm:text-base md:text-lg md:font-semibold cursor-pointer',
					selected === text && 'text-sec',
				)}
				onClick={onClick}
			>
				{text}
			</span>
			{selected === text && (
				<motion.div
					layoutId="outline"
					className="absolute bottom-[-1px] inset-x-0 border-t-2"
					initial={false}
					animate={{borderColor: '#09f'}}
					transition={spring}
				/>
			)}
		</li>
	)
}

export default function Tabs() {
	const [selected, setSelected] = React.useState(texts[0])

	return (
		<AnimateSharedLayout>
			<ul className="flex justify-between max-w-md">
				{texts.map(text => (
					<Item
						key={text}
						text={text}
						selected={selected}
						onClick={() => setSelected(text)}
					/>
				))}
			</ul>

			<div className="min-h-[200px]">
				{selected === texts[0] && <Tab1 />}
				{selected === texts[1] && <Tab2 />}
				{selected === texts[2] && <Tab3 />}
				{selected === texts[3] && <Tab4 />}
			</div>
		</AnimateSharedLayout>
	)
}
const spring = {
	type: 'spring',
	stiffness: 500,
	damping: 30,
}
