// Bethany Baril  04/30/25

'use client';

import Image from 'next/image';
import githubIcon from '/public/github-light.png';
import linkedinIcon from '/public/linkedIn2.png';
import emailIcon from '/public/email-light.png';
import bbIcon from '/public/bbLogo2.png';

export default function Home() {
  return (
    <>
    <section id="hero" className="pb-2">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-4xl font-title font-bold mb-2 pt-3 text-black dark:text-bbOffWhite custom-title-shadow">
          Bethany Baril
        </h1>
        <p className="text-lg md:text-xl font-title font-semibold text-bbTealDark dark:text-bbPop/75 tracking-wide">
          Creative | Versatile | Psychology-Trained
        </p>
      </div>
    </section>
    <section id="greeting" className="pt-10 pb-4 text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        {/* Profile Image */}
        <div className="shrink-0">
          <Image
            src="/images/profilePic6.png"
            alt="Bethany Baril"
            width={140}
            height={140}
            className="rounded-full border shadow-md"
            priority
          />
        </div>

        {/* Greeting + SVG */}
          
        <div className="text-center md:text-left">
          <p className="text-2xl md:text-3xl font-semibold text-bbTealDark dark:text-bbTeal/80">
            Hello
          </p>
          <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto md:mx-0">
            <path d="M2 20 C 40 0, 110 40, 148 20" stroke="#66cccc" strokeWidth="2" fill="none" />
            <circle cx="148" cy="20" r="2" fill="#66cccc" />
          </svg>
          <p className="text-md text-bbOffBlackSoft dark:text-bbOffWhiteSoft/90 mt-3 max-w-md">
            I bring ideas to life with{" "}
            <span className="font-semibold text-bbBlueDark dark:text-bbBlue">curiosity</span>,{" "}
            <span className="font-semibold text-bbBlueDark dark:text-bbBlue">kindness</span>, and{" "}
            <span className="font-semibold text-bbBlueDark dark:text-bbBlue">code</span>.
            Let’s build something great together!
          </p>
        </div>
      </div>
    </section> 

    <div className="h-[.12rem] max-w-6xl bg-bbTeal/60 dark:bg-bbTealDark/60 my-4 rounded-full items-center justify-center text-center" />
    <section id="intro-actions" className="pt-1 pb-4">
        <div className="max-w-4xl mx-auto px-2">
        <div className="bg-gray-100 dark:bg-bbOffBlackSoft rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col sm:flex-row gap-6 justify-center items-center">         
            {/* HR Resume */}
            <a
              href="/bethanybaril-Resume-ATS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-bbTeal/80 text-black dark:bg-bbTeal/70 dark:text-bbOffBlack font-semibold hover:bg-bbPink/70 dark:hover:bg-bbPinkDark/70 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto text-center"
            >
              <Image src="/atsResume.png" alt="HR Resume" width={21} height={21} />
              ATS Resume
            </a>

            {/* Personal Resume */}
            <a
              href="/bethanybaril-Resume-Narrative.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-bbBlue/80 text-black dark:bg-bbBlue/70 dark:text-bbOffBlack font-semibold hover:bg-bbPink/70 dark:hover:bg-bbPinkDark/70 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto text-center"
            >
              <Image src="/narrativeResume.png" alt="Personal Resume" width={21} height={21} />
              Narrative Resume
            </a>

            {/* Contact Me */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-bbPurple/80 text-black dark:bg-bbPurple/70 dark:text-bbOffBlack font-semibold hover:bg-bbPink/70 dark:hover:bg-bbPinkDark/70 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto text-center"
            >
              <Image src="/email-light.png" alt="Contact Me" width={21} height={21} />
              Contact Me
            </a>
          </div>
        </div>
    </section>
    <section id="experience" className="pt-4 pb-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gray-100 dark:bg-bbOffBlackSoft rounded-xl shadow-md p-4">
            <h2 className="text-2xl font-title font-bold mb-2 custom-title-shadow2 text-black dark:text-bbOffWhite/85">
              Experience & Education
            </h2>
            <p className="text-left text-sm text-bbOffBlack dark:text-bbOffWhiteSoft/70 mb-4 max-w-5xl mx-auto">
            My path blends a multidisciplinary education grounded in psychology with practical technical training. Coursework in HTML, CSS, Python, and SQL gave me a strong foundation in structured logic and design thinking.
          </p>
            <div className="grid gap-4 sm:grid-cols-2 ">
              {/* Degree */}
              
              <div className="bg-bbOffWhite dark:bg-bbOffBlack rounded-lg shadow-md p-4">
                <h3 className="font-bold text-md text-bbOffBlack dark:text-bbOffWhiteSoft/85">B.S. Psychology</h3>
                <p className="text-sm text-bbOffBlackSoft/75 dark:text-bbOffWhiteSoft/60">Understanding people, behavior, and UX.</p>
              </div>

              {/* IT Associate */}
              <div className="bg-bbOffWhite dark:bg-bbOffBlack rounded-lg shadow-md p-4">
                <h3 className="font-bold text-md text-bbOffBlackSoft dark:text-bbOffWhiteSoft/85">A.A.S. Information Technology</h3>
                <p className="text-sm text-bbOffBlackSoft/75 dark:text-bbOffWhiteSoft/60">Foundations in software and networking.</p>
              </div>

              {/* Cybersecurity */}
              <div className="bg-bbOffWhite dark:bg-bbOffBlack rounded-lg shadow-md p-4">
                <h3 className="font-bold text-md text-bbOffBlackSoft dark:text-bbOffWhiteSoft/85">CSC: Cybersecurity & Networking</h3>
                <p className="text-sm text-bbOffBlackSoft/75 dark:text-bbOffWhiteSoft/60">Hands-on labs, security basics, and Linux tools.</p>
              </div>

              {/* CSM */}
              <div className="bg-bbOffWhite dark:bg-bbOffBlack rounded-lg shadow-md p-4">
                <h3 className="font-bold text-md text-bbOffBlackSoft dark:text-bbOffWhiteSoft/85">Certified ScrumMaster - CSM {" "}
                <span className="text-sm font-thin">(Exp 12/26)</span>{" "}</h3>
                <p className="text-sm text-bbOffBlackSoft/75 dark:text-bbOffWhiteSoft/60">Team-focused agile planning and delivery.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section id="skills" className="pt-4 pb-4">
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-gray-100 dark:bg-bbOffBlackSoft rounded-xl shadow-md p-4">
        <h2 className="text-2xl font-title font-bold mb-2 custom-title-shadow2 text-black dark:text-bbOffWhite/85">
          Technical Skills
        </h2>
        <p className="text-left text-sm text-gray-800 dark:text-bbOffWhite/70 mb-4 max-w-5xl mx-auto">
        Through self-directed training and hands-on development, I’ve built dynamic applications, designed clean UIs, and grown into a full-stack developer who blends logic and empathy.
                </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {/* Frontend */}
          <div className="bg-bbOffWhite dark:bg-bbOffBlack rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-md mb-2 text-black dark:text-bbOffWhiteSoft/85">Frontend</h3>
            <ul className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind'].map(tag => (
                <li key={tag} className="tag bg-bbPink/70 text-black dark:text-black px-2 py-1 rounded-full text-sm">{tag}</li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-bbOffWhite dark:bg-bbOffBlack rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-md mb-2 text-black dark:text-bbOffWhiteSoft/85">Backend</h3>
            <ul className="flex flex-wrap gap-2">
              {['Python', 'Flask', 'Node.js', 'JSON', 'SQLite', 'Auth', 'Security'].map(tag => (
                <li key={tag} className="tag bg-bbBlueSoft/70 text-black dark:text-black px-2 py-1 rounded-full text-sm">{tag}</li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-bbOffWhite dark:bg-bbOffBlack rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-md mb-2 text-black dark:text-bbOffWhiteSoft/85">Tools & Environments</h3>
            <ul className="flex flex-wrap gap-2">
              {['GitHub', 'VS Code', 'Netlifty', 'Vercel','Figma', 'CLI', 'Tkinter', 'Terminal', 'Photoshop'].map(tag => (
                <li key={tag} className="tag bg-bbPurple/70 text-black dark:text-black px-2 py-1 rounded-full text-sm">{tag}</li>
              ))}
            </ul>
          </div>

          {/* UX Soft Skills */}
          <div className="bg-bbOffWhite dark:bg-bbOffBlack rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-md mb-2 text-black dark:text-bbOffWhiteSoft/85">UX & Collaboration</h3>
            <ul className="flex flex-wrap gap-2">
              {['UI/UX', 'Accessibility', 'Responsive Design', 'Teamwork', 'Adaptability', 'Problem Solving', 'Psychology', 'Customer Service'].map(tag => (
                <li key={tag} className="tag bg-bbTeal/70 text-black dark:text-black px-2 py-1 rounded-full text-sm">{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>

      {/* --- Project & Contact Card Section --- */}
      <section id="cards" className="py-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">

          {/* PROJECTS CARD */}
          <div className="bg-gray-100 dark:bg-bbOffBlackSoft rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-title text-left font-bold mb-2 text-black dark:text-bbOffWhite/85 custom-title-shadow2">
              Projects
            </h2>
            <p className="text-gray-800 dark:text-bbOffWhiteSoft/80 mb-4 text-left">
              View live apps or explore the code behind the scenes.
            </p>
            <div className="flex flex-row gap-6 justify-center">
              <a
                href="https://hub.bethanybaril.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 w-42 px-5 py-2 rounded-lg bg-bbTeal/80 text-black dark:bg-bbTealDark/70 dark:text-bbOffBlack font-semibold hover:bg-bbPink/70 dark:hover:bg-bbPinkDark/70 transition shadow-md hover:shadow-lg"
              >
                <Image src={bbIcon} alt="Hub" width={20} height={20} />
                Project Hub
              </a>
              <a
                href="https://github.com/BBaril"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 w-42 px-5 py-2 rounded-lg bg-bbBlue/80 text-black dark:bg-bbBlueDark/70 dark:text-bbOffBlack font-semibold hover:bg-bbPink/70 dark:hover:bg-bbPinkDark/70 transition shadow-sm hover:shadow-lg"
              >
                <Image src={githubIcon} alt="GitHub" width={20} height={20} />
                GitHub Repo
              </a>
            </div>
          </div>

          {/* CONTACT CARD */}
          <div className="bg-gray-100 dark:bg-bbOffBlackSoft rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-title text-left font-bold mb-2 text-bbOffBlack dark:text-bbOffWhite/85 custom-title-shadow2">
              Contact
            </h2>
            <p className="text-gray-800 dark:text-bbOffWhiteSoft/80 mb-4 text-left">
              Let’s connect —  I love building user-friendly solutions and thrive on continuous learning.
            </p>
            <div className="flex flex-row gap-6 justify-center">
              <a
                href="mailto:b.baril2025@gmail.com"
                className="flex items-center justify-center gap-1 w-42 px-5 py-2 rounded-lg bg-bbTeal/80 text-black dark:bg-bbTealDark/70 dark:text-bbOffBlack font-semibold hover:bg-bbPink/70 dark:hover:bg-bbPinkDark/70 transition-shadow shadow-md hover:shadow-lg"
              >
                <Image src={emailIcon} alt="Email" width={21} height={21} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/bethany-baril-a07490281/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-1 w-42 px-5 py-2 rounded-lg bg-bbPurple/80 text-black dark:bg-bbPurpleDark/70 dark:text-bbOffBlack font-semibold hover:bg-bbPink/70 dark:hover:bg-bbPinkDark/70 transition-shadow shadow-md hover:shadow-lg"
              >
                <Image src={linkedinIcon} alt="LinkedIn" width={25} height={25} />
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
