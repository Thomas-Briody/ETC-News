import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'





export default function Article({ match, location }) {

  const news = location.state.news
  const id = location.state.id
  console.log(match, location)


  return <div className="container is-max-widescreen my-6">

    <div className='card is-centered p-4' >

      <h2 className="title is-2" id="articleTitle">{news.title}</h2>
    

      <div> <h6 className="title is-6" id="articleSubtitle">Source: {news.source.name}</h6> </div>


      <div className="articleBox">
      <div className="articlepicture"> <img src={news.urlToImage} alt={news.title} width='400px' /></div>
      <div className="textitem"> {news.description} <a href={news.url} target="_blank" id="readmorelink">Read more</a></div>
      </div>
      <div>Author: {news.author}</div>
      <div>
        <Link key={news.name} to={{
          pathname: id === '' ? 
          '/':
          `/category/${id}`
          
        }}>
          <button className="button is-dark" id="articleButton">Go back</button>
        </Link>

      </div>


    </div>
  </div>


}




