import React from 'react'
import cn from 'classnames'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function CardProject({image, link, title, color}) {
	const [isHover, setIsHover] = React.useState(false)
	return (
		<div className="w-full h-0 overflow-hidden relative pb-[125%] rounded-xl">
			<a href={link} rel="noreferrer noopener" target="_blank">
				<Image
					src={image}
					className={cn(
						'w-full h-full absolute top-0 left-0 object-cover transition duration-400 ease-in-out',
						isHover && 'grayscale contrast-600 scale-125',
					)}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
					onTouchStart={() => setIsHover(true)}
					onTouchEnd={() => setIsHover(false)}
					alt=""
				/>
			</a>
			<div
				className={cn(
					'block absolute w-full h-full top-0 left-0 pointer-events-none',
					!isHover && 'bg-gradient-to-t from-[#111]',
					isHover && 'bg-gradient-to-b',
					color && `from-${color}`,
				)}
			>
				<motion.div
					animate={{y: isHover ? -60 : 74}}
					className="absolute bottom-6 h-full w-full flex flex-col justify-end items-start text-main px-6"
				>
					<motion.span
						animate={{color: isHover ? '#111' : '#999'}}
						transition={{duration: 0.4}}
						className="w-full text-base font-semibold"
					>
						{title[0]}
					</motion.span>
					<span className="w-full text-2xl text-white">{title[1]}</span>
					<a
						href={link}
						rel="noreferrer noopener"
						target="_blank"
						className={cn(
							'block text-sm font-semibold text-[#111] uppercase tracking-wider px-5 py-2 border-2 rounded-md mt-6 z-40',
							color && `border-${color}`,
						)}
					>
						See demo
					</a>
				</motion.div>
			</div>
		</div>
	)
}
