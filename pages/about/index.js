import React, {useState} from 'react';



// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from 'react-icons/fa';

import{
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiAutodesk,
  SiSketchup,
  SiMicrosoftexcel,
  SiOracle,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiFigma,
  SiAdobelightroom,
  SiCanva,
  SiPython,
} from 'react-icons/si';

//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiPython />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma />, 
          <SiAdobexd />, 
          <SiAdobephotoshop />,
          <SiAdobeillustrator />
        ],
      },
      {
        title: 'Engineering Design',
        icons: 
        [
          <SiAutodesk />,
          <SiSketchup />,
          <SiMicrosoftexcel />,
          <SiOracle />,
        ], 
      },
      {
        title: 'Graphic Design',
        icons: 
        [
          <SiAdobepremierepro />,
          <SiFigma />,
          <SiAdobeillustrator />,
          <SiAdobephotoshop />,
          <SiAdobelightroom />,
          <SiCanva />,
        ], 
      },
    ],
  },
  {
    title: 'Certificates',
    info: [
      {
        title: 'AMO Certificate',
        stage: '2018',
      },
      {
        title: 'Construction Occupational Safety & Health Certificate',
        stage: '2016',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer • Freelance',
        stage: 'JUN 2022 - PRESENT',
      },
      {
        title: 'Owner/Contractor • Sol-Bros Construction Services',
        stage: 'MAY 2022 - PRESENT',
      },
      {
        title: 'Technical Support • Concentrix',
        stage: 'OCT 2022 - JUL 2023',
      },
      {
        title: 'CAD Drafter/Site Engineer • Fratello Construction',
        stage: 'OCT 2021 - APR 2022',
      },
      {
        title: 'Freelance CAD Drafter/Estimator • PCG Auxiliary',
        stage: 'AUG 2021 - OCT 2021',
      },
      {
        title: 'Project Engineer • Aresdy Construction Services',
        stage: 'OCT 2019 - AUG 2021',
      },
      {
        title: 'CAD Drafter/Project Engineer • DLBRO Corporation',
        stage: 'JAN 2017 - AUG 2018',
      },
      {
        title: 'Customer Support • Sutherland Global Services',
        stage: 'OCT 2016 - JAN 2017',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'UI/UX • Google Online Course',
        stage: '2019',
      },
      {
        title: 'Programming • Harvard Online Course',
        stage: '2022',
      },
      {
        title: 'BS Civil Engineer • University of the Cordilleras',
        stage: '2016',
      },
    ],
  },
  {
    title: 'Interests',
    info: [
      {
        title: 'Art',
        stage: 'Painting • Digital Art • Photography',
      },
      {
        title: 'Music',
        stage: 'Guitar • Piano • Bass Guitar • Organ • Drums',
      },
      {
        title: 'Sports',
        stage: 'Basketball • Badminton • Chess • Jogging',
      },
      {
        title: 'Games',
        stage: 'Dota 2 • Valorant • Ragnarok • Wild Rift',
      },
    ],
  },
];

// components
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

// counter
import CountUp from 'react-countup';

// import required modules
SwiperCore.use([Navigation, Pagination, Scrollbar, FreeMode]);

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Pagination, Scrollbar } from 'swiper';



// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
  const [index, setIndex] = useState(0);
  console [index, setIndex] = useState(0);

  
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Whatever good things <span className='text-accent'>we</span> build will end up building <span className='text-accent'>us</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Experienced professional in engineering, support, design and programming. Skilled in complex problem-solving, effective communication, creative visuals. Passionate about sustainability. Strong work ethic, adaptability, collaborative.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 scroll-m-3'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={7} duration={6} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px leading-[1.4] max-w-[90px]'>
                  Satisfied Clients
                </div>
              </div>
              {/* engineering projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={34} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px leading-[1.4] max-w-[100px]'>
                  Engineering Projects
                </div>
              </div>
              {/* programming projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px leading-[1.4] max-w-[100px]'>
                  Programming Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex)=> {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={()=> setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
     
            <Swiper 
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 12,
                  direction: 'vertical',
                },

                640: {
                  slidesPerView: 6,
                  spaceBetween: 12,
                  direction: 'vertical',
                },

              }}
              freeMode={true}
              scrollbar={{
                clickable: true,
              }}
              modules={{FreeMode, Scrollbar}}
              className='h-[240px] sm:h-[590px] xl:w-[600px]'
            >  
              <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                {aboutData[index].info.map((item, itemIndex)=> {
                  return (
                    <SwiperSlide  
                      key={item} 
                      className='flex-0 flex-col md:flex-row w-max gap-x-2 items-center text-white/60 hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 scroll-smooth' style={{scrollBehavior:'smooth'}}>
                    
                      {/* title */}
                      <div className='mb-2 md:mb-0 bottom-5 text-white'>{item.title}</div>             
                      <div className='font-light xl:gap-y-5'>{item.stage}</div>
                      <div className='flex gap-x-4'>
                        
                        {/* icons */}
                        {item.icons?.map((icon, item)=> {
                          return <div className='text-2xl text-white'>{icon}</div>;
                        })}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
        
        </motion.div>
      </div>
    </div>
  );
};

export default About;
