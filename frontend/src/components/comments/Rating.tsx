'use client'
import { Rating, RatingProps } from 'react-simple-star-rating'

const RatingUI = (props: RatingProps) => {
  return (
    <div className="inline-flex flex-row">
      <Rating
        size={20}
        emptyStyle={{ display: 'flex' }}
        fillStyle={{ display: '-webkit-inline-box' }}
        {...props}
      />
    </div>
  )
}

export default RatingUI
