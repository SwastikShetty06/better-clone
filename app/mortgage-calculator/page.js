// Swastik Shetty
// This page hosts the MortgageCalculator component.
// It's been updated to match the comprehensive layout from the design screenshot.
'use client';

import React, { useState } from 'react';
import MortgageCalculator from '../../components/MortgageCalculator';

export default function MortgageCalculatorPage() {
  const [activeTab, setActiveTab] = useState('Purchase');

  // State to manage FAQ visibility
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      date: "05/12/2025",
      title: "Better offered the best rate",
      text: "Better Mortgage offered the best rate. Other companies finally agreed to match the Better rate, but I stuck Better Mortgage since they offered it first. I would definitely recommend Better."
    },
    {
      date: "04/28/2025",
      title: "Amazingly simple and fast",
      text: "The whole process was digital and incredibly efficient. I was shocked at how quickly we were able to close on our new home. The team was responsive and helpful."
    },
    {
      date: "04/15/2025",
      title: "Transparent and honest",
      text: "No hidden fees, no last-minute surprises. What they quoted me was what I paid. It's refreshing to work with a company that is so upfront and honest."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  const faqs = [
    { q: "How do I calculate my mortgage payment?", a: "You can use our calculator to get a detailed estimate. The basic formula involves the loan principal, interest rate, and loan term, but our tool also includes important factors like property taxes, homeowners insurance, and PMI." },
    { q: "Are mortgages compounded monthly?", a: "Yes, mortgage interest in the U.S. is typically compounded monthly. Each payment you make consists of both principal and interest." },
    { q: "What do closing costs typically cost?", a: "Closing costs typically range from 2% to 5% of the loan amount. They include fees for services like the appraisal, title search, and loan origination. Better Mortgage is proud to offer loans with zero lender fees." },
    { q: "What is the 2% rule for mortgage payoff?", a: "This is a general guideline, not a strict rule. It suggests that your monthly housing costs (PITI) should be no more than 28% of your gross monthly income, and your total debt no more than 36%." }
  ];

  return (
    <div className="bg-white">
        {/* Top Section with Calculator */}
        <section className="bg-emerald-50/50 py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Estimate your monthly mortgage payments</h1>
                    </div>
                    
                    {/* The main calculator component is rendered here. */}
                    <MortgageCalculator />
                </div>
            </div>
        </section>

        {/* Simple Steps Section */}
        <section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-800">Simple steps to get pre-approved</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="text-4xl font-bold text-green-600 mb-4">1</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Share a few details</h3>
                        <p className="text-gray-600">Our smart technology will guide you through the process.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="text-4xl font-bold text-green-600 mb-4">2</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">See your homebuying budget</h3>
                        <p className="text-gray-600">Get a real-time look at your purchasing power.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg">
                         <div className="text-4xl font-bold text-green-600 mb-4">3</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Get your pre-approval letter</h3>
                        <p className="text-gray-600">Make a strong offer the moment you find your dream home.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
             <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl font-bold mb-6 text-gray-800">Check your homebuying power</h2>
                 <a href="/start" className="btn-primary">See what I qualify for</a>
                 <p className="text-gray-500 mt-4 text-sm">No commitment, no impact to your credit score</p>
            </div>
        </section>

        {/* 1400+ Customers Section - Rebuilt to match new design */}
        <section className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Left side */}
                    <div className="bg-green-200/50 rounded-lg p-8 flex flex-col justify-between text-center">
                        <div>
                            <h3 className="text-5xl font-bold text-gray-800">1400+ customers</h3>
                            <p className="text-gray-600 mt-4">provide us 5 stars in 
                                <a href="#" className="font-bold text-gray-700 hover:underline"> ⭐ Trustpilot</a>
                            </p>
                        </div>
                        <button className="bg-emerald-800 text-white font-bold py-3 px-6 rounded-lg mt-8 hover:bg-emerald-900 transition-colors">
                            Tell us about your experience
                        </button>
                    </div>
                    {/* Right side - Testimonial Slider */}
                    <div className="bg-emerald-50/70 rounded-lg p-8 flex flex-col justify-between">
                        <div>
                            <p className="text-sm text-gray-500">{testimonials[currentTestimonial].date}</p>
                            <h4 className="font-bold text-lg text-gray-800 my-2">{testimonials[currentTestimonial].title}</h4>
                            <p className="text-gray-700">{testimonials[currentTestimonial].text}</p>
                            <a href="#" className="text-green-600 font-semibold hover:underline mt-4 inline-block">See in Trustpilot &rarr;</a>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <button onClick={prevTestimonial} className="text-2xl text-gray-500 hover:text-gray-800">&larr;</button>
                            <span className="text-gray-600">{currentTestimonial + 1} / {testimonials.length}</span>
                            <button onClick={nextTestimonial} className="text-2xl text-gray-500 hover:text-gray-800">&rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        {/* Expert Opinions Section */}
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-800">Expert opinions</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-emerald-50/70 p-6 rounded-lg text-left">
                        <h3 className="font-bold text-gray-800 mb-4">Should I wait for a better market?</h3>
                        <div className="flex items-center">
                            <img src="https://placehold.co/40x40" alt="Expert" className="rounded-full mr-3"/>
                            <div>
                                <p className="font-semibold text-sm">Jane Doe</p>
                                <p className="text-xs text-gray-500">Chief Economist</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-emerald-50/70 p-6 rounded-lg text-left">
                        <h3 className="font-bold text-gray-800 mb-4">Is it true rates will drop?</h3>
                         <div className="flex items-center">
                            <img src="https://placehold.co/40x40" alt="Expert" className="rounded-full mr-3"/>
                            <div>
                                <p className="font-semibold text-sm">John Smith</p>
                                <p className="text-xs text-gray-500">Market Analyst</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-emerald-50/70 p-6 rounded-lg text-left">
                        <h3 className="font-bold text-gray-800 mb-4">How should buyers handle scary market headlines?</h3>
                         <div className="flex items-center">
                            <img src="https://placehold.co/40x40" alt="Expert" className="rounded-full mr-3"/>
                            <div>
                                <p className="font-semibold text-sm">Emily White</p>
                                <p className="text-xs text-gray-500">Housing Expert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* FAQ Section - Enhanced with Accordion */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mortgage Calculator FAQs</h2>
           <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                    <button onClick={() => toggleFaq(index)} className="w-full text-left flex justify-between items-center">
                        <h3 className="font-bold text-lg text-gray-800">{faq.q}</h3>
                        <span>{openFaq === index ? '−' : '+'}</span>
                    </button>
                    {openFaq === index && <p className="text-gray-600 mt-2">{faq.a}</p>}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* More Resources Section */}
       <section className="py-20">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">More resources: Rates & Calculators</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-800 mb-2">Affordability calculator</h3>
                        <p className="text-gray-600 text-sm mb-4">Find out how much house you can afford.</p>
                        <a href="#" className="text-green-600 font-semibold hover:underline text-sm">Calculate my budget &rarr;</a>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-800 mb-2">Rent vs. buy calculator</h3>
                        <p className="text-gray-600 text-sm mb-4">Find out if buying a home makes sense for you.</p>
                        <a href="#" className="text-green-600 font-semibold hover:underline text-sm">See my results &rarr;</a>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-800 mb-2">HELOC payment calculator</h3>
                        <p className="text-gray-600 text-sm mb-4">Estimate the monthly payment on a home equity line of credit.</p>
                        <a href="#" className="text-green-600 font-semibold hover:underline text-sm">Calculate payments &rarr;</a>
                    </div>
                </div>
            </div>
       </section>
    </div>
  );
}

