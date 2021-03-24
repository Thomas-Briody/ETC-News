import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
import business from './data/business_data.js'
import entertainment from './data/entertainment_data.js'
import health from './data/health_data.js'
import science from './data/science_data.js'
import sports from './data/sports_data.js'
import technology from './data/technology_data.js'


export default function Category({ match }) {
  const id = match.params.id
  const [selectedCategory, updateSelectedCategory] = useState([])


  function updateData() {
    let filteredArticles = []
    
    if (id === 'business') {
      filteredArticles = business.articles.filter(article => {
        return article.urlToImage
      })
    } else if (id === 'entertainment') {
      filteredArticles = entertainment.articles.filter(article => {
        return article.urlToImage
      })
    } else if (id === 'health') {
      filteredArticles = health.articles.filter(article => {
        return article.urlToImage
      })
    } else if (id === 'science') {
      filteredArticles = science.articles.filter(article => {
        return article.urlToImage
      })
    } else if (id === 'sports') {
      filteredArticles = sports.articles.filter(article => {
        return article.urlToImage
      })
    } else if (id === 'technology') {
      filteredArticles = technology.articles.filter(article => {
        return article.urlToImage
      })
    }
    updateSelectedCategory(filteredArticles)
    return filteredArticles
  }

  useEffect(() => {
    updateData()
  }, [])


  if (!selectedCategory[0]) return null

  return <section className="section hero is-fullheight">




    <div className="container is-max-widescreen">
      <div className="category-header is-max-widescreen is-flex is-justify-content-flex-end">
        <img src="https://i.imgur.com/ozQzxDk.png" alt="logo" style={{ height: 80, margin: 5 }} />
        <h1 style={{ color: '#595f6c' }}><span className="teal-text ml-2">ETC.</span>{id.toLowerCase()}</h1>
      </div>
    </div>

    <div className="container is-max-widescreen">
      <div className="columns is-multiline">
        {selectedCategory.map((news, index) => {

          const newsTitle = news.title.split('-')
          newsTitle.pop()
          const newsString = newsTitle.join('')

          return <div className="column is-one-quarter" key={index}>

            <Link key={news.name} to={{
              pathname: `/ETC-News/category/${id}/article`,
              state: {
                news: news,
                id: id
              }

            }}>
              <div className="card category-card" key={index}>
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={news.urlToImage} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media-content">
                    <p className="title is-7 has-text-danger">{news.source.name}
                    </p>
                  </div>
                  <div className="media-content">
                    <p className="title is-5">{newsString.length >= 70
                      ? newsString.slice(0, 70) + '...'
                      : newsString
                    }
                    </p>
                  </div>
                </div>

                <div className="content pl-5 pb-4" id="flexboxCardBottom">
                  <p className="content is-size-7" id="flexbox1Card">{
                    !news.author ? '' :
                      news.author.length >= 30
                        ? news.author.slice(0, 30) + '...'
                        : news.author
                  }   </p>
                  <p className="content is-size-7 has-text-danger" id="flexbox2Card">   Posted {moment(news.publishedAt).fromNow()}</p>

                </div>
              </div>

            </Link>
          </div>
        })}
      </div>
    </div>
  </section>
}