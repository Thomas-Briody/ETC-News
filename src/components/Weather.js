import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function Weather({ match }) {
  
  return <>
    useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=${id}&apiKey=78606419370f41cfb752dd6b6cdc26ad`)
      .then(({ data }) => {
        const filteredArray = data.articles.filter(article => {
          return article.urlToImage && article.urlToImage.includes('http')
        })
        updateSelectedCategory(filteredArray)
      })
}