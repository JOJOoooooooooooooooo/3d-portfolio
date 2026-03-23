import React from 'react'
import { skills, experiences } from '../constants'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

import CTA from '../components/CTA'
import Footer from '../components/Footer'

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hi, I'm <span className="blue-gradient_text font-semibold
      drop-shadow">Jonathan</span>

      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          At the intersection of logic and imagination is where I do my best work. My journey as an engineer is fueled by a deep passion for Storytelling. I am a multi-disciplinary engineer driven by the challenge of turning complex logic into seamless user experiences. 
          My expertise spans the entire digital ecosystem—from training Machine Learning models and architecting Robust Backends to crafting immersive Game Engines and high-performance Web Applications.
          I don't just write code; I build worlds. With a background that bridges rigorous educational research, high-stakes professional environments, and ambitious personal ventures, 
          I bring a 'think-outside-the-box' mentality to every sprint. I am a relentless worker committed to technical excellence and the pursuit of what's next in the world of software.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center
              items-center">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
         <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I’ve built my career on versatility and technical agility. 
            From managing complex logic to harmonizing with design teams, 
            I specialize in the full lifecycle of project development. 
            I am a firm believer that the best software is born from the intersection of collaborative energy and outside-the-box engineering. 
            Here are my key contributions:
            </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div className="flex justify-center items-center 
              w-full h-full">
                <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
                />
              </div>}
              iconStyle={{background: experience.iconBg}}
              contentStyle={{
                borderBottom: "9px",
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',

              }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins
                  font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base"
                  style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1
                      text-sm">
                        {point}
                      </li>
                ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200"/>
      <CTA/>
      <Footer/>
    </section>
  )
}

export default About