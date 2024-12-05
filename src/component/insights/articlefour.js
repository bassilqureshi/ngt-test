import React from 'react';
import SideBar from "./sidebar";

const ArticleFour = () => {
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
                                        <h1>NGTSOL at ServiceNow Knowledge 2024: Exploring the Future of Business Transformation</h1>
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
                                                    src="/Insights/infra.png" />
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
                                                    <p>NGTSOL proudly participated in ServiceNow Knowledge 2024, an event dedicated to exploring the latest advancements and solutions in digital transformation. Engaging with industry leaders and innovators, we delved into how ServiceNow’s powerful suite of tools can revolutionize business operations across various sectors.</p>
                                                    <p>During the event, we gained valuable insights into how ServiceNow is reshaping the future of work by enhancing employee experiences, streamlining workflows, and optimizing IT service management. Through cutting-edge demonstrations and discussions, we explored the platform's capabilities in boosting productivity, integrating emerging technologies, and driving innovation in today’s fast-paced digital landscape.</p>
                                                    <p>This experience not only expanded our knowledge but also reinforced NGTSOL’s commitment to delivering impactful, ServiceNow-driven solutions that help our clients achieve seamless digital transformation. Our participation in Knowledge 2024 further strengthens our ability to offer tailored strategies that foster business growth, efficiency, and success.</p>
                                                    <p>Stay connected with NGTSOL as we continue to lead the way in leveraging cutting-edge technologies to empower businesses for the future!</p>
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

export default ArticleFour;
