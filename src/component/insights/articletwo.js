import React from 'react';
import SideBar from "./sidebar";

const ArticleTwo = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This will make the scroll smooth
        });
    };
    return (
        <>
            <div className="page-main page-current">
                <div className="page-toload noticias-page single-noticias-page" data-bodyclass="noticias single-noticias">
                    <main className="page-content" role="main">
                        <div className="row expanded container medium-collapse">

                            <div className="rotate-title">
                                <h4>News &amp; Insights</h4>
                            </div>

                            <div
                                className="xxlarge-4 medium-16 medium-offset-0 columns nav-sidebar-column">
                                <SideBar />
                            </div>
                            <div
                                className="xxlarge-9 xxlarge-offset-1 medium-14 medium-offset-1 columns full-page-container"
                                data-nextNews="true" data-activeNew="10555">
                                <article className="full-page-article" data-id="10555">
                                    <header className="full-page-article-header">
                                        <h1>NGTSOL Hosts London Tech Meetup: Bridging the Gap Between Tech Enthusiasts and Professionals</h1>
                                        <div className="full-page-article-social">
                                            <span className="social-title">Share</span>
                                            <ul>
                                                <li className="social-item">
                                                    <a href="https://www.linkedin.com/company/next-generation-technology-solutions/mycompany/" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Linkedin hero.svg" alt="Linkedin Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                                <li className="social-item">
                                                    <a href="https://www.facebook.com/NGTSolUSA" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Facebook hero.svg" alt="Facebook Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                                <li className="social-item">
                                                    <a href="https://twitter.com/ngtsol" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Twitter hero.svg" alt="Twitter Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                                <li className="social-item">
                                                    <a href="https://www.youtube.com/@NGTSOLUSA" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Youtube hero.svg" alt="Youtube Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                                <li className="social-item">
                                                    <a href="https://www.instagram.com/ngtsolusa/" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Instagram hero.svg" alt="Instagram Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </header>
                                    <div className="full-page-article-content">
                                        <div className="full-page-article-image">
                                            <div className="block-bg-cover">
                                                <img className="element-cover"
                                                    src="/Insights/london.png" />
                                            </div>
                                        </div>

                                        <div className="row expanded xsmall-collapse">
                                            <div
                                                className="xxlarge-12 xxlarge-offset-2 small-16 small-offset-0 columns">
                                                <div className="full-page-article-time-category">
                                                    <time
                                                        className="full-page-article-date">June 25,
                                                        2020</time>
                                                    <div className="full-page-article-category">

                                                        News

                                                    </div>
                                                </div>
                                                <div className="full-page-article-text">
                                                    <p>On November 20, 2023, NGTSOL took center stage by hosting the London Tech Meetup, an engaging event that brought together tech enthusiasts, industry professionals, and thought leaders. Held in the vibrant heart of London, the event provided a platform for networking, collaboration, and sharing insights into the rapidly evolving technology landscape.</p>
                                                    <p>As a leader in managed IT services, NGTSOL facilitated discussions on emerging trends, innovative solutions, and best practices that are shaping the future of technology. The meetup offered a unique opportunity for attendees to connect with like-minded professionals, explore new ideas, and gain valuable perspectives on navigating today’s digital challenges.</p>
                                                    <p>NGTSOL’s role in hosting the London Tech Meetup underscores its dedication to fostering a community-driven approach to innovation. By creating an inclusive environment for knowledge exchange, NGTSOL continues to strengthen its position as a key player in the global tech ecosystem.</p>
                                                    <p>We look forward to future meetups and collaborations that empower the tech community and drive meaningful progress! Stay tuned for more updates on our upcoming events and initiatives.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="full-page-article-social">
                                            <span className="social-title">Share</span>
                                            <ul>
                                                <li className="social-item">
                                                    <a href="https://www.linkedin.com/company/next-generation-technology-solutions/mycompany/" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Linkedin hero.svg" alt="Linkedin Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                                <li className="social-item">
                                                    <a href="https://www.facebook.com/NGTSolUSA" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Facebook hero.svg" alt="Facebook Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                                <li className="social-item">
                                                    <a href="https://twitter.com/ngtsol" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Twitter hero.svg" alt="Twitter Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                                <li className="social-item">
                                                    <a href="https://www.youtube.com/@NGTSOLUSA" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Youtube hero.svg" alt="Youtube Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                                <li className="social-item">
                                                    <a href="https://www.instagram.com/ngtsolusa/" target="_blank" className="cursor-pointer">
                                                        <img src="/About/Instagram hero.svg" alt="Instagram Icon" className="lg:h-[15px] xl:h-[20px]" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </main>
                </div>
            </div >
            <button className="scroll-to-top-btn" onClick={scrollToTop}>
                Scroll to Top
            </button>
        </>
    );
};

export default ArticleTwo;
