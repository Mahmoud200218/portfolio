import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id : 1,
    image : IMG1,
    title : 'Crypto Currency Dashboard & financial Visualization',
    github : 'https://github.com',
    demo : 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id : 2,
    image : IMG2,
    title : 'Charts templates & infographics in Figma',
    github : 'https://github.com',
    demo : 'https://www.figma.com/community/file/855517047816771255'
  },
  {
    id : 3,
    image : IMG3,
    title : 'Figma dashbard UI kit for data design web app',
    github : 'https://github.com',
    demo : 'https://dribbble.com/shots/18432305-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id : 4,
    image : IMG4,
    title : 'Maintaining tasks and tracking progress',
    github : 'https://github.com',
    demo : 'https://dribbble.com/shots/18432305-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id : 5,
    image : IMG5,
    title : 'Charts template & infographics in figma',
    github : 'https://github.com',
    demo : ''
  },
  {
    id : 6,
    image : IMG6,
    title : 'Charts template & infographics in figma',
    github : 'https://github.com',
    demo : 'https://dribbble.com/shots/18432305-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
        return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title} </h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article> 
        )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio


// ملاحظة : يمكن تكرار الارتيكل ووضع العناصر بداخله وعدم فعل اراي ووضع البيانات بداخلها => يعني طريقة اخرى