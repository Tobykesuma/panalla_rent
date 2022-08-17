import React from 'react';
import './Navbar.css';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import image from '../../constant/image';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false); 
    // const [navbar ,setNavbar] = React.useState(false);
    // const changeBackground = () => {
    //     if (window.scrollY >= 80) {
    //         setNavbar(true);
    //     } else {
    //         setNavbar(false);
    //     }
    // };
    
    // window.addEventListener('scroll', changeBackground);


    // const showButtom = () => {
    //     if (window.innerWidth <= 960) {
    //         setButtom(false);
    //     } else {
    //         setButtom(true);
    //     }
    // };

    // useEffect(() => {
    //     showButtom();
    // }, []);
    // window.addEventListener('resize', showButtom);
        
        return (
            <nav className='app__navbar'>
                <div className='app__navbar__logo'>
                    <a href='/'><img src={image.logo} alt='' /></a>
                </div>
                <ul className='app__navbar__links'>
                    <li className='text__navbar'><a href='/'>Home</a></li>
                    <li className='text__navbar'><a href='#about'>About</a></li>
                    <li className='text__navbar'><a href='#services'>Services</a></li>
                    <li className='text__navbar'><a href='#testimonials'>Testimonials</a></li>
                    <li className='text__navbar'><a href='#galerry'>Galerry</a></li>
                    <li className='text__navbar'><a href='#contact'>Contact</a></li>

                </ul>
                {/* Login Fitur */}
                {/* <div className='app__navbar__login'>
                    <a href='/login' className='text__navbar'>Login</a>
                </div> */}

                <div className='app__navbar__smallscreen'>
                    <FaBars color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
                    {toggleMenu && (
                        <div className='app__navbar__smallscreen__overlay flex-center slide__bottom'>
                            <AiOutlineClose color='#fff' fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                            <ul className='app__navbar__smallscreen__links'>
                                <li className='app__text__mobile'><a href='/' onClick={() => setToggleMenu(false)}>Home</a></li>
                                <li className='app__text__mobile'><a href='#about' onClick={() => setToggleMenu(false)}>About</a></li>
                                <li className='app__text__mobile'><a href='#services' onClick={() => setToggleMenu(false)}>Services</a></li>
                                <li className='app__text__mobile'><a href='#testimonials' onClick={() => setToggleMenu(false)}>Testimonials</a></li>
                                <li className='app__text__mobile'><a href='#galerry' onClick={() => setToggleMenu(false)}>Galerry</a></li>
                                <li className='app__text__mobile'><a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
  )
}

export default Navbar;