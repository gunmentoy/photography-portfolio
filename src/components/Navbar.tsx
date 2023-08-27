import { BsFillBookmarkFill } from "react-icons/bs"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-content">

                    <div className="nav-links">
                            <ul>
                                <li>
                                    <p>automotive</p>
                                </li>
                                <li>
                                    <p>editorial</p>
                                </li>
                                <li>
                                    <p>street</p>
                                </li>
                            </ul>
                    </div>

                    <div className="bookings-btn">
                        <p>
                            <div><BsFillBookmarkFill /></div>
                            bookings
                        </p>
                    </div>

               </div>
            </nav>
        </>
    )
}

export default Navbar