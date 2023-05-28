import './index.css'

const PopularDishes = props => {
  const {items} = props
  const {name, image} = items

  return (
    <div
      className="circular-image"
      style={{
        backgroundImage: `url(${image})`,
        height: '200px',
        width: '200px',
        borderRadius: '100%',
        backgroundSize: 'cover',
        textAlign: 'center',
        paddingTop: '80px',
        marginLeft: '20px',
      }}
    >
      <p className="dish-name"> {name}</p>
    </div>
  )
}

export default PopularDishes
