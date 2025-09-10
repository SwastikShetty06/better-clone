// Swastik Shetty
// This is the Home page. It's the main landing page for the site.
// I've updated it to be more accurate to the provided design.
'use client'; // Required for components with client-side interactivity like the YouTube player.

import React from 'react';
import Link from 'next/link';
import YouTube from 'react-youtube';

export default function Home() {
  // YouTube video options for the feature section video.
  const videoOpts = {
    height: '560', 
    width: '315',  
    playerVars: {
      autoplay: 0,
    },
  };

  // Event handler for when the player is ready.
  const onReady = (event) => {
    // event.target.pauseVideo();
  }

  return (
    <div className="bg-white">
      {/* Hero Section: Matched to the new design with a darker background and illustration. */}
      <section className="bg-teal-900 text-white text-center py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">The first <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-400">AI-powered</span> Mortgage</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Our technology has streamlined the entire mortgage process to save you time and money. Over $100 billion funded.</p>
          <Link href="/start" className="text-white bg-green-700 hover:bg-green-600 font-bold rounded-full text-me px-5 py-2.5">
            See my rates
          </Link>
          {/* Simple illustration mimicking the app UI from the screenshot */}
          <div className="mt-16 max-w-2xl mx-auto bg-gray-800/20 p-4 rounded-xl backdrop-blur-sm">
             <div className="bg-white/90 p-6 rounded-lg">
                <div className="flex items-center justify-between">
                    <div className="w-24 h-8 bg-gray-200 rounded"></div>
                    <div className="w-8 h-8 bg-green-200 rounded-full"></div>
                </div>
                <div className="mt-4 h-12 bg-gray-200 rounded"></div>
                <div className="mt-2 h-12 bg-gray-200 rounded"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Section: Updated video player to look like a phone screen. */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full flex justify-center">
                 {/* Phone mockup for the video player */}
                <div className="bg-slate-800 p-4 rounded-[2.5rem] shadow-2xl">
                    <div className="bg-black rounded-[2rem] overflow-hidden">
                       <YouTube videoId="pKy7cNtaJ0c" opts={videoOpts} onReady={onReady} />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10 text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Find out why we're better.</h2>
                <p className="text-lg text-gray-600 mb-8">Watch our CEO and Founder, Vishal Garg, explain how we're making homeownership simpler, faster, and more accessible for all Americans.</p>
                <Link href="/about-us" className="btn-secondary">
                    See what's new
                </Link>
            </div>
        </div>
      </section>

      {/* FAQ Section: Rebuilt to match the screenshot's layout and content. */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Got questions? We've got answers</h2>
           {/* Tab-style navigation */}
          <div className="flex justify-center space-x-2 mb-12">
            <button className="btn-tab-active">For buyers</button>
            <button className="btn-tab">For sellers</button>
            <button className="btn-tab">Guides & FAQs</button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src="https://placehold.co/600x400/d1fae5/34d399?text=Better" alt="AI Mortgage Lending" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-gray-900">How AI Mortgage lending is different</h3>
                <p className="text-gray-600 mb-4">Our smart technology makes the process faster and more efficient.</p>
                <a href="#" className="text-green-600 font-semibold hover:underline">Learn more &rarr;</a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 flex items-center h-full">
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">One Day Mortgage™</h3>
                    <p className="text-gray-600 mb-4">We offer the speed and convenience of a One Day Mortgage commitment.</p>
                    <a href="#" className="text-green-600 font-semibold hover:underline">Learn more &rarr;</a>
                  </div>
                  <img src="https://placehold.co/200x200/d1fae5/34d399?text=One+Day" alt="One Day Mortgage" className="w-32 h-32 object-cover rounded-lg ml-4"/>
              </div>
            </div>
             {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src="https://placehold.co/600x400/e0e7ff/818cf8?text=Better" alt="Couple reviewing documents" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Notice of HELOC</h3>
                <p className="text-gray-600 mb-4">Important information regarding your Home Equity Line of Credit.</p>
                <a href="#" className="text-green-600 font-semibold hover:underline">Learn more &rarr;</a>
              </div>
            </div>
             {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src="https://placehold.co/600x400/ffedd5/fb923c?text=Better" alt="Happy couple" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Down payment assistance programs</h3>
                <p className="text-gray-600 mb-4">Discover programs that can help you with your down payment.</p>
                <a href="#" className="text-green-600 font-semibold hover:underline">Learn more &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

