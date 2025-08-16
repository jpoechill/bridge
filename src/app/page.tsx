'use client';

import { useEffect } from 'react';
import Navigation from './components/Navigation';

export default function Home() {
  useEffect(() => {
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <>
      <Navigation />
      <main className="container mx-auto max-w-[960px] px-5">
        {/* HERO SECTION */}
        <section className="py-14 scroll-mt-20" id="home">
          <span className="inline-block px-2.5 py-1.5 border border-[var(--border)] rounded-full bg-[var(--card)] text-xs text-[var(--muted)]">
            Pilot · Bay Area / Oakland
          </span>
          <h1 className="text-[clamp(28px,6vw,42px)] leading-[1.2] mt-2 mb-2 font-bold text-white">

            <span className="italic font-serif text-white">
              Connect with Khmer mentors.<br />
              Grow your career. Stay rooted.</span>
          </h1>
          <p className="text-[var(--muted)] mb-3">
            Khmer Bridge links Khmer youth with Khmer‑American professionals for 1:1 guidance, skill‑building, and community.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-3">
            <a
              className="inline-block px-3.5 py-2.5 rounded-lg border border-[color-mix(in_oklab,var(--accent),black_12%)] bg-[var(--accent)] text-white font-bold text-sm hover:opacity-90 transition-opacity"
              href="#signup-youth"
            >
              I&apos;m a Youth — Find a Mentor
            </a>
            <a
              className="inline-block px-3.5 py-2.5 rounded-lg border border-[color-mix(in_oklab,var(--accent-2),black_12%)] bg-[var(--accent-2)] text-[#052e16] font-bold text-sm hover:opacity-90 transition-opacity"
              href="#signup-mentor"
            >
              I&apos;m a Professional — Become a Mentor
            </a>
          </div>
        </section>

        <hr className="h-px bg-[var(--border)] border-0 my-10" />

        {/* FOR YOUTH & MENTORS */}
        <section id="youth" className="grid grid-cols-1 md:grid-cols-2 gap-6 py-11 scroll-mt-20">
          <article className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6 flex flex-col">
            <h2 className="text-[clamp(20px,3.5vw,28px)] mb-2 font-bold">For Khmer Youth (15–30)</h2>
            <ul className="pl-4.5 my-2 space-y-2 flex-grow">
              <li>Get matched with a mentor in medicine, tech, law, design, and more.</li>
              <li>1:1 chat for questions about school, internships, and first jobs.</li>
              <li>Book sessions that fit your schedule; get reminders.</li>
              <li>Join forums on careers, identity, culture, and mental health.</li>
              <li>Browse scholarships, career guides, and Khmer‑American success stories.</li>
            </ul>
            <a
              className="px-3.5 py-2.5 rounded-lg border border-[color-mix(in_oklab,var(--accent),black_12%)] bg-[var(--accent)] text-white font-bold text-sm hover:opacity-90 transition-opacity mt-4 self-start"
              href="#signup-youth"
            >
              Join as Mentee
            </a>
          </article>

          <article id="mentors" className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6 flex flex-col">
            <h2 className="text-[clamp(20px,3.5vw,28px)] mb-2 font-bold">For Khmer‑American Professionals</h2>
            <ul className="pl-4.5 my-2 space-y-2 flex-grow">
              <li>Give back by mentoring the next generation of Khmer leaders.</li>
              <li>Flexible time commitment; chat or short sessions.</li>
              <li>Build your leadership profile with a verified mentor badge (coming soon).</li>
              <li>Speak on panels or host workshops with our community.</li>
            </ul>
            <a
              className="px-3.5 py-2.5 rounded-lg border border-[color-mix(in_oklab,var(--accent-2),black_12%)] bg-[var(--accent-2)] text-[#052e16] font-bold text-sm hover:opacity-90 transition-opacity mt-4 self-start"
              href="#signup-mentor"
            >
              Apply to Mentor
            </a>
          </article>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-11 scroll-mt-20">
          <h2 className="text-[clamp(20px,3.5vw,28px)] mb-2 font-bold">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6">
              <h3 className="text-lg mb-1.5 font-semibold">1) Tell us your goals</h3>
              <p className="text-[var(--muted)] mb-0">Share interests, field, school stage, and what you want from mentorship.</p>
            </div>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6">
              <h3 className="text-lg mb-1.5 font-semibold">2) Match & chat</h3>
              <p className="text-[var(--muted)] mb-0">We connect you with a mentor. Use in‑platform chat to get started.</p>
            </div>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6">
              <h3 className="text-lg mb-1.5 font-semibold">3) Schedule sessions</h3>
              <p className="text-[var(--muted)] mb-0">Book times that work for both of you. Calendar sync & reminders included.</p>
            </div>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6">
              <h3 className="text-lg mb-1.5 font-semibold">4) Learn & join community</h3>
              <p className="text-[var(--muted)] mb-0">Join forums, access resources, and track your progress.</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-11 scroll-mt-20">
          <h2 className="text-[clamp(20px,3.5vw,28px)] mb-2 font-bold">What you can do today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6">
              <h3 className="text-lg mb-1.5 font-semibold">Essential Features</h3>
              <ul className="pl-4.5 my-2 space-y-2">
                <li><strong>1:1 Mentorship Chat</strong> — direct mentor/mentee messages.</li>
                <li><strong>Scheduling Tools</strong> — book sessions, reminders, calendar sync.</li>
                <li><strong>Group Forums</strong> — career, identity, culture, mental health.</li>
                <li><strong>Resource Library</strong> — scholarships, guides, success stories.</li>
              </ul>
            </div>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6">
              <h3 className="text-lg mb-1.5 font-semibold">Coming Soon</h3>
              <ul className="pl-4.5 my-2 space-y-2">
                <li>Video calls (built‑in or Zoom)</li>
                <li>AI‑assisted mentor matching</li>
                <li>Community events & workshops</li>
                <li>Badges for mentorship & community impact</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SIGNUP */}
        <section id="signup" className="grid grid-cols-1 md:grid-cols-2 gap-6 py-11 scroll-mt-20">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6" id="signup-youth">
            <h3 className="text-lg mb-1.5 font-semibold">Youth Sign‑Up</h3>
            <p className="text-[var(--muted)] mb-0">We&apos;re piloting in Oakland. Add your email to get matched when your field opens.</p>
            <a
              className="inline-block px-3.5 py-2.5 rounded-lg border border-[color-mix(in_oklab,var(--accent),black_12%)] bg-[var(--accent)] text-white font-bold text-sm hover:opacity-90 transition-opacity mt-4"
              href="#"
            >
              Join as Mentee
            </a>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-6" id="signup-mentor">
            <h3 className="text-lg mb-1.5 font-semibold">Mentor Sign‑Up</h3>
            <p className="text-[var(--muted)] mb-0">Share your field and availability. We&apos;ll reach out for onboarding.</p>
            <a
              className="inline-block px-3.5 py-2.5 rounded-lg border border-[color-mix(in_oklab,var(--accent-2),black_12%)] bg-[var(--accent-2)] text-[#052e16] font-bold text-sm hover:opacity-90 transition-opacity mt-4"
              href="#"
            >
              Apply to Mentor
            </a>
          </div>
        </section>

        <hr className="h-px bg-[var(--border)] border-0 my-10" />

        {/* MISSION */}
        <section id="mission" className="py-11 scroll-mt-20">
          <h2 className="text-[clamp(20px,3.5vw,28px)] mb-2 font-bold">Why Khmer Bridge</h2>
          <p className="text-[var(--muted)] mb-0">
            We connect Khmer youth with trusted Khmer‑American professionals—so you can find guidance, opportunities, and a community that understands your journey.
          </p>
        </section>

        <footer className="border-t border-[var(--border)] mt-10 py-7 text-[var(--muted)] text-sm">
          <div>
            © <span id="year"></span> Khmer Bridge · Oakland, CA · <a href="#" className="hover:text-[var(--fg)] transition-colors">Contact</a>
          </div>
          <div className="mt-1.5 text-xs text-[var(--muted)]">
            Respectful conduct required in chats and forums. Safety first: report issues to the team.
          </div>
        </footer>
      </main>
    </>
  );
}
