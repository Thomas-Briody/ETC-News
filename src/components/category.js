import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Category({match}) {
  const id = match.params.id
  console.log('ID', id)

const [selectedCategory, updateSelectedCategory] = useState([])

useEffect(() => {
  axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=${id}&apiKey=711ceee5a865487697b1e127e86e2d6a`)
    .then(({ data }) => {
      console.log(data)
      updateSelectedCategory(data.articles)
    })
}, [])

if(!selectedCategory[0]) return null

return <div>
    <h1>Category: {id} </h1>
    <h2>Title: {selectedCategory.title} </h2>
</div>

}