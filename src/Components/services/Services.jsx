import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container servives__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Planning and implementing new designs for a UI</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Should understand data interpretation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Preparing report based on targets and competition</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Coordinating with the team of product, designs, sales, and marketing</p>
            </li>
          </ul>
        </article>
        {/* End of web development */}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Designs and implements graphic user interfaces elements like tabs, menus, and widgets</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Gets user’s feedback and conducts layout adjustments</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Prepare rough drafts and present them to teams</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Build UI mockups to present the function of the website</p>
            </li>
          </ul>
        </article>
        {/* end of UI/UX design*/}
        <article className='service'>
          <div className="service__head">
            <h3>Redesigning UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Proper research to understand the client’s need</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Developing static designs of a website for development and designing purposes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Should understand data interpretation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>Should create,maintain and redesigning digital assets like wireframes and interface design files</p>
            </li>
          </ul>
        </article>
        {/* end of redesigning UI/UX*/}
      </div>
    </section>
  )
}

export default Services