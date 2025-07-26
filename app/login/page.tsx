'use client'

import Link from 'next/link'
import { Twitter } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl flex flex-col items-center px-10 py-16">
        {/* Image at top */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center mb-8 shadow-lg">
          <img src="/images/head.png" alt="Login" className="w-16 h-16 object-cover rounded-full" />
        </div>
        
        {/* Tagline */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-slate-600 text-sm">Sign in to continue your journey</p>
        </div>
        
        {/* Sign in buttons */}
        <div className="w-full space-y-4">
          <button className="w-full flex items-center justify-center gap-3 bg-white text-slate-700 font-medium py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-sm shadow-sm">
            {/* Google SVG icon */}
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <g>
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.9 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.6 4.5 29.6 2.5 24 2.5c-6.6 0-12.3 2.7-16.7 7.2z"/>
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 17.1 19.2 14 24 14c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.6 4.5 29.6 2.5 24 2.5c-6.6 0-12.3 2.7-16.7 7.2z"/>
                <path fill="#FBBC05" d="M24 43.5c5.8 0 10.7-1.9 14.7-5.2l-6.8-5.6C29.7 34.6 27 35.5 24 35.5c-5.7 0-10.5-3.7-12.2-8.8l-7 5.4C7.7 39.2 15.3 43.5 24 43.5z"/>
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.7 7-11.7 7-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.6 4.5 29.6 2.5 24 2.5c-6.6 0-12.3 2.7-16.7 7.2z"/>
              </g>
            </svg>
            Continue with Google
          </button>
          
          <button className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white font-medium py-3.5 rounded-xl hover:bg-slate-800 transition-all text-sm shadow-sm">
            <Twitter className="w-5 h-5" />
            Continue with Twitter
          </button>
        </div>
        
        {/* Footer text */}
        <p className="text-center text-slate-500 text-xs mt-8">
          By continuing, you agree to our{' '}
          <Link href="#" className="text-emerald-600 hover:underline">Terms of Service</Link>
          {' '}and{' '}
          <Link href="#" className="text-emerald-600 hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
} 