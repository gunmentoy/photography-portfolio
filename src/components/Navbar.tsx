import { BsFillBookmarkFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-content">

                    <div className="nav-links">
                        <ul>
                            <li>
                                <Link to={"/automotive"}>
                                    <p>automotive</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/editorial"}>
                                    <p>editorial</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/street"}>
                                    <p>street</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="bookings-btn">
                        <Link to={"/bookings"}>
                            <p>
                                <div><BsFillBookmarkFill /></div>
                                bookings
                            </p>
                        </Link>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar