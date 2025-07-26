import React, { useState } from 'react';

// Images
import m1 from '../assets/deepak.jpg';
import m2 from '../assets/ashish.jpg';
import m3 from '../assets/ashish.jpg';
// ...import m4–m10

import c1 from '../assets/mukesh.jpg';
import c2 from '../assets/deepak.jpg';
// ...import c3–c10

import a1 from '../assets/ashish.jpg';
import a2 from '../assets/mukesh.jpg';
// ...import a3–a10

import r1 from '../assets/deepak.jpg';
import r2 from '../assets/mukesh.jpg';
// ...import r3–r10

// Grouped images
const mallImages = [m1, m2, m3]; // Add up to 10
const corporateImages = [c1, c2];
const advertisingImages = [a1, a2];
const roadImages = [r1, r2];

const images = {
  all: [...mallImages, ...corporateImages, ...advertisingImages, ...roadImages],
  mall: mallImages,
  corporate: corporateImages,
  advertising: advertisingImages,
  road: roadImages,
};

const categories = ['all', 'mall', 'corporate', 'advertising', 'road'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryImages = images[activeCategory].filter(Boolean);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const showNext = () => setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <div >
      <h1 className="mmedium font-semibold uppercase mb-4">
        <span className="text-green-600">Dam Craft Events</span> Gallery
      </h1>

      <nav className="flex flex-wrap gap-6 mb-6 uppercase font-medium">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setLightboxIndex(null);
            }}
            className={`cursor-pointer uppercase transition-colors duration-300 ${
              activeCategory === category ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`event-${index}`}
            className="w-full h-[280px] object-cover rounded-xl shadow-md cursor-pointer"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 cursor-pointer right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={showPrev}
            className="absolute left-4 cursor-pointer text-white text-4xl font-bold"
          >
            &#8592;
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightboxIndex]}
            alt={`event-${lightboxIndex}`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />

          {/* Next */}
          <button
            onClick={showNext}
            className="absolute right-4 cursor-pointer text-white text-4xl font-bold"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
