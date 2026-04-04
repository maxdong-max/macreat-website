import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Globe, Search, MessageCircle, Mail, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { translations } from '../lib/content';

const socialIcons = {
  whatsapp: MessageCircle,
  email: Mail,
  facebook: Facebook,
  'x (twitter)': Twitter,
  youtube: Youtube,
  instagram: Instagram
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const router = useRouter();
  const locale = router.locale || 'en';
  const t = translations[locale]?.nav || translations.en.nav;

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="logo-section">
              <Link href="/" className="logo">
                <img src="/images/macreat_logo-180.png" alt={t.logo.alt} />
                <span>{t.logo.text}</span>
              </Link>
            </div>
            <div className="header-social">
              {t.social.map((item, index) => {
                const IconComponent = socialIcons[item.icon];
                return (
                  <a 
                    key={index} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`social-icon ${item.icon}`}
                    title={item.name}
                  >
                    {IconComponent ? <IconComponent size={16} /> : item.name}
                  </a>
                );
              })}
            </div>
            <div className="header-actions">
              <button className="search-btn" title="Search">
                <Search size={18} />
              </button>
              <div className="lang-dropdown">
                <button onClick={() => setLangMenuOpen(!langMenuOpen)} className="lang-btn">
                  <Globe size={18} />
                  <span>{locale.toUpperCase()} ▼</span>
                </button>
                {langMenuOpen && (
                  <div className="dropdown-menu">
                    <Link href="/" locale="en">English</Link>
                    <Link href="/" locale="zh">中文</Link>
                    <Link href="/" locale="id">Indonesia</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container">
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {t.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className={link.hasDropdown ? 'has-dropdown' : ''}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}