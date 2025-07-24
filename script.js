// Start Screen Animation
document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen")
    const glitchText = document.getElementById("glitch-text")
    const finalText = "ANDER507"
    let text = ""
    let index = 0
  
    // Typewriter effect
    const typewriterInterval = setInterval(() => {
      text = finalText.slice(0, index)
      glitchText.textContent = text
      glitchText.setAttribute("data-text", text)
      index++
  
      if (index > finalText.length) {
        clearInterval(typewriterInterval)
  
        // Wait and then fade out the start screen
        setTimeout(() => {
          startScreen.style.opacity = "0"
          setTimeout(() => {
            startScreen.style.display = "none"
          }, 500)
        }, 100)
      }
    }, 300)
  
    // Initialize skill animations
    initSkillAnimations()
  
    // Initialize navigation
    initNavigation()
  
    // Initialize form submission
    initContactForm()
  })
  
  // Skill bar animations
  function initSkillAnimations() {
    const skillLevels = document.querySelectorAll(".skill-level")
  
    // Animate skill bars when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the width from the style attribute and apply it
            const width = entry.target.style.width
            entry.target.style.width = "0"
  
            setTimeout(() => {
              entry.target.style.width = width
            }, 100)
  
            // Unobserve after animation
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
  
    skillLevels.forEach((skillLevel) => {
      observer.observe(skillLevel)
    })
  }
  
  // Navigation functionality
  function initNavigation() {
    const header = document.querySelector("header")
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
    const navLinksItems = document.querySelectorAll(".nav-links a")
  
    // Scroll event for header
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a link
    navLinksItems.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  }
  
  // Contact form submission
  function initContactForm() {
    const contactForm = document.getElementById("contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For this example, we'll just log it and show a success message
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  }
  
  // Project hover effects
  document.addEventListener("mousemove", (e) => {
    const projectCards = document.querySelectorAll(".project-card")
  
    projectCards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
  
      if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
        const rotateX = (y - rect.height / 2) / 20
        const rotateY = (rect.width / 2 - x) / 20
  
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`
      } else {
        card.style.transform = ""
      }
    })
  })
  
  // Reset transform when mouse leaves
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseleave", () => {
      card.style.transform = ""
    })
  })
  
  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".about-content, .skill-category, .project-card, .contact-content")
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
  
    elements.forEach((element) => {
      observer.observe(element)
    })
  }
  
  // Call animate on scroll
  document.addEventListener("DOMContentLoaded", animateOnScroll)
  
  