export default function Header({countCartItems}) {
    return (
        <div className="row center block">
        <div>
        <a href ="#/">
        <h1>Shopping Cart</h1>
        </a>
        </div>
        <div>
        <a href ="#/cart">Cart
        {countCartItems ?  (
            <button className="badge" >{countCartItems}</button>
        ) : ( ""
        )}
        
        </a>  <a className="signin"  href ="#/signin">SignIn</a>
        </div>
        </div>
    );
}