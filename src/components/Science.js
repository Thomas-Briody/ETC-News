import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import science from './data/science_data.js'


export default function Science() {
  const filteredArticles = science.articles.filter(article => {
    return article.urlToImage
  })

  const id = 'science'

  return <section className="section hero is-fullheight">

    <div className="container is-max-widescreen">
      <div className="category-header is-max-widescreen is-flex is-justify-content-flex-end">
        <img src="https://i.imgur.com/ozQzxDk.png" alt="logo" style={{ height: 80, margin: 5 }} />
        <h1 style={{ color: '#595f6c' }}><span className="teal-text ml-2">ETC.</span>science</h1>
      </div>
    </div>

    <div className="container is-max-widescreen">
      <div className="columns is-multiline">
        {filteredArticles.map((news, index) => {

          const newsTitle = news.title.split('-')
          newsTitle.pop()
          const newsString = newsTitle.join('')

          return <div className="column is-one-quarter" key={index}>

            <Link key={news.name} to={{
              pathname: `/ETC-News/${id}/article`,
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