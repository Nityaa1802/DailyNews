import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={item.urlToImage} alt='' />
        </div>
        <div className='text'>
          <span className='category'>Featured</span>
          <Link to={item.title}>
            <h1 className='titleBg'>{item.title}</h1>
          </Link>
          <div className='author flex'>
            <span>by {item.author}</span>
            <span>{item.publishedAt}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
