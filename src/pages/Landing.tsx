import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import VTLogo from '../components/VTLogo'

// --- Campus Features list for the main landing page ---
const features = [
  {
    title: 'QR Verification',
    desc: 'Instantly verify student identities using secure QR codes. No more manual logs or checks.',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Z" />
      </svg>
    ),
  },
  {
    title: 'Digital Identification',
    desc: 'Secure digital ID cards for every student. Quick lookup and credential verification.',
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
  {
    title: 'Mess Menu Updates',
    desc: 'Daily mess menu at your fingertips. Never miss a meal or wonder what is being served today.',
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'SOS Emergency Alerts',
    desc: 'One-tap emergency alerts with your precise location sent instantly to proctors and security.',
    icon: (
      <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Direct Proctor Assistance',
    desc: 'Direct channels to contact your proctors. Request support, schedule meetings, or report concerns.',
    icon: (
      <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Real-time Notifications',
    desc: 'Stay informed with instant push alerts for campus notices, emergency safety briefs, and announcements.',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
]

// --- High Fidelity Polar Bear Avatar SVG ---
function BearAvatar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="50" cy="50" r="50" fill="#7193a0" />
      
      {/* Bear Ears */}
      <circle cx="32" cy="35" r="7.5" fill="#ffffff" />
      <circle cx="32" cy="35" r="4.5" fill="#e2c5c5" />
      <circle cx="68" cy="35" r="7.5" fill="#ffffff" />
      <circle cx="68" cy="35" r="4.5" fill="#e2c5c5" />
      
      {/* Acorn Hat Stem */}
      <rect x="48.5" y="14" width="3" height="7" rx="1" fill="#4d3525" />
      {/* Acorn Hat Body */}
      <path d="M 33,33 C 33,18 67,18 67,33 Z" fill="#785943" />
      
      {/* Bear Head */}
      <circle cx="50" cy="50" r="21" fill="#ffffff" />
      
      {/* Eyes */}
      <circle cx="43" cy="46" r="2.2" fill="#2d3748" />
      <circle cx="57" cy="46" r="2.2" fill="#2d3748" />
      
      {/* Snout */}
      <ellipse cx="50" cy="54" rx="6" ry="4.5" fill="#f0f0f0" />
      <polygon points="48,52 52,52 50,54.5" fill="#2d3748" />
      
      {/* Scarf Around Neck */}
      <path
        d="M 34,65 C 38,72 62,72 66,65 C 66,65 67,71 63,74 C 55,78 45,78 37,74 Z"
        fill="#b5d2da"
      />
      {/* Scarf Tail */}
      <path d="M 60,68 L 65,88 L 57,90 Z" fill="#9ec4cf" />
      
      {/* Bear Body/Torso */}
      <path d="M 29,90 C 29,76 36,68 50,68 C 64,68 71,76 71,90 Z" fill="#ffffff" />
    </svg>
  )
}

// --- High Fidelity QR Code SVG Component ---
function QRCode({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top-Left Finder Pattern */}
      <rect x="0" y="0" width="28" height="28" rx="2" />
      <rect x="4" y="4" width="20" height="20" rx="1" fill="#ffffff" />
      <rect x="8" y="8" width="12" height="12" rx="0.5" />
      
      {/* Top-Right Finder Pattern */}
      <rect x="72" y="0" width="28" height="28" rx="2" />
      <rect x="76" y="4" width="20" height="20" rx="1" fill="#ffffff" />
      <rect x="80" y="8" width="12" height="12" rx="0.5" />
      
      {/* Bottom-Left Finder Pattern */}
      <rect x="0" y="72" width="28" height="28" rx="2" />
      <rect x="4" y="76" width="20" height="20" rx="1" fill="#ffffff" />
      <rect x="8" y="80" width="12" height="12" rx="0.5" />

      {/* Alignment Pattern Bottom-Right */}
      <rect x="76" y="76" width="12" height="12" rx="1" />
      <rect x="80" y="80" width="4" height="4" fill="#ffffff" />

      {/* Data Mock Patterns */}
      {/* Top row gap fill */}
      <rect x="36" y="0" width="8" height="4" />
      <rect x="52" y="0" width="12" height="4" />
      <rect x="44" y="8" width="8" height="8" />
      <rect x="60" y="8" width="4" height="4" />
      <rect x="32" y="16" width="12" height="4" />
      <rect x="52" y="16" width="8" height="8" />
      
      {/* Middle row gap fill */}
      <rect x="0" y="36" width="12" height="8" />
      <rect x="20" y="36" width="8" height="4" />
      <rect x="36" y="32" width="4" height="12" />
      <rect x="48" y="36" width="16" height="4" />
      <rect x="72" y="36" width="8" height="8" />
      <rect x="88" y="36" width="12" height="4" />
      
      <rect x="8" y="48" width="4" height="12" />
      <rect x="24" y="48" width="12" height="4" />
      <rect x="44" y="48" width="4" height="8" />
      <rect x="56" y="48" width="12" height="12" />
      <rect x="76" y="48" width="16" height="4" />
      
      <rect x="0" y="60" width="8" height="4" />
      <rect x="16" y="60" width="16" height="8" />
      <rect x="40" y="60" width="8" height="4" />
      <rect x="84" y="60" width="8" height="8" />
      
      {/* Bottom row gap fill */}
      <rect x="36" y="72" width="12" height="8" />
      <rect x="56" y="72" width="8" height="4" />
      <rect x="32" y="88" width="4" height="8" />
      <rect x="44" y="84" width="12" height="4" />
      <rect x="60" y="88" width="12" height="8" />
      <rect x="88" y="80" width="4" height="8" />
    </svg>
  )
}

