// Swastik Shetty
// This is the Footer component. It contains navigation, contact info, and legal text.
// I organized it into a clean grid layout.

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Grid layout for footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:text-green-600 transition-colors">About us</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/mortgage-calculator" className="hover:text-green-600 transition-colors">Mortgage calculator</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition-colors">Help center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-green-600 transition-colors">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition-colors">Licenses</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Contact us</h4>
            <p>hello@better.com</p>
            <p>(888) 501-3186</p>
            {/* Social media icons */}
            <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook"><svg className="w-6 h-6 hover:text-green-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path></svg></a>
                <a href="#" aria-label="Twitter"><svg className="w-6 h-6 hover:text-green-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.635 4.212 3.795 4.654-.75.204-1.547.26-2.352.086.635 1.958 2.474 3.38 4.65 3.42-1.624 1.275-3.674 2.03-5.897 2.03-.383 0-.76-.022-1.13-.065 2.099 1.35 4.606 2.14 7.29 2.14 8.735 0 13.52-7.24 13.52-13.52 0-.206-.005-.412-.013-.618.928-.67 1.729-1.5 2.368-2.45z"></path></svg></a>
                <a href="#" aria-label="LinkedIn"><svg className="w-6 h-6 hover:text-green-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.398c0-2.006 1.806-3.602 3.998-3.602 2.195 0 3.998 1.596 3.998 3.602v8.398h5v-10.151c0-4.87-3.32-8.849-8.489-8.849-4.14 0-6.511 2.422-7.511 4.549z"></path></svg></a>
            </div>
          </div>
        </div>
        {/* Copyright and legal disclaimers */}
        <div className="text-center text-sm mt-12 pt-8 border-t border-gray-200">
            <p>&copy; {new Date().getFullYear()} Better HoldCo, Inc. Clone by Swastik Shetty.</p>
            <p className="mt-2">Better Mortgage Corporation is a direct lender. NMLS #330511. This is a project for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
}

