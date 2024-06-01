import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Showcase = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing with email:', email);
    setEmail('');
  };

  return (
    <div className="showcase lg:min-h-screen h-[20rem] flex flex-col items-center justify-center px-6 ">
      <div className="text-white text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-5 h-32 md:h-auto">
          <span className="text-red-500 font-bold">
            <Typewriter
              words={['Feast on flavors that tantalize', 'Savor the essence of culinary delight', 'Experience gastronomic bliss']}
              loop={100}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </span>
        </h1>
        <p className="text-lg lg:text-xl">Order now and indulge in a world of taste!</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-white mb-2">Subscribe to Our Newsletter</h2>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-l-md py-2 px-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-r-md ml-2 cursor-pointer"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
