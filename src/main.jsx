import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowRight, Building2, CalendarDays, ChevronLeft, ChevronRight, Headphones, Heart,
  LockKeyhole, MapPin, Menu, Search, ShieldCheck, ShoppingCart, Sparkles, Users, Zap, Tag, Package, Navigation,
  Speaker, UtensilsCrossed, Armchair, PartyPopper, Palette, Gift, Music, Gem, Calendar, Star, Timer, Mic, UserRound, Camera, ConciergeBell
} from 'lucide-react'
import './index.css'

const navItems = ['Explore', 'Vendors', 'Artists', 'Events', 'Packages', 'Inspiration']

import logoUrl from '../Eventit 1.png'

function Logo({ desktop = false, footer = false }) {
  return (
    <img
      src={logoUrl}
      alt="Eventit"
      className={footer ? 'footer-brand' : (desktop ? 'desktop-brand' : 'brand')}
      style={{ height: footer ? '40px' : '32px', objectFit: 'contain' }}
    />
  )
}

function Header({ activeTab, onSelectTab }) {
  return (
    <div className="header-wrapper">
      <header className="header">
      <a href="#top" className="brand-link" onClick={(e) => { e.preventDefault(); onSelectTab && onSelectTab('home') }}>
        <Logo desktop />
      </a>
      <nav className="desktop-nav">
        {navItems.map((item) => {
          const itemKey = item.toLowerCase()
          const isActive = activeTab === itemKey || (activeTab === 'home' && itemKey === 'explore')
          return (
            <div key={item} className="nav-item">
              <a 
                href={`#${itemKey}`} 
                className={isActive ? 'nav-active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  if (onSelectTab) onSelectTab(itemKey)
                }}
              >
                {item}
              </a>
            </div>
          )
        })}
      </nav>
      <div className="header-actions">
        <button aria-label="Search" className="icon-btn"><Search /></button>
        <button aria-label="Wishlist" className="icon-btn"><Heart /></button>
        <button className="cart icon-btn" aria-label="Cart, 2 items"><ShoppingCart /><span>2</span></button>
        <div className="desktop-actions">
          <button className="btn-signin">Sign In</button>
          <button className="btn-list">List Your Service</button>
        </div>
        <button className="menu icon-btn" aria-label="Open menu"><Menu /></button>
      </div>
      </header>
    </div>
  )
}

function CTA({ secondary, children }) {
  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: .98 }} className={`cta ${secondary ? 'secondary' : ''}`}>
      {children}<span><ArrowRight /></span>
    </motion.button>
  )
}

function SearchBar() {
  const fields = [
    [CalendarDays, 'What are you planning?', 'Wedding, Birthday, Corporate...'],
    [MapPin, 'Where?', 'Select Location'],
    [CalendarDays, 'When?', 'Select Date']
  ]
  return (
    <div className="search-bar">
      {fields.map(([Icon, label, placeholder]) => (
        <label className="search-field" key={label}>
          <span className="field-icon"><Icon /></span>
          <span><strong>{label}</strong><input aria-label={label} placeholder={placeholder} /></span>
        </label>
      ))}
      <button className="search-button">Search Now <Search /></button>
    </div>
  )
}

function Benefits() {
  const items = [
    [ShieldCheck, 'Direct Booking with Performers', 'Skip middleman fees & connect with artists instantly'],
    [Zap, 'Verified & Vetted Artists', 'Ratings, reviews & verified portfolio for peace of mind'],
    [Tag, 'Tailored to Your Budget', 'Flexible packages & transparent pricing with no surprises'],
    [CalendarDays, 'Instant Availability Check', 'Check real-time artist schedules & lock in dates fast']
  ]
  return (
    <div className="benefits">
      {items.map(([Icon, title, copy]) => (
        <div className="benefit" key={title}>
          <span><Icon /></span><div><strong>{title}</strong><p>{copy}</p></div>
        </div>
      ))}
    </div>
  )
}

const artistCategories = [
  { id: 'all', label: 'All Artists', icon: Music, headline: 'Event Entertainers & Artists', highlight: 'In UAE' },
  { id: 'bands', label: 'Live Bands', icon: Speaker, headline: 'Premier Live Bands & Musicians', highlight: 'In UAE' },
  { id: 'djs', label: 'DJs & Producers', icon: Headphones, headline: 'World-Class DJs & Producers', highlight: 'In UAE' },
  { id: 'singers', label: 'Solo Vocalists', icon: Sparkles, headline: 'Acoustic & Solo Vocalists', highlight: 'In UAE' },
  { id: 'performers', label: 'Acrobats & Shows', icon: PartyPopper, headline: 'Spectacular Stage Performers', highlight: 'In UAE' },
  { id: 'cultural', label: 'Cultural Acts', icon: Gem, headline: 'Heritage & Traditional Artists', highlight: 'In UAE' },
]

const featuredArtistsPreview = [
  {
    name: 'The Dubai Velvet Duo',
    category: 'Live Jazz & Acoustic Band',
    rating: '4.9',
    reviews: 142,
    tag: 'Trending in Dubai',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop',
    price: 'From AED 3,500'
  },
  {
    name: 'DJ Alex Ray',
    category: 'Corporate & Nightlife DJ',
    rating: '5.0',
    reviews: 98,
    tag: 'Available This Weekend',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
    price: 'From AED 2,800'
  },
  {
    name: 'Aura LED & Fire Show',
    category: 'Spectacular Stage Act',
    rating: '4.8',
    reviews: 76,
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop',
    price: 'From AED 4,200'
  }
]

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.419h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.636 0 5.115 1.028 6.979 2.894 1.862 1.865 2.888 4.344 2.887 6.982 0 5.446-4.431 9.877-9.877 9.876m0-18.177c-6.18 0-11.208 5.028-11.208 11.208 0 2.133.597 4.213 1.733 6.015L.5 24l7.021-1.841a11.162 11.162 0 005.523 1.455h.005c6.18 0 11.208-5.028 11.208-11.208 0-2.99-1.164-5.803-3.28-7.919A11.127 11.127 0 0012.051 3.63" fill="currentColor" />
    </svg>
  )
}

function HomeHero() {
  return (
    <div className="hero-container">
      <section className="hero-copy">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <h1>Plan Seamlessly.<br />Celebrate Beautifully.<br /><em>All in One Place.</em></h1>
          <p>Eventit connects you with trusted professionals, top rentals, amazing entertainers, delicious food and expert organizers to create <b>unforgettable events.</b></p>
          <div className="ctas"><CTA>Plan Your Event</CTA><CTA secondary>Explore Marketplace</CTA></div>
        </motion.div>
      </section>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1, duration: .7 }} role="img" aria-label="Event planner holding a tablet and coffee, surrounded by event inspiration" />
    </div>
  )
}

function ArtistsHero() {
  return (
    <div className="clean-artists-hero">
      <div className="clean-hero-overlay"></div>
      <div className="clean-hero-content">
        <motion.h1 
          className="clean-hero-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Event Entertainers & Artists In UAE
        </motion.h1>

        <motion.p 
          className="clean-hero-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          From artists to on-ground services, everything your event needs—handled seamlessly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <button className="btn-hafla-ai-clean">
            <span className="whatsapp-badge-icon"><WhatsAppIcon /></span>
            <span>Plan with Eventit AI</span>
          </button>
        </motion.div>
      </div>

      {/* Smooth Wavy Bottom Divider */}
      <div className="hero-wave-divider">
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,45 C320,95 640,5 960,65 C1200,100 1360,45 1440,30 L1440,90 L0,90 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Floating WhatsApp Quick-Action Button */}
      <a href="#whatsapp" className="floating-whatsapp-btn" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  )
}

