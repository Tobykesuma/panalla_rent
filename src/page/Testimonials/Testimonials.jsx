import React from 'react';
import './Testimonials.css';
import image from '../../constant/image';

const Testimonials = () => {
  return (
    <section className='app__testimoni section__pading' id='testimonials'>
        <span className='app__testimoni__span'>Review from clients</span>
        <h2 className='app__testimoni__title'>Testimonials</h2>

        <div className='app__testimoni__container container'>

            <article className='app__article__testimoni'>
                <div className='app__testimoni__client__avatar'>
                    <img src={image.Ava_01} alt='avatar__client' />
                </div>
                <h5 className='app__client__name'>Tobi Kesuma</h5>
                    <small className='app__client__review'>
                        text review here
                    </small>
            </article>

            <article className='app__article__testimoni'>
                <div className='app__testimoni__client__avatar'>
                    <img src={image.Ava_02} alt='avatar__client' />
                </div>
                <h5 className='app__client__name'>Tobi Kesuma</h5>
                    <small className='app__client__review'>
                        text review here
                    </small>
            </article>

            <article className='app__article__testimoni'>
                <div className='app__testimoni__client__avatar'>
                    <img src={image.Ava_03} alt='avatar__client' />
                </div>
                <h5 className='app__client__name'>Tobi Kesuma</h5>
                    <small className='app__client__review'>
                        text review here
                    </small>
            </article>

            <article className='app__article__testimoni'>
                <div className='app__testimoni__client__avatar'>
                    <img src={image.Ava_04} alt='avatar__client' />
                </div>
                <h5 className='app__client__name'>Tobi Kesuma</h5>
                    <small className='app__client__review'>
                        text review here
                    </small>
            </article>




        </div>

    </section>
  )
}

export default Testimonials