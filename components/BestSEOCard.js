// BestSEOCard.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BestSEOCard = () => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(cardRef.current, { opacity: 0, y: 30, duration: 1 })
      .from(imageRef.current, { opacity: 0, x: -30, duration: 1, delay: 0.3 });

  }, []);

  return (
    <div
      ref={cardRef}
      className="text-white p-6"
    >
      <div className="relative mb-4 rounded-lg shadow-md shadow-white-500/50 hover:shadow-xl transition duration-300 transform hover:scale-105">
        <img
          ref={imageRef}
          src="https://image.amaxagency.com/images/seo-with-amax.webp"
          alt="SEO Services"
          className="w-full rounded-md"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2 text-white-500"> SEO </h2>
        <p className="text-sm text-white-500">
        Find new clients organically and grow a foundation.
        </p>
      </div>
    </div>
  );
};

export default BestSEOCard;
