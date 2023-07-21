import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <div className='bg-lcolor'>
                <header className='container d-flex flex-wrap justify-content-center py-3 pb-4 border-bottom'>
                    <a
                        href='/'
                        className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'>
                        <span className='fs-4 text-white'>
                            My Portofolio
                        </span>
                    </a>

                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className={
                                    "nav-link " +
                                    (location.pathname.replace(/\//g, "") == ""
                                        ? "text-warning"
                                        : "text-white")
                                }>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/about'
                                className={
                                    "nav-link " +
                                    (location.pathname.replace(/\//g, "") ==
                                    "about"
                                        ? "text-warning"
                                        : "text-white")
                                }>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contact'
                                className={
                                    "nav-link " +
                                    (location.pathname.replace(/\//g, "") ==
                                    "contact"
                                        ? "text-warning"
                                        : "text-white")
                                }>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    );
};

export default Navbar;
