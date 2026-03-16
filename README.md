# Developer Portfolio

A modern, animated developer portfolio built with React, Vite, Tailwind CSS, GSAP, and Framer Motion featuring a sleek green and black theme.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite for blazing-fast development
- **Beautiful Animations**: 
  - GSAP for scroll-triggered and timeline animations
  - Framer Motion for smooth component transitions
  - React Spring for physics-based UI animations
- **Responsive Design**: Fully responsive across all devices
- **Green & Black Theme**: Eye-catching color scheme with glowing effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Hover effects, 3D transforms, and more

## 📦 Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Framer Motion** - Production-ready motion library
- **React Spring** - Spring-physics based animations
- **Lucide React** - Beautiful icon library

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── client/              # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
├── server/              # Backend (Node.js + Express)
│   ├── server.js
│   └── package.json
└── package.json         # Root package.json (Concurrently orchestration)
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the green and black color palette:

```js
colors: {
  primary: {
    // Your custom green shades
  },
  dark: {
    // Your custom dark shades
  }
}
```

### Content
Update the following files with your information:
- `src/components/Hero.jsx` - Name, title, and introduction
- `src/components/About.jsx` - About section content
- `src/components/Skills.jsx` - Your skills and technologies
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Contact information

## 🌟 Animation Libraries Used

### GSAP (GreenSock Animation Platform)
- Scroll-triggered animations
- Timeline-based animations
- Custom cursor effects
- 3D transforms

### Framer Motion
- Page transitions
- Component animations
- Gesture animations
- Layout animations

### React Spring
- Physics-based animations
- Floating effects
- Smooth transitions

## 📱 Sections

1. **Hero** - Eye-catching introduction with animated text and floating avatar
2. **About** - Information about you with feature cards
3. **Skills** - Animated skill bars and technology tags
4. **Projects** - Filterable project showcase with 3D card effects
5. **Contact** - Contact form and information
6. **Footer** - Social links and quick navigation

## 🚀 Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

Made with ❤️ and lots of ☕
