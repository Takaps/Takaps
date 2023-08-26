// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiLinkedinLine,
  RiTwitterLine,

} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link target="_blank" href={'https://youtube.com/@jelobryllesoliman8496'} className='hover:text-accent transition-all duration-300'>
          <RiYoutubeLine />
      </Link>
      <Link target="_blank" href={'https://www.instagram.com/jelong08/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link target="_blank" href={'https://www.facebook.com/takaprot'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link target="_blank" href={'https://www.linkedin.com/in/jelo-brylle-soliman-87702515b/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link target="_blank" href={''} className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
      </Link>
    </div>
    );
};

export default Socials;
