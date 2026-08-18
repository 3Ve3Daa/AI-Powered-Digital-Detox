// Scroll to Section
function scrollToSection(index) {
    const section = document.getElementById(`section-${index}`);
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Update nav dots
    document.querySelectorAll('.nav-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Nav dot click handlers
document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const section = parseInt(dot.dataset.section);
        scrollToSection(section);
    });
});

// Update active nav dot on scroll
const scrollContainer = document.querySelector('.scroll-container');
scrollContainer.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = scrollContainer.scrollTop + window.innerHeight / 2;
    
    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < bottom) {
            document.querySelectorAll('.nav-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    });
});

// AUDIT SECTION - Reveal Details
function revealDetail(card) {
    card.classList.toggle('revealed');
}

// Show Day Detail
function showDayDetail(bar) {
    const tooltip = document.querySelector('.day-tooltip');
    const day = bar.dataset.day;
    const hours = bar.dataset.hours;
    const rect = bar.getBoundingClientRect();
    
    tooltip.textContent = `${day}: ${hours} hours`;
    tooltip.style.left = rect.left + rect.width / 2 + 'px';
    tooltip.style.top = rect.top - 40 + 'px';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.classList.add('visible');
    
    setTimeout(() => {
        tooltip.classList.remove('visible');
    }, 2000);
}

// DETOX SECTION - Toggle Problem Card
function toggleProblem(card) {
    const wasExpanded = card.classList.contains('expanded');
    
    // Close all cards
    document.querySelectorAll('.problem-card').forEach(c => {
        c.classList.remove('expanded');
    });
    
    // Open clicked card if it wasn't expanded
    if (!wasExpanded) {
        card.classList.add('expanded');
    }
}

// RULES SECTION - Expand Rule
function expandRule(card) {
    const wasExpanded = card.classList.contains('expanded');
    
    // Close all rules
    document.querySelectorAll('.rule-card').forEach(c => {
        c.classList.remove('expanded');
    });
    
    // Open clicked rule if it wasn't expanded
    if (!wasExpanded) {
        card.classList.add('expanded');
    }
}

// SECURITY SECTION - Toggle Checklist Item
function toggleChecklistItem(item) {
    item.classList.toggle('checked');
}

// QUIZ SECTION
let currentQuestion = 0;
let correctAnswers = 0;

function selectAnswer(button, isCorrect) {
    // Disable all options
    const options = button.parentElement.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.disabled = true;
        opt.style.cursor = 'not-allowed';
    });
    
    // Mark answer
    if (isCorrect) {
        button.classList.add('correct');
        correctAnswers++;
    } else {
        button.classList.add('wrong');
        // Show correct answer
        options.forEach(opt => {
            if (opt.onclick.toString().includes('true')) {
                setTimeout(() => {
                    opt.classList.add('correct');
                }, 500);
            }
        });
    }
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestion++;
        const questions = document.querySelectorAll('.quiz-question');
        
        if (currentQuestion < questions.length) {
            questions[currentQuestion - 1].classList.remove('active');
            questions[currentQuestion].classList.add('active');
        } else {
            // Show results
            showQuizResults();
        }
    }, 2000);
}

function showQuizResults() {
    const questions = document.querySelectorAll('.quiz-question');
    questions.forEach(q => q.classList.remove('active'));
    
    const result = document.querySelector('.quiz-result');
    const scoreDisplay = result.querySelector('.result-score');
    const textDisplay = result.querySelector('.result-text');
    
    const totalQuestions = questions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    scoreDisplay.textContent = `${correctAnswers}/${totalQuestions}`;
    
    if (percentage === 100) {
        textDisplay.textContent = '🎉 Perfect! You are a digital detox and security expert!';
    } else if (percentage >= 80) {
        textDisplay.textContent = '✨ Great job! You understand the important things!';
    } else if (percentage >= 60) {
        textDisplay.textContent = '👍 Good work! Review the tips again to improve.';
    } else {
        textDisplay.textContent = '💪 Keep learning! Go back and read the sections again.';
    }
    
    result.classList.add('show');
}

function retryQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    
    // Reset all questions
    const questions = document.querySelectorAll('.quiz-question');
    questions.forEach((q, index) => {
        const options = q.querySelectorAll('.quiz-option');
        options.forEach(opt => {
            opt.disabled = false;
            opt.style.cursor = 'pointer';
            opt.classList.remove('correct', 'wrong');
        });
        
        if (index === 0) {
            q.classList.add('active');
        } else {
            q.classList.remove('active');
        }
    });
    
    // Hide result
    document.querySelector('.quiz-result').classList.remove('show');
}

// FINAL SECTION - Celebration
function celebrate() {
    const button = event.target.closest('.action-button');
    button.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 300);
    
    // Create confetti
    const colors = ['#6b2c3e', '#8a3d52', '#4a1f2d', '#f5f1e8'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti(colors);
        }, i * 30);
    }
    
    // Pulse success icon
    const successIcon = document.querySelector('.success-icon');
    successIcon.style.animation = 'none';
    setTimeout(() => {
        successIcon.style.animation = 'successBounce 0.5s ease';
    }, 10);
}

function createConfetti(colors) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '0px';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = (Math.random() * 10 + 5) + 'px';
    confetti.style.height = confetti.style.width;
    confetti.style.position = 'fixed';
    confetti.style.zIndex = '10000';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    const currentSection = document.querySelector('.nav-dot.active');
    const currentIndex = parseInt(currentSection.dataset.section);
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < 6) {
            scrollToSection(currentIndex + 1);
        }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) {
            scrollToSection(currentIndex - 1);
        }
    }
});

// Add smooth animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.stat-card, .problem-card, .rule-card, .checklist-item');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Prevent default scroll snap on certain interactions
document.querySelectorAll('.problem-card, .rule-card, .checklist-item').forEach(element => {
    element.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Touch swipe support for mobile
let touchStartY = 0;
let touchEndY = 0;

scrollContainer.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

scrollContainer.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const currentSection = document.querySelector('.nav-dot.active');
    const currentIndex = parseInt(currentSection.dataset.section);
    
    if (touchStartY - touchEndY > 50 && currentIndex < 6) {
        // Swipe up
        scrollToSection(currentIndex + 1);
    }
    
    if (touchEndY - touchStartY > 50 && currentIndex > 0) {
        // Swipe down
        scrollToSection(currentIndex - 1);
    }
}

// Add accessibility - announce section changes
function announceSection(sectionName) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Navigated to ${sectionName} section`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// Screen reader only class
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;
document.head.appendChild(style);

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        celebrate();
        alert('🎮 Easter egg found! You are a true digital warrior!');
        konamiCode = [];
    }
});

console.log('%c🎓 Digital Detox & IT Security Guide', 'font-size: 20px; color: #6b2c3e; font-weight: bold;');
console.log('%cMade with ❤️ for university project', 'font-size: 12px; color: #8a3d52;');
console.log('%cTip: Try the Konami code! ↑↑↓↓←→←→', 'font-size: 10px; color: #5a5a5a;');
