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

  // SVG Icon components for the new hero illustration.
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
  const HomeIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );


  return (
    <div className="bg-white">
      {/* Hero Section: Matched to the new design with a darker background and illustration. */}
      <section className="bg-green-900 text-white text-center py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">The first <br/><span className="w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-300 via-blue-400 to-purple-500">AI-powered</span> Mortgage</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Our technology has streamlined the entire mortgage process to save you time and money. Over $100 billion funded.</p>
          <Link href="/start" className="btn-primary text-lg">
            See my rates
          </Link>
          
          {/* Illustration Used AI for This */}
          <div className="mt-12">
            <p className="text-sm text-gray-300 mb-4">3 min | No hard credit check</p>
            <div className="relative h-[450px] w-full max-w-xs mx-auto">
              {/* Phone body */}
              <div className="absolute inset-x-4 top-0 h-full bg-black/30 rounded-[2.5rem] shadow-2xl"></div>

              {/* Floating Card 1: Pre-approved */}
              <div className="absolute top-24 -left-20 w-60 p-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg text-left animate-fade-in-up">
                <div className="flex items-center space-x-2 mb-2">
                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"><CheckIcon /></div>
                </div>
                <p className="font-semibold">Congrats, you're pre-approved for a loan up to</p>
                <p className="text-4xl font-bold text-green-300">$450,000</p>
              </div>

              {/* Floating Card 2: FICO Score */}
              <div className="absolute top-8 -right-24 w-64 p-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg text-left animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 border-4 border-green-400 rounded-full"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-bold text-xl">580</span>
                      <span className="text-xs">FICO</span>
                    </div>
                     <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-green-900"><CheckIcon /></div>
                  </div>
                  <p className="pt-2">You don't need perfect credit to qualify.</p>
                </div>
              </div>

              {/* Floating Card 3: Instant Answers */}
              <div className="absolute top-56 -right-16 w-60 p-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg flex items-center space-x-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="w-10 h-10 flex-shrink-0 bg-green-500/50 rounded-full flex items-center justify-center text-green-200 shadow-lg ring-2 ring-green-400/50">
                    <HomeIcon/>
                </div>
                <p className="text-sm text-left">Instant answers — anytime, anywhere with Betsy™ AI.</p>
              </div>

               {/* Floating Card 4: Customized Rates */}
              <div className="absolute bottom-4 -left-12 w-64 p-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg flex items-center space-x-3 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="w-10 h-10 flex-shrink-0 bg-green-500/50 rounded-full flex items-center justify-center text-green-200">
                    <ClockIcon/>
                </div>
                <p className="text-sm text-left">See your customized rate options in seconds.</p>
              </div>
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

