import './ingredient.css'

interface Props {
    img: string
    name: string
    amount: number
    price: number
    toppingClick: () => void
}

const IngredientItem = ({ img, name, amount, price, toppingClick }: Props) => {
    return (
        <>
            <div onClick={toppingClick} className="item">
                <img className="ingrImg" src={img} alt="img" />
                <span className="ingrName">{name}</span>
                <span className="ingrAmount">x{amount}</span>
                <div className="ingrPrice">{price} KGZ</div>
                <button className="btnRemove">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </>

    )
}

export default IngredientItem