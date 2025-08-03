# 🚀 Backend Developer Portfolio

Elegant and modern portfolio website for backend developers, built with React and Chakra UI.

## ✨ Features

- 🎨 **Modern Design** - Clean, elegant, and professional interface
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with React and optimized for speed
- 🎭 **Smooth Animations** - Engaging user experience with subtle animations
- 🌈 **Chakra UI** - Beautiful and accessible component library
- 📧 **Contact Form** - Functional contact form for client inquiries
- 🔍 **Project Filtering** - Easy navigation through project categories
- 📊 **Skills Showcase** - Visual representation of technical skills

## 🛠️ Built With

- **React** - Frontend framework
- **Chakra UI** - Component library and styling
- **Heroicons** - Beautiful SVG icons
- **Framer Motion** - Animation library
- **Create React App** - Build toolchain

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/zStormWolf/Portafolio.git
```

2. Navigate to the project directory
```bash
cd Portafolio
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📦 Available Scripts

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🎨 Customization

### Personal Information
Update your personal information in the component files:
- `src/components/Hero.jsx` - Main hero section
- `src/components/About.jsx` - About section
- `src/components/Contact.jsx` - Contact information

### Projects
Add your projects in `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    image: "project-image-url",
    technologies: ["Tech1", "Tech2", "Tech3"],
    category: "api", // or "microservicios", "database", etc.
    github: "github-url",
    demo: "demo-url",
    featured: true // for featured projects
  }
];
```

### Skills
Update your skills in `src/components/Skills.jsx`:
```javascript
const skills = [
  { name: "Skill Name", level: 90 }, // level from 0-100
];
```

## 🌐 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://zStormWolf.github.io/Portafolio"`
3. Add deploy scripts to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
4. Deploy: `npm run deploy`

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**zStormWolf**
- GitHub: [@zStormWolf](https://github.com/zStormWolf)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

*Built with ❤️ by zStormWolf*