import { Link } from "react-router-dom";
import "../styles/NavBar.css";
function NavBar() {
    return (
       
       <div>
        <h2>Escolha o Coração e clique.</h2>
       <nav>
            <ul>
                <li>
                    <Link to="/">
                        <h3>🏠</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/page1">
                        <h3>❤</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/page2">
                        <h3>💘</h3>
                    </Link>
                </li>
        
            </ul>
        </nav>
        </div>
    )
}

export default NavBar;