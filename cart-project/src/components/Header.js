export default function Header(props) {
    return (
        <header>
        <div>
        <a href ="#">
        <h1>Shopping Cart</h1>
        </a>
        </div>
        <div className="links">
        <a classname="gotocart"  href ="#/cart">Cart</a>
        <a classname="signin"  href ="#/signin">SignIn</a>
        </div>
        </header>
    );
}