import React from 'react'
import {arrow} from '../assets/icons'
import { Link } from 'react-router-dom'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium text-center sm:text-sl'>{text}</p>
         <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='object-contain w-4 h-4'/>
        </Link>
    </div>
)

const HomeInfo = ({currentStage}) => {
  if(currentStage == 1) {
    return (
        <h1 className='px-8 py-8 mx-5 text-center text-white sm: text-sl sm:leading-snug neo-brutalism-blue'>
            Hi, I'm Jezrel Dave 👋
            <br />
            A Full-stack Web Developer
        </h1>
    )
  }

  if(currentStage == 2) {
    return (
        <InfoBox
            text="Experienced developer for both Android applications andwebsite framework design bringing in-depth knowledge onlatest trends to create clean and user-friendly website design. 
            Collaborated with others to define project expectations anddemands. 
            Developed user-interfaces, test, troubleshoot and fixedbugs and issues, refactored and optimized codes and provideclean and well-written codes. 
            Fully proficient on modern designframeworks such as Bootstrap and Vuetify."
            link="https://jezreldave.com/#experiences"
            btnText="Learn More"
        />
    )
  }

  if (currentStage == 3) {
    return (
        <InfoBox
            text="Developed multiple projects using a variety of programming languages and frameworks."
            link="https://jezreldave.com/#portfolio"
            btnText="View Portfolio"
        />
    )
  }

  if (currentStage == 4) {
    return (
        <InfoBox
            text="Don't hesitate to contact me if you have any questions or would like to work together. I am always looking for new opportunities and would love to hear from you."
            link="/contact"
            btnText="Let's Talk"
        />
    )
  }


}

export default HomeInfo