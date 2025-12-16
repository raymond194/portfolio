import React, { useEffect } from 'react'
import '../styles/home.css'
import raymond from '../assets/images/raymond.jpg'
import laptop from '../assets/images/laptop.jpg'
import panlet from '../assets/images/panlet.png'
import diagnoxa from '../assets/images/diagnoxa.png'
import card2 from '../assets/images/konga.png'
import card3 from '../assets/images/card3.webp'
import { HiOutlineMail } from "react-icons/hi";
import NeonBall from '../components/NeonBall'
import card1 from '../assets/images/diagnoxaApp.png'

const Home = () => {

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in")

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target)
                }
            })
        })

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <div className='cont2'>
            <NeonBall />
            <div className='cont3'>
                <div className='h1-left fade-in left'>
                    <h1>MY PORTFOLIO</h1>

                    <div>
                        <p>Hi, I’m Raymond Chukwuyelu — an enthusiastic and highly proficient Software Engineer.
                            With substantial expertise in both client-side and server-side development, I specialize in crafting intuitive, innovative, and meticulously engineered digital solutions that are precisely tailored to the requirements of each client.
                        </p>

                        <p>I work across an extensive range of programming languages, development tools, and modern frameworks, and I am deeply committed to turning complex technical problems into polished, resilient, and highly scalable software solutions. Let’s build something remarkable together!</p>

                        {/* MESSAGE LINKEDIN BUTTON HERE */}
                        <div className='mail-btns'>

                            <a href='mailto:chukwuyeluraymond@gmail.com'>
                                <HiOutlineMail className='mailBtn' size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='h1-right fade-in right'>
                    <img src={raymond} alt="Raymond Chukwuyelu" />
                </div>
            </div>

            <div className='cont4'>
                <img src={laptop} alt="Raymond Chukwuyelu" className='fade-in left' />

                <div className='fade-in right'>
                    <h1>SKILLS</h1>
                    <ul>
                        <li>HTML5 / CSS3 / JavaScript (ES6+) / TypeScript / jQuery / Next-Js  / Zod</li>
                        <li>React / Redux / Redux Toolkit  / Context API  /  Fetch API / ESLint</li>
                        <li>Bootstrap / Tailwind CSS / Zustand / Render / Vercel</li>
                        <li>Figma / Material-UI / Recharts / Tanstack-Query</li>
                        <li>Git / Github / Gitlab / Vite / Lucide / Prettier</li>
                        <li>Cypress / Jest / Responsive Design</li>
                    </ul>

                </div>
            </div>


            <div className='cont5 fade-in left'>
                <h1>Experience</h1>

                <div className='exp-content1 fade-in left'>
                    <img src={diagnoxa} alt='bluewave' />

                    <div>
                        <span className='exp-title'>Frontend developer</span>
                        <span className='exp-header'>Diagnoxa</span>
                        <span className='exp-desc'>Sep 2023 - Dec 2024 · 1 yr 2 mos</span>
                        <span className='exp-desc'>Diagnoxa - Lagos</span>

                        <ul>
                            <li>Developed data-intensive frontend systems using React and TypeScript,
                                supporting complex workflows and large, frequently updated datasets.
                            </li>

                            <li>Architected reusable and accessible component systems, prioritizing
                                data clarity, usability, and long-term maintainability.</li>

                            <li>Integrated frontend logic with secure, authenticated APIs, ensuring
                                accurate and consistent data representation.
                            </li>

                            <li>  Optimized rendering performance through state management strategies,
                                memoization, and controlled component updates.
                            </li>

                            <li>
                                Implemented robust client-side validation, error handling, and loading
                                states to improve reliability in sensitive user interactions.

                            </li>

                            <li>
                                Contributed to maintaining high application stability through active
                                participation in testing, debugging, and quality assurance processes.
                            </li>

                            <li>
                                Partnered with product and design teams to translate complex health
                                data into clear, user-focused interfaces while adhering to reliability
                                standards.
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className='hr' />

                <div className='exp-content1 fade-in left'>
                    <img src={panlet} alt='bluewave' />

                    <div>
                        <span className='exp-title'>Frontend Developer</span>
                        <span className='exp-header'>Panlet</span>
                        <span className='exp-desc'>April 2022 - Jul 2023 · 1 yr 3 mos</span>
                        <span className='exp-desc'>Panlet - Lagos</span>

                        <ul>
                            <li>Engineered and maintained a scalable React-based commerce
                                application, working closely with backend services built on Node.js and
                                MySQL.
                            </li>

                            <li>Designed frontend architecture to support high-traffic user flows,
                                including product browsing, checkout, and account management.
                            </li>

                            <li>Improved runtime performance through lazy loading, pagination
                                strategies, and component-level optimization, reducing initial load time
                                and unnecessary re-renders.
                            </li>

                            <li>  Implemented secure payment flows by integrating third-party services
                                such as Stripe, ensuring reliability and transaction integrity.
                            </li>

                            <li>
                                Optimized network performance by reducing payload sizes and enabling
                                response compression (GZIP).
                            </li>

                            <li>
                                Ensured consistent behavior across modern browsers and devices,
                                maintaining a stable experience on both mobile and desktop.
                            </li>

                            <li>
                                Delivered production-ready features through thorough testing,
                                debugging, and release validation.
                            </li>

                            <li>
                                Collaborated cross-functionally using Trello to plan, prioritize, and ship
                                features efficiently.
                            </li>

                        </ul>
                    </div>


                </div>
            </div>


            {/* EDUCATION */}

            {/* Certifications */}



            <div className='cont6 fade-in left'>
                <h1>Projects</h1>
                <div className='card-cont'>
                    {cards.map((card) => {
                        return <div className='card fade-in scale'>
                            <img src={card.img} alt={card.title} />
                            <span className='card-span1'>{card.title}</span>
                            <span className='card-span2'>{card.description}</span>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}
export default Home

const cards = [
    { id: 1, title: 'Diagnoxa', description: 'Health tech', img: card1 },
    { id: 2, title: 'Hayati', description: 'Health tech', img: card3 },
    { id: 3, title: 'Konga Clone', description: 'Freelance', img: card2 },


]