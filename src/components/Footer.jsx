import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    const resetScroll = () => {
        window.scrollTo(0, 0);
      };
    
      // Menambahkan event listener saat komponen di-mount
      useEffect(() => {
        const links = document.querySelectorAll('a');
    
        links.forEach(link => {
          link.addEventListener('click', resetScroll);
        });
    
        // Membersihkan event listener saat komponen di-unmount
        return () => {
          links.forEach(link => {
            link.removeEventListener('click', resetScroll);
          });
        };
      }, []);
    
    return (
        <>
            <footer className='container d-flex flex-wrap justify-content-between align-items-center py-3 border-top'>
                <p className='col-md-4 mb-0 text-muted text-dark'>
                    &copy; 2023
                    <a
                        href='#'
                        target='_blank'
                        className='text-dark text-decoration-none ms-2'
                        rel='noopener noreferrer'>
                        xaxaxa
                    </a>
                </p>

                <Link
                    to='/'
                    className='col-md-4 d-flex align-items-center justify-content-center d-none d-lg-flex mb-md-0 me-md-auto link-dark text-decoration-none'>
                    <i className='fa-solid fa-heart text-danger'></i>
                </Link>

                <ul className='nav col-md-4 justify-content-end'>
                    <li className='nav-item'>
                        <Link
                            to='/'
                            className='nav-link ps-0 pe-2 text-muted text-dark'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/about'
                            className='nav-link ps-0 pe-2 text-muted text-dark'>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contact'
                            className='nav-link ps-0 pe-2 text-muted text-dark'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    );
};

export default Footer;
