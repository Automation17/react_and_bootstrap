import placeholder from './assets/placeholder.svg';
import './Card.css'

export default function Card({name="Guest", age="18", isInrolled}) {
  return (
    <div className="cards">
        <img src={placeholder} alt="" />
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Enrolled: {isInrolled ? "Yes" : "No"}</p>
    </div>
  )
}
