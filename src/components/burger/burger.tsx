import './burger.css'
interface Props {
  burger: string[]
}

const Burger = ({burger}: Props) => {
  return (
    <div className="Burger">
    <div className="BreadTop">
      <div className="Seeds1"></div>
      <div className="Seeds2"></div>
    </div>
    {burger.map((item: string) => {
            return <div key={crypto.randomUUID()} className={item}></div>
          })}
    <div className="BreadBottom"></div>
  </div>
  )
}

export default Burger