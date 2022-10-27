import Product from './Product'
export default function Main({product, onAdd, onRemove, cartItems}) {
    return (
    <div className="block col-2">
        <h2>Products</h2>
        <div className="row">
            {product.map((product) => (
                <Product key = {product.id} product={product} item ={cartItems.find((x)=> x.id === product.id)} onAdd={onAdd} onRemove={onRemove} />
            )) }
        </div>
    </div>
    );
}