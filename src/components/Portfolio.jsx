import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import CTA from "./CTA.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";

const ExperienceCard = ({ experience,background }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                color: "black",
                backgroundColor : background,
                borderStyle : "solid",
                borderBottom: "8px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg}}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain '
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-black text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-black-500/1 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <NavBar color={'black'}/>
            <div variants={textVariant()}>
               <p className={`${styles.sectionSubText} text-center`}>
                  What I have done so far
                </p>
               <h2 className={`${styles.sectionHeadText} text-center`}>
                 Work Experience.
               </h2>
            </div>
            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                            background = {experience.iconBg}
                        />
                    ))}
                </VerticalTimeline>
            </div>
            <Projects/>
            <hr className='border-slate-200' />
            <CTA/>
            <Footer/>
        </>
    );
};

export default SectionWrapper(Experience, "work");