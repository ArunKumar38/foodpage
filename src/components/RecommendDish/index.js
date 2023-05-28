import './index.css'

import {AiOutlineStar} from 'react-icons/ai'

import {RiFridgeLine} from 'react-icons/ri'

import {BsArrow90DegRight} from 'react-icons/bs'

const RecommendDish = props => {
  const {dishes} = props
  const {name, rating, description, image, id} = dishes

  const getFoodDetails = () => {
    window.open(
      'https://xd.adobe.com/view/9b2ca09f-239b-40b9-840c-bbb36234dc0a-ce7f/screen/40c8c87a-b81b-4241-a780-eee0fc4f8dc4/',
    )
  }

  return (
    <div className="food-container">
      <div>
        <h1>
          {name}
          <span className="rating-text">
            {rating} <AiOutlineStar />
          </span>
        </h1>

        <div className="side" key={id}>
          <div>
            <RiFridgeLine size={50} /> <RiFridgeLine size={50} />
          </div>
          <div>
            <p>Ingredients </p>
            <button type="button" className="viewList" onClick={getFoodDetails}>
              View list <BsArrow90DegRight />
            </button>
          </div>
        </div>
        <p>{description}</p>
      </div>
      <div>
        <img src={image} className="food-image" alt="food" />
      </div>
    </div>
  )
}

export default RecommendDish
