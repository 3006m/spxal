import NavBar from './nav.jsx';
import { Link } from "react-router-dom";

import "../styles/Header.css"
function Header2() {
    return (
        <>
        <header>
        <img src=""></img>
        <Link to="/">
                        <h3>🏠</h3>
                    </Link>
        </header>
        </>
    )
}
export default Header2;