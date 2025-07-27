'use client'

import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="flex flex-1">
        {/* Left Side - Card with Background Image and Overlay */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <div className="relative rounded-2xl shadow-xl bg-white/70 p-6 w-[85%] h-[70%] flex flex-col justify-end" style={{ minWidth: 400, minHeight: 450 }}>
            {/* Background Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img 
                src="/images/Hero.png" 
                alt="Agricultural Automation" 
                className="w-full h-full object-cover opacity-60"
              />
              {/* Gradient Overlay - reduced opacity */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/60 via-emerald-700/50 to-emerald-800/60" />
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full w-full">
              {/* Tagline Grouped at Bottom Left */}
              <div className="mb-6 ml-2">
                <h1 className="text-3xl font-bold mb-2 leading-tight text-white text-left">
                  The next era of
                </h1>
                <h2 className="text-4xl font-extrabold leading-tight text-white mb-2 text-left">
                  Agricultural automation
                </h2>
                <p className="text-lg text-emerald-100 max-w-md text-left">
                  Experience the future of farming with AI-powered solutions and autonomous technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex flex-col justify-center px-6 py-6 lg:px-12 xl:px-20">
          {/* Login Form Container */}
          <div className="max-w-md w-full mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-2 text-left">Login</h2>
              <p className="text-lg text-slate-600 text-left">Welcome back! Please enter your details.</p>
            </div>
            {/* Login Form */}
            <form className="space-y-5">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="name@mail.com"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <Link href="#" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                    Reset password
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              {/* Remember Password */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-slate-700">
                  Remember password
                </label>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
              >
                Login
              </button>
            </form>
            {/* Sign Up Link */}
            <div className="text-left mt-5">
              <p className="text-slate-600 text-lg">
                Don't have an account?{' '}
                <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">or</span>
              </div>
            </div>
            {/* Social Login Buttons */}
            <div className="space-y-3">
              {/* Google Login */}
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Login with Google
              </button>
              {/* Mobile Login */}
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 20H7V4H17V20Z"/>
                  <path d="M12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18Z"/>
                </svg>
                Login with Mobile Number
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bar */}
      <footer className="bg-emerald-700 text-white text-sm py-3 px-6 flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <span>&copy; 2025 FarmXLabs. All Rights Reserved.</span>
          <a href="#" className="hover:text-emerald-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-200 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-emerald-200 transition-colors">Cookie Policy</a>
        </div>
        <div>
          Empowering Agriculture Through Technology
        </div>
      </footer>
    </div>
  )
} 