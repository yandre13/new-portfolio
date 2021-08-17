import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'components/Navbar'
import banner from '../public/images/banner.png'
import picture from '../public/images/picture.png'
import project1 from '../public/images/project1.png'
import project2 from '../public/images/project2.png'
import project3 from '../public/images/project3.png'
import Typical from 'react-typical'
import Tabs from 'components/Tabs'
import CardProject from 'components/Card/CardProject'

export default function Home() {
	return (
		<>
			<Head>
				<title>My portfolio</title>
				<meta
					name="description"
					content="Pesonal portfolio with my skills and some projects."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className="Home">
				<section className="text-main">
					<div className="flex flex-col justify-center pt-2 pb-10 md:py-16 lg:h-[100vh]">
						<article className="container grid grid-cols-1 md:grid-cols-12 gap-8">
							<div className="flex flex-col justify-center md:col-span-7">
								<h2 className="text-white font-bold md:font-extrabold sm:pt-4 lg:pt-8 mb-2 md:my-4 text-4xl md:text-5xl xl:text-7xl">
									Hi, I&apos;m Yaser
								</h2>
								<h3 className="text-sec font-bold md:font-extrabold text-4xl md:text-5xl xl:text-7xl">
									<Typical
										loop={Infinity}
										steps={['JS Developer', 2000, 'Frontend React ⚛', 2000]}
									/>
								</h3>
								<p className="text-sm sm:text-base mt-4 lg:text-lg md:font-bold mb-4 md:mb-8">
									You can read more about me here.
								</p>
								<a
									href="/yaser_cv.pdf"
									rel="noreferrer noopener"
									download
									target="_blank"
									className="inline-block w-[180px] text-base text-white uppercase text-center tracking-wider font-semibold px-4 py-3 border border-white rounded-xl
						transition duration-400 ease-in-out hover:bg-white hover:text-sec"
								>
									Download CV
								</a>
							</div>
							<div className="md:col-span-5">
								<Image
									src={banner}
									alt=""
									placeholder="blur"
									className="object-cover"
								/>
							</div>
						</article>
					</div>
				</section>
				<section className="text-main bg-[#191919] About">
					<div className="flex flex-col justify-center py-10 md:py-16 lg:h-[100vh]">
						<article className="container grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-16">
							<div className="flex flex-col justify-center md:col-span-4 overflow-hidden rounded-[50%] w-52 h-52 md:rounded-xl md:w-full md:h-auto object-cover mx-auto">
								<Image
									src={picture}
									alt=""
									placeholder="blur"
									className="filter !grayscale contrast-125 brightness-75 object-cover rounded-xl"
								/>
							</div>
							<div className="md:col-span-8">
								<h2 className="text-white font-bold md:font-extrabold mb-2 md:my-4 text-4xl md:text-5xl xl:text-7xl">
									About Me
								</h2>
								<p className="text-base lg:text-xl mt-4 mb-4 md:mb-8">
									Web developer, eager tech enthusiast to keep learning, focused
									on innovation and development of systems to promote business
									objectives.
									<br />
									<br />I have experience in Frontend, use of React Hooks,
									Context API, js, Tailwindcss, etc. I also like to learn new
									technologies and be updated in the javascript world.
								</p>
								<Tabs />
							</div>
						</article>
					</div>
				</section>
				<section className="text-main Projects">
					<div className="w-full relative">
						<div className="flex flex-col justify-center pt-10 pb-16 md:pt-16 md:pb-24 lg:h-[100vh]">
							<h2 className="text-white font-bold md:font-extrabold mb-2 md:my-4 text-4xl md:text-5xl xl:text-7xl text-center">
								My Latest Projects
							</h2>
							<p className="text-base lg:text-xl text-center mt-4 mb-4 md:mb-8">
								These are my latest projects I haven been working on.
							</p>
							<div className="hidden from-blue-400 bg-blue-400"></div>
							<div className="hidden from-pink-500 bg-pink-500"></div>
							<div className="hidden from-green-300 bg-green-300"></div>
							<article className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								<CardProject
									image={project1}
									link="https://grid-bay.vercel.app/"
									title={['Development', 'Visualiza Studio']}
									color="blue-400"
								/>
								<CardProject
									image={project2}
									link="https://creaconrichs.com.ar"
									title={['Production', 'Richs Argentina']}
									color="pink-500"
								/>
								<CardProject
									image={project3}
									link="https://lp.richs.com/icehot-event.html"
									title={['Production', 'Richs Perú']}
									color="green-300"
								/>
							</article>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
