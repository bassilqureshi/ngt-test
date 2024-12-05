import "../../custom-style.css"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../utils/articles.json'
import SideBar from './sidebar';

const sidebarItems = [
  {
    path: '/insights',
    date: 'Sep 10, 2024',
    category: 'News',
    title: 'NGTSOL Makes a Strong Impression at GITEX Global 2023'
  },
  {
    path: '/insights/ngtsol-joins-visionaries-at-leap-24',
    date: 'Sep 10, 2024',
    category: 'News',
    title: 'NGTSOL Joins Visionaries at LEAP 24: Paving the Way for the Future of Tech'
  },
  {
    path: '/insights/ngtsol-hosts-london',
    date: 'Sep 10, 2024',
    category: 'News',
    title: 'NGTSOL Hosts London Tech Meetup: Bridging the Gap Between Tech Enthusiasts and Professionals'
  },
  {
    path: '/insights/ngtsol-at-servicenow-knowledge-2024',
    date: 'Sep 10, 2024',
    category: 'Highlights',
    title: 'NGTSOL at ServiceNow Knowledge 2024: Exploring the Future of Business Transformation'
  },
  {
    path: '/insights/excellence-in-infrastructure-and-cloud-services',
    date: 'Sep 10, 2024',
    category: 'Highlights',
    title: 'NGTSOL: Excellence in Infrastructure and Cloud Services'
  }
];

const Article = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This will make the scroll smooth
    });
  };
  const [filteredArticles, setFilteredArticles] = useState(sidebarItems);

  const { article_slug } = useParams();
  const article = articles[article_slug || 'ngtsol-makes-a-strong-impression-at-gitex-global-2023'];


  const handleFilterChange = (newFilter) => {
    if (newFilter === 'All') {
      setFilteredArticles(sidebarItems);
    } else {
      setFilteredArticles(sidebarItems.filter(item => item.category === newFilter));
    }
    console.log('Filter changed in Article:', newFilter);
  };

  return (
    <div className="page-main page-current">
      <div className="page-toload noticias-page single-noticias-page" data-bodyclass="noticias single-noticias">
        <main className="page-content" role="main">
          <div className="row expanded container medium-collapse">
            <div className="rotate-title">
              <h4>News &amp; Insights</h4>
            </div>

            <div className="xxlarge-4 medium-16 medium-offset-0 columns nav-sidebar-column">
              {/* <SideBar onFilterChange={(e) => {
                handleFilterChange(e)
              }} /> */}
              <SideBar allItems={sidebarItems} filteredItems={filteredArticles} onFilterChange={handleFilterChange} />
            </div>

            <div className="xxlarge-9 xxlarge-offset-1 medium-14 medium-offset-1 columns full-page-container" data-nextNews="true" data-activeNew={article.slug}>
              <article className="full-page-article" data-id={article.slug}>
                <header className="full-page-article-header">
                  <h1>{article.title}</h1>
                  <div className="full-page-article-social">
                    <span className="social-title">Share</span>
                    <ul>
                      {Object.entries(article.social_links).map(([platform, url]) => (
                        <li className="social-item" key={platform}>
                          <a href={url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <img src={`/About/${platform} hero.svg`} alt={`${platform} Icon`} className="lg:h-[15px] xl:h-[20px]" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </header>

                <div className="full-page-article-content">
                  <div className="full-page-article-image">
                    <div className="block-bg-cover">
                      <img className="element-cover" src={article.image} alt={article.title} />
                    </div>
                  </div>

                  <div className="row expanded xsmall-collapse">
                    <div className="xxlarge-12 xxlarge-offset-2 small-16 small-offset-0 columns">
                      <div className="full-page-article-time-category">
                        <time className="full-page-article-date">{article.date}</time>
                        <div className="full-page-article-category">
                          {article.category}
                        </div>
                      </div>
                      <div className="full-page-article-text">
                        {article.content.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="full-page-article-social">
                    <span className="social-title">Share</span>
                    <ul>
                      {Object.entries(article.social_links).map(([platform, url]) => (
                        <li className="social-item" key={platform}>
                          <a href={url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <img src={`/About/${platform} hero.svg`} alt={`${platform} Icon`} className="lg:h-[15px] xl:h-[20px]" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </main>
      </div>
      <button className="scroll-to-top-btn" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};
export default Article;
