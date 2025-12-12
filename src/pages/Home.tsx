import React, { useEffect } from 'react'
import '../styles/home.css'
import raymond from '../assets/images/raymond.jpg'
import laptop from '../assets/images/laptop.jpg'
import novatech from '../assets/images/novatech.png'
import bluewave from '../assets/images/bluewave.png'
import card1 from '../assets/images/card1.webp'
import card2 from '../assets/images/card2.webp'
import card3 from '../assets/images/card3.webp'
import { HiOutlineMail } from "react-icons/hi";

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
                    <img src={raymond} alt="Raymond Chukwuyelu" loading='eager'/>
                </div>
            </div>

            <div className='cont4'>
                <img src={laptop} alt="Raymond Chukwuyelu" className='fade-in left' loading='eager'/>

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
                    <img src={bluewave} alt='bluewave' />

                    <div>
                        <span className='exp-title'>Senior fullstack developer</span>
                        <span className='exp-header'>Bluewave</span>
                        <span className='exp-header'>Dec 2023 - present</span>
                        <span className='exp-header'>Bluewave - Georgia, United States </span>

                        <ul>
                            <li>Developed complex survey applications using ReactJS and Redux, enabling dynamic question flows, conditional branching, and real-time user interactions based on complex response patterns.
                            </li>

                            <li>Developed a real-time, interactive experience utilizing WebSocket, ensuring seamless data synchronization and immediate feedback across distributed users and systems.</li>

                            <li>Managed and enhanced complex technology infrastructure, working closely with the product team to introduce new features and strategically outline future product developments.
                            </li>

                            <li>   Utilized AWS Cloud for scalable cloud computing solutions, managing and configuring virtual servers, storage, and other services as per project requirements.

                            </li>
                        </ul>
                    </div>
                </div>

                <hr className='hr' />

                <div className='exp-content1 fade-in left'>
                    <img src={novatech} alt='bluewave' />

                    <div>
                        <span className='exp-title'>Senior fullstack developer</span>
                        <span className='exp-header'>Novatech</span>
                        <span className='exp-header'>Jun 2021 - Oct 2023 · 2 yr 5 mos</span>
                        <span className='exp-header'>Lagos, Lagos State, Nigeria · Hybrid
                        </span>

                        <ul>
                            <li>Developed complex survey applications using ReactJS and Redux, enabling dynamic question flows, conditional branching, and real-time user interactions based on complex response patterns.
                            </li>

                            <li>Developed a real-time, interactive experience utilizing WebSocket, ensuring seamless data synchronization and immediate feedback across distributed users and systems.
                            </li>

                            <li>Developed a real-time, interactive experience utilizing WebSocket, ensuring seamless data synchronization and immediate feedback across distributed users and systems.
                            </li>

                            <li>  Built a library of modular, reusable components in ReactJS to handle advanced survey functionalities, including skip logic, multi-step forms, and dynamic question pathways, significantly improving survey flexibility and user completion rates.
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
    { id: 1, title: 'AIM admin dashboard', description: 'Admnin Dashboard', img: card1 },
    { id: 2, title: 'WorkWave', description: 'Freelance', img: card2 },
    { id: 3, title: 'Hayati', description: 'Health tech', img: card3 }

]