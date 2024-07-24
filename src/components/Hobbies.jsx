import React from 'react';
import hobbiesContent from '../content/hobbies.json';

const Hobbies = () => {
  const { introduction, paragraphs } = hobbiesContent;

  return (
    <div id="about" className="p-8 bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">More About Me!</h2>
      <p className="mb-6 text-lg text-gray-900 dark:text-gray-100 text-center">{introduction}</p>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-6 text-lg text-gray-900 dark:text-gray-100 text-left" dangerouslySetInnerHTML={{ __html: paragraph.text }} />
      ))}
    </div>
  );
}

export default Hobbies;
