import {Component} from 'react'

import {SlCalender} from 'react-icons/sl'

import {AiOutlineClockCircle} from 'react-icons/ai'
import {RiArrowDownSFill} from 'react-icons/ri'

import PopularDishes from '../PopularDishes'
import RecommendDish from '../RecommendDish'

import './index.css'

class ChefKart extends Component {
  state = {popularDish: [], dishes: []}

  componentDidMount() {
    this.getPopularDishes()
  }

  getPopularDishes = async () => {
    const url =
      'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/'
    const options = {method: 'GET'}
    const response = await fetch(url, options)
    const data = await response.json()
    const popularDishData = data.popularDishes
    const dishesData = data.dishes

    this.setState({popularDish: popularDishData})
    this.setState({dishes: dishesData})
  }

  render() {
    const {popularDish} = this.state
    const {dishes} = this.state

    return (
      <div className="food-page">
        <h1 className="main-heading"> Select Dishes</h1>
        <div className="black-container">
          <div className="date-container">
            <p>
              <SlCalender /> 27 May 2023
            </p>
            <p>
              <AiOutlineClockCircle /> 10:30 to 12:30PM
            </p>
          </div>
        </div>

        <div className="buttons-container">
          <button type="button" className="orange-button">
            Italian
          </button>
          <button className="grey-button" type="button">
            Indian
          </button>
          <button className="grey-button" type="button">
            Chinese
          </button>
          <button className="grey-button" type="button">
            Italian
          </button>
        </div>

        <div>
          <h1 className="second-heading"> Popular Dishes</h1>
          <div className="dish-container">
            {popularDish.map(eachItem => (
              <PopularDishes items={eachItem} key={eachItem.id} />
            ))}
          </div>
        </div>

        <div className="recommend-section">
          <div className="recommend-header">
            <h1>
              Recommend <RiArrowDownSFill />
            </h1>
            <button className="menu-button" type="button">
              Menu
            </button>
          </div>
          <div className="">
            {dishes.map(eachItem => (
              <RecommendDish dishes={eachItem} key={eachItem.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ChefKart
