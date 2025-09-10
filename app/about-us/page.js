// Swastik Shetty
// This is the About Us page. It tells the story of the company.
// I've updated this page to more closely match the professional design from the screenshot.
'use client'; // This directive marks the component as a Client Component.

import React from 'react';
import YouTube from 'react-youtube';

export default function AboutUs() {
  // Options for the YouTube player
  const opts = {
    height: '400',
    width: '400',
    playerVars: {
      autoplay: 0,
    },
  };

  // Handler for when the player is ready
  const onReady = (event) => {
    // You can add logic here if needed
  };

  return (
    <div className="bg-white">
      {/* Vision/Mission Statement Section */}
      <section className="py-20 text-center bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-green-600 font-bold mb-2 tracking-widest">OUR VISION</p>
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto text-gray-800 leading-tight">We're making homeownership simpler, faster - and most importantly, more accessible.</h1>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">The peace of mind of a better mortgage</h2>
                <p className="text-gray-600 text-lg leading-relaxed">We’re a new kind of mortgage company. We believe in taking the stress out of the mortgage process. We believe in transparency, not complexity. We believe in putting the power back into the hands of the consumer. We’re here to make your home financing experience a better one.</p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
                {/* Replaced the static image with a YouTube video. */}
                <div className="rounded-lg shadow-2xl overflow-hidden">
                   <YouTube videoId="1KjYlLBM9j4" opts={opts} onReady={onReady} />
                </div>
            </div>
        </div>
      </section>
      
      {/* "How we're changing things" banner */}
      <section className="bg-emerald-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">How we're changing things</h2>
              <p className="text-lg max-w-3xl mx-auto">Since 2016, we've been on a mission to make the mortgage process what it should be: simple, transparent, and people-first.</p>
          </div>
      </section>

      {/* Backed By Section */}
      <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-gray-500 font-semibold tracking-widest mb-8">BACKED BY</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-400">
                <span className="text-2xl font-bold">Activant</span>
                <span className="text-2xl font-bold">Ally</span>
                <span className="text-2xl font-bold">Citi</span>
                <span className="text-2xl font-bold">American Express</span>
                <span className="text-2xl font-bold">Goldman Sachs</span>
            </div>
          </div>
      </section>

      {/* Company Journey/Timeline Section - Rebuilt for accuracy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Company Timeline</h2>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2 absolute border-opacity-20 border-green-700 h-full border" style={{left: '50%'}}></div>
            
            {/* Timeline Item */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-green-700 shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-gray-800 text-lg">2014</h3>
                <p className="text-sm text-gray-600">Better is founded to fix the broken mortgage industry.</p>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-green-700 shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-gray-800 text-lg">2016</h3>
                <p className="text-sm text-gray-600">Better Mortgage launches, offering a seamless digital mortgage experience.</p>
              </div>
            </div>
            
             {/* Timeline Item */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-green-700 shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-gray-800 text-lg">2019</h3>
                <p className="text-sm text-gray-600">Named "Best Online Mortgage Lender" by NerdWallet.</p>
              </div>
            </div>

             {/* Timeline Item */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-green-700 shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-gray-800 text-lg">2021</h3>
                <p className="text-sm text-gray-600">We became the #1 digital mortgage lender in the US.</p>
              </div>
            </div>
             {/* Timeline Item */}
             <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-green-700 shadow-xl w-4 h-4 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-gray-800 text-lg">2022</h3>
                <p className="text-sm text-gray-600">Launched One Day Mortgage™, allowing customers to get approved in 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Products Section */}
      <section className="bg-emerald-50 py-20">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-12 text-gray-800">Explore our products</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="content-card bg-white p-5 rounded-2xl">
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Mortgage</h3>
                      <p className="text-gray-600">Get a great rate and a mortgage experience that’s fast, simple, and online.</p>
                      <a href="#" className="text-green-600 font-semibold hover:underline mt-4 inline-block">Learn more &rarr;</a>
                  </div>
                   <div className="content-card bg-white p-5 rounded-2xl">
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Real Estate</h3>
                      <p className="text-gray-600">Get a commission refund when you work with a Better Real Estate Partner Agent.</p>
                       <a href="#" className="text-green-600 font-semibold hover:underline mt-4 inline-block">Learn more &rarr;</a>
                  </div>
                   <div className="content-card bg-white p-5 rounded-2xl">
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Homeowners Insurance</h3>
                      <p className="text-gray-600">Shop and compare quotes from the nation’s top insurance providers.</p>
                       <a href="#" className="text-green-600 font-semibold hover:underline mt-4 inline-block">Learn more &rarr;</a>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}

