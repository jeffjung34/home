import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import about from '../content/about';
import profileImage from '../assets/profile.jpg'; 

const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const fadeInDelayed = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1250 });
  const fadeInPhoto = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 2000 });

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-screen p-6 md:p-12">
      <div className="flex flex-col items-start justify-center space-y-4 md:w-1/2">
        <animated.div style={fadeIn} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          {about.header}
        </animated.div>
        <animated.div style={fadeInDelayed} className="text-lg md:text-2xl text-gray-900 dark:text-gray-100">
          {about.description}
        </animated.div>
      </div>
      <animated.div style={fadeInPhoto} className="mt-8 md:mt-0 md:ml-8 md:w-1/2 flex justify-center">
        <img src={profileImage} alt="Jeff" className="w-full md:w-auto max-h-64 md:max-h-96 object-cover" />
      </animated.div>
    </div>
  );
}

export default Home;
