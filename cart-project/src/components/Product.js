import Column from './Column' 
export default function Product ({product}) {
    return (
        <div className = "card">
            <img className="small" src= {product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>€{product.price}</div>
            <div>
                <Column />
            </div>
        </div>
    );
}