import React from 'react';
import SideBar from "./sidebar";

const ArticleOne = () => {
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
                                        <h1>NGTSOL Joins Visionaries at LEAP 24: Paving the Way for the Future of Tech</h1>
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
                                                    src="/Insights/leap.png" />
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
                                                    <p>NGTSOL proudly participated in LEAP 24, one of the world’s premier events for visionaries, creators, and innovators. This landmark gathering brought together leaders from across the technology landscape to explore and shape the future of innovation, and NGTSOL was at the forefront of this exciting global movement.</p>
                                                    <p>As a trusted provider of managed IT services, NGTSOL showcased its expertise in delivering scalable and secure technology solutions that empower businesses to thrive in today’s digital age. The event provided a unique platform for NGTSOL to engage with industry pioneers, exchange ideas, and highlight its cutting-edge services in IT infrastructure management, platform development, and information security.</p>
                                                    <p>Our presence at LEAP 24 reaffirms NGTSOL's commitment to driving innovation, fostering collaboration, and staying ahead of the latest technological advancements. By participating in this visionary event, NGTSOL continues to strengthen its position as a key player in shaping the future of technology and ensuring that businesses worldwide are equipped to meet tomorrow's challenges.</p>
                                                    <p>Stay tuned as we bring more exciting updates from LEAP 24 and beyond, reinforcing our mission to lead the way in managed IT services and solutions!</p>
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

export default ArticleOne;
