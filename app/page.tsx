'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon, Github, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { StartScreen } from "@/components/start-screen"
export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentSection, setCurrentSection] = useState('home')
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 6000); // 6 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StartScreen />
      {showContent && (
        <>
          <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <nav>
                <ul className="flex space-x-4">
                  {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                    <li key={section}>
                      <a
                        href={`#${section}`}
                        className={`capitalize ${currentSection === section ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}
                      >
                        {section}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </header>

          <main className="container mx-auto px-4 pt-20">
            <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
              <h1 className="text-6xl font-bold mb-4 glitch" data-text="ANDER507">ANDER507</h1>
              <p className="text-2xl mb-8">Full-Stack Developer</p>
              <Button asChild>
                <a href="#contact">Get in touch</a>
              </Button>
            </section>

            <section id="about" className="py-20">
              <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
              <p className="max-w-2xl mx-auto text-center mb-8">
              I am a dedicated developer with experience in C#, Python, HTML, CSS, and JavaScript. Passionate about coding and software development, I am committed to furthering my skills and aspire to become a proficient software engineer.
              </p>
              <div className="flex justify-center space-x-8">
                {['C#','Python','HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <div key={tech} className="text-4xl text-primary">{tech}</div>
                ))}
              </div>
            </section>

            <section id="skills" className="py-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { name: 'C#', value: 65 },
                  { name: 'Python', value: 20 },
                  { name: 'HTML', value: 25 },
                  { name: 'CSS', value: 25 },
                  { name: 'JavaScript', value: 30 },
                  { name: 'React', value: 25 },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <Progress value={skill.value} className="h-2" />
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="py-20">
              <h2 className="text-3xl font-bold mb-8 text-center">My Projects (WIP)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((project) => (
                  <div key={project} className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
                    <div className="h-48 bg-muted" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                      <p className="text-muted-foreground mb-4">Description of project {project}</p>
                      <Button>View Project</Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="py-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact Me (WIP)</h2>
              <form className="max-w-md mx-auto space-y-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Textarea placeholder="Your Message" required />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </section>
          </main>

          <footer className="bg-gray-900 text-gray-100 mt-20 py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="mb-4">&copy; 2024 Ander507. All rights reserved.</p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/Ander507" target='_blank' className="hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
                <a href="https://x.com/ander507_" target='_blank' className="hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

