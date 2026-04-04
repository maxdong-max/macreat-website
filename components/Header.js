<<<<<<< HEAD
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Globe, Search, MessageCircle, Mail, Facebook, Twitter, Youtube, Instagram, Linkedin, Send } from 'lucide-react';
import { translations } from '../lib/content';

const socialIconComponents = {
=======
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Globe, Search, MessageCircle, Mail, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { translations } from '../lib/content';

const socialIcons = {
>>>>>>> fe52a4ece308cd8176a71aaada9c017f87615907
  whatsapp: MessageCircle,
  email: Mail,
  facebook: Facebook,
  'x (twitter)': Twitter,
<<<<<<< HEAD
  twitter: Twitter,
  youtube: Youtube,
  instagram: Instagram,
  linkedin: Linkedin,
  telegram: Send
};

// 默认社交链接 (API不可用时使用)
const defaultSocial = [
  { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=8618615207548', icon: 'whatsapp' },
  { name: 'Email', href: 'mailto:pellet@macreat.com', icon: 'email' },
  { name: 'Facebook', href: 'https://www.facebook.com/macreatpellet/', icon: 'facebook' },
  { name: 'X (Twitter)', href: 'https://x.com/MacreatBiomass', icon: 'twitter' },
  { name: 'YouTube', href: 'https://www.youtube.com/@macreatpelletmill2327/', icon: 'youtube' },
  { name: 'Instagram', href: 'https://www.instagram.com/woodpelletmill/', icon: 'instagram' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [socialLinks, setSocialLinks] = useState(defaultSocial);
=======
  youtube: Youtube,
  instagram: Instagram
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
>>>>>>> fe52a4ece308cd8176a71aaada9c017f87615907
  const router = useRouter();
  const locale = router.locale || 'en';
  const t = translations[locale]?.nav || translations.en.nav;

<<<<<<< HEAD
  // 从API获取社交链接
  useEffect(() => {
    fetch('/api/social-links')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setSocialLinks(data.map(s => ({
            name: s.name,
            href: s.href,
            icon: s.icon || 'whatsapp'
          })));
        }
      })
      .catch(() => {});
  }, []);

=======
>>>>>>> fe52a4ece308cd8176a71aaada9c017f87615907
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
<<<<<<< HEAD
              {socialLinks.map((item, index) => {
                const IconComponent = socialIconComponents[item.icon] || MessageCircle;
=======
              {t.social.map((item, index) => {
                const IconComponent = socialIcons[item.icon];
>>>>>>> fe52a4ece308cd8176a71aaada9c017f87615907
                return (
                  <a 
                    key={index} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`social-icon ${item.icon}`}
                    title={item.name}
                  >
<<<<<<< HEAD
                    <IconComponent size={16} />
=======
                    {IconComponent ? <IconComponent size={16} /> : item.name}
>>>>>>> fe52a4ece308cd8176a71aaada9c017f87615907
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