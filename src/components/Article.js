import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {

  const [article, updateArticle] = useState([])

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=gb&pageSize=10&apiKey=711ceee5a865487697b1e127e86e2d6a')
      .then(({ data }) => {
        updateNewsCards(data.articles)
        console.log(data.articles)
      })
  }, [])

  return <div>
    {newsCards.map((news, index) => {
      return <div 
      key={index}>
        {/* <Link
        key={news.id}
        to={`/character/${character.id}`}
      > */}
        {news.title}
        <img src={news.urlToImage} alt={news.title} width='200px' />
      </div>
      // </Link>
    })}
  </div>
}



export default function Character({ match, location }) {
  // ! 1) One solution is to provide an empty character with no values.
  // const [character, updateCharacter] = useState({
  //   name: '',
  //   image: '',
  //   origin: {}
  // })
  console.log(match)

  const [character, updateCharacter] = useState({})
  // ! 3) Explicit loading state.
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    console.log('Character use effect')
    const id = match.params.banana
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        updateCharacter(data)
        updateLoading(false)
      })
  }, [])

  // ! 2) Guard condition
  // if (!character.id) {
  //   // ? Could return a loader in here.
  //   return null
  // }

  // ? Part of 3)
  if (loading) {
    return <PacmanLoader loading={loading} size={150} />
  }

  return <div>
    <div>Name: {character.name}</div>
    <img src={character.image} alt={character.name} />
    <div>{character.origin.name}</div>
  </div>
}