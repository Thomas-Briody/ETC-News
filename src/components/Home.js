import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import data from './Data.js'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Weather from './Weather'


export default function Home() {
  // const filteredArticles = data.articles.filter(article => {
  //   return article.urlToImage
  // })

  const [newsCards, updateNewsCards] = useState([]) // ! Enter filteredArticles in here if pulling from Data
  const [loading, updateLoading] = useState(true)  // ! Change to false if pulling from undefined


  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.apikeynews}`)
      .then(({ data }) => {
        const filteredArticles = data.articles.filter(article => {
          return article.urlToImage
        })
        updateNewsCards(filteredArticles)
        updateLoading(false)
      })
  }, [])

  console.log(newsCards)




  if (loading) {
    return <h1>Loading</h1>
  }



  console.log(moment(newsCards[0].publishedAt).fromNow())

  function removeSource(news) {
    const newsTitle = news.title.split('-')
    newsTitle.pop()
    const newsString = newsTitle.join('')
    return newsString
  }

  return <>

    <section className="hero is-fullheight pb-6">
      <div className="container is-max-widescreen">
        <div className="tile is-ancestor is-vertical">

          <div className="tile is-parent is-12 my-3 pb-0">

            <div className="tile is-ancestor">
              <div className="tile is-parent is-1 pr-0 pl-2">
                <div className="tile is-child is-flex is-justify-content-flex-end">
                  <img style={{ height: 80, margin: 5 }} src="https://i.imgur.com/ozQzxDk.png" />
                </div>
              </div>

              <div className="tile is-parent is-vertical pl-0">
                <div className="tile is-child is-6 pb-0 mb-0">
                  <p className="teal-text mb-0" style={{ fontSize: '60px', marginLeft: 10, lineHeight: '1em', marginTop: 14 }}>ETC NEWS</p>
                  <p style={{ fontSize: '25px', marginLeft: 12 }}>news you need to know.</p>
                </div>
              </div>
            </div>

          </div>


          <div className="tile">

            <div className="tile is-parent is-6">


              <div className="tile is-child box is-flex is-align-items-flex-end p-2"
                style={{
                  backgroundImage: `url(${newsCards[0].urlToImage})`
                }}>
                <Link key={newsCards[0].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[0],
                    id: ''
                  }
                }}>
                  <div className="shade-box">
                    <p className="subtitle has-text-light">{newsCards[0].source.name}</p>
                    <h1 className="title has-text-light">{removeSource(newsCards[0])}</h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className="tile is-parent is-vertical is-3">
              <div className="tile is-child box has-background-primary-light">


                <Weather />


              </div>
              <div className="tile is-child box has-background-info-light">
                <Link key={newsCards[1].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[1],
                    id: ''
                  }
                }}>
                  <p className="subtitle is-6 px-2 pt-2 has-text-danger">{newsCards[1].source.name}</p>
                  <h2 className="title is-5 px-2 pb-2">{removeSource(newsCards[1])}</h2>
                </Link>
              </div>
              <div className="tile is-child box has-background-link-light">
                <Link key={newsCards[3].title.split('-', 1)} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[3],
                    id: ''
                  }
                }}>
                  <p className="subtitle is-6 px-2 pt-2 has-text-danger">{newsCards[3].source.name}</p>
                  <h2 className="title is-5 px-2 pb-2">{removeSource(newsCards[3])}</h2>
                </Link>
              </div>
            </div>
            <div className="tile is-parent is-3">
              <div className="tile is-child box p-0">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={newsCards[4].urlToImage} />
                  </figure>
                </div>
                <Link key={newsCards[4].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[4],
                    id: ''
                  }
                }}>
                  <p className="subtitle is-6 px-4 pt-3 has-text-danger">{newsCards[4].source.name}</p>
                  <h2 className="title is-3 px-4 pb-4">{removeSource(newsCards[4])}</h2>
                </Link>
              </div>
            </div>
          </div>

          <div className="tile">

            <div className="tile is-parent is-vertical is-3">
              <div className="tile is-child box has-background-primary-light">
                <Link key={newsCards[5].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[5],
                    id: ''
                  }
                }}>
                  <p className="subtitle is-6 px-2 pt-2 has-text-danger">{newsCards[5].source.name}</p>
                  <h2 className="title is-5 px-2 pb-2">{removeSource(newsCards[5])}</h2>
                </Link>
              </div>
              <div className="tile is-child box has-background-info-light">
                <Link key={newsCards[6].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[6],
                    id: ''
                  }
                }}>
                  <p className="subtitle is-6 px-2 pt-2 has-text-danger">{newsCards[6].source.name}</p>
                  <h2 className="title is-5 px-2 pb-2">{removeSource(newsCards[6])}</h2>
                </Link>
              </div>
              <div className="tile is-child box has-background-link-light">
                <Link key={newsCards[7].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[7],
                    id: ''
                  }
                }}>
                  <p className="subtitle is-6 px-2 pt-2 has-text-danger">{newsCards[7].source.name}</p>
                  <h2 className="title is-5 px-2 pb-2">{removeSource(newsCards[7])}</h2>
                </Link>
              </div>
            </div>

            <div className="tile is-parent is-3">
              <div className="tile is-child box p-0">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={newsCards[8].urlToImage} />
                  </figure>
                </div>
                <Link key={newsCards[8].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[8],
                    id: ''
                  }
                }}>
                  <p className="subtitle is-6 px-4 pt-3 has-text-danger">{newsCards[8].source.name}</p>
                  <h2 className="title is-3 px-4 pb-4">{removeSource(newsCards[8])}</h2>
                </Link>
              </div>
            </div>



            <div className="tile is-parent is-vertical is-3">
              <div className="tile is-child box p-2"
                style={{
                  backgroundImage: `url(${newsCards[10].urlToImage})`
                }}>
                <Link key={newsCards[10].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[10],
                    id: ''
                  }
                }}>
                  <div className="shade-box">
                    <p className="subtitle is-6 has-text-light">{newsCards[10].source.name}</p>
                    <h2 className="title is-4 has-text-light">{removeSource(newsCards[10])}</h2>
                  </div>
                </Link>
              </div>
              <div className="tile is-child box p-2"
                style={{
                  backgroundImage: `url(${newsCards[11].urlToImage})`
                }}>
                <Link key={newsCards[11].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[11],
                    id: ''
                  }
                }}>
                  <div className="shade-box">
                    <p className="subtitle is-6 has-text-light">{newsCards[11].source.name}</p>
                    <h2 className="title is-4 has-text-light">{removeSource(newsCards[11])}</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="tile is-parent is-3">
              <div className="tile is-child box p-0">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={newsCards[9].urlToImage} />
                  </figure>
                </div>
                <Link key={newsCards[9].title} to={{
                  pathname: '/project-2/article',
                  state: {
                    news: newsCards[9],
                    id: ''
                  }
                }}>
                  <p className="subtitle is-6 px-4 pt-3 has-text-danger">{newsCards[9].source.name}</p>
                  <h2 className="title is-3 px-4 pb-4">{removeSource(newsCards[9])}</h2>
                </Link>
              </div>
            </div>

          </div>
        </div>

        <div className="tile is-ancestor">

          <div className="tile is-parent is-6">
            <div className="tile is-child box p-2"
              style={{
                backgroundImage: `url(${newsCards[12].urlToImage})`,
                height: '300px'
              }}>
              <Link key={newsCards[12].title} to={{
                pathname: '/project-2/article',
                state: {
                  news: newsCards[12],
                  id: ''
                }
              }}>
                <div className="shade-box">
                  <p className="subtitle is-5 has-text-light">{newsCards[12].source.name}</p>
                  <h1 className="title has-text-light">{removeSource(newsCards[12])}</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className="tile is-parent is-6">
            <div className="tile is-child box p-2"
              style={{
                backgroundImage: `url(${newsCards[13].urlToImage})`,
                height: '300px'
              }}>
              <Link key={newsCards[13].title} to={{
                pathname: '/project-2/article',
                state: {
                  news: newsCards[13],
                  id: ''
                }
              }}>
                <div className="shade-box">
                  <p className="subtitle is-5 has-text-light">{newsCards[13].source.name}</p>
                  <h1 className="title has-text-light">{removeSource(newsCards[13])}</h1>
                </div>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>

  </>









}

