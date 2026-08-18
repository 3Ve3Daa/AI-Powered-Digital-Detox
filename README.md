# 🌟 AI-Powered Digital Detox & IT Security Guide - IITU for university project

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**Interactive presentation website for university project about digital wellness and cybersecurity.**

📌 **Live Demo:** [View Website](https://3ve3daa.github.io/AI-Powered-Digital-Detox/)

---

## 📋 About The Project

This is an **interactive, presentation-style website** created for a 5-minute university presentation on digital detox strategies and IT security fundamentals. The website combines educational content with engaging animations and interactions to help users understand:

- 📱 How excessive screen time affects our lives
- 🧘 Practical digital detox techniques
- 🔒 Essential IT security practices
- ✅ Simple, actionable steps for better digital habits

### 🎨 Design Philosophy

The website features a **retro-tech editorial design** inspired by university project aesthetics:

- **Colors:** Warm off-white background (#f5f1e8) with dark burgundy accents (#6b2c3e)
- **Typography:** Monospace fonts (Courier New, Consolas) for that technical feel
- **Elements:** Pixel art decorations, clean grids, premium student-project look
- **Language:** Simple A1-A2 English for accessibility

---

## ✨ Features

### 🎯 7 Interactive Sections

1. **HERO** - Animated phone with notification effects
2. **PERSONAL AUDIT** - Weekly screen time statistics with clickable insights
3. **DIGITAL DETOX** - Common problems and solutions (expandable cards)
4. **5 GOLDEN RULES** - Essential habits for digital wellness
5. **IT SECURITY** - Interactive security checklist
6. **MINI QUIZ** - Knowledge test with instant feedback
7. **FINAL** - Motivational conclusion with celebration animation

### 🚀 Interactive Elements

- ✅ **Smooth scroll navigation** between sections
- ✅ **Click interactions** - cards expand to reveal detailed information
- ✅ **Hover effects** on all interactive elements
- ✅ **Animated transitions** for visual feedback
- ✅ **Navigation dots** for quick section jumping
- ✅ **Keyboard navigation** (arrow keys ← → ↑ ↓)
- ✅ **Touch swipe support** for mobile devices
- ✅ **Quiz system** with score tracking
- ✅ **Confetti celebration** animation
- ✅ **Easter egg** - Konami code (↑↑↓↓←→←→)
- ✅ **Fully responsive** design

---

## 🛠️ Built With

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - All interactions and animations
- **No frameworks** - Pure web technologies
- **No backend** - Runs entirely in the browser

---

## 📦 Installation & Usage

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/3Ve3Daa/AI-Powered-Digital-Detox.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd AI-Powered-Digital-Detox
   ```

3. **Open in browser:**
   ```bash
   # Simply open index.html in any modern browser
   # OR use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

### File Structure

```
digital-detox-security-guide/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
├── publish.bat         # Windows script for GitHub publishing
└── .gitignore         # Git ignore file
```

---

## 🎮 How to Navigate

### Mouse/Trackpad:
- **Click** navigation dots on the right
- **Scroll** to move between sections
- **Click** cards/items to expand them
- **Click** quiz answers to select

### Keyboard:
- **↓ or →** - Next section
- **↑ or ←** - Previous section
- **↑↑↓↓←→←→** - Easter egg! 🎮

### Mobile:
- **Swipe up/down** to navigate sections
- **Tap** to interact with elements

---

## 📊 Project Statistics

- **Sections:** 7 interactive presentations
- **Quiz Questions:** 5 with instant feedback
- **Problems Covered:** 4 common digital issues
- **Golden Rules:** 5 essential habits
- **Security Tips:** 4 IT security practices
- **Lines of Code:** ~1,000+ (HTML/CSS/JS combined)
- **Development Time:** Created for university project
- **Target Presentation Time:** 5 minutes

---

## 🎓 Educational Content

### Digital Detox Topics:
- Social media addiction
- Late-night phone usage
- Endless scrolling behavior
- Notification overload
- Tech-free boundaries

### IT Security Topics:
- Strong password creation
- Private information protection
- Phishing awareness
- Two-factor authentication (2FA)
- Account security best practices

---

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Run the publish script:**
   ```bash
   publish.bat
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch as source
   - Save and wait for deployment

3. **Access your site:**
   ```
   https://3ve3daa.github.io/AI-Powered-Digital-Detox/
   ```

### Alternative Hosting:
- **Netlify:** Drag and drop the project folder
- **Vercel:** Import from GitHub
- **GitHub Pages:** Use the provided `publish.bat` script
- **Any static hosting:** Upload all files

---

## 📱 Browser Compatibility

| Browser | Version | Supported |
|---------|---------|-----------|
| Chrome  | 90+     | ✅ Yes    |
| Firefox | 88+     | ✅ Yes    |
| Safari  | 14+     | ✅ Yes    |
| Edge    | 90+     | ✅ Yes    |
| Opera   | 76+     | ✅ Yes    |

**Note:** Best experienced on modern browsers with JavaScript enabled.

---

## 🎨 Customization

### Change Colors:
Edit CSS variables in `styles.css`:
```css
:root {
    --bg-cream: #f5f1e8;        /* Background color */
    --burgundy: #6b2c3e;        /* Primary accent */
    --burgundy-light: #8a3d52;  /* Light accent */
    --burgundy-dark: #4a1f2d;   /* Dark accent */
}
```

### Modify Content:
- **Statistics:** Edit data attributes in `index.html` (section-1)
- **Quiz questions:** Update quiz-question divs in `index.html`
- **Rules/Tips:** Modify text content in respective sections

### Add Sections:
1. Create new section in `index.html`
2. Add navigation dot in `.nav-dots`
3. Update section count in `script.js`

---

## 🐛 Known Issues & Limitations

- Scroll snap may behave differently on some mobile browsers
- Best experienced in landscape mode on small devices
- Quiz state resets on page refresh (no persistence)
- No backend means no data collection or analytics

---

## 🤝 Contributing

This is a university project, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is created for educational purposes as part of a university assignment.

**Educational Use:** ✅ Allowed  
**Commercial Use:** ❌ Not intended  
**Attribution:** 🙏 Appreciated

---

## 👨‍🎓 Author

**Your Name**
- University: [IITU](https://iitu.edu.kz/ru/)
- Course: [Software Engineering]
- Year: 2026
- GitHub: [@3Ve3Daa](https://github.com/3Ve3Daa)

---

## 🙏 Acknowledgments

- Design inspiration from retro-tech editorial aesthetics
- Educational content based on digital wellness research
- IT security tips from cybersecurity best practices
- Built with ❤️ for university presentation

---

## 📞 Contact & Support

Have questions or suggestions?

- 📧 Email: adilzanbekov7@gmail.com
- 💬 GitHub Issues: [Create an issue](https://github.com/3Ve3Daa/AI-Powered-Digital-Detox/issues)
- 🌟 Star this project if you find it helpful!

---

## 🎯 Future Improvements

- [ ] Add multi-language support
- [ ] Implement dark mode toggle
- [ ] Add more quiz questions
- [ ] Create printable PDF version
- [ ] Add progress persistence with localStorage
- [ ] Include more statistics visualizations
- [ ] Add sound effects (optional toggle)

---

<div align="center">

**Made with ❤️ for Digital Wellness & Cybersecurity Education**

⭐ Star this repo if it helped you! ⭐

[Report Bug](https://github.com/3Ve3Daa/AI-Powered-Digital-Detox/issues) · [Request Feature](https://github.com/3Ve3Daa/AI-Powered-Digital-Detox/issues)

</div>