function BrandPartnersSection() {
  const brands = [
    {
      name: 'MANDARIN ORIENTAL',
      sub: 'JUMEIRA DUBAI',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#b38e46">
          <path d="M12 2L15 8L21 9L16.5 13.5L18 19.5L12 16L6 19.5L7.5 13.5L3 9L9 8L12 2Z" fillOpacity="0.85"/>
        </svg>
      )
    },
    {
      name: 'One&Only',
      sub: 'ROYAL MIRAGE',
      serif: true
    },
    {
      name: 'FOUR SEASONS',
      sub: 'HOTELS AND RESORTS',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#333">
          <path d="M12 3L4 18H20L12 3Z"/>
        </svg>
      )
    },
    {
      name: 'IHG',
      sub: 'HOTELS & RESORTS',
      bold: true
    },
    {
      name: 'Hilton',
      sub: 'HOTELS & RESORTS',
      serif: true,
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#002b49">
          <path d="M6 4H9V10H15V4H18V20H15V13H9V20H6V4Z"/>
        </svg>
      )
    },
    {
      name: 'Marriott',
      sub: 'HOTELS & RESORTS',
      serif: true,
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#b91c1c">
          <path d="M4 6H8L12 14L16 6H20V18H17V10L13 18H11L7 10V18H4V6Z"/>
        </svg>
      )
    },
    {
      name: 'MILLENNIUM',
      sub: 'HOTELS AND RESORTS',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#b91c1c">
          <path d="M4 4H7V20H4V4ZM10 4H14V20H10V4ZM17 4H20V20H17V4Z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="brand-partners-section">
      <h2 className="brand-partners-title">Our Brand Partners</h2>
      <div className="brand-partners-container">
        <div className="brand-partners-row">
          {brands.map((b, i) => (
            <div className="brand-partner-card" key={i}>
              {b.icon && <div className="brand-logo-icon">{b.icon}</div>}
              <span className={`brand-name ${b.serif ? 'serif' : ''} ${b.bold ? 'bold-lh' : ''}`}>{b.name}</span>
              <span className="brand-sub">{b.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DancerIcon({ className = "w-5 h-5 text-purple-300" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v6" />
      <path d="M6 9l6 2 6-2" />
      <path d="M8 20l4-8 4 8" />
    </svg>
  )
}

function MaskIcon({ className = "w-5 h-5 text-purple-300" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6c0 8 4 14 8 14s8-6 8-14H4z" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
      <path d="M9 15c1.5 1.5 4.5 1.5 6 0" />
    </svg>
  )
}

const entertainerOccasionsData = [
  {
    number: '01',
    title: 'Hosts & DJs',
    description: 'Engaging hosts and dynamic DJs to set the perfect tone.',
    image: '/hosts_djs.jpg',
    icon: Mic,
    rotationClass: 'lg:rotate-[3.5deg]',
    benefitIcon: Star,
    benefitTitle: 'Professional',
    benefitSubtitle: 'Performers',
    isCenter: false
  },
  {
    number: '02',
    title: 'Live Music',
    description: 'From soulful melodies to high-energy bands, live music that connects.',
    image: '/live_music.jpg',
    icon: Music,
    rotationClass: 'lg:-rotate-[2.5deg]',
    benefitIcon: ShieldCheck,
    benefitTitle: 'Trusted &',
    benefitSubtitle: 'Reliable',
    isCenter: false
  },
  {
    number: '03',
    title: 'Dance Performances',
    description: 'Spectacular dance acts that add energy, color and excitement to your event.',
    image: '/dance_performances.jpg',
    icon: DancerIcon,
    rotationClass: 'rotate-0',
    benefitIcon: Users,
    benefitTitle: 'Tailored for Every',
    benefitSubtitle: 'Event',
    isCenter: true
  },
  {
    number: '04',
    title: 'Special & Roaming Acts',
    description: 'Unique acts and roaming performers that surprise and delight your guests.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    icon: Gift,
    rotationClass: 'lg:rotate-[2.5deg]',
    benefitIcon: Heart,
    benefitTitle: 'Guests Love,',
    benefitSubtitle: 'Memories Last',
    isCenter: false
  },
  {
    number: '05',
    title: 'Cultural Entertainment',
    description: 'Celebrate traditions with authentic cultural performances.',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop',
    icon: MaskIcon,
    rotationClass: 'lg:-rotate-[3.5deg]',
    benefitIcon: Sparkles,
    benefitTitle: 'Entertainment',
    benefitSubtitle: 'That Stands Out',
    isCenter: false
  }
]

function ArtistEntertainmentOccasions({ onSelectTab }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#070611] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-[-100px] w-[450px] h-[450px] bg-purple-900/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-20 right-[-120px] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Dotted Matrix (Top-Left) */}
      <div className="absolute top-8 left-8 opacity-25 pointer-events-none hidden sm:block">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#A855F7" />
            ))
          )}
        </svg>
      </div>

      {/* Decorative Circular Arcs (Top-Right) */}
      <div className="absolute top-0 right-0 opacity-20 pointer-events-none hidden md:block overflow-hidden w-64 h-64">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" className="translate-x-12 -translate-y-12">
          <circle cx="200" cy="100" r="70" stroke="#A855F7" strokeWidth="1" />
          <circle cx="200" cy="100" r="120" stroke="#A855F7" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="100" r="170" stroke="#A855F7" strokeWidth="1" />
        </svg>
      </div>

      {/* Floating 3D Purple Orbs */}
      <motion.div 
        className="absolute top-16 right-10 lg:right-24 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-950 shadow-[0_10px_30px_rgba(147,51,234,0.6)] blur-[0.5px] pointer-events-none z-10 opacity-80"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 left-4 lg:left-12 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-700 to-slate-950 shadow-[0_10px_35px_rgba(168,85,247,0.5)] blur-[0.5px] pointer-events-none z-10 opacity-70"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Heading */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-14 sm:mb-20 relative z-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.15] text-white mb-4 sm:mb-5">
          Event Entertainment &<br />
          Performers for <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">Every Occasion</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-300/80 max-w-2xl mx-auto leading-relaxed mb-4">
          From high-energy performances to immersive experiences,<br className="hidden sm:inline" />
          we bring the perfect entertainment to make your event <span className="text-purple-400 font-semibold">unforgettable.</span>
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-4">
          <span className="w-9 h-1 rounded-full bg-gradient-to-r from-purple-600 to-purple-400"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
        </div>
      </motion.div>

      {/* Desktop & Tablet Panels Grid */}
      <div className="hidden md:block relative z-20 max-w-[1380px] mx-auto">
        <div className="flex justify-center items-end gap-3 lg:gap-4 xl:gap-5 px-2">
          {entertainerOccasionsData.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.title}
                onClick={() => {
                  if (item.title === 'Live Music' && onSelectTab) {
                    onSelectTab('live-music')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[26px] cursor-pointer transition-all duration-500 ease-out ${item.rotationClass} w-[210px] lg:w-[245px] xl:w-[260px] h-[450px] lg:h-[490px] z-20 bg-gradient-to-b from-[#180e33]/90 via-[#0e071e]/95 to-[#070510]/98 border border-purple-500/25 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-purple-400/80 hover:shadow-[0_20px_45px_rgba(147,51,234,0.45)]`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -14, rotate: 0 }}
              >
                {/* Upper Content */}
                <div className="p-5 lg:p-6 relative z-20 flex flex-col h-full justify-between">
                  <div>
                    {/* Header Row: Icon & Translucent Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 bg-purple-950/60 border-purple-400/40 text-purple-300 group-hover:border-purple-300 group-hover:text-white">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-extrabold tracking-tight transition-colors duration-300 text-2xl text-purple-500/50 group-hover:text-purple-300">
                        {item.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white mb-2 leading-tight transition-transform duration-300 text-xl">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs lg:text-sm text-slate-300/80 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Image in lower portion */}
                  <div className="relative w-full h-[200px] lg:h-[230px] rounded-2xl overflow-hidden mt-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070510] via-[#070510]/40 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Bottom Center Node */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 z-30 bg-purple-500 border-purple-200 shadow-[0_0_12px_#a855f7] group-hover:bg-fuchsia-400 group-hover:scale-125" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Dotted Connector & Benefit Line */}
        <motion.div 
          className="mt-6 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {/* Subtle horizontal dashed connector line */}
          <div className="absolute top-[28px] left-[10%] right-[10%] pointer-events-none z-0">
            <svg className="w-full h-8 text-purple-500/30" viewBox="0 0 1000 30" fill="none" preserveAspectRatio="none">
              <path d="M 0,10 Q 500,30 1000,10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>
          </div>

          <div className="flex justify-between items-start max-w-[1300px] mx-auto px-4 relative z-10">
            {entertainerOccasionsData.map((item) => {
              const BenefitIcon = item.benefitIcon
              return (
                <div key={item.number} className="flex flex-col items-center text-center w-[180px] group cursor-pointer">
                  {/* Vertical Dotted Line */}
                  <div className="w-0 h-6 border-l-2 border-dotted border-purple-400/50 mb-2 group-hover:border-purple-300 transition-colors" />

                  {/* Icon Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#180a30] border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(147,51,234,0.25)] mb-2 group-hover:border-purple-300 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <BenefitIcon className="w-5 h-5" />
                  </div>

                  {/* Label */}
                  <div className="text-xs font-semibold text-white leading-tight">
                    {item.benefitTitle}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight">
                    {item.benefitSubtitle}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Mobile Swipe Carousel Layout (< 768px) */}
      <div className="md:hidden relative z-20">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 no-scrollbar scroll-smooth">
          {entertainerOccasionsData.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.title}
                onClick={() => {
                  if (item.title === 'Live Music' && onSelectTab) {
                    onSelectTab('live-music')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className="snap-center shrink-0 w-[82vw] max-w-[320px] flex flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-b from-[#180e33]/95 via-[#0e071e]/95 to-[#070510]/98 border border-purple-500/30 p-5 cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-full bg-purple-950/60 border border-purple-400/40 flex items-center justify-center text-purple-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-2xl font-extrabold text-purple-400/60">{item.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-300/80 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="relative w-full h-[190px] rounded-xl overflow-hidden mt-auto">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070510] via-transparent to-transparent" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Benefits Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 mt-6 pt-6 border-t border-purple-900/40">
          {entertainerOccasionsData.map((item) => {
            const BenefitIcon = item.benefitIcon
            return (
              <div key={item.number} className="flex items-center gap-3 p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20">
                <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 shrink-0">
                  <BenefitIcon className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="block font-semibold text-white leading-tight">{item.benefitTitle}</span>
                  <span className="text-[11px] text-slate-400 leading-tight">{item.benefitSubtitle}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function OudIcon({ className = "w-6 h-6 text-white" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c4.4 0 8-3.6 8-8 0-4-3-7.5-6.5-8.8L12 3l-1.5 1.2C7 5.5 4 9 4 13c0 4.4 3.6 8 8 8z" />
      <circle cx="12" cy="13" r="2.5" />
      <line x1="12" y1="3" x2="12" y2="10.5" />
      <line x1="10.5" y1="5" x2="10.5" y2="11" />
      <line x1="13.5" y1="5" x2="13.5" y2="11" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  )
}

function DallahIcon({ className = "w-6 h-6 text-white" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10l-1-7H8l-1 7z" />
      <path d="M8 13c0-3 1.8-5 4-5s4 2 4 5" />
      <path d="M10 8c0-2 1-3.5 2-4.5 1 1 2 2.5 2 4.5" />
      <circle cx="12" cy="2.5" r="1" />
      <path d="M7 14C3.5 12 3 8 6 5" />
      <path d="M17 14c3-1.5 3.5-5.5 1-8" />
    </svg>
  )
}

function IslamicStarOrnament({ className = "w-6 h-6 text-purple-400" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="1" transform="rotate(45 12 12)" />
      <rect x="6" y="6" width="12" height="12" rx="1" />
      <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.6" />
    </svg>
  )
}

function RamadanLantern({ className = "w-10 h-24 text-purple-400/70" }) {
  return (
    <svg className={className} viewBox="0 0 40 100" fill="none" stroke="currentColor" strokeWidth="1.2">
      <line x1="20" y1="0" x2="20" y2="25" strokeDasharray="2 2" />
      <circle cx="20" cy="27" r="2.5" fill="currentColor" />
      <path d="M12 34 L20 29.5 L28 34 L25 38 L15 38 Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M14 38 L8 58 L20 70 L32 58 L26 38 Z" fill="currentColor" fillOpacity="0.2" />
      <line x1="20" y1="38" x2="20" y2="70" />
      <line x1="14" y1="38" x2="8" y2="58" />
      <line x1="26" y1="38" x2="32" y2="58" />
      <circle cx="20" cy="54" r="3" fill="#f0abfc" stroke="none" />
      <path d="M17 70 L20 75 L23 70" />
      <line x1="20" y1="75" x2="20" y2="88" />
      <circle cx="20" cy="89" r="1.5" fill="currentColor" />
    </svg>
  )
}

function IslamicMandalaPattern({ className = "w-40 h-40 text-purple-400/10" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
      <circle cx="50" cy="50" r="45" />
      <circle cx="50" cy="50" r="35" strokeDasharray="2 2" />
      <circle cx="50" cy="50" r="25" />
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 50 50)`}>
          <path d="M50,5 C55,20 55,30 50,35 C45,30 45,20 50,5 Z" fill="currentColor" fillOpacity="0.08" />
          <line x1="50" y1="5" x2="50" y2="25" />
        </g>
      ))}
    </svg>
  )
}

function RamadanPerformancesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#06040D] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Subtle purple radial background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-purple-900/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[550px] h-[550px] bg-fuchsia-950/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Islamic Arch Line-Art Framing on Far Left & Right Edges */}
      <div className="absolute top-12 left-0 pointer-events-none hidden lg:block opacity-20">
        <svg width="120" height="500" viewBox="0 0 120 500" fill="none" stroke="#A855F7" strokeWidth="1">
          <path d="M0,0 Q90,120 90,250 Q90,380 0,500" strokeDasharray="4 4" />
          <path d="M0,40 Q60,140 60,250 Q60,360 0,460" />
          <circle cx="60" cy="250" r="4" fill="#A855F7" />
        </svg>
      </div>
      <div className="absolute top-12 right-0 pointer-events-none hidden lg:block opacity-20 transform scale-x-[-1]">
        <svg width="120" height="500" viewBox="0 0 120 500" fill="none" stroke="#A855F7" strokeWidth="1">
          <path d="M0,0 Q90,120 90,250 Q90,380 0,500" strokeDasharray="4 4" />
          <path d="M0,40 Q60,140 60,250 Q60,360 0,460" />
          <circle cx="60" cy="250" r="4" fill="#A855F7" />
        </svg>
      </div>

      {/* Floating Hanging Ramadan Lanterns */}
      {/* Left Lanterns */}
      <motion.div 
        className="absolute top-0 left-6 sm:left-12 z-10 pointer-events-none hidden sm:block opacity-85"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <RamadanLantern className="w-10 h-28 text-purple-400" />
      </motion.div>
      <motion.div 
        className="absolute top-12 left-20 sm:left-32 z-0 pointer-events-none hidden md:block opacity-40 blur-[1px]"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <RamadanLantern className="w-7 h-20 text-purple-500" />
      </motion.div>

      {/* Right Lanterns */}
      <motion.div 
        className="absolute top-0 right-6 sm:right-12 z-10 pointer-events-none hidden sm:block opacity-85"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <RamadanLantern className="w-10 h-28 text-purple-400" />
      </motion.div>
      <motion.div 
        className="absolute top-12 right-20 sm:right-32 z-0 pointer-events-none hidden md:block opacity-40 blur-[1px]"
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <RamadanLantern className="w-7 h-20 text-purple-500" />
      </motion.div>

      {/* Section Header Container */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-14 relative z-20"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Geometric Islamic Ornament Above Heading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-purple-400/80" />
          <IslamicStarOrnament className="w-5 h-5 text-purple-400" />
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-purple-500/50 to-purple-400/80" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.18] text-white mb-4 font-serif">
          Curated Performances for<br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
            Ramadan Evenings
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          Thoughtfully selected artists and experiences that honour the spirit,<br className="hidden sm:inline" />
          culture, and calm of Ramadan.
        </p>

        {/* Decorative Divider Under Subheading */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-purple-500/40" />
          <span className="w-1.5 h-1.5 rotate-45 bg-purple-400" />
          <IslamicStarOrnament className="w-4 h-4 text-purple-300" />
          <span className="w-1.5 h-1.5 rotate-45 bg-purple-400" />
          <span className="w-8 h-[1px] bg-purple-500/40" />
        </div>
      </motion.div>

      {/* Main Two-Panel Feature Showcase */}
      <div className="relative z-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT PANEL: Arabic Entertainers */}
          <motion.div 
            className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-gradient-to-b from-[#160a2c]/95 via-[#100622]/95 to-[#090317]/98 border border-purple-500/50 shadow-[0_0_30px_rgba(147,51,234,0.2),0_15px_50px_rgba(0,0,0,0.6)] hover:border-purple-400 hover:shadow-[0_0_45px_rgba(168,85,247,0.4)] transition-all duration-700 ease-out cursor-pointer"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            {/* Corner Islamic Mandala Texture */}
            <div className="absolute bottom-0 right-0 pointer-events-none opacity-10 transition-opacity duration-500 group-hover:opacity-20">
              <IslamicMandalaPattern className="w-56 h-56 text-purple-300" />
            </div>

            {/* Upper Photography Area */}
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[370px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1600&auto=format&fit=crop" 
                alt="Arabic Entertainers" 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120726] via-[#120726]/30 to-transparent pointer-events-none" />

              {/* Floating Oud Icon Circle */}
              <motion.div 
                className="absolute top-6 left-6 w-14 h-14 rounded-full bg-purple-950/75 border border-purple-300/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] z-20"
                whileHover={{ y: -3 }}
              >
                <OudIcon className="w-7 h-7 text-purple-200" />
              </motion.div>

              {/* S-Wave Curved Mask Divider */}
              <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
                <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-14 sm:h-20 text-[#120726] fill-current">
                  <path d="M0,20 Q 250,85 500,10 L500,80 L0,80 Z" />
                </svg>
              </div>
            </div>

            {/* Lower Content Area */}
            <div className="p-7 sm:p-9 relative z-20 pt-0 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight font-serif">
                  Arabic Entertainers
                </h3>
                
                {/* Small Decorative Accent */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-[1px] bg-purple-400/60" />
                  <span className="w-1.5 h-1.5 rotate-45 bg-purple-400" />
                  <span className="w-6 h-[1px] bg-purple-400/60" />
                </div>

                <p className="text-sm sm:text-base text-slate-300/85 font-normal leading-relaxed max-w-lg">
                  Live performances rooted in Arabic culture—from soulful oud melodies to traditional dance forms that elevate the atmosphere.
                </p>
              </div>
            </div>

            {/* Bottom Glow Bar Accent */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* RIGHT PANEL: Arabic Services */}
          <motion.div 
            className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-gradient-to-b from-[#160a2c]/95 via-[#100622]/95 to-[#090317]/98 border border-purple-500/50 shadow-[0_0_30px_rgba(147,51,234,0.2),0_15px_50px_rgba(0,0,0,0.6)] hover:border-purple-400 hover:shadow-[0_0_45px_rgba(168,85,247,0.4)] transition-all duration-700 ease-out cursor-pointer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            {/* Corner Islamic Mandala Texture */}
            <div className="absolute bottom-0 right-0 pointer-events-none opacity-10 transition-opacity duration-500 group-hover:opacity-20">
              <IslamicMandalaPattern className="w-56 h-56 text-purple-300" />
            </div>

            {/* Upper Photography Area */}
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[370px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1600&auto=format&fit=crop" 
                alt="Arabic Services" 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120726] via-[#120726]/30 to-transparent pointer-events-none" />

              {/* Floating Dallah Coffee Pot Icon Circle */}
              <motion.div 
                className="absolute top-6 left-6 w-14 h-14 rounded-full bg-purple-950/75 border border-purple-300/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] z-20"
                whileHover={{ y: -3 }}
              >
                <DallahIcon className="w-7 h-7 text-purple-200" />
              </motion.div>

              {/* Mirrored S-Wave Curved Mask Divider */}
              <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
                <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-14 sm:h-20 text-[#120726] fill-current">
                  <path d="M0,10 Q 250,85 500,20 L500,80 L0,80 Z" />
                </svg>
              </div>
            </div>

            {/* Lower Content Area */}
            <div className="p-7 sm:p-9 relative z-20 pt-0 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight font-serif">
                  Arabic Services
                </h3>
                
                {/* Small Decorative Accent */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-[1px] bg-purple-400/60" />
                  <span className="w-1.5 h-1.5 rotate-45 bg-purple-400" />
                  <span className="w-6 h-[1px] bg-purple-400/60" />
                </div>

                <p className="text-sm sm:text-base text-slate-300/85 font-normal leading-relaxed max-w-lg">
                  Authentic cultural services that bring tradition to life through hospitality, craft, and ceremonial experiences.
                </p>
              </div>
            </div>

            {/* Bottom Glow Bar Accent */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          </motion.div>

        </div>

        {/* Center Connection Star Detail Between Both Panels */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 bottom-8 -translate-x-1/2 pointer-events-none z-30">
          <div className="w-9 h-9 rounded-full bg-[#180a30] border border-purple-400/70 flex items-center justify-center shadow-[0_0_20px_#c026d3]">
            <IslamicStarOrnament className="w-5 h-5 text-fuchsia-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

const specialistCardsData = [
  {
    number: "01",
    title: "Event Specialists",
    description: "Experienced event experts who plan, manage and execute unforgettable experiences.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    icon: UserRound,
    rotationClass: "lg:rotate-[3deg]"
  },
  {
    number: "02",
    title: "Art & Crafts",
    description: "Creative artists and crafters who add colour, culture and personality to every event.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
    icon: Palette,
    rotationClass: "lg:-rotate-[2deg]"
  },
  {
    number: "03",
    title: "Wellness & Beauty",
    description: "Professional beauty and wellness experts dedicated to enhancing comfort and confidence.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    icon: Sparkles,
    rotationClass: "rotate-0"
  },
  {
    number: "04",
    title: "Photographers &\nVideographers",
    description: "Capturing every moment with creativity and precision to tell your event's story.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    icon: Camera,
    rotationClass: "lg:rotate-[2deg]"
  },
  {
    number: "05",
    title: "Traditional Services",
    description: "Trusted traditional service providers who bring authenticity and excellence to every celebration.",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop",
    icon: ConciergeBell,
    rotationClass: "lg:-rotate-[3deg]"
  }
]

function EventSpecialistsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070511] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Background Radial Glows & Waves */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-[-100px] w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-100px] w-[450px] h-[450px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Wave Lines behind cards */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0 opacity-20">
        <svg className="w-full h-48 text-purple-500/40" viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none">
          <path d="M 0,100 Q 300,20 600,100 T 1200,100" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 0,140 Q 300,60 600,140 T 1200,140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Faint Dotted Matrix at bottom corners */}
      <div className="absolute bottom-8 left-8 opacity-15 pointer-events-none hidden sm:block">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#A855F7" />
            ))
          )}
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-15 pointer-events-none hidden sm:block">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#A855F7" />
            ))
          )}
        </svg>
      </div>

      {/* Top Small Ornament Composition: ──── ◇ ─── ★ ─── ◇ ──── */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-20"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-12 sm:w-16 h-[1px] bg-purple-500/40" />
          <span className="w-2.5 h-2.5 rotate-45 border border-purple-400/80" />
          <span className="w-10 sm:w-14 h-[1px] bg-purple-500/40" />
          <div className="w-7 h-7 rounded-full bg-purple-950/80 border border-purple-400/60 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
            <Star className="w-3.5 h-3.5 fill-purple-300" />
          </div>
          <span className="w-10 sm:w-14 h-[1px] bg-purple-500/40" />
          <span className="w-2.5 h-2.5 rotate-45 border border-purple-400/80" />
          <span className="w-12 sm:w-16 h-[1px] bg-purple-500/40" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.15] text-white mb-4">
          Explore Event Specialists &<br />
          <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Professional Staff for Event
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          From creative experts to skilled professionals,<br className="hidden sm:inline" />
          find everything you need to bring your event to life.
        </p>

        {/* EventIt Two Short Lines Divider */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-10 h-1 rounded-full bg-purple-500" />
          <span className="w-2.5 h-1 rounded-full bg-purple-400" />
        </div>
      </motion.div>

      {/* Desktop 5-Card Showcase Layout */}
      <div className="hidden md:block relative z-20 max-w-[1500px] mx-auto pt-4">
        <div className="flex justify-center items-stretch gap-4 lg:gap-5 xl:gap-6 px-2">
          {specialistCardsData.map((card, idx) => {
            return (
              <motion.div
                key={card.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[30px] cursor-pointer transition-all duration-600 ease-out ${card.rotationClass} w-[220px] lg:w-[260px] xl:w-[275px] min-h-[560px] lg:min-h-[600px] bg-gradient-to-b from-[#160a2c]/95 via-[#0e071e]/95 to-[#070510]/98 border border-purple-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(168,85,247,0.45)]`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, rotate: 0 }}
              >
                {/* Upper Photography Area with Organic Curved Mask */}
                <div className="relative w-full h-[290px] lg:h-[320px] overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e071e] via-[#0e071e]/30 to-transparent pointer-events-none" />

                  {/* Organic Wave Divider Mask at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
                    <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-14 text-[#0e071e] fill-current">
                      <path d="M0,30 Q 250,75 500,20 L500,80 L0,80 Z" />
                    </svg>
                  </div>
                </div>

                {/* Lower Content Area */}
                <div className="p-6 relative z-20 flex flex-col justify-between flex-1">
                  <div>
                    {/* Category Number */}
                    <div className="text-purple-400 font-extrabold text-3xl lg:text-4xl mb-1 tracking-tight group-hover:text-purple-300 transition-colors">
                      {card.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight font-sans whitespace-pre-line">
                      {card.title}
                    </h3>

                    {/* Decorative Line: ━━━━ • ━ */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-7 h-[2px] bg-purple-500/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
                      <span className="w-3 h-[2px] bg-purple-500/50" />
                    </div>

                    {/* Description */}
                    <p className="text-xs lg:text-sm text-slate-300/80 font-normal leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Concentrated Purple Bottom Border Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-purple-400 shadow-[0_0_15px_#c026d3] z-30 group-hover:w-36 group-hover:bg-fuchsia-400 transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile Horizontal Swipe Experience (< 768px) */}
      <div className="md:hidden relative z-20 pt-4">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 no-scrollbar scroll-smooth">
          {specialistCardsData.map((card, idx) => {
            return (
              <motion.div
                key={card.title}
                className="snap-center shrink-0 w-[82vw] max-w-[320px] flex flex-col justify-between overflow-hidden rounded-[26px] bg-gradient-to-b from-[#160a2c]/95 via-[#0e071e]/95 to-[#070510]/98 border border-purple-500/40 p-5 relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="relative w-full h-[180px] rounded-2xl overflow-hidden mb-4">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e071e] via-transparent to-transparent" />
                </div>

                <div>
                  <div className="text-purple-400 font-extrabold text-2xl mb-1">{card.number}</div>
                  <h3 className="text-xl font-bold text-white mb-2 whitespace-pre-line">{card.title}</h3>
                  <p className="text-xs text-slate-300/80 leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const whyChooseItems = [
  {
    title: 'BEST PRICE GUARANTEE',
    icon: <Tag size={32} className="why-icon" />
  },
  {
    title: 'UNLIMITED SUPPLIES',
    icon: <Gift size={32} className="why-icon" />
  },
  {
    title: 'TRUSTED QUALITY PARTNERS',
    icon: <ShieldCheck size={32} className="why-icon" />
  },
  {
    title: 'FAST CUSTOMER SERVICE',
    icon: <Headphones size={32} className="why-icon" />
  },
  {
    title: 'TIMELY DELIVERY',
    icon: <Timer size={32} className="why-icon" />
  }
]

function WhyChooseEventitSection() {
  return (
    <section className="why-choose-section">
      <div className="why-header">
        <h2 className="why-title">WHY CHOOSE EVENTIT</h2>
        <p className="why-subtitle">
          UAE's largest event services team with 20,000+ events enabled. Whether it's a gala dinner or a wedding ceremony, and whether you need a venue or an artist, Eventit will help you get it with no stress.
        </p>
        <div className="occasions-title-line">
          <span className="line-primary"></span>
          <span className="line-secondary"></span>
        </div>
      </div>
      <div className="why-container">
        <div className="why-grid">
          {whyChooseItems.map((item) => (
            <motion.div 
              key={item.title} 
              className="why-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="why-icon-circle">
                <span className="sparkle-dot s1">✨</span>
                <span className="sparkle-dot s2">✦</span>
                <span className="sparkle-dot s3">★</span>
                {item.icon}
              </div>
              <h3 className="why-card-title">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqData = [
  {
    question: 'How can I hire event entertainers through Eventit?',
    answer: 'You can hire event entertainers through Eventit by browsing the available performers on the platform and selecting the one that fits your event. Simply explore entertainers such as DJs, musicians, dancers, or MCs, submit a booking request, and the Eventit team will help confirm the details for your event.'
  },
  {
    question: 'Do entertainers bring their own equipment and setup?',
    answer: 'Yes! Most entertainers provide their own instruments, sound equipment, wireless mics, and basic performance setups. If your venue requires specialized staging or high-output AV production, our Eventit production team can seamlessly coordinate all technical requirements.'
  },
  {
    question: 'What happens if an entertainer cancels or is unavailable at the last minute?',
    answer: 'Eventit provides a 100% Artist Replacement Guarantee. In the rare event of an emergency or last-minute cancellation, our team immediately dispatches a verified replacement artist of equal or higher caliber at no additional cost.'
  },
  {
    question: 'Can Eventit help me choose the right entertainment for my event type and audience?',
    answer: 'Absolutely! Our event entertainment specialists and AI Assistant analyze your event theme, guest demographic, venue size, and budget to curate tailored artist recommendations.'
  },
  {
    question: 'Can I watch sample videos or past performances before booking an entertainer?',
    answer: 'Yes! Every artist profile on Eventit includes high-definition performance videos, audio clips, song lists, past client reviews, and verified ratings so you can book with complete confidence.'
  }
]

function ArtistFAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section-wrapper">
      <h2 className="faq-title">Frequently asked questions</h2>
      <div className="faq-container">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={idx} className={`faq-card ${isOpen ? 'active' : ''}`}>
              <button 
                className="faq-question-btn" 
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className="faq-icon-indicator">{isOpen ? '✕' : '+'}</span>
              </button>
              {isOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.25 }}
                  className="faq-answer-content"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function LiveMusicPage({ onSelectTab }) {
  return (
    <main className="site-wrapper" id="top">
      <Header activeTab="live-music" onSelectTab={onSelectTab} />
      
      <section className="relative w-full bg-[#070511] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen font-sans overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-fuchsia-900/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb / Back button */}
          <button 
            onClick={() => onSelectTab && onSelectTab('artists')} 
            className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-white mb-8 px-5 py-2.5 rounded-full bg-purple-950/60 border border-purple-500/40 hover:border-purple-400 transition-all shadow-[0_0_15px_rgba(147,51,234,0.2)] cursor-pointer"
          >
            <ChevronLeft size={16} /> Back to Performers
          </button>

          {/* Artist Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
            {/* Left Copy */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                <Music size={14} /> Singer • Songwriter • Poet • Multidisciplinary Artist
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none font-serif">
                YAL <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">SOLAN</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-8 max-w-2xl font-light">
                Lebanese singer, songwriter, poet and multidisciplinary artist bringing together soulful vocals, oriental roots, alternative sounds and mystical influences.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all cursor-pointer flex items-center gap-2">
                  <Calendar size={18} /> Book Yal Solan
                </button>
                <a href="#artist-gallery" className="px-7 py-3.5 rounded-full bg-purple-950/60 border border-purple-500/40 hover:border-purple-300 text-purple-200 font-medium transition-all flex items-center gap-2">
                  <Music size={16} /> Experience Live
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image Gallery Grid */}
            <motion.div 
              className="lg:col-span-5 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group h-[320px] sm:h-[380px]">
                <img src="/yal-1.jpeg" alt="Yal Solan Performance 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070510] via-transparent to-transparent opacity-60" />
              </div>
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group h-[320px] sm:h-[380px] translate-y-6">
                <img src="/yal-2.jpeg" alt="Yal Solan Performance 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070510] via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>

          {/* Section Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-16" />

          {/* ARTIST BIOGRAPHY SECTION */}
          <motion.div 
            className="mb-20 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-purple-500" />
              <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400">ARTIST BIOGRAPHY</h2>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 font-serif leading-tight">
              Soulful Vocals, Oriental Roots & <span className="text-purple-400">Mystical Influences</span>
            </h3>

            <div className="bg-gradient-to-b from-[#140a2a]/80 via-[#0e071e]/90 to-[#070510]/95 border border-purple-500/30 rounded-[32px] p-7 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-6 text-slate-300/90 text-base sm:text-lg font-light leading-relaxed">
              <p>
                Yal Solan is a Lebanese singer, songwriter, poet and multidisciplinary artist whose music brings together soulful vocals, oriental roots, alternative sounds and mystical influences.
              </p>
              <p>
                Her artistic journey began at university, where she joined a chamber choir and discovered her voice. Since then, she has developed a distinctive musical identity that moves between Arabic and English, combining ethereal vocals with oriental and contemporary sounds.
              </p>
              <p>
                Yal first gained wider recognition in the Arab world through “Chou Original,” the theme song of Salon Zahra, performed in collaboration with her mentor Mike Massy. Since 2022, she has released original music including “Silent Fireworks,” “Toss & Turn,” “La7ali,” “Manam” and “Ya Enay Kafak Alam.”
              </p>
              <p>
                Her work extends beyond music into animation, graphic design, acting, modelling and voice-over, creating a multidimensional artistic presence that connects visual storytelling, performance and music.
              </p>
              <p className="text-purple-200 font-normal italic border-l-2 border-purple-500 pl-4 py-1">
                “Yal's sound is intimate, atmospheric and deeply expressive — making every performance an opportunity to connect, discover and feel.”
              </p>
            </div>
          </motion.div>

          {/* Section Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-16" />

          {/* PERFORMANCE DETAILS SECTION */}
          <motion.div 
            className="mb-20 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-purple-500" />
              <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400">PERFORMANCE DETAILS</h2>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-serif leading-tight">
              A UNIQUE LIVE MUSIC EXPERIENCE
            </h3>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-10 font-light">
              Yal performs either as a solo Artists with an ensemble band, bringing her original music and distinctive fusion of oriental and contemporary sounds to live audiences. Her performances have been presented at cultural and artistic events including Sofar Sounds, Fête de la Musique, Metro Al Madina, Raseef22 and XP Music Futures in Riyadh.
            </p>

            {/* PERFORMANCE STYLE & HIGHLIGHTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Style Card */}
              <div className="bg-gradient-to-b from-[#160b2e]/90 to-[#080414]/95 border border-purple-500/30 rounded-[28px] p-7 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                <h4 className="text-xl font-bold text-white mb-3">PERFORMANCE STYLE</h4>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Soul', 'Alternative', 'World Music', 'Oriental Fusion'].map((style) => (
                    <span key={style} className="px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-400/40 text-purple-300 text-xs font-semibold">
                      {style}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <Sparkles size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Original Yal Solan compositions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Arabic & English songs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Soulful and atmospheric vocal performances</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Oriental-inspired sounds</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Contemporary alternative music</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Selected covers adapted to the character of the event</span>
                  </li>
                </ul>
              </div>

              {/* Ideal For Card */}
              <div className="bg-gradient-to-b from-[#160b2e]/90 to-[#080414]/95 border border-purple-500/30 rounded-[28px] p-7 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                <h4 className="text-xl font-bold text-white mb-6">IDEAL FOR</h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Corporate Events',
                    'Private Events',
                    'Brand Activations',
                    'Cultural Events',
                    'Festivals',
                    'Lifestyle Events',
                    'Dinner Experiences',
                    'Intimate Gatherings'
                  ].map((occasion) => (
                    <div key={occasion} className="flex items-center gap-2 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-slate-200 text-xs sm:text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>{occasion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOOKING OPTIONS */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-6">BOOKING OPTIONS</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-b from-[#1b0d38]/90 to-[#090417]/95 border border-purple-400/50 rounded-[26px] p-7 shadow-[0_15px_35px_rgba(147,51,234,0.2)]">
                  <h5 className="text-xl font-bold text-white mb-2">Solo Performance</h5>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Yal performing with a minimal setup for intimate occasions.
                  </p>
                </div>

                <div className="bg-gradient-to-b from-[#1b0d38]/90 to-[#090417]/95 border border-purple-400/50 rounded-[26px] p-7 shadow-[0_15px_35px_rgba(147,51,234,0.2)]">
                  <h5 className="text-xl font-bold text-white mb-2">Live Ensemble</h5>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Yal accompanied by her musicians for a fuller, immersive live experience.
                  </p>
                </div>
              </div>
            </div>

            {/* TECHNICAL & DURATION SPECIFICATIONS */}
            <div className="bg-purple-950/40 border border-purple-500/30 rounded-[26px] p-7 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Timer className="text-purple-400" size={20} /> PERFORMANCE DETAILS & SPECIFICATIONS
              </h4>
              <div className="text-slate-300 text-sm sm:text-base space-y-2 leading-relaxed">
                <p><strong className="text-white">Duration:</strong> 90 Minutes split into 2 sets.</p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  * Price includes artist fees and client must still cover the cost of stage and sound system as per the artists technical rider.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-16" id="artist-gallery" />

          {/* ARTIST GALLERY SECTION */}
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-purple-500" />
              <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400">ARTIST GALLERY</h2>
            </div>

            <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 font-serif">
              EXPERIENCE YAL LIVE
            </h3>
            <p className="text-slate-400 text-base mb-10">Watch. Listen. Discover.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Featured Performance Video Placeholder */}
              <div className="bg-gradient-to-b from-[#180e33]/90 to-[#070510]/98 border border-purple-500/30 rounded-[28px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <h4 className="text-lg font-bold text-white mb-1">Featured Performance</h4>
                <p className="text-xs text-slate-400 mb-4">Watch Yal Solan perform live</p>
                
                {/* Video Placeholder */}
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
                  <img src="/yal-1.jpeg" alt="Yal Solan Performance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.8)] group-hover:scale-110 transition-transform">
                      <Music size={28} className="ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Artist Photo */}
              <div className="bg-gradient-to-b from-[#180e33]/90 to-[#070510]/98 border border-purple-500/30 rounded-[28px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <h4 className="text-lg font-bold text-white mb-1">Featured Artist Photo</h4>
                <p className="text-xs text-slate-400 mb-4">Official Artist Portrait</p>
                
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden group">
                  <img src="/yal-2.jpeg" alt="Yal Solan Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>

            {/* LISTEN TO YAL PLATFORM BUTTONS */}
            <div className="bg-gradient-to-r from-[#180a30] via-[#100622] to-[#180a30] border border-purple-500/40 rounded-[28px] p-8 text-center shadow-[0_15px_40px_rgba(147,51,234,0.25)]">
              <h4 className="text-2xl font-extrabold text-white mb-2">LISTEN TO YAL</h4>
              <p className="text-sm text-slate-300 mb-6 max-w-lg mx-auto">
                Discover Yal's latest releases and original music across streaming platforms.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer">
                  ▶ WATCH ON YOUTUBE
                </a>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(5,150,105,0.4)] cursor-pointer">
                  ♫ LISTEN ON SPOTIFY
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  )
}

function ResponsiveHero({ activeTab, onSelectTab }) {
  if (activeTab === 'live-music') {
    return <LiveMusicPage onSelectTab={onSelectTab} />
  }

  if (activeTab === 'artists') {
    return (
      <main className="site-wrapper" id="top">
        <Header activeTab={activeTab} onSelectTab={onSelectTab} />
        <ArtistsHero />
        <BrandPartnersSection />
        <ArtistEntertainmentOccasions onSelectTab={onSelectTab} />
        <RamadanPerformancesSection />
        <EventSpecialistsSection />
        <WhyChooseEventitSection />
        <ArtistFAQSection />
      </main>
    )
  }

  return (
    <main className="site-wrapper" id="top">
      <Header activeTab={activeTab} onSelectTab={onSelectTab} />
      <HomeHero />
      <SearchBar />
      <Benefits />
    </main>
  )
}

const topBrands = ['Amazon', 'BCG', 'Collins Aerospace', 'DAMAC', 'Expo City Dubai', 'EIF', 'Emaar', 'Ford', 'Google', 'Pirelli', 'Samsung', 'SHEIN', 'Shell', 'Solana', 'Talabat', 'TotalEnergies']

function TrustedBrands() {
  return (
    <section className="trusted-brands-section">
      <h2 className="trusted-brands-title">TRUSTED BY TOP BRANDS</h2>
      <div className="trusted-brands-marquee">
        <div className="marquee-track">
          <div className="marquee-content">
            {topBrands.map((brand, i) => (
              <div key={`a-${i}`} className="marquee-item">
                <span className="brand-placeholder">{brand}</span>
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {topBrands.map((brand, i) => (
              <div key={`b-${i}`} className="marquee-item">
                <span className="brand-placeholder">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedCategories() {
  return (
    <div className="featured-categories-wrapper">
      <div className="particles">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>
      <section className="featured-categories">
        <div className="category-card">
          <div className="category-bg" style={{ backgroundImage: `url('/corporate_event.jpg')` }} />
          <div className="category-overlay">
            <div className="category-content">
              <h3>CORPORATE EVENTS</h3>
              <p>Effortless event solutions</p>
              <button className="category-btn">GET STARTED <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
        <div className="category-card">
          <div className="category-bg" style={{ backgroundImage: `url('/wedding_event.jpg')` }} />
          <div className="category-overlay">
            <div className="category-content">
              <h3>WEDDINGS & ENGAGEMENT</h3>
              <p>Celebrate Love in Style</p>
              <button className="category-btn">GET STARTED <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const orbitalServices = [
  {
    id: "venues",
    title: 'VENUES',
    desc: 'Find the perfect setting for your event',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    icon: <Building2 size={18} />,
    className: "orbit-card-venues"
  },
  {
    id: "production",
    title: 'PRODUCTION',
    desc: 'Lights, sound & stage that create magic',
    img: '/production_service.jpg',
    icon: <Speaker size={18} />,
    className: "orbit-card-production"
  },
  {
    id: "rentals",
    title: 'RENTALS',
    desc: 'Everything you need, delivered to you',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
    icon: <Armchair size={18} />,
    className: "orbit-card-rentals"
  },
  {
    id: "catering",
    title: 'CATERING',
    desc: 'Delicious food for every occasion',
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop',
    icon: <UtensilsCrossed size={18} />,
    className: "orbit-card-catering"
  },
  {
    id: "organizers",
    title: 'EVENT ORGANIZERS',
    desc: 'Expert planners to make it seamless',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    icon: <Users size={18} />,
    className: "orbit-card-organizers"
  },
  {
    id: "entertainment",
    title: 'ENTERTAINMENT',
    desc: 'DJs, artists & performers to elevate your event',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    icon: <Music size={18} />,
    className: "orbit-card-entertainment"
  },
  {
    id: "decor",
    title: 'DECOR',
    desc: 'Designs that bring your vision to life',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop',
    icon: <Palette size={18} />,
    className: "orbit-card-decor"
  },
  {
    id: "kids",
    title: 'KIDS EVENTS',
    desc: 'Fun & memorable experiences for kids',
    img: '/kids_parties_service.jpg',
    icon: <Gift size={18} />,
    className: "orbit-card-kids"
  }
];

function ExploreServices() {
  return (
    <section className="explore-services-orbital">
      <div className="orbital-background">
        <div className="orbit-glow glow-bottom-left"></div>
        <div className="orbit-glow glow-center"></div>
        <div className="orbit-glow glow-top-right"></div>
        <div className="orbit-dots"></div>
        <div className="orbit-stars">
          <Sparkles className="star s1" size={16} />
          <Sparkles className="star s2" size={24} />
          <Sparkles className="star s3" size={14} />
          <Sparkles className="star s4" size={20} />
        </div>
      </div>

      <div className="orbital-header">
        <span className="orbital-eyebrow">— EVERYTHING YOU NEED, IN ONE PLACE —</span>
        <h2 className="orbital-title">Explore <span>Services</span></h2>
        <p className="orbital-subtitle">
          From stunning venues to unforgettable experiences,<br />
          we bring every part of your event together.
        </p>
        <div className="orbital-divider">
          <span className="line"></span>
          <Sparkles size={12} className="diamond" />
          <span className="line"></span>
        </div>
      </div>

      <div className="orbital-universe">

        {/* Orbital SVG Lines */}
        <svg className="orbital-svg-lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M-100 400 Q 400 100 720 450 T 1540 500" stroke="rgba(112,37,189,0.15)" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
          <path d="M-50 600 Q 300 900 720 450 T 1500 200" stroke="rgba(112,37,189,0.15)" strokeWidth="1.5" fill="none" />
          <path d="M200 -100 Q 600 200 720 450 T 1200 1000" stroke="rgba(112,37,189,0.1)" strokeWidth="1.5" fill="none" />
          <circle cx="350" cy="275" r="3" fill="#7025bd" opacity="0.4" />
          <circle cx="1090" cy="625" r="3" fill="#7025bd" opacity="0.4" />
          <circle cx="950" cy="250" r="3" fill="#7025bd" opacity="0.4" />
          <circle cx="450" cy="670" r="3" fill="#7025bd" opacity="0.4" />
        </svg>

        {orbitalServices.map((service) => (
          <div key={service.id} className={`orbit-card-wrapper ${service.className}`}>
            <div className="orbit-image-container">
              <img src={service.img} alt={service.title} className="orbit-image" />
            </div>
            <div className="orbit-pill">
              <div className="pill-icon-ring">
                {service.icon}
              </div>
              <div className="pill-text">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="orbital-center-hub">
          <div className="hub-content">
            <span className="hub-script">Plan Your</span>
            <h3 className="hub-title">EVENT</h3>
            <div className="hub-divider">
              <span className="line"></span>
              <Sparkles size={10} className="diamond" />
              <span className="line"></span>
            </div>
            <p className="hub-desc">One platform. Endless possibilities.</p>
            <button className="hub-cta">GET STARTED <ArrowRight size={16} /></button>
          </div>
          <div className="hub-border-ring"></div>
        </div>

      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: <Building2 size={22} />,
      title: "Find the perfect venue for free",
      desc: "Browse our curated list of premium venues tailored to your specific event needs, absolutely free."
    },
    {
      icon: <Users size={22} />,
      title: "Connect with the best vendor",
      desc: "Get instantly matched with top-tier caterers, decorators, and artists who fit your vision."
    },
    {
      icon: <Sparkles size={22} />,
      title: "Let us help you with the event",
      desc: "Relax and let our platform streamline your entire planning process from start to finish."
    }
  ]

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-content">
        <h2 className="hiw-title">How it Works</h2>
        <p className="hiw-subtitle">It's simple. You have an event to plan and we have the solutions.</p>

        <div className="timeline-container">
          {/* Central vertical line */}
          <div className="timeline-line"></div>

          {steps.map((step, i) => (
            <div className={`timeline-step ${i % 2 === 0 ? 'step-left' : 'step-right'}`} key={i}>
              <div className="timeline-content-block">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="timeline-node">
                <span className="node-number">0{i + 1}</span>
              </div>
              <div className="timeline-spacer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrendingCollections() {
  return (
    <section className="trending-editorial-section">
      {/* Background layer elements */}
      <div className="trending-bg-elements">
        <div className="trend-glow glow-top-left"></div>
        <div className="trend-glow glow-bottom-right"></div>
        
        {/* Reduced dots and stars */}
        <div className="trend-dots dots-1"></div>
        <div className="trend-dots dots-2"></div>
        <Sparkles className="trend-star ts-1" size={16} />
        <Sparkles className="trend-star ts-2" size={20} />
        <Sparkles className="trend-star ts-3" size={14} />
      </div>

      {/* Header */}
      <div className="trending-header">
        <span className="trending-eyebrow">— WHAT'S HOT RIGHT NOW —</span>
        <h2 className="trending-title">
          <span className="title-dark">Trending</span> <span className="title-purple">Collections</span>
        </h2>
        <p className="trending-subtitle">
          Handpicked themes and moments that are<br className="desktop-br"/>making celebrations unforgettable.
        </p>
      </div>

      {/* Freeform Editorial Canvas */}
      <div className="trending-canvas">
        
        {/* Continuous SVG Connecting Line (Simplified) */}
        <svg className="trending-connection-line" viewBox="0 0 1550 750" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M 150,300 Q 400,250 750,450 T 1350,300" fill="none" stroke="rgba(112,37,189,0.15)" strokeWidth="1" strokeDasharray="4,4" />
        </svg>

        {/* 01: Weddings (Left) */}
        <div className="trend-item trend-weddings">
          <div className="trend-number">01</div>
          <div className="trend-img-wrapper organic-cutout">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" alt="Weddings" />
          </div>
          <div className="trend-content-below">
            <h3 className="clean-title">Weddings</h3>
            <p>Timeless moments,<br/>beautifully crafted.</p>
            <a href="#" className="explore-link">EXPLORE <ArrowRight size={14} /></a>
          </div>
        </div>

        {/* 02: Christmas (Center) */}
        <div className="trend-item trend-christmas">
          <div className="trend-number top-center">02</div>
          <div className="trend-img-wrapper arch-cutout">
            <img src="https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=800&auto=format&fit=crop" alt="Christmas" />
          </div>
          <div className="trend-content-below align-center">
            <h3 className="clean-title">Christmas</h3>
            <p>Celebrate the season with joy & warmth.</p>
            <a href="#" className="explore-link">EXPLORE <ArrowRight size={14} /></a>
          </div>
        </div>

        {/* 03: New Years (Right) */}
        <div className="trend-item trend-newyears">
          <div className="bg-year">2027</div>
          <div className="trend-number top-right">03</div>
          <div className="trend-img-wrapper tilted-cutout">
            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" alt="New Years" />
          </div>
          <div className="trend-content-below align-right">
            <h3 className="clean-title">New Years</h3>
            <p>New vibes, new beginnings,<br/>endless celebrations.</p>
            <a href="#" className="explore-link">EXPLORE <ArrowRight size={14} /></a>
          </div>
        </div>

      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="wcu-editorial">
      {/* Decorative Background Elements */}
      <div className="wcu-bg-layer">
        <div className="wcu-glow wcu-glow-tl"></div>
        <div className="wcu-glow wcu-glow-br"></div>
        
        <div className="wcu-dots wcu-dots-tl"></div>
        <div className="wcu-dots wcu-dots-tr"></div>
        <div className="wcu-dots wcu-dots-bl"></div>

        {/* Partial arc right side */}
        <div className="wcu-arc-tr"></div>
        
        <div className="wcu-sparkles">
          <Sparkles className="wcu-sparkle s1" size={14} />
          <Sparkles className="wcu-sparkle s2" size={20} />
          <Sparkles className="wcu-sparkle s3" size={12} />
          <Sparkles className="wcu-sparkle s4" size={16} />
          <Sparkles className="wcu-sparkle s5" size={18} />
        </div>
      </div>

      <div className="wcu-content-wrapper">
        
        {/* Header Section */}
        <div className="wcu-header">
          <span className="wcu-eyebrow"><span className="eyebrow-line"></span>WHY CHOOSE US<span className="eyebrow-line"></span></span>
          <h2 className="wcu-heading">
            <span className="h-dark">More Than a Platform.</span><br/>
            <span className="h-purple">A Partner</span> <span className="h-dark">in Every Event.</span>
          </h2>
          <div className="wcu-divider">
            <span className="div-line"></span>
            <span className="div-diamond"></span>
            <span className="div-line"></span>
          </div>
          <p className="wcu-intro">
            Eventit is the only centralized platform that provides<br className="desktop-br"/>
            event planners with everything they need to organize their events.<br className="desktop-br"/>
            Eventit makes it <strong>easy</strong>, <strong>fast</strong>, <strong>convenient</strong> and <strong>cost effective</strong><br className="desktop-br"/>
            to organize any kind of event.
          </p>
        </div>

        {/* Benefits Node System */}
        <div className="wcu-node-system">
          
          {/* Connecting Line (SVG) */}
          <div className="wcu-connector">
            <svg width="100%" height="200" viewBox="0 0 1200 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Smooth cubic bezier wave matching node positions */}
              <path d="M-50,100 C100,50 200,150 350,100 C500,50 600,150 750,100 C900,50 1000,150 1150,100 C1250,50 1300,100 1300,100" 
                    stroke="var(--evt-purple)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" className="wcu-path" />
              
              {/* Glowing dots along the path */}
              <circle cx="150" cy="98" r="3" fill="#7025bd" opacity="0.5" />
              <circle cx="550" cy="98" r="3" fill="#7025bd" opacity="0.5" />
              <circle cx="950" cy="98" r="3" fill="#7025bd" opacity="0.5" />
            </svg>
          </div>

          <div className="wcu-nodes-grid">
            
            {/* Node 1 */}
            <div className="wcu-node-item n1">
              <div className="wcu-circle-container">
                <div className="circle-glow"></div>
                <div className="circle-ring r3"></div>
                <div className="circle-ring r2"></div>
                <div className="circle-main">
                  <Tag size={48} className="node-icon" strokeWidth={1.5} />
                </div>
                <div className="vertical-connector">
                  <div className="v-line"></div>
                  <div className="v-dot"></div>
                  <div className="v-horiz"></div>
                </div>
              </div>
              <div className="node-text">
                <h3>Best Price<br/>Guarantee</h3>
                <div className="node-sep"></div>
                <p>Transparent pricing with no<br/>hidden fees. Get the best deals<br/>from verified vendors.</p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="wcu-node-item n2">
              <div className="wcu-circle-container">
                <div className="circle-glow"></div>
                <div className="circle-ring r3"></div>
                <div className="circle-ring r2"></div>
                <div className="circle-main">
                  <Package size={48} className="node-icon" strokeWidth={1.5} />
                </div>
                <div className="vertical-connector">
                  <div className="v-line"></div>
                  <div className="v-dot"></div>
                  <div className="v-horiz"></div>
                </div>
              </div>
              <div className="node-text">
                <h3>Unlimited<br/>Supplies</h3>
                <div className="node-sep"></div>
                <p>Access a vast catalog of<br/>supplies, equipment, and<br/>services for any event scale.</p>
              </div>
            </div>

            {/* Node 3 */}
            <div className="wcu-node-item n3">
              <div className="wcu-circle-container">
                <div className="circle-glow"></div>
                <div className="circle-ring r3"></div>
                <div className="circle-ring r2"></div>
                <div className="circle-main">
                  <ShieldCheck size={48} className="node-icon" strokeWidth={1.5} />
                </div>
                <div className="vertical-connector">
                  <div className="v-line"></div>
                  <div className="v-dot"></div>
                  <div className="v-horiz"></div>
                </div>
              </div>
              <div className="node-text">
                <h3>Trusted Quality<br/>Partners</h3>
                <div className="node-sep"></div>
                <p>Every vendor is vetted and<br/>reviewed. Quality you can<br/>count on, every single time.</p>
              </div>
            </div>

            {/* Node 4 */}
            <div className="wcu-node-item n4">
              <div className="wcu-circle-container">
                <div className="circle-glow"></div>
                <div className="circle-ring r3"></div>
                <div className="circle-ring r2"></div>
                <div className="circle-main">
                  <Timer size={48} className="node-icon" strokeWidth={1.5} />
                </div>
                <div className="vertical-connector">
                  <div className="v-line"></div>
                  <div className="v-dot"></div>
                  <div className="v-horiz"></div>
                </div>
              </div>
              <div className="node-text">
                <h3>Fast Customer<br/>Service</h3>
                <div className="node-sep"></div>
                <p>Dedicated support to help<br/>you plan seamlessly from<br/>start to finish.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="cta-section">
      {/* Outer Glows */}
      <div className="cta-outer-glow cta-og-left"></div>
      <div className="cta-outer-glow cta-og-right"></div>
      
      <div className="cta-container">
        
        {/* Internal Background Details */}
        <div className="cta-bg-elements">
          <div className="cta-dots cta-dots-l"></div>
          <div className="cta-dots cta-dots-r"></div>
          
          <div className="cta-arc-bl"></div>
          <div className="cta-arc-br"></div>
          <div className="cta-arc-br-inner"></div>

          <Sparkles size={16} className="cta-star cs-1" />
          <Sparkles size={12} className="cta-star cs-2" />
          <Sparkles size={20} className="cta-star cs-3" />
          <Sparkles size={14} className="cta-star cs-4" />
          <Sparkles size={18} className="cta-star cs-5" />
          
          {/* Subtle curved lines inside bg */}
          <svg className="cta-bg-curves" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
            <path d="M-100,500 C100,300 300,600 500,400 C700,200 900,500 1100,300" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
            <path d="M-100,450 C200,250 400,550 600,350 C800,150 1000,450 1200,250" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="cta-content-wrapper">
          
          <div className="cta-eyebrow-row">
            <span className="cta-eyebrow-line"></span>
            <span className="cta-eyebrow">Let's Make It Happen</span>
            <span className="cta-eyebrow-line"></span>
          </div>
          
          <h2 className="cta-heading">
            <span className="ch-white">Ready to</span><br/>
            <span className="ch-white">start </span><span className="ch-lavender">planning?</span>
          </h2>

          <div className="cta-divider">
            <span className="cd-line"></span>
            <span className="cd-diamond"></span>
            <span className="cd-line"></span>
          </div>

          <p className="cta-support">
            Join thousands of event planners who trust Eventit<br className="desktop-br"/>
            to organize perfect events.
          </p>

          {/* Button Area */}
          <div className="cta-button-area">
            
            {/* Decorative Dashed Arrow */}
            <div className="cta-dashed-arrow">
              <svg viewBox="0 0 200 100" fill="none">
                <path d="M20,80 Q50,0 160,50" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                <path d="M150,40 L165,52 L150,65" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Main Button */}
            <button className="cta-primary-btn">
              <div className="cta-btn-icon-left">
                <CalendarDays size={24} />
              </div>
              <span className="cta-btn-text">Create your event</span>
              <div className="cta-btn-icon-right">
                <ArrowRight size={24} />
              </div>
              
              {/* Radiating Lines */}
              <div className="cta-radiating-lines">
                <span className="rad-line rl-1"></span>
                <span className="rad-line rl-2"></span>
                <span className="rad-line rl-3"></span>
                <span className="rad-line rl-4"></span>
                <span className="rad-line rl-5"></span>
              </div>
            </button>
          </div>

          {/* Trust Strip */}
          <div className="cta-trust-strip">
            
            <div className="trust-item">
              <div className="trust-icon"><ShieldCheck size={26} /></div>
              <div className="trust-text">
                <span className="tt-intro">Trusted by</span>
                <span className="tt-main">10K+ Planners</span>
                <span className="tt-desc">Plan with confidence</span>
              </div>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <div className="trust-icon"><Zap size={26} /></div>
              <div className="trust-text">
                <span className="tt-intro">Quick & Easy</span>
                <span className="tt-main">Setup</span>
                <span className="tt-desc">Get started in minutes</span>
              </div>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <div className="trust-icon"><Users size={26} /></div>
              <div className="trust-text">
                <span className="tt-intro">Everything You Need</span>
                <span className="tt-main">In One Place</span>
                <span className="tt-desc">Venues, vendors & more</span>
              </div>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <div className="trust-icon"><Heart size={26} /></div>
              <div className="trust-text">
                <span className="tt-intro">Loved by</span>
                <span className="tt-main">Happy Planners</span>
                <span className="tt-desc">Real stories, real results</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <a href="/" className="footer-logo"><Logo footer /></a>
          <p className="footer-tagline">Events Simplified</p>
          <div className="social-links">
            <a href="#">in</a>
            <a href="#">yt</a>
            <a href="#">fb</a>
            <a href="#">ig</a>
            <a href="#">x</a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>COMPANY</h4>
          <div className="footer-divider"></div>
          <ul>
            <li><a href="#">About Eventit</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>EXPLORE</h4>
          <div className="footer-divider"></div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Corporate Events</a></li>
            <li><a href="#">Weddings & Engagements</a></li>
            <li><a href="#">Other Events</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>POLICY</h4>
          <div className="footer-divider"></div>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Acceptable Use Policy</a></li>
          </ul>
        </div>

        <div className="footer-links-col address-col">
          <h4>OFFICE ADDRESS</h4>
          <div className="footer-divider"></div>
          <p>2nd Floor Nook Office ONE JLT<br />One Business Centre Dubai -<br />United Arab Emirates</p>
          <a href="#" className="directions-link">Directions <Navigation size={14} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2026 Eventit. All rights reserved.</p>
      </div>
    </footer>
  )
}

function MainContentWrapper({ children }) {
  return (
    <div className="main-content-wrapper">
      <div className="global-particles">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>
      <div className="main-content-inner">
        {React.Children.map(children, (child) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const featuredArtistsData = [
  {
    id: 1,
    name: 'The Dubai Velvet Duo',
    category: 'Live Bands & Musicians',
    genre: 'Jazz & Pop Acoustic',
    rating: '4.9',
    reviews: 142,
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop',
    price: 'AED 3,500'
  },
  {
    id: 2,
    name: 'DJ Alex Ray',
    category: 'DJs & Producers',
    genre: 'Deep House & Commercial',
    rating: '5.0',
    reviews: 98,
    location: 'Dubai & Abu Dhabi',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
    price: 'AED 2,800'
  },
  {
    id: 3,
    name: 'Aura Fire & LED Spectacle',
    category: 'Stage & Show Acts',
    genre: 'Visual & Fire Performance',
    rating: '4.8',
    reviews: 76,
    location: 'All UAE',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop',
    price: 'AED 4,200'
  },
  {
    id: 4,
    name: 'Samir Oud & Arabic Ensemble',
    category: 'Cultural Acts',
    genre: 'Traditional & Heritage Fusion',
    rating: '4.95',
    reviews: 110,
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1525994886773-080587e161c2?q=80&w=600&auto=format&fit=crop',
    price: 'AED 3,000'
  }
]

function ArtistsPageContent() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Live Bands & Musicians', 'DJs & Producers', 'Stage & Show Acts', 'Cultural Acts']

  const filteredArtists = filter === 'All' 
    ? featuredArtistsData 
    : featuredArtistsData.filter(a => a.category === filter)

  return (
    <section className="artists-directory-wrapper">
      <div className="artists-directory-header">
        <h2>FEATURED UAE ENTERTAINERS</h2>
        <p>Explore top-rated verified performers for weddings, corporate galas & private parties</p>
        <div className="artists-filter-pills">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`artist-cat-pill ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="artists-grid">
        {filteredArtists.map(artist => (
          <div className="artist-directory-card" key={artist.id}>
            <div className="artist-dir-img" style={{ backgroundImage: `url(${artist.image})` }}>
              <span className="artist-dir-location"><MapPin size={12} /> {artist.location}</span>
            </div>
            <div className="artist-dir-body">
              <div className="artist-dir-top">
                <h3>{artist.name}</h3>
                <span className="artist-dir-rating"><Star size={14} fill="#f59e0b" stroke="#f59e0b" /> {artist.rating}</span>
              </div>
              <p className="artist-dir-sub">{artist.category} • {artist.genre}</p>
              <div className="artist-dir-footer">
                <span className="artist-dir-price">From <strong>{artist.price}</strong></span>
                <button className="btn-artist-book">Book Artist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('artists')

  return (
    <>
      <ResponsiveHero activeTab={activeTab} onSelectTab={setActiveTab} />
      {activeTab !== 'artists' && activeTab !== 'live-music' && (
        <MainContentWrapper>
          <TrustedBrands />
          <FeaturedCategories />
          <ExploreServices />
          <ArtistEntertainmentOccasions onSelectTab={setActiveTab} />
          <RamadanPerformancesSection />
          <EventSpecialistsSection />
          <HowItWorks />
          <TrendingCollections />
          <WhyChooseUs />
          <CallToAction />
        </MainContentWrapper>
      )}
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
