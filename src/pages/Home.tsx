import React, { useEffect } from 'react'
import '../styles/home.css'
import raymond from '../assets/images/raymond.jpg'
import laptop from '../assets/images/laptop.jpg'
import panlet from '../assets/images/panlet.png'
import diagnoxa from '../assets/images/diagnoxa.png'
import hakeela from '../assets/images/Hakeela Full Logo.png'
import card3 from '../assets/images/card1.webp'
import card1 from '../assets/images/card2.jpeg'
import card2 from '../assets/images/card3.jpeg'
import { HiOutlineMail } from "react-icons/hi";
import NeonBall from '../components/NeonBall'
import TypewriterH1 from '../components/TypewriterH1'
import { RootState } from "../store/Store";
import { useSelector } from "react-redux";


const Home = () => {
    const ready = useSelector((state: RootState) => state.ready.ready);

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
        
        <div className="cont2">
            <NeonBall />
            <div className="cont3">
                
                <div className='h1-left fade-in left'>
                    <TypewriterH1
                        words={["Frontend Developer", "Fast", "Proficient", "Reliable"]}
                        className="h1"
                    />

                    <div>
                        <p>Hi, I’m Raymond Chukwuyelu — a passionate and detail-driven Frontend Engineer.
                            I specialize in building intuitive, responsive, and accessible user interfaces that turn
                            complex ideas into seamless digital experiences. With strong experience across
                            modern frontend frameworks, state management, and UI systems, I focus on writing
                            clean, scalable code that performs well and feels great to use.

                        </p>

                        <p>I enjoy collaborating with teams, bridging design and engineering, and delivering
                            products that users actually love. Let’s build something impactful. </p>

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
                        <li>HTML5 / CSS3 / JavaScript / TypeScript / jQuery</li>
                        <li>React / React Native / Next.js  / JavaScript (ES6+)</li>
                        <li>Redux Toolkit / Zustand / TanStack Query</li>
                        <li>Responsive & accessible UI design</li>
                        <li>Tailwind CSS / Material UI / Bootstrap</li>
                        <li>Jest / Cypress / Zod</li>
                        <li>Git / Vite </li>
                        <li>Node.js / Express.js / MongoDB</li>
                    </ul>

                </div>
            </div>


            <div className='cont5 fade-in left'>
                <h1>Experience</h1>

                <div className='exp-content1 fade-in left'>
                    <img src={hakeela} alt='bluewave' />

                    <div>
                        <span className='exp-title'>Fullstack developer (Contract)</span>
                        <span className='exp-header'>Hakeela</span>
                        <span className='exp-desc'>Jan 2025 - Mar 2026 · 1 yr 2 mos</span>
                        <span className='exp-desc'>Hakeela - Lagos</span>

                        <ul>
                            <li>Worked across the stack to build and scale an EdTech platform focused on making tech education more accessible for marginalized communities and individuals with special needs.
                            </li>

                            <li>Led development of core features using React, TypeScript, Node.js, and REST APIs, covering learning flows, user accounts progress tracking, and content delivery</li>

                            <li>Designed and built backend services that power authentication, course management, and adaptive learning features, making sure the system stays clean, scalable, and easy to extend
                            </li>

                            <li> Shipped accessible and responsive UI components with a focus on realworld usability, especially for users on low-end devices or with accessibility needs.
                            </li>

                            <li>Integrated AI features into learning workflows to support personalized learning paths and improve communication for users who need extra assistance.
                            </li>

                            <li>Improved performance across the system by tightening API responses, reducing unnecessary frontend re-renders, and optimizing how data is fetched and stored.
                            </li>

                            <li> Implemented secure auth flows and role-based access control to keep user data safe and properly segmented across different user types.
                            </li>

                            <li>Worked closely with product and design teams to break down complex learning requirements into simple, usable features that actually work for real users.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='exp-content1 fade-in left'>
                    <img src={diagnoxa} alt='bluewave' />

                    <div>
                        <span className='exp-title'>Frontend developer</span>
                        <span className='exp-header'>Diagnoxa</span>
                        <span className='exp-desc'>Sep 2022 - Dec 2024 · 2 yr 4 mos</span>
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
                        <span className='exp-desc'>April 2021 - Jul 2023 · 1 yr 3 mos</span>
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
    { id: 1, title: 'Vease', description: 'Poject Management Platform', img: card1 },
    { id: 2, title: 'Eco-lodge', description: 'Real Estate Marketplaces', img: card2 },
    { id: 3, title: 'AIM admin dashboard', description: 'Admin Dashboard', img: card3 },
]