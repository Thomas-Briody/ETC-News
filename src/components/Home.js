import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {

  const [newsCards, updateNewsCards] = useState([])
  const [articleNumber, updateArticleNumber] = useState(0)


  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=gb&pageSize=10&apiKey=711ceee5a865487697b1e127e86e2d6a')
      .then(({ data }) => {
        updateNewsCards(data.articles)
        console.log(data.articles)
      })
  }, [])
  console.log(newsCards)
  return <section className="section">
    <div className="columns is-multiline">

      {newsCards.map((news, index) => {
        // updateArticleNumber(findIndex(news))
        return <div className="column is-one-third" key={index}>
          <div className="card" key={index}>
            {news.title}
            <img src={news.urlToImage} alt={news.title} width='200px' />
          </div>
        </div>
      })}
    </div>
  </section>
  //console.log(articleNumber)

}

