import React from 'react';
import News1 from '../../assets/small-icon/news1.jpg';
import News2 from '../../assets/small-icon/news2.jpg';
import News3 from '../../assets/small-icon/news3.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import './blogSlider.css';

const newsItems = [
  {
    title: 'Attract Sales and Profits',
    description: 'A Job ravenously while far that one rank beheld after outside.....',
    image: News1,
  },
  {
    title: 'Attract Sales and Profits',
    description: 'A Job ravenously while far that one rank beheld after outside.....',
    image: News2,
  },
  {
    title: 'Attract Sales and Profits',
    description: 'A Job ravenously while far that one rank beheld after outside.....',
    image: News3,
  },
  // Add more news items if needed
];

const options = {
  loop: true,
  margin: 10,
  nav: true,
  dots:false,
  navText: [
    '<span class="fa fa-chevron-left"></span>',
    '<span class="fa fa-chevron-right"></span>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

const BlogSlider = () => {
  return (
    <div className="section-blog py-5">
      <div className="container">
        <div className="subtitle">
          <span className="text-dark mx-1">Recent</span> News Articles
        </div>
        <div className="carousel-wrapper">
          <OwlCarousel className="owl-theme" {...options}>
            {newsItems.map((news, index) => (
              <div key={index} className="item">
                <div className="news-card">
                  <img src={news.image} alt={news.title} />
                  <div className="news-heading">
                    <h1>{news.title}</h1>
                    <p>{news.description}</p>
                  </div>
                  <div className="news-btn">
                    <button className="view-more-blog">
                      View More <i className="fa fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
