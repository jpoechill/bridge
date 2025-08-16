'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { href: '#youth', label: 'Youth' },
  { href: '#mentors', label: 'Mentors' },
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#signup', label: 'Join' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        threshold: [0.01, 0.6],
        rootMargin: '-40% 0px -50% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.slice(1);
    setActiveSection(id);
    
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_92%,transparent)] backdrop-blur-md backdrop-saturate-180">
      <div className="container mx-auto max-w-[960px] px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="text-lg font-extrabold tracking-tight">
            Khmer <em className="not-italic text-[var(--accent)]">Bridge</em>
          </div>
          <nav>
            <ul className="flex gap-3.5 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`
                      relative pb-1.5 text-sm transition-colors
                      ${
                        activeSection === item.href.slice(1)
                          ? 'text-[var(--fg)] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[var(--accent)] after:rounded-sm after:content-[""]'
                          : 'text-[var(--muted)] hover:text-[var(--fg)]'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
