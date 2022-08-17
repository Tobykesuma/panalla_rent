import React from 'react'
import './Contact.css';
import image from '../../constant/image';

const Contact = () => {
  return (
    <section className='app__contact section__pading' id='contact'>
        <div className='app__outline'>
            <img src={image.ContactOutline} className='app__outline__image' alt='' />
        </div>

        <h2 className='app__contact__title'>Get in touch</h2>
        <span className='app__contact__subtitle mb__2'>Contact US</span>

        <div className='app__contact__container container grid'>
            <div className='app__contat__content'>
                <h3 className='app__contact__title2'>Talk to us</h3>

                <div className='app__contact__info'>
                    <div className='app__contact__card'>
                        <i className='bx bx-mail-send contact__card__icons'></i>
                            
                        <h3 className='app__contact__card__title'>
                            Email
                        </h3>
                        <span className='app__contact__card__data'>
                            panallascooterbali@gmail.com
                        </span>

                        <a href='mailto:panallascooterbali@gmail.com' className='app__contact__button'>Send a Message{" "}
                        <i className='bx bx-right-arrow-alt 
                        app__contact__button__icons'></i></a>
                    </div>

                    <div className='app__contact__card'>
                        <i className='bx bxl-whatsapp contact__card__icons'></i>
                            
                        <h3 className='app__contact__card__title'>
                            Whatsapp
                        </h3>
                        <span className='app__contact__card__data'>
                            +62 878-6212-1513
                        </span>

                        <a href='https://api.whatsapp.com/send?phone=6287862127513&text=Hello, more information' target='__blank' className='app__contact__button'>Send a Message{" "}
                        <i className='bx bx-right-arrow-alt 
                        app__contact__button__icons'></i></a>
                    </div>

                    {/* <div className='app__contact__content'>
                        <form className='app__contact__form'>
                            <div className='app__contact__form__div'>
                                <label className='app__contact__form__tag'>Name</label>
                                <input type='text' name='name' className='app__contact__form__input' placeholder='Insert Your Name' />
                            </div>

                            <div className='app__contact__form__div'>
                                <label className='app__contact__form__tag'>Email</label>
                                <input type='email' name='email' className='app__contact__form__input' placeholder='Insert Your Email' />
                            </div>

                            <div className='app__contact__form__div'>
                                <label className='app__contact__form__tag'>Message</label>
                                <textarea type='message' cols='30' rows='19' className='app__contact__form__input' placeholder='Inset Your A Message' />
                            </div>

                            <button className='button button__flex'>
                                Send Message
                            <i className='bx bx-send' />
                            </button>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>

    </section>
  )
}

export default Contact