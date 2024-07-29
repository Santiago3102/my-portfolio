import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from '../ui/MagicButton';
import { Spotlight } from '../ui/Spotlight';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';

const Hero = () => {
  return (
    <div className='pb-20 pt-36 relative'>
        
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='black'/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='darkgreen'/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='forestgreen' />
        </div>

   
        <div className="h-screen w-full dark:bg-black bg-emerald-900 dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-emerald-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

     
        <div className="flex justify-center relative my-20 z-10">
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-emerald-100 max-w-80'>
                    My Portfolio: FullStack Developer
                </h2>

                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl text-green-200'
                    words='Building Innovative Solutions with a Passion for Code'
                />

                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-emerald-300'>
                    Hi, I&apos;m Santiago, a Junior FullStack Developer
                </p>

                <a href="#projects">
                    <MagicButton 
                        title='Explore My Work'
                        icon={<FaLocationArrow />}
                        position='right'
                        className='bg-green-700 hover:bg-green-800 text-white'
                    />
                </a>
            </div>
        </div>
    </div>
  );
};

export default Hero;
