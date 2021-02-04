import React, { useEffect, useState } from 'react'
import axios from 'axios'
import data from './Data.js'
import { Link } from 'react-router-dom'
import moment from 'moment'


export default function Home() {
  const filteredArticles = data.articles.filter(article => {
    return article.urlToImage
  })

  const [newsCards, updateNewsCards] = useState(filteredArticles) // ! Enter filteredArticles in here if pulling from Data
  //const [articleNumber, updateArticleNumber] = useState(0)
  const [loading, updateLoading] = useState(false)  // ! Change to false if pulling from undefined


  // useEffect(() => {
  //   axios.get('https://newsapi.org/v2/top-headlines?country=gb&pageSize=20&apiKey=309856e485794ed68f98372ffbd46d5b')
  //     .then(({ data }) => {
  //       const filteredArticles = data.articles.filter(article => {
  //         return article.urlToImage
  //       })
  //       updateNewsCards(filteredArticles)
  //       updateLoading(false)
  //     })
  // }, [])

  console.log(newsCards)
  console.log(newsCards[0])
  console.log(newsCards[0].title)



  if (loading) {
    return <h1>Loading</h1>
  }

  return <>

    <section className="hero is-fullheight">
      <div className="container is-max-widescreen my-6">
        <div className="tile is-ancestor is-vertical">


          <div className="tile">

            <div className="tile is-parent is-6">



              <div className="tile is-child box"
                style={{
                  backgroundImage: `url(${newsCards[0].urlToImage})`
                }}>
                <Link key={newsCards[0].title} to={{
                  pathname: '/article',
                  state: {
                    news: newsCards[0],
                    id: ""
                  }
                }}>
                  <p className="subtitle is-4 has-text-light">{newsCards[1].source.name}</p>
                  <h1 className="title has-text-light">{newsCards[0].title}</h1>
                </Link>
              </div>


            </div>


            <div className="tile is-parent is-vertical is-3">
              <div className="tile is-child box has-background-primary-light">
                <p className="subtitle is-7 px-2 pt-2 has-text-danger">{newsCards[1].source.name}</p>
                <h2 className="title is-5 px-2 pb-2">{newsCards[1].title}</h2>
              </div>
              <div className="tile is-child box has-background-warning-light">
                <p className="subtitle is-7 px-2 pt-2 has-text-danger">{newsCards[1].source.name}</p>
                <h2 className="title is-5 px-2 pb-2">{newsCards[1].title}</h2>
              </div>
              <div className="tile is-child box has-background-danger-light">
                <p className="subtitle is-7 px-2 pt-2 has-text-danger">{newsCards[3].source.name}</p>
                <h2 className="title is-5 px-2 pb-2">{newsCards[3].title}</h2>
                <h2 className="title is-5 px-2 pb-2">{newsCards[3].publishedAt}</h2>
              </div>
            </div>

            <div className="tile is-parent is-3">
              <div className="tile is-child box p-0">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={newsCards[4].urlToImage} />
                  </figure>
                </div>
                <p className="subtitle is-6 px-4 pt-3 has-text-danger">{newsCards[4].source.name}</p>
                <h2 className="title is-3 px-4 pb-4">{newsCards[4].title}</h2>
              </div>
            </div>

          </div>

          <div className="tile">

            <div className="tile is-parent is-vertical is-3">
              <div className="tile is-child box has-background-primary-light">
                <p className="subtitle is-7 px-2 pt-2 has-text-danger">{newsCards[5].source.name}</p>
                <h2 className="title is-5 px-2 pb-2">{newsCards[5].title}</h2>
              </div>
              <div className="tile is-child box has-background-warning-light">
                <p className="subtitle is-7 px-2 pt-2 has-text-danger">{newsCards[6].source.name}</p>
                <h2 className="title is-5 px-2 pb-2">{newsCards[6].title}</h2>
              </div>
              <div className="tile is-child box has-background-danger-light">
                <p className="subtitle is-7 px-2 pt-2 has-text-danger">{newsCards[7].source.name}</p>
                <h2 className="title is-5 px-2 pb-2">{newsCards[7].title}</h2>
              </div>
            </div>

            <div className="tile is-parent is-3">
              <div className="tile is-child box p-0">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={newsCards[8].urlToImage} />
                  </figure>
                </div>
                <p className="subtitle is-6 px-4 pt-3 has-text-danger">{newsCards[8].source.name}</p>
                <h2 className="title is-3 px-4 pb-4">{newsCards[8].title}</h2>
              </div>
            </div>

            <div className="tile is-parent is-3">
              <div className="tile is-child box p-0">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={newsCards[9].urlToImage} />
                  </figure>
                </div>
                <p className="subtitle is-6 px-4 pt-3 has-text-danger">{newsCards[9].source.name}</p>
                <h2 className="title is-3 px-4 pb-4">{newsCards[9].title}</h2>
              </div>
            </div>

            <div className="tile is-parent is-vertical is-3">
              <div className="tile is-child box"
                style={{
                  backgroundImage: `url(${newsCards[1].urlToImage})`
                }}>
                <p className="subtitle is-6 px-2 pt-2 has-text-light">{newsCards[1].source.name}</p>
                <h2 className="title is-4 px-2 pb-2 has-text-light">{newsCards[1].title}</h2>
              </div>
              <div className="tile is-child box"
                style={{
                  backgroundImage: `url(${newsCards[1].urlToImage})`
                }}>
                <p className="subtitle is-6 px-2 pt-2 has-text-light">{newsCards[1].source.name}</p>
                <h2 className="title is-4 px-2 pb-2 has-text-light">{newsCards[1].title}</h2>
              </div>
            </div>

          </div>
        </div>

        <div className="tile is-ancestor">

          <div className="tile is-parent is-6">
            <div className="tile is-child box is-flex is-justify-content-flex-end"
              style={{
                backgroundImage: `url(${newsCards[1].urlToImage})`,
                height: '300px'
              }}>
              <Link key={newsCards[1].title} to={{
                pathname: '/article',
                state: newsCards[1]
              }}>
                <h1 className="title has-text-light">{newsCards[1].title}</h1>
              </Link>
            </div>
          </div>

          <div className="tile is-parent is-6">
            <div className="tile is-child box is-flex is-justify-content-flex-end"
              style={{
                backgroundImage: `url(${newsCards[1].urlToImage})`,
                height: '300px'
              }}>
              <Link key={newsCards[1].title} to={{
                pathname: '/article',
                state: newsCards[1]
              }}>
                <h1 className="title has-text-light">{newsCards[1].title}</h1>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>

















  </>
  //console.log(articleNumber)








}

