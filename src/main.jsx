import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowRight, Building2, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Headphones, Heart,
  LockKeyhole, MapPin, Menu, Search, ShieldCheck, ShoppingCart, Sparkles, Users, Zap, Tag, Package, Navigation,
  Speaker, UtensilsCrossed, Armchair, PartyPopper, Palette, Gift, Music, Gem, Calendar, Star
} from 'lucide-react'
import './index.css'

const navItems = ['Explore', 'Vendors', 'Events', 'Packages', 'Inspiration']

import logoUrl from '../Eventit 1.png'

function Logo({ desktop = false }) {
  return (
    <img
      src={logoUrl}
      alt="Eventit"
      className={desktop ? 'desktop-brand' : 'brand'}
      style={{ height: '1em', filter: 'brightness(0) saturate(100%) invert(18%) sepia(91%) saturate(3015%) hue-rotate(264deg) brightness(85%) contrast(100%)' }}
    />
  )
}

function Header() {
  return (
    <header className="header">
      <a href="#top" className="brand-link"><Logo desktop /></a>
      <nav className="desktop-nav">
        {navItems.map((item) => (
          <div key={item} className="nav-item">
            <a href={`#${item.toLowerCase()}`}>{item} <ChevronDown size={14} /></a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">All {item}</a>
              <a href="#" className="dropdown-item">Top Rated</a>
              <a href="#" className="dropdown-item">New Additions</a>
            </div>
          </div>
        ))}
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
    [ShieldCheck, 'Trusted Professionals', 'Verified & Reviewed Vendors'],
    [LockKeyhole, 'Secure Payments', '100% Safe & Secure'],
    [Zap, 'Easy Booking', 'Quick & Hassle Free'],
    [Headphones, '24/7 Support', "We're Here to Help"]
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

function ResponsiveHero() {
  return (
    <main className="site-wrapper" id="top">
      <Header />
      <div className="hero-container">
        <section className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
            <div className="eyebrow"><Sparkles /> YOUR EVENT, OUR PASSION</div>
            <h1>Plan Seamlessly.<br />Celebrate Beautifully.<br /><em>All in One Place.</em></h1>
            <p>Eventit connects you with trusted professionals, top rentals, amazing entertainers, delicious food and expert organizers to create <b>unforgettable events.</b></p>
            <div className="ctas"><CTA>Plan Your Event</CTA><CTA secondary>Explore Marketplace</CTA></div>
          </motion.div>
        </section>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1, duration: .7 }} role="img" aria-label="Event planner holding a tablet and coffee, surrounded by event inspiration" />
      </div>
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

      <div className="orbital-footer">
        <Sparkles size={14} className="star-icon" /> DREAM IT. PLAN IT. LIVE IT. <Sparkles size={14} className="star-icon" />
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: <Building2 size={28} />,
      title: "Find the perfect venue for free",
      desc: "Browse our curated list of premium venues tailored to your specific event needs, absolutely free."
    },
    {
      icon: <Users size={28} />,
      title: "Connect with the best vendor",
      desc: "Get instantly matched with top-tier caterers, decorators, and artists who fit your vision."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Let us help you with the event",
      desc: "Relax and let our platform streamline your entire planning process from start to finish."
    }
  ]

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-content">
        <h2 className="hiw-title">How it Works</h2>
        <p className="hiw-subtitle">It’s simple. You have an event to plan and we have the solutions.</p>

        <div className="steps-container">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
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
      <div className="trending-background">
        <div className="trend-glow glow-left"></div>
        <div className="trend-glow glow-right"></div>
        <div className="trend-dots dot-group-1"></div>
        <div className="trend-dots dot-group-2"></div>
        <div className="trend-stars">
          <Sparkles className="t-star s1" size={18} />
          <Sparkles className="t-star s2" size={24} />
          <Sparkles className="t-star s3" size={14} />
          <Sparkles className="t-star s4" size={16} />
        </div>
      </div>

      <div className="trending-header">
        <span className="trending-eyebrow">— WHAT'S HOT RIGHT NOW —</span>
        <h2 className="trending-title">Trending <span>Collections</span></h2>
        <p className="trending-subtitle">
          Handpicked themes and moments that are<br/>making celebrations unforgettable.
        </p>
        <div className="trending-divider">
          <span className="line"></span>
          <Sparkles size={10} className="diamond" />
          <span className="line"></span>
        </div>
      </div>

      <div className="trending-editorial-wrapper">
        
        {/* SVG Orbital Lines */}
        <svg className="trending-svg-lines" viewBox="0 0 1550 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M 0 350 Q 250 100 450 350 T 800 300 T 1200 450 T 1550 250" stroke="rgba(112,37,189,0.15)" strokeWidth="1.5" fill="none" />
          <path d="M 100 600 Q 350 400 550 500 T 900 600 T 1300 400 T 1600 500" stroke="rgba(112,37,189,0.1)" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
          <circle cx="200" cy="275" r="3" fill="#7025bd" opacity="0.3" />
          <circle cx="1050" cy="500" r="3" fill="#7025bd" opacity="0.3" />
          <circle cx="1300" cy="400" r="3" fill="#7025bd" opacity="0.3" />
        </svg>

        <div className="trend-col trend-weddings">
          <div className="trend-img-container mask-organic">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" alt="Weddings" />
          </div>
          <div className="trend-badge badge-left">
            <span className="badge-num">01</span>
            <span className="badge-line"></span>
          </div>
          <div className="trend-content">
            <h3>Weddings <Sparkles size={16} className="title-star" /></h3>
            <p>Timeless moments,<br/>beautifully crafted</p>
            <button className="btn-explore btn-white">
              EXPLORE <span className="icon-circle"><ArrowRight size={14} /></span>
            </button>
          </div>
        </div>

        <div className="trend-col trend-christmas">
          <div className="trend-arch-container">
            <div className="arch-border border-1"></div>
            <div className="arch-border border-2"></div>
            <div className="trend-img-container mask-arch">
              <img src="https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=800&auto=format&fit=crop" alt="Christmas" />
            </div>
            <div className="trend-panel-center">
              <div className="trend-badge-center">
                <span className="badge-num">02</span>
                <span className="badge-line"></span>
              </div>
              <div className="panel-text">
                <h3>Christmas <Sparkles size={18} className="title-star" /></h3>
                <p>Celebrate the season<br/>with joy & warmth</p>
              </div>
              <button className="btn-arrow-purple">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="trend-col trend-newyears">
          <div className="trend-img-container mask-tilted">
            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" alt="New Years" />
          </div>
          <div className="trend-badge badge-right">
            <span className="badge-num">03</span>
            <span className="badge-line"></span>
          </div>
          <div className="trend-content">
            <h3>New Years <Sparkles size={16} className="title-star" /></h3>
            <p>New vibes, new beginnings,<br/>endless celebrations</p>
            <button className="btn-explore btn-purple">
              EXPLORE <span className="icon-circle"><ArrowRight size={14} /></span>
            </button>
          </div>
        </div>

      </div>

      <div className="trending-carousel-indicator">
        <ChevronLeft size={16} className="nav-arrow inactive" />
        <span className="nav-dash active"></span>
        <span className="nav-dash"></span>
        <span className="nav-dash"></span>
        <ChevronRight size={16} className="nav-arrow active" />
      </div>

      <div className="trending-benefits-bar">
        <div className="benefit-item">
          <div className="benefit-icon"><Gem size={20} /></div>
          <div className="benefit-text">
            <h4>Curated with Love</h4>
            <p>Handpicked for memorable celebrations</p>
          </div>
        </div>
        <div className="benefit-divider"></div>
        <div className="benefit-item">
          <div className="benefit-icon"><Star size={20} /></div>
          <div className="benefit-text">
            <h4>Trending Now</h4>
            <p>What's popular and in demand</p>
          </div>
        </div>
        <div className="benefit-divider"></div>
        <div className="benefit-item">
          <div className="benefit-icon"><Heart size={20} /></div>
          <div className="benefit-text">
            <h4>For Every Occasion</h4>
            <p>Themes that fit every moment perfectly</p>
          </div>
        </div>
        <div className="benefit-divider"></div>
        <div className="benefit-item">
          <div className="benefit-icon"><Calendar size={20} /></div>
          <div className="benefit-text">
            <h4>Easy to Plan</h4>
            <p>Inspiration that makes planning effortless</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="wcu-editorial">
      <div className="wcu-inner">
        
        <div className="wcu-top-bar">
          <span className="wcu-eyebrow">— WHY EVENTIT —</span>
          <h2 className="wcu-heading">The <span>Unfair Advantage</span><br/>for Event Planners</h2>
        </div>

        <div className="wcu-bento">
          
          {/* Hero Card — spans 2 rows */}
          <div className="bento-card bento-hero">
            <div className="bento-hero-inner">

              <Tag size={28} className="bento-hero-icon" />
              <h3>Best Price<br/>Guarantee</h3>
              <p>Transparent pricing. No hidden fees. We negotiate directly with vendors so you always get the best possible rate — guaranteed.</p>
              <div className="bento-hero-stat">
                <span className="hero-stat-num">30%</span>
                <span className="hero-stat-label">avg. savings vs<br/>booking directly</span>
              </div>
            </div>
          </div>

          {/* Top Right */}
          <div className="bento-card bento-std bento-b">

            <div className="bento-std-icon"><Package size={22} /></div>
            <h4>Unlimited Supplies</h4>
            <p>Access a vast catalog of supplies, equipment & services — no matter the scale of your event.</p>
          </div>

          {/* Stats strip */}
          <div className="bento-card bento-stats">
            <div className="bento-stat-item">
              <span className="bs-num">500+</span>
              <span className="bs-label">Vendors</span>
            </div>
            <div className="bento-stat-sep"></div>
            <div className="bento-stat-item">
              <span className="bs-num">10K+</span>
              <span className="bs-label">Events</span>
            </div>
            <div className="bento-stat-sep"></div>
            <div className="bento-stat-item">
              <span className="bs-num">98%</span>
              <span className="bs-label">Satisfaction</span>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="bento-card bento-std bento-c">
            <span className="bento-number">03</span>
            <div className="bento-std-icon"><ShieldCheck size={22} /></div>
            <h4>Trusted Quality</h4>
            <p>Every vendor is vetted, reviewed, and rated by real planners. Quality you can count on.</p>
          </div>

          {/* Bottom Right */}
          <div className="bento-card bento-std bento-d">
            <span className="bento-number">04</span>
            <div className="bento-std-icon"><Headphones size={22} /></div>
            <h4>Dedicated Support</h4>
            <p>Real humans, not bots. Our team helps you plan seamlessly from start to finish.</p>
          </div>

        </div>

      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2>Ready to start planning?</h2>
        <p>Join thousands of event planners who trust Eventit to organize perfect events.</p>
        <button className="cta-btn">Create your event <ArrowRight size={18} /></button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <a href="/" className="footer-logo">Eventit</a>
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

function App() {
  return (
    <>
      <ResponsiveHero />
      <MainContentWrapper>
        <TrustedBrands />
        <FeaturedCategories />
        <ExploreServices />
        <HowItWorks />
        <TrendingCollections />
        <WhyChooseUs />
        <CallToAction />
      </MainContentWrapper>
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
