import React from 'react';
import './Services.css';
import image from '../../constant/image';


const Services = () => {
  return (
    <section className='app__services section__padding' id='services'>
        <div className='app__outline'>
            <img src={image.ServicesOutline} className='app__outline__image' alt='' />
        </div>
        <h2 className='app__services__title'>Services</h2>
        <span className='app__services__subtitle'>What we offer</span>

        <div className='app__services__container container grid'>
            <div className='app__services__content'>
                <div>
                    {/* <i className='' */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services