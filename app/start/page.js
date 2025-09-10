// Swastik Shetty
// This is the "Start" page. It's a gateway for users to begin their journey,
// whether it's buying a home or refinancing.

import React from 'react';
import Link from 'next/link';

export default function Start() {
  return (
    <div className="bg-gray-50 flex items-center justify-center py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Using the consistent card style here. */}
        <div className="max-w-md mx-auto content-card p-8 text-center">
            <svg className="mx-auto h-12 w-auto text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          <h1 className="text-3xl font-bold my-4 text-gray-800">Hi, I'm Betsy!</h1>
          <h2 className="text-2xl text-gray-700 mb-8">What can I help you with?</h2>

          {/* Action links for the user to choose from */}
          <div className="space-y-4">
            <Link href="#" className="w-full flex items-center p-4 border border-gray-300 rounded-lg hover:bg-green-50 hover:border-green-400 transition-colors duration-200">
              <svg className="w-6 h-6 mr-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span className="font-medium">Buying a home</span>
            </Link>
            <Link href="#" className="w-full flex items-center p-4 border border-gray-300 rounded-lg hover:bg-green-50 hover:border-green-400 transition-colors duration-200">
              <svg className="w-6 h-6 mr-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h5V4H4zm0 10h5v5H4v-5zm10-10h5v5h-5V4zm0 10h5v5h-5v-5z"></path></svg>
              <span className="font-medium">Refinancing my mortgage</span>
            </Link>
             <Link href="#" className="w-full flex items-center p-4 border border-gray-300 rounded-lg hover:bg-green-50 hover:border-green-400 transition-colors duration-200">
                <svg className="w-6 h-6 mr-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0 1H9m3-1h3m-3 1H9m3-1h3m-6 9v-3m0 3h3m-3 0H9m12-3h-3m3 0h3M9 21v-3m0 3h3m-3 0H6m3 0v3M9 3v3m0-3H6m3 0h3m9 6h-3m3 0h3"></path></svg>
                <span className="font-medium">Get cash from my home</span>
            </Link>
          </div>
          
          {/* Social proof section with key company stats */}
          <div className="mt-8 pt-8 border-t">
              <div className="flex justify-around text-center">
                  <div>
                      <p className="text-3xl font-bold text-gray-800">$100B</p>
                      <p className="text-sm text-gray-500">home loans funded</p>
                  </div>
                   <div>
                      <p className="text-3xl font-bold text-gray-800">400K+</p>
                      <p className="text-sm text-gray-500">customers served</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

