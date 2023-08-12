import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    useEffect(() => {
        // Inisialisasi Typed.js pada elemen dengan ID "typed-text"
        var typed = new Typed('#typed-text', {
          strings: ["Hi! I’m yusuf as a UI design And Junior Developer Website."],
          typeSpeed: 40,
          loop: false,
          cursorChar: '',
        });
    
        // Membersihkan instance Typed.js saat komponen di-unmount
        return () => {
          typed.destroy();
        };
      }, []);
    return (
        <>
            <section className='hero-area bg-lcolor'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-11 mx-auto'>
                            <h1 id="typed-text" className='text-white display-5 fw-medium'></h1>
                        </div>
                    </div>
                </div>
                <div className='layer' id='l2'>
                    <img
                        src='/images/illustrations/dots-cyan.png'
                        alt='bg-shape'
                    />
                </div>
                <div className='layer' id='l3'>
                    <img
                        src='/images/illustrations/leaf-orange.png'
                        alt='bg-shape'
                    />
                </div>
                <div className='layer' id='l4'>
                    <img
                        src='/images/illustrations/dots-orange.png'
                        alt='bg-shape'
                    />
                </div>

                <div className='layer' id='l6'>
                    <img
                        src='/images/illustrations/leaf-cyan.png'
                        alt='bg-shape'
                    />
                </div>
                <div className='layer' id='l7'>
                    <img
                        src='/images/illustrations/dots-group-orange.png'
                        alt='bg-shape'
                    />
                </div>
                <div className='layer' id='l8'>
                    <img
                        src='/images/illustrations/leaf-pink-round.png'
                        alt='bg-shape'
                    />
                </div>
                <div className='layer' id='l9'>
                    <img
                        src='/images/illustrations/leaf-cyan-2.png'
                        alt='bg-shape'
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
