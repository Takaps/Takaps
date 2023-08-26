// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.min.css';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxDrawingPin,
} from 'react-icons/rx';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaBuilding,
  FaMap,
  FaInternetExplorer,
  FaPaintBrush,
  FaDesktop,
  FaPencilRuler,
  FaPencilAlt,
  FaCrop,
  FaCropAlt,
  FaHouseUser,
  FaHouseDamage,
  FaWarehouse,
  FaLaptopHouse,
  FaRegBuilding,
  FaHome,
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
  SiWebassembly,
  SiWeb3Dotjs,
  SiInternetarchive,
  SiTreehouse,
  SiHomebridge,
  SiGeneralmotors,
} from 'react-icons/si';

// import required modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
import { delay } from 'framer-motion';

// service data
export const serviceData = [
  {
    icon: <FaCropAlt/>,
    title: 'Branding',
    description: 'Enhance branding design with charming designs, leaving a long-lasting mark in even the most competitive markets.',
  },
  {
    icon: <FaPencilAlt/>,
    title: 'Graphic Design',
    description: 'Transforming ideas into visible masterpieces via professional graphic layout, leaving a long-lasting impact on audiences.',
  },
  {
    icon: <FaDesktop/>,
    title: 'Web Development',
    description: 'Crafting seamless websites with modern generation for top-rated user experiences and impactful on-line presence.',
  },
  {
    icon: <FaPaintBrush/>,
    title: 'UI/UX Design',
    description: 'Creating seamless and intuitive experiences through thoughtful UI/UX design, driving user engagement and satisfaction.'
  },
  {
    icon: <FaMap/>,
    title: 'Plan Drafting',
    description: 'Bringing your visions to life through meticulous plan drafting, turning creative ideas into precise and tangible reality.'
  },
  {
    icon: <FaBuilding/>,
    title: 'Building Design',
    description: 'Designing spaces that harmonize functionality and aesthetics, crafting exceptional buildings that stand the test of time.'
  },
  {
    icon: <FaHome/>,
    title: 'Engineering Services',
    description: 'Comprehensive engineering solutions tailored to your needs, ensuring innovation, precision, and excellence in every project.'
  }
];

const ServiceSlider = () => {

  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 12,
          autoplay: {
            delay: 1
          },
         
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 12,
          autoplay: {
            delay: 1
          },
        },

      }}
      
      pagination={{
        clickable: true,
      }}
      modules={{Pagination}}
      className='h-[240px] sm:h-[360px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-3xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
