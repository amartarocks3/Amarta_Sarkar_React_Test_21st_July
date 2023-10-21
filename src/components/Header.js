import { Link } from "react-router-dom";
let Header = () => {
    return (
        <div className="navigation">
            <Link to={'/'}>Shopping cart</Link>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>Cart Page</Link>
        </div>
    )
}
export default Header;