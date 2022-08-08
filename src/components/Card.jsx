import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, thumbnail, name }) => {
  return (
    <Link to={`/${id}`} className="text-white bg-dark">
      <div>
            <img src={thumbnail} alt="thumbnail" className='centerImg' />
            <p className='centerText'>{name}</p>
      </div>
    </Link>
  )
}

export default Card