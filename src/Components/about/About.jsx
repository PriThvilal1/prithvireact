import React from 'react'
import './about.css'
import ME from '../../assets/about-image.JPG'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.7 Years Working</small>

            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>

            </article>
          </div>
          <p>
          Let me introduce myself in 7 words. Responsible, creative, open-minded, friendly and ambitious Front-end developer cum UI designer. This is how I see myself, and hope you will give me a chance to prove my words in the job, or at least in the interview.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        

        </div>
      </div>
    </section>
  )
}

export default about