const messMenus = {
  breakfast: ['Aloo Paratha (2 pcs)', 'Curd / Butter', 'Tea & Coffee', 'Sprouted Grains'],
  lunch: ['Dal Fry', 'Shahi Paneer', 'Seasonal Veg', 'Jeera Rice / Roti', 'Boondi Raita', 'Salad'],
  snacks: ['Veg Samosa (2 pcs)', 'Green Chutney', 'Tea & Coffee'],
  dinner: ['Mix Dal', 'Aloo Gobhi Adraki', 'Plain Rice / Roti', 'Kheer (Dessert)', 'Papad']
}

export default function Landing() {
  // Mobile Phone Mockup State: 'login' | 'authenticating' | 'dashboard' | 'digital_id' | 'admin' | 'timetable' | 'mess'
  const [appState, setAppState] = useState<'login' | 'authenticating' | 'dashboard' | 'digital_id' | 'admin' | 'timetable' | 'mess'>('login')
  
  // Student Mock User details
  const [studentUser, setStudentUser] = useState({
    name: 'Rohan Sharma',
    email: 'rohan.sharma.cse24@itbhu.ac.in'
  })

  const [messMeal, setMessMeal] = useState<'breakfast' | 'lunch' | 'snacks' | 'dinner'>('breakfast')

  // Timer for QR updates
  const [qrTimer, setQrTimer] = useState(30)
  
  // Timetable selected day (1 to 7)
  const [activeDay, setActiveDay] = useState<number>(1)

  // SOS Warning state
  const [sosCountdown, setSosCountdown] = useState<number | null>(null)
  const [sosActive, setSosActive] = useState(false)

  // QR Countdown Effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (appState === 'digital_id') {
      interval = setInterval(() => {
        setQrTimer((prev) => (prev <= 1 ? 30 : prev - 1))
      }, 1000)
    } else {
      setQrTimer(30)
    }
    return () => clearInterval(interval)
  }, [appState])

  // SOS Countdown Timer Effect
  useEffect(() => {
    if (sosCountdown === null) return

    const timer = setTimeout(() => {
      if (sosCountdown === 1) {
        setSosActive(true)
        setSosCountdown(null)
      } else {
        setSosCountdown(sosCountdown - 1)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [sosCountdown])

  // Simulation handlers
  const handleStudentLogin = (name: string, email: string) => {
    setStudentUser({ name, email })
    setAppState('authenticating')
    setTimeout(() => {
      setAppState('dashboard')
    }, 1000)
  }

  const handleStaffLogin = () => {
    setAppState('authenticating')
    setTimeout(() => {
      setAppState('admin')
    }, 1000)
  }

  const handleTriggerSOS = () => {
    if (sosActive) {
      setSosActive(false)
    } else {
      setSosCountdown(3)
    }
  }

  const handleReset = () => {
    setAppState('login')
    setSosActive(false)
    setSosCountdown(null)
  }

  return (
    <div className="pt-16 min-h-screen text-neutral-100 bg-neutral-950 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 flex items-center justify-center">
        {/* Glow Gradients */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cops-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Tagline / CTA */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900/80 border border-neutral-800 rounded-full text-neutral-300 text-xs font-semibold select-none backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cops-400 animate-pulse" />
                Updated with High-Fidelity Mock App Screens
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                IIT (BHU) <br />
                <span className="bg-gradient-to-r from-blue-400 via-cops-400 to-purple-500 bg-clip-text text-transparent">
                  Everything App
                </span>
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-neutral-400 leading-relaxed font-medium">
                We have meticulously rebuilt the website mockup with pixel-perfect layouts direct from 
                the production app. Interact with the digital ID, class schedules, 
                timetable indicators, and admin panels below.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#mockup-anchor"
                  className="w-full sm:w-auto text-center px-6 py-3.5 bg-gradient-to-r from-blue-500 to-cops-600 hover:from-blue-400 hover:to-cops-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-cops-500/20 hover:shadow-cops-500/30 transition-all cursor-pointer"
                >
                  Interact with Live Preview
                </a>
                <span className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded-xl text-sm font-semibold opacity-50 cursor-not-allowed select-none">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  Google Play Store
                </span>
              </div>
            </div>
            
            {/* Phone Mockup Window */}
            <div id="mockup-anchor" className="lg:col-span-5 flex flex-col items-center justify-center">
              
              {/* Smartphone Frame Outer Shell */}
              <div className="relative w-[330px] h-[650px] bg-neutral-900 border-4 border-neutral-800 rounded-[50px] shadow-2xl overflow-hidden ring-1 ring-neutral-700/50 flex flex-col p-1.5">
                
                {/* Speaker & Camera Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-full z-30 flex items-center justify-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                  <div className="w-12 h-1 bg-neutral-800 rounded-full" />
                </div>
                
                {/* Active Simulated Screen Area */}
                <div className="flex-1 rounded-[42px] overflow-hidden flex flex-col relative select-none">

                  {/* -------------------- VIEW 0: MOCK LOGIN SCREEN (Dark Theme) -------------------- */}
                  {appState === 'login' && (
                    <div className="flex-1 bg-[#121212] flex flex-col justify-between px-6 pb-6 pt-10 text-center text-white rounded-[38px] overflow-hidden">
                      
                      {/* Top Status Indicators */}
                      <div className="h-6 flex items-center justify-between text-[9px] text-neutral-500 font-bold">
                        <span>18:43</span>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          <span>Connected</span>
                        </div>
                      </div>

                      {/* Main Logo & Titles */}
                      <div className="flex-1 flex flex-col justify-center items-center">
                        <VTLogo className="w-24 h-24 text-white mb-4 animate-fade-in" />
                        <h2 className="text-xl font-bold text-white tracking-wide">
                          IIT(BHU) Everything App
                        </h2>
                        <p className="mt-2 text-xs text-neutral-400 max-w-[200px] leading-relaxed mx-auto">
                          Your all-in-one companion for campus life at IIT(BHU)
                        </p>
                      </div>

                      {/* Actions buttons */}
                      <div className="space-y-3.5 w-full">
                        {/* Student Google login */}
                        <button
                          onClick={() => handleStudentLogin('Rohan Sharma', 'rohan.sharma.cse24@itbhu.ac.in')}
                          className="w-full py-3 bg-[#60b0f4] hover:bg-[#4ea0e2] active:scale-[0.98] text-neutral-950 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2.5 cursor-pointer"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                          </svg>
                          Sign in with Google
                        </button>

                        <div className="flex items-center justify-between text-[9px] text-neutral-600 font-bold select-none px-2">
                          <hr className="w-1/3 border-neutral-800" />
                          <span>OR</span>
                          <hr className="w-1/3 border-neutral-800" />
                        </div>

                        {/* Staff / Admin Login */}
                        <button
                          onClick={handleStaffLogin}
                          className="w-full py-3 border border-[#3e86c4] hover:bg-blue-500/10 active:scale-[0.98] text-[#60b0f4] rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2.5 cursor-pointer"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                          </svg>
                          Staff Login (Admin Panel)
                        </button>

                        {/* Guest student login */}
                        <button
                          onClick={() => handleStudentLogin('Aryan Sharma', 'aryan.sharma.ece25@itbhu.ac.in')}
                          className="w-full py-3 border border-[#3e86c4] hover:bg-blue-500/10 active:scale-[0.98] text-[#60b0f4] rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2.5 cursor-pointer"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          Guest Student Login
                        </button>
                      </div>

                      {/* Phone Bottom Home Bar */}
                      <div className="h-4 flex items-center justify-center pt-2 select-none">
                        <div className="w-20 h-1 bg-neutral-700 rounded-full" />
                      </div>
                    </div>
                  )}

                  {/* -------------------- VIEW 1: LOADING SPINNER -------------------- */}
                  {appState === 'authenticating' && (
                    <div className="flex-1 bg-[#121212] flex flex-col items-center justify-center text-center p-6 text-white rounded-[38px] overflow-hidden">
                      <div className="w-10 h-10 border-4 border-cops-500/35 border-t-[#60b0f4] rounded-full animate-spin mb-4" />
                      <p className="text-xs text-neutral-300 font-bold">Verifying details...</p>
                      <p className="text-[10px] text-neutral-500 mt-1 font-semibold">IIT BHU Single Sign-On (SSO)</p>
                    </div>
                  )}

                  {/* -------------------- VIEW 2: STUDENT HOME DASHBOARD (Image 2) -------------------- */}
                  {appState === 'dashboard' && (
                    <div className="flex-1 bg-[#f5f6f8] text-neutral-900 flex flex-col justify-between overflow-hidden relative rounded-[38px]">
                      
                      {/* Top Header Section */}
                      <div className="px-5 pt-10 pb-3 bg-white flex items-center justify-between shadow-2xs">
                        <div className="text-left">
                          <h1 className="text-xl font-black text-neutral-900 tracking-tight leading-none">everything</h1>
                          <p className="text-[9px] text-neutral-400 font-bold mt-1 uppercase tracking-wider">IIT (BHU) Varanasi</p>
                        </div>
                        
                        <div className="flex items-center gap-2.5">
                          {/* Bell Notification Button */}
                          <button className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                          </button>
                          {/* Bear profile photo button -> opens digital id */}
                          <button
                            onClick={() => setAppState('digital_id')}
                            className="w-8 h-8 rounded-full border border-neutral-200 overflow-hidden cursor-pointer hover:scale-105 active:scale-95 transition"
                          >
                            <BearAvatar className="w-full h-full" />
                          </button>
                        </div>
                      </div>

                      {/* Scrollable Dashboard Viewport */}
                      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 text-left scrollbar-none">
                        
                        {/* Search bar */}
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <input
                            type="text"
                            placeholder="Search for mess menu, clubs..."
                            readOnly
                            className="w-full bg-white pl-10 pr-4 py-2.5 rounded-2xl text-[10px] text-neutral-600 font-semibold border-none focus:outline-none shadow-2xs select-none"
                          />
                        </div>

                        {/* Quick Action Grid Icons */}
                        <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                          {/* Digital ID (Opens Image 1) */}
                          <button
                            onClick={() => setAppState('digital_id')}
                            className="flex flex-col items-center gap-1.5 cursor-pointer group"
                          >
                            <div className="w-12 h-12 rounded-full bg-blue-100/80 group-hover:bg-blue-200/80 flex items-center justify-center text-blue-600 transition-colors">
                              <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                              </svg>
                            </div>
                            <span className="text-[9px] font-bold text-neutral-700">Digital ID</span>
                          </button>

                          {/* SOS Trigger */}
                          <button
                            onClick={handleTriggerSOS}
                            className="flex flex-col items-center gap-1.5 cursor-pointer group"
                          >
                            <div className="w-12 h-12 rounded-full bg-red-100/80 group-hover:bg-red-200/80 flex items-center justify-center text-red-600 transition-colors">
                              <span className="text-[10px] font-black text-red-600 tracking-wider">SOS</span>
                            </div>
                            <span className="text-[9px] font-bold text-red-600">SOS</span>
                          </button>

                          {/* Mess Menu page */}
                          <button
                            onClick={() => setAppState('mess')}
                            className="flex flex-col items-center gap-1.5 cursor-pointer group"
                          >
                            <div className="w-12 h-12 rounded-full bg-amber-100/80 group-hover:bg-amber-200/80 flex items-center justify-center text-amber-600 transition-colors">
                              <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                              </svg>
                            </div>
                            <span className="text-[9px] font-bold text-neutral-700">Mess</span>
                          </button>

                          {/* Classes / Timetable attendance page (Opens Image 4) */}
                          <button
                            onClick={() => setAppState('timetable')}
                            className="flex flex-col items-center gap-1.5 cursor-pointer group"
                          >
                            <div className="w-12 h-12 rounded-full bg-purple-100/80 group-hover:bg-purple-200/80 flex items-center justify-center text-purple-600 transition-colors">
                              <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span className="text-[9px] font-bold text-neutral-700">Classes</span>
                          </button>
                        </div>

                        {/* TIME TABLE SECTION */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[9px] font-extrabold text-neutral-500 uppercase tracking-wider">
                            <span className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                              </svg>
                              Time Table • Today
                            </span>
                            <button onClick={() => setAppState('timetable')} className="text-green-600 hover:underline cursor-pointer lowercase">See all</button>
                          </div>

                          {/* Time table Card (High fidelity) */}
                          <div className="bg-white rounded-2xl p-4 shadow-3xs border border-neutral-100 flex flex-col space-y-3.5">
                            
                            {/* Class status badge & countdown */}
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.8 bg-green-50 text-green-700 rounded-full text-[8px] font-black uppercase tracking-wider">
                                <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                                Next Class
                              </span>
                              <span className="text-[10px] text-neutral-400 font-semibold">
                                <span className="font-extrabold text-neutral-800">45</span> mins left
                              </span>
                            </div>

                            {/* Class Title & Lecture Hall */}
                            <div className="text-left space-y-1">
                              <h4 className="text-sm font-black text-neutral-900">CSE-302: Operating Systems</h4>
                              <p className="text-[9px] text-neutral-400 font-bold flex items-center gap-1">
                                <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25gC4.5 6.358 7.858 3 12 3c4.142 0 7.5 3.358 7.5 7.5z" />
                                </svg>
                                Lecture Hall Complex, Room 204
                              </p>
                            </div>

                            {/* Timeline display */}
                            <div className="relative border-l border-neutral-200 pl-3 ml-1.5 space-y-3 text-[9.5px]">
                              
                              {/* Completed Item */}
                              <div className="relative">
                                <span className="absolute -left-[16px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-300 border-2 border-white" />
                                <div className="flex gap-3 text-neutral-400 font-semibold">
                                  <span className="w-14">10:00 AM</span>
                                  <span className="line-through">CSE-301: Algorithms</span>
                                </div>
                              </div>

                              {/* Active Item */}
                              <div className="relative">
                                <span className="absolute -left-[16px] top-1 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white ring-2 ring-green-100" />
                                <div className="flex gap-3 text-green-600 font-extrabold">
                                  <span className="w-14 text-neutral-800">11:00 AM</span>
                                  <span>CSE-302: Operating Systems</span>
                                </div>
                              </div>

                              {/* Upcoming Item */}
                              <div className="relative">
                                <span className="absolute -left-[16px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-300 border-2 border-white" />
                                <div className="flex gap-3 text-neutral-400 font-semibold">
                                  <span className="w-14">02:00 PM</span>
                                  <span>HSS-201: Economics</span>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        {/* URGENT UPDATES SECTION (Pink warning box) */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1 text-[9px] font-extrabold text-neutral-500 uppercase tracking-wider">
                            <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                            Urgent Updates
                          </div>
                          
                          {/* Library Warning Box */}
                          <div className="bg-[#fef2f2] border border-red-100 rounded-2xl p-3.5 flex gap-3 shadow-3xs">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-4xs text-red-500">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div className="text-left space-y-0.5">
                              <h5 className="text-[10px] font-black text-red-700 leading-tight">Library Closed Early</h5>
                              <p className="text-[8.5px] text-red-600 font-semibold leading-relaxed">
                                Due to maintenance, the Central Library will close at 6:00 PM today. Please plan accordingly.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* MESS MENU PREVIEW SECTION */}
                        <div className="space-y-2 pb-2">
                          <div className="flex items-center justify-between text-[9px] font-extrabold text-neutral-500 uppercase tracking-wider">
                            <span className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                              </svg>
                              Mess Menu
                            </span>
                            <span className="text-green-600 font-black">Hostel 2</span>
                          </div>
                          
                          {/* Menu card */}
                          <div
                            onClick={() => setAppState('mess')}
                            className="bg-white rounded-2xl p-4 shadow-3xs border border-neutral-100 flex items-center justify-between hover:bg-neutral-50 transition cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <span className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-[8.5px] font-black uppercase tracking-wider">
                                Lunch
                              </span>
                              <span className="text-[9.5px] text-neutral-400 font-semibold">Ends 2:30 PM</span>
                            </div>
                            <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                      </div>

                      {/* SOS COUNTDOWN / TRIGGER OVERLAY */}
                      {(sosCountdown !== null || sosActive) && (
                        <div className="absolute inset-0 bg-neutral-950/90 z-40 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                          {sosCountdown !== null ? (
                            <div className="space-y-3">
                              <div className="text-5xl font-black text-rose-500 animate-ping">
                                {sosCountdown}
                              </div>
                              <p className="text-xs text-neutral-400 font-bold">Initiating SOS dispatcher...</p>
                              <button
                                onClick={() => setSosCountdown(null)}
                                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-[10px] font-extrabold cursor-pointer border border-neutral-700 transition mt-2"
                              >
                                Cancel Alert
                              </button>
                            </div>
                          ) : (
                            <div className="space-y-4 animate-shake">
                              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto shadow-lg shadow-red-600/40 animate-pulse">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.03L3.07 19.5h17.86L12 2.72zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                              </div>
                              <h3 className="text-sm font-black text-red-500 uppercase tracking-widest">SOS ALERT DISPATCHED</h3>
                              <p className="text-[10px] text-neutral-300 leading-relaxed max-w-[210px] mx-auto">
                                Location sent to Campus Security Control Room. coordinates: <span className="font-extrabold text-white">25.2678° N, 82.9912° E</span>
                              </p>
                              <button
                                onClick={() => setSosActive(false)}
                                className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-xl text-[10px] font-bold border border-neutral-700 cursor-pointer"
                              >
                                Clear SOS Alert
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Bottom Virtual Tab Bar and Home Indicator Wrapper */}
                      <div className="bg-white/95 backdrop-blur-md border-t border-neutral-150 rounded-b-[38px] flex flex-col shrink-0">
                        <div className="h-14 flex items-center justify-around px-2 pb-1">
                          <button onClick={handleReset} title="Sign Out" className="flex flex-col items-center text-neutral-400 hover:text-red-500 transition cursor-pointer">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span className="text-[8px] font-bold mt-0.5">Logout</span>
                          </button>
                          <button onClick={() => setAppState('digital_id')} className="flex flex-col items-center text-neutral-400 hover:text-[#60b0f4] transition cursor-pointer">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="text-[8px] font-bold mt-0.5">ID View</span>
                          </button>
                          <button onClick={() => setAppState('timetable')} className="flex flex-col items-center text-neutral-400 hover:text-purple-600 transition cursor-pointer">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[8px] font-bold mt-0.5">Classes</span>
                          </button>
                        </div>
                        
                        {/* Home bar indicator */}
                        <div className="h-4 flex items-center justify-center pb-2 select-none">
                          <div className="w-24 h-1 bg-neutral-300 rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* -------------------- VIEW 3: DIGITAL ID SCREEN (Image 1) -------------------- */}
                  {appState === 'digital_id' && (
                    <div className="flex-1 bg-[#f5f6f8] text-neutral-900 flex flex-col justify-between overflow-hidden relative rounded-[38px]">
                      
                      {/* Title Bar Header */}
                      <div className="px-4 pt-10 pb-4 bg-white border-b border-neutral-100 flex items-center">
                        <button
                          onClick={() => setAppState('dashboard')}
                          className="p-1 hover:bg-neutral-100 rounded-full text-neutral-800 transition mr-4 cursor-pointer"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                        </button>
                        <span className="text-base font-extrabold text-neutral-900 tracking-wide">Digital ID</span>
                      </div>

                      {/* Digital ID Body */}
                      <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-6">
                        
                        {/* Elevated White ID Card Wrapper */}
                        <div className="w-full bg-white rounded-3xl p-6 shadow-md flex flex-col items-center space-y-4 border border-neutral-100">
                          
                          {/* Polar Bear Avatar */}
                          <div className="w-20 h-20 rounded-full border-2 border-neutral-100 shadow-2xs overflow-hidden">
                            <BearAvatar className="w-full h-full" />
                          </div>

                          {/* Student Identifiers */}
                          <div className="text-center space-y-0.5">
                            <h3 className="text-base font-black text-neutral-900 tracking-wide">{studentUser.name}</h3>
                            <p className="text-[9px] text-neutral-400 font-semibold tracking-wide select-text">{studentUser.email}</p>
                          </div>

                          {/* Large high-fidelity QR Code */}
                          <div className="w-40 h-40 bg-white p-3 rounded-2xl border border-neutral-100 flex items-center justify-center shadow-3xs">
                            <QRCode className="w-full h-full text-neutral-950" />
                          </div>

                          {/* Horizontal blue progress bar */}
                          <div className="w-full h-1 bg-neutral-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#007eff] rounded-full"
                              style={{ width: `${(qrTimer / 30) * 100}%`, transition: 'width 1s linear' }}
                            />
                          </div>

                          {/* Countdown Text */}
                          <div className="text-[10px] text-neutral-400 font-bold">
                            Updates in <span className="font-extrabold text-neutral-800">{qrTimer}s</span>
                          </div>

                        </div>

                        {/* Validity Footer */}
                        <p className="text-[10px] text-neutral-400 font-bold leading-normal">
                          This QR code is valid for 30 seconds.
                        </p>
                      </div>

                      {/* Home Pill Indicator bar */}
                      <div className="h-4 flex items-center justify-center pb-2 select-none rounded-b-[38px]">
                        <div className="w-24 h-1 bg-neutral-300 rounded-full" />
                      </div>
                    </div>
                  )}

                  {/* -------------------- VIEW 4: ADMIN PORTAL DASHBOARD (Image 3) -------------------- */}
                  {appState === 'admin' && (
                    <div className="flex-1 bg-[#f5f6f8] text-neutral-900 flex flex-col justify-between overflow-hidden relative rounded-[38px]">
                      
                      {/* Header bar */}
                      <div className="px-5 pt-10 pb-3 bg-white flex items-center justify-between shadow-2xs">
                        <div className="text-left">
                          <h1 className="text-xl font-black text-neutral-900 tracking-tight leading-none">Admin Portal</h1>
                          <p className="text-[9px] text-neutral-400 font-bold mt-1 uppercase tracking-wider">IIT (BHU) Varanasi</p>
                        </div>
                        
                        <div className="flex items-center gap-2.5">
                          {/* Bell */}
                          <button className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center text-neutral-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                          </button>
                          {/* Staff Avatar letter */}
                          <button
                            onClick={handleReset}
                            className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-black cursor-pointer hover:bg-purple-700 transition"
                            title="Log Out"
                          >
                            S
                          </button>
                        </div>
                      </div>

                      {/* Scroll Area */}
                      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 text-left scrollbar-none">
                        
                        {/* Search Input */}
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <input
                            type="text"
                            placeholder="Search students, incidents, reports..."
                            readOnly
                            className="w-full bg-white pl-10 pr-4 py-2.5 rounded-2xl text-[10px] text-neutral-600 font-semibold border-none focus:outline-none shadow-2xs"
                          />
                        </div>

                        {/* Grid items */}
                        <div className="grid grid-cols-4 gap-2 text-center pt-1">
                          {[
                            { label: 'ID Scanner', bg: 'bg-blue-100/80 text-blue-600', icon: (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM17.25 12h3.75m-3.75 3h3.75M12 21a9 9 0 1118 0" />
                            )},
                            { label: 'SOS Alerts', bg: 'bg-red-100/80 text-red-600', icon: (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.03L3.07 19.5h17.86L12 2.72zM12 15.75h.007v.008H12v-.008z" />
                            )},
                            { label: 'Users', bg: 'bg-amber-100/80 text-amber-600', icon: (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a6 6 0 00-3.44-5.24m4.94-1.8a5.5 5.5 0 10-6.96-6.96M3.28 17.5c0-2.485 5.216-4.5 11.64-4.5s11.64 2.015 11.64 4.5" />
                            )},
                            { label: 'Reports', bg: 'bg-purple-100/80 text-purple-600', icon: (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6zM13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                            )}
                          ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-1.5 cursor-pointer">
                              <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center`}>
                                <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  {item.icon}
                                </svg>
                              </div>
                              <span className="text-[9px] font-bold text-neutral-700">{item.label}</span>
                            </div>
                          ))}
                        </div>

                        {/* LIVE STATISTICS SECTION */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1 text-[9px] font-extrabold text-neutral-500 uppercase tracking-wider">
                            <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                            </svg>
                            Live Statistics
                          </div>
                          
                          {/* 3-Column stats block */}
                          <div className="bg-white rounded-2xl p-4 shadow-3xs border border-neutral-100 grid grid-cols-3 gap-2 text-center divide-x divide-neutral-100">
                            <div className="space-y-1">
                              <div className="flex justify-center text-blue-500">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                              </div>
                              <h4 className="text-sm font-black text-neutral-900">1,247</h4>
                              <p className="text-[8px] text-neutral-400 font-bold uppercase tracking-wider">Active Students</p>
                            </div>
                            
                            <div className="space-y-1 pt-0.5">
                              <div className="flex justify-center text-red-500">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              </div>
                              <h4 className="text-sm font-black text-neutral-900">3</h4>
                              <p className="text-[8px] text-neutral-400 font-bold uppercase tracking-wider">Open SOS</p>
                            </div>
                            
                            <div className="space-y-1 pt-0.5">
                              <div className="flex justify-center text-green-500">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-16v4m0 4h.01M4 16h2v10M12 8h8M4 12h2v4" />
                                </svg>
                              </div>
                              <h4 className="text-sm font-black text-neutral-900">89</h4>
                              <p className="text-[8px] text-neutral-400 font-bold uppercase tracking-wider">Today's Scans</p>
                            </div>
                          </div>
                        </div>

                        {/* RECENT ACTIVITY SECTION */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[9px] font-extrabold text-neutral-500 uppercase tracking-wider">
                            <span className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Recent Activity
                            </span>
                            <span className="text-green-600 hover:underline cursor-pointer lowercase">See all</span>
                          </div>

                          {/* List Card */}
                          <div className="bg-white rounded-2xl shadow-3xs border border-neutral-100 divide-y divide-neutral-100 p-1">
                            {[
                              { label: 'ID scanned: Rahul Sharma (CSE)', time: '2 min ago', bg: 'bg-blue-50 text-blue-600', icon: (
                                <path d="M12 4v1M18 10h2m-6 0h-2v4" />
                              )},
                              { label: 'SOS alert resolved at Hostel 4', time: '15 min ago', bg: 'bg-amber-50 text-amber-600', icon: (
                                <path d="M12 9v2m0 4h.01" />
                              )},
                              { label: 'New student registered: Priya Verma', time: '1 hr ago', bg: 'bg-green-50 text-green-600', icon: (
                                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3" />
                              )},
                              { label: 'ID scanned: Amit Kumar (ECE)', time: '1 hr ago', bg: 'bg-blue-50 text-blue-600', icon: (
                                <path d="M12 4v1M18 10h2" />
                              )},
                              { label: 'Profile updated: Dr. Singh', time: '2 hrs ago', bg: 'bg-purple-50 text-purple-600', icon: (
                                <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              )}
                            ].map((act, idx) => (
                              <div key={idx} className="p-3 flex items-center justify-between text-[9.5px]">
                                <div className="flex items-center gap-2.5">
                                  <div className={`w-7 h-7 rounded-full ${act.bg} flex items-center justify-center shrink-0`}>
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                      {act.icon}
                                    </svg>
                                  </div>
                                  <span className="font-extrabold text-neutral-800 leading-tight">{act.label}</span>
                                </div>
                                <span className="text-[8px] text-neutral-400 font-bold shrink-0">{act.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Home indicator pill */}
                      <div className="h-4 flex items-center justify-center pb-2 select-none rounded-b-[38px]">
                        <div className="w-24 h-1 bg-neutral-300 rounded-full" />
                      </div>
                    </div>
                  )}

                  {/* -------------------- VIEW 5: TIMETABLE & ATTENDANCE (Image 4 - Dark Mode) -------------------- */}
                  {appState === 'timetable' && (
                    <div className="flex-1 bg-[#121212] text-neutral-100 flex flex-col justify-between overflow-hidden relative font-sans rounded-[38px]">
                      
                      {/* Dark Header bar */}
                      <div className="px-4 pt-10 pb-4 border-b border-neutral-900 flex items-center justify-between bg-neutral-900/30">
                        <div className="flex items-center">
                          <button
                            onClick={() => setAppState('dashboard')}
                            className="p-1 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition mr-4 cursor-pointer"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                          </button>
                          <span className="text-base font-extrabold text-white tracking-wide">Timetable</span>
                        </div>
                        
                        {/* Plus add button */}
                        <button className="p-1 hover:bg-neutral-850 rounded-full text-neutral-400 hover:text-white transition cursor-pointer">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                      </div>

                      {/* Content Scroll View */}
                      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 scrollbar-none text-left">
                        
                        {/* Horizontal Day selection row */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none select-none">
                          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                            <button
                              key={day}
                              onClick={() => setActiveDay(day)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-all cursor-pointer ${
                                activeDay === day
                                  ? 'bg-[#60b0f4] text-neutral-950 font-black shadow-md'
                                  : 'text-neutral-400 hover:text-white bg-transparent'
                              }`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>

                        {/* Attendance Summary Stat Card */}
                        <div className="bg-[#2a0c0c]/40 border border-red-955/60 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                          <div className="space-y-0.5">
                            <span className="text-xl font-black text-rose-500">50.00%</span>
                            <span className="text-neutral-400 font-bold text-[9px] uppercase tracking-wider mx-2">| 75</span>
                          </div>
                          <span className="text-[10px] text-rose-400 font-bold bg-rose-950/30 border border-rose-900/50 px-2 py-0.8 rounded-full">
                            2 classes
                          </span>
                        </div>

                        {/* Subject 1 Card: ma-202 (Att: 0.00% - Warning Red) */}
                        <div className="bg-[#18181c] border border-neutral-850 rounded-2xl p-4 space-y-3.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="w-10 h-10 rounded-full bg-red-955/30 border border-red-900/40 text-red-500 font-black text-xs flex items-center justify-center">
                                0.00%
                              </span>
                              <div className="text-left leading-tight">
                                <h4 className="text-xs font-black text-white uppercase tracking-wide">ma-202</h4>
                                <p className="text-[8px] text-neutral-500 font-bold">Att: 0, Miss: 1, Off: 0, Tot: 1</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Alert notice */}
                          <div className="bg-amber-955/15 border border-amber-900/40 rounded-xl p-2.5 text-[8.5px] font-bold text-amber-500 leading-none">
                            need to attend 1 lecture
                          </div>
                        </div>

                        {/* Subject 2 Card: english (Att: 100.00% - Success Green) */}
                        <div className="bg-[#18181c] border border-neutral-850 rounded-2xl p-4 space-y-3.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="w-10 h-10 rounded-full bg-green-955/30 border border-green-900/40 text-green-500 font-black text-[10px] flex items-center justify-center">
                                100%
                              </span>
                              <div className="text-left leading-tight">
                                <h4 className="text-xs font-black text-white uppercase tracking-wide">english</h4>
                                <p className="text-[8px] text-neutral-500 font-bold">Att: 1, Miss: 0, Off: 0, Tot: 1</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Alert notice */}
                          <div className="bg-amber-955/15 border border-amber-900/40 rounded-xl p-2.5 text-[8.5px] font-bold text-amber-500 leading-none">
                            can't miss the next lecture
                          </div>
                        </div>

                        {/* Detail slots list */}
                        <div className="space-y-2 pt-2">
                          <p className="text-[8px] text-neutral-500 font-extrabold uppercase tracking-widest">Schedule Details</p>
                          <div className="bg-[#18181c] border border-neutral-850 p-3 rounded-2xl flex items-center justify-between text-[9px]">
                            <div className="space-y-0.5">
                              <span className="text-white font-black">ma-202</span>
                              <p className="text-neutral-500">18:36 - 18:36 • lt3</p>
                            </div>
                            <span className="px-2 py-0.5 bg-red-955/30 text-red-500 rounded font-black border border-red-900/30">Missed</span>
                          </div>
                        </div>

                      </div>

                      {/* Home pill bar indicator */}
                      <div className="h-4 flex items-center justify-center pb-2 select-none shrink-0 bg-transparent">
                        <div className="w-24 h-1 bg-neutral-800 rounded-full" />
                      </div>
                    </div>
                  )}

                  {/* -------------------- VIEW 6: MESS MENU SCREEN -------------------- */}
                  {appState === 'mess' && (
                    <div className="flex-1 bg-[#f5f6f8] text-neutral-900 flex flex-col justify-between overflow-hidden relative rounded-[38px]">
                      
                      {/* Header bar */}
                      <div className="px-4 pt-10 pb-4 bg-white border-b border-neutral-100 flex items-center justify-between">
                        <div className="flex items-center">
                          <button
                            onClick={() => setAppState('dashboard')}
                            className="p-1 hover:bg-neutral-100 rounded-full text-neutral-800 transition mr-4 cursor-pointer"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                          </button>
                          <span className="text-base font-extrabold text-neutral-900 tracking-wide">Mess Menu</span>
                        </div>
                        <span className="text-[9px] font-black text-green-600 bg-green-50 border border-green-200/50 px-2 py-0.5 rounded-full">
                          Hostel 2
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-left scrollbar-none">
                        
                        {/* Meal Selector Tabs */}
                        <div className="grid grid-cols-4 gap-1 bg-white p-1 rounded-xl shadow-3xs border border-neutral-100">
                          {(['breakfast', 'lunch', 'snacks', 'dinner'] as const).map((meal) => (
                            <button
                              key={meal}
                              onClick={() => setMessMeal(meal)}
                              className={`py-2 text-[9px] font-bold rounded-lg capitalize transition-all cursor-pointer ${
                                messMeal === meal
                                  ? 'bg-[#60b0f4] text-neutral-950 shadow-xs'
                                  : 'text-neutral-500 hover:text-neutral-700'
                              }`}
                            >
                              {meal}
                            </button>
                          ))}
                        </div>

                        {/* Timing info card */}
                        <div className="bg-white rounded-2xl p-4 shadow-3xs border border-neutral-100 space-y-1">
                          <h4 className="text-[9px] font-extrabold text-neutral-400 tracking-wider uppercase">Serving Schedule</h4>
                          <p className="text-xs font-black text-neutral-800 capitalize">{messMeal} Timing</p>
                          <p className="text-[10px] text-neutral-500 font-semibold">
                            {messMeal === 'breakfast' && '07:30 AM - 09:30 AM'}
                            {messMeal === 'lunch' && '12:00 PM - 02:00 PM'}
                            {messMeal === 'snacks' && '05:00 PM - 06:15 PM'}
                            {messMeal === 'dinner' && '07:30 PM - 09:30 PM'}
                          </p>
                        </div>

                        {/* Menu list card */}
                        <div className="bg-white rounded-2xl p-4 shadow-3xs border border-neutral-100 space-y-3">
                          <h4 className="text-[9px] font-extrabold text-neutral-400 tracking-wider uppercase">Today's Selection</h4>
                          <ul className="space-y-2 text-[10px] font-bold text-neutral-700">
                            {messMenus[messMeal].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Bottom indicator */}
                      <div className="h-4 flex items-center justify-center pb-2 select-none shrink-0 bg-transparent">
                        <div className="w-24 h-1 bg-neutral-300 rounded-full" />
                      </div>

                    </div>
                  )}

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete Toolkit for Campus Life
          </h2>
          <p className="text-neutral-400 font-medium text-base">
            Engineered exclusively for IIT (BHU) Varanasi. Explore our high-utility modules 
            designed to solve everyday institute workflow issues.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-neutral-900/40 border border-neutral-850 rounded-2xl p-6 transition-all duration-300 hover:bg-neutral-900/70 hover:border-neutral-700 hover:shadow-xl hover:-translate-y-1 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-all border border-neutral-750">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy CTA Banner Redesigned */}
      <section className="border-t border-neutral-900 bg-neutral-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/10 to-neutral-950 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Privacy and Trust First
            </h2>
            <p className="text-neutral-400 leading-relaxed font-medium text-sm sm:text-base">
              The Everything App values student privacy above all. No location, biometric, or scan details 
              are shared or archived beyond the designated safety parameters. Review our detailed policy.
            </p>
            <div className="pt-2">
              <Link
                to="/privacy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-850 text-white rounded-xl text-sm font-bold border border-neutral-800 hover:border-neutral-700 transition-all shadow-md cursor-pointer"
              >
                View Privacy Policy
                <svg className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
