// JavaScript Document

/*

TemplateMo 597 Neural Glass

https://templatemo.com/tm-597-neural-glass

*/

// Mobile menu functionality
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });

        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced header functionality
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active menu item highlighting
        function updateActiveMenuItem() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            
            let currentSection = '';
            const scrollPos = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveMenuItem);
        window.addEventListener('load', updateActiveMenuItem);

        // Parallax effect for geometric shapes
        window.addEventListener('scroll', () => {
            const shapes = document.querySelectorAll('.shape');
            const scrolled = window.pageYOffset;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Neural lines pulse effect
        const neuralLines = document.querySelectorAll('.neural-line');
        setInterval(() => {
            neuralLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'scaleX(1.2)';
                    setTimeout(() => {
                        line.style.opacity = '0.2';
                        line.style.transform = 'scaleX(0.5)';
                    }, 200);
                }, index * 300);
            });
        }, 2000);

        // Enhanced particle generation
        function createQuantumParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100vh';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            const drift = (Math.random() - 0.5) * 200;
            
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
                { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Generate quantum particles
        setInterval(createQuantumParticle, 1500);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items and hexagons
        document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // ================= Hexagon Card Overlay =================
const cardDetails = {
  mobile: `
    <h3>Mobile Console Rentals</h3>
    <ul>
      <li>Base Fee: $150 for the first hour</li>
      <li>Host Fee: $50 per event</li>
      <li>Additional Hours: $125 per hour after the first hour</li>
      <li>Maximum Booking: 6 hours</li>
      <li>Included: Access to one console and all games available.</li>
      <li>Example: 3-hour event = $450</li>
    </ul>
  `,
  instore: `
    <h3>In-Store Console & Board Games</h3>
    <ul>
      <li>$25 per person - 30 mins of unlimited access to console and controllers</li>
      <li>$40 per person - 1 hour of unlimited access to console</li>
      <li>Includes free 30 mins access to our chill zone</li>
      <li>Special - $50 - 1 hour (30 mins Gaming & 30 mins Bubble Quest)</li>
      <li>Special - $100 -2 hours (1 hour Gaming & 1 hour Bubble Quest)</li>
    </ul>
  `,
  student: `
    <h3>Student After School</h3>
    <ul>
      <li>Monday–Friday, 2:00PM – 4:30PM</li>
      <li>$15 per 20-minute block</li>
      <li>$20 per 30-minute block</li>
      <li>$40 per hour block</li>
       <li>Please Note:That children under 11 years old must be accompined by an adult.</li>
      <li>Max 2-hour session to align with school bus schedules.</li>
      <li>Access to console and chill zone.</li>
    </ul>
  `,
  sunday: `
    <h3>Bubble Quest (Puzzle Room) </h3>
    <ul>
      <li>$35 - Can you complete your mission in 30mins?</li>
      <li>$60 - Can you complete your mission in 1 hour?</li>
      <li>An interactive puzzle adventure inside Party Bubble </li>
      <li>Solve clues, challenges and mini missions as a team</li>
      <li>Fast-paced, fun and immersive experience</li>
      <li>Special - $50 - 1 hour (30 mins Gaming & 30 mins Bubble Quest)</li>
      <li>Special - $100 -2 hours (1 hour Gaming & 1 hour Bubble Quest)</li>
    </ul>
  `,
  games: `
<h3>Nintendo Games Available (More to Come)</h3>
<div class="games-grid">
  <div class="game-item"><img src="images/Agent A.png" alt="Agent A"><span>Agent A</span></div>
  <div class="game-item"><img src="images/aspire.png" alt="Aspire"><span>Aspire</span></div>
  <div class="game-item"><img src="images/Battle Crashers.png" alt="Battle Crashers"><span>Battle Crashers</span></div>
  <div class="game-item"><img src="images/brawlhalla.png" alt="Brawlhalla"><span>Brawlhalla</span></div>
  <div class="game-item"><img src="images/Browser's Fury.png" alt="Bowser's Fury"><span>Bowser's Fury</span></div>
  <div class="game-item"><img src="images/Captain Toad.png" alt="Captain Toad"><span>Captain Toad</span></div>
  <div class="game-item"><img src="images/Cat Quest 2.png" alt="Cat Quest 2"><span>Cat Quest 2</span></div>
  <div class="game-item"><img src="images/Down in Bermuda.png" alt="Down in Bermuda"><span>Down in Bermuda</span></div>
  <div class="game-item"><img src="images/Dragonball Fighterz.png" alt="Dragonball FighterZ"><span>Dragonball FighterZ</span></div>
  <div class="game-item"><img src="images/fallguys.png" alt="Fall Guys"><span>Fall Guys</span></div>
  <div class="game-item"><img src="images/gris.png" alt="Gris"><span>Gris</span></div>
  <div class="game-item"><img src="images/Hokko Life.png" alt="Hokko Life"><span>Hokko Life</span></div>
  <div class="game-item"><img src="images/Jenny Leclue.png" alt="Jenny Leclue"><span>Jenny Leclue</span></div>
  <div class="game-item"><img src="images/Kart Racers 3.png" alt="Kart Racers"><span>Kart Racers</span></div>
  <div class="game-item"><img src="images/Lego Worlds.png" alt="Lego Worlds 3"><span>Lego Worlds 3</span></div>
  <div class="game-item"><img src="images/Little Strays.png" alt="Little Strays"><span>Little Strays</span></div>
  <div class="game-item"><img src="images/luigismansion3.png" alt="Luigi's Mansion 3"><span>Luigi's Mansion 3</span></div>
  <div class="game-item"><img src="images/mariokart8.png" alt="Mario Kart 8"><span>Mario Kart 8</span></div>
  <div class="game-item"><img src="images/My Baby.png" alt="My Baby"><span>My Baby</span></div>
  <div class="game-item"><img src="images/My Hero One's Justice.png" alt="My Hero One's Justice"><span>My Hero One's Justice</span></div>
  <div class="game-item"><img src="images/nintendosports.png" alt="Nintendo Sports"><span>Nintendo Sports</span></div>
  <div class="game-item"><img src="images/overcooked2.png" alt="Overcooked 2"><span>Overcooked 2</span></div>
  <div class="game-item"><img src="images/pokemonunite.png" alt="Pokemon Unite"><span>Pokemon Unite</span></div>
  <div class="game-item"><img src="images/Super Mario 3D World.png" alt="Super Mario 3D World"><span>Super Mario 3D World</span></div>
  <div class="game-item"><img src="images/Supermario Bros Wonder.png" alt="Super Mario Bros Wonder"><span>Super Mario Bros Wonder</span></div>
  <div class="game-item"><img src="images/supermarioodyssey.png" alt="Super Mario Odyssey"><span>Super Mario Odyssey</span></div>
  <div class="game-item"><img src="images/Super Mario U Deluxe.png" alt="Super Mario U Deluxe"><span>Super Mario U Deluxe</span></div>
  <div class="game-item"><img src="images/Timelie.png" alt="Timelie"><span>Timelie</span></div>
  <div class="game-item"><img src="images/unravel2.png" alt="Unravel 2"><span>Unravel 2</span></div>
</div>
  `
};

const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');

document.querySelectorAll('.hexagon').forEach(hex => {
  hex.addEventListener('click', () => {
    const card = hex.dataset.card;
    overlayContent.innerHTML =
      `<span class="overlay-close" id="overlay-close">&times;</span>` +
      cardDetails[card];

    overlay.classList.add('show');

    document.getElementById('overlay-close').addEventListener('click', () => {
      overlay.classList.remove('show');
    });
  });
});

// Close overlay if clicked outside content
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.classList.remove('show');
  }
});
