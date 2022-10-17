import Product from './Product'
export default function Main({product}) {
    return (
    <div className="block col-2">
        <h2>Products</h2>
        <div className="row">
            {product.map((product) => (
                <Product key = {product.id} product={product} />
            )) }
        </div>
    </div>
    );
}