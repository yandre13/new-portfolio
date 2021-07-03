import React from 'react'
// import {useRouter} from 'next/router'
import cn from 'classnames'
import Menu from '../svgs/Menu'
import {motion, useAnimation} from 'framer-motion'
import jump from 'jump.js'

const variants = {
	visible: {
		y: 0,
		height: 'auto',
		transition: {ease: 'easeInOut', duration: 0.5},
	},
	hidden: {y: 720, height: 0, transition: {ease: 'easeOut', duration: 0.8}},
}

export default function Navbar() {
	// const router = useRouter()
	const [isMobile, setIsMobile] = React.useState(false)
	const [open, setOpen] = React.useState(false)

	const handleResize = () => {
		if (window !== 'undefined') {
			window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
		}
	}

	const controls = useAnimation()

	const handleMenu = () => {
		setOpen(!open)
		open ? controls.start('hidden') : controls.start('visible')
	}

	React.useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', () => handleResize)
	}, [isMobile])

	return (
		<>
			<header className="md:bg-blur md:fixed md:inset-x-0 md:z-10">
				<section className="flex justify-between items-center w-full md:w-full container">
					<h2 className="text-sec font-semibold text-xl py-4">{`<⚛/>`}</h2>
					<motion.nav
						variants={variants}
						animate={controls}
						initial="hidden"
						className={cn(
							'bg-[#232221] rounded-t-3xl z-20',
							'md:bg-transparent md:w-auto md:!h-auto md:!transform-none',
							{
								hidden: !open && isMobile,
								'fixed inset-x-0 bottom-0': isMobile,
							},
						)}
					>
						<ul
							className={cn(
								'block text-gray-400 pb-16',
								'md:pb-0 md:text-white flex',
								{
									'flex-col w-[90%] mx-auto': isMobile,
								},
							)}
						>
							{isMobile && (
								<li
									className={cn('py-4 px-6 rounded-xl my-6', {
										'bg-[#333231]': isMobile,
									})}
								>
									<span className={cn('font-semibold text-2xl', 'text-white')}>
										Menu
									</span>
								</li>
							)}
							<li
								className={cn('py-4 px-6 rounded-t-xl', {
									'bg-[#333231]': isMobile,
								})}
							>
								<span
									role="button"
									className={cn('text-base cursor-pointer', {
										'hover:text-sec': isMobile,
									})}
									onClick={() => jump('.Home', {duration: 500})}
								>
									Home
								</span>
							</li>
							<li className={cn('py-4 px-6', {'bg-[#333231]': isMobile})}>
								<span
									role="button"
									className={cn('text-base cursor-pointer', {
										'hover:text-sec': isMobile,
									})}
									onClick={() => jump('.About', {duration: 500})}
								>
									About
								</span>
							</li>
							<li
								className={cn('py-4 px-6 rounded-b-xl', {
									'bg-[#333231]': isMobile,
								})}
							>
								<span
									role="button"
									className={cn('text-base cursor-pointer', {
										'hover:text-sec': isMobile,
									})}
									onClick={() => jump('.Projects', {duration: 500})}
								>
									Projects
								</span>
							</li>
							{/* <li
								className={cn('py-4 px-6 rounded-b-xl', {
									'bg-[#333231]': isMobile,
								})}
							>
								<span
									role="button"
									className={cn('text-base cursor-pointer', {
										'hover:text-sec': isMobile,
									})}
									onClick={() => jump('.Skills', {duration: 500})}
								>
									Skills
								</span>
							</li> */}
						</ul>
					</motion.nav>
					{isMobile && (
						<span
							className={cn('flex items-center z-10 cursor-pointer', {
								hidden: !isMobile,
								'fixed bottom-[20px] right-[20px] bg-main rounded-[50%] scale-150 p-1':
									isMobile,
							})}
							onClick={handleMenu}
						>
							<Menu />
						</span>
					)}
				</section>
			</header>
			{isMobile && open && (
				<div
					className="fixed inset-0 w-[100vw] h-[100vh] z-10 bg-black bg-opacity-50"
					onClick={handleMenu}
				></div>
			)}
		</>
	)
}
