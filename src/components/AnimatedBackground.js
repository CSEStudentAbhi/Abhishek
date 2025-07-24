import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const codeSnippets = [
    'const hello = "world";',
    'function greet() {',
    'return "Hello";',
    'console.log("Hi");',
    'import React from "react";',
    'export default App;',
    'const [state, setState] = useState();',
    'useEffect(() => {}, []);',
    'const data = { name: "John" };',
    'async function fetchData() {',
  ];

  const binaryNumbers = ['0', '1'];
  
  const techSymbols = [
    '<>', '{}', '[]', '()', '//', '/*', '*/', '=>',
    '{}', '[]', '()', '<>', '=>', '->', '::', '++',
    '--', '==', '!=', '>=', '<=', '&&', '||', '??',
    '...', '${}', '``', '""', "''", '//', '/*', '*/',
    '<!--', '-->', '<?', '?>', '{{', '}}', '[[', ']]',
    '()', '[]', '{}', '<>', '=>', '->', '::', '++'
  ];

  const generateRandomPosition = () => ({
    x: Math.random() * 100,
    rotate: Math.random() * 360
  });

  if (!mounted) return null;

  return (
    <div 
      className="animated-background" 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'transparent'
      }}
    >
      {codeSnippets.map((snippet, index) => {
        const { x, rotate } = generateRandomPosition();
        return (
          <motion.div
            key={`snippet-${index}`}
            className="code-snippet"
            initial={{ 
              y: window.innerHeight + 100,
              opacity: 0,
              x: x,
              rotate: rotate
            }}
            animate={{
              y: -100,
              opacity: [0, 0.8, 0],
              x: [x, x + Math.random() * 50 - 25],
              rotate: [rotate, rotate + Math.random() * 180 - 90]
            }}
            transition={{
              duration: 8 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              left: `${x}%`,
              fontSize: `${0.8 + Math.random() * 0.4}rem`,
              color: 'rgba(144, 202, 249, 0.7)',
              fontFamily: 'monospace',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              userSelect: 'none',
              textShadow: '0 0 20px rgba(144, 202, 249, 0.7), 0 0 40px rgba(144, 202, 249, 0.5), 0 0 60px rgba(144, 202, 249, 0.3)'
            }}
          >
            {snippet}
          </motion.div>
        );
      })}

      {binaryNumbers.map((num, index) => {
        const { x, rotate } = generateRandomPosition();
        return (
          <motion.div
            key={`binary-${index}`}
            className="binary-number"
            initial={{ 
              y: window.innerHeight + 100,
              opacity: 0,
              x: x,
              rotate: rotate
            }}
            animate={{
              y: -100,
              opacity: [0, 0.9, 0],
              x: [x, x + Math.random() * 30 - 15],
              rotate: [rotate, rotate + Math.random() * 90 - 45]
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              left: `${x}%`,
              fontSize: `${0.6 + Math.random() * 0.3}rem`,
              color: 'rgba(76, 255, 80, 0.8)',
              fontFamily: 'monospace',
              pointerEvents: 'none',
              userSelect: 'none',
              textShadow: '0 0 25px rgba(76, 255, 80, 0.8), 0 0 50px rgba(76, 255, 80, 0.6), 0 0 75px rgba(76, 255, 80, 0.4)'
            }}
          >
            {num}
          </motion.div>
        );
      })}

      {techSymbols.map((symbol, index) => {
        const { x, rotate } = generateRandomPosition();
        return (
          <motion.div
            key={`symbol-${index}`}
            className="tech-symbol"
            initial={{ 
              y: window.innerHeight + 100,
              opacity: 0,
              x: x,
              rotate: rotate
            }}
            animate={{
              y: -100,
              opacity: [0, 0.8, 0],
              x: [x, x + Math.random() * 40 - 20],
              rotate: [rotate, rotate + Math.random() * 120 - 60]
            }}
            transition={{
              duration: 7 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              left: `${x}%`,
              fontSize: `${0.7 + Math.random() * 0.5}rem`,
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'monospace',
              pointerEvents: 'none',
              userSelect: 'none',
              textShadow: '0 0 25px rgba(255, 255, 255, 0.7), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 75px rgba(255, 255, 255, 0.3)'
            }}
          >
            {symbol}
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedBackground; 