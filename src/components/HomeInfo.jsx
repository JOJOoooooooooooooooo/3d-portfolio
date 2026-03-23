import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
    <div className ="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"/>
    </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-green py-4 px-8 text-white mx-5"> Hey! Im <span className="font-semibold"> Jonathan</span>
        <br/>
        A <span className="font-semibold"> Full-Stack </span>Software Engineer based in Canada
        </h1>
    ),
   2: (
        <InfoBox 
            text={(
                <>
                    Fusing high-performance systems with scalable software architecture.

            From academic foundations to professional reality, I build scalable and immersive digital worlds.
                </>
            )}
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (

        <InfoBox 
            text={(
                <>
                   From architecting custom game engines to developing machine learning algorithms, 
                   I’ve led diverse projects that push the limits of performance. Curious about the impact?
                </>
            )}
            link="/projects"
            btnText="Visit My Portfolio"
        />
    ),
    4: (
        <InfoBox 
            text={(
                <>
                  From systems-level engineering to full-stack execution, 
                  I build the architecture that brings complex visions to life. 
                  Let’s discuss how I can drive technical excellence on your next project.
                </>
            )}
            link="/contact"
            btnText="Let's Talk"
        />
    ),
}


const HomeInfo = ({currentStage }) => {
  return renderContent[currentStage] || null;
    
  
}

export default HomeInfo