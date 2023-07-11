import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const skills = () => {
  return (
    <section id='skills'>
      <h5>What I Have</h5>
      <h2>My Skills </h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
         <h3>Frontend Development</h3>
         <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML5</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
           <div> 
            <h4>CSS3</h4>
            <small className='text-light'>Experienced</small></div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>ReactJs</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
         </div>
      </div>
      <div className='experience__design'>
      <h3>UI/UX Design</h3>
         <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>AdobeXd</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Photoshop</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>illustrator</h4>
            <small className='text-light'>Basics</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Figma</h4>
            <small className='text-light'>Basics</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Express</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
         </div>
         </div>
      </div>
    </section>
  )
}

export default skills