import React from 'react';
import '../animations/textGradient.css'

const TextGradient = ({ text, from = 'from-pink-500', via = 'via-green-700', to = 'to-blue-700' }) => {
 return (
    <span
      className={`text-2xl font-bold bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient text-6xl`}
    >
      {text}
    </span>
 );
};

export default TextGradient;
