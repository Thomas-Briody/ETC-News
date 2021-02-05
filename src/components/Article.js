import React from 'react'
//import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'





export default function Article({ match, location }) {

  const news = location.state.news
  const id = location.state.id
  console.log(match, location)

  const newsTitle = news.title.split('-')
  newsTitle.pop()
  const newsString = newsTitle.join('')


  return <section className="section hero is-fullheight">
    <div className="container is-max-desktop">


      <div className="article-card card is-centered p-0">
        <div className="card-image">
          <figure className="image is-3by2">
            <img src={news.urlToImage} alt={news.title} />
          </figure>
        </div>
        <div className="card-content">

          <div className="media-content">
            <p className="title is-3 has-text-danger">{news.source.name}</p>
          </div>
          <div className="media-content">
            <p className="title is-1">{newsString}</p>
          </div>

          <div className="title is-5 mt-3">By {news.author}</div>

          <div className="content">
            {news.description} <a href={news.url} target="_blank" rel="noreferrer" id="readmorelink">Read more at {news.source.name}</a>
          </div>
          <div className="content">
            <p className="has-text-danger">Posted {moment(news.publishedAt).fromNow()}</p>
          </div>
          <div className="content p-0">
            <Link key={news.name} to={{
              pathname: id === '' ?
                '/' :
                `/category/${id}`

            }}>
              <button className="button is-dark m-0" id="articleButton">Go back</button>
            </Link>

          </div>
        </div>


      </div>

    </div>
  </section>


}




