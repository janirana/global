# Global Logistics Receipt Generator

A modern web application for generating professional cargo receipts for various airlines and logistics companies.

## Features

- 🎯 Real-time receipt preview
- 🎨 Professional receipt templates
- 📱 Responsive design
- 🖨️ PDF-ready output
- ✈️ Support for multiple airlines (Emirates, Qatar Airways, Kuwait Airways, etc.)
- 📋 Form validation
- 💾 Export functionality with HTML2Canvas

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: HTML2Canvas
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/janirana/global.git
cd global
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Deployment

This project is ready for deployment on platforms like:

- **Vercel** (recommended)
- Netlify
- GitHub Pages
- Any static hosting provider

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Project Structure

```
src/
├── components/          # Reusable components
├── features/           # Feature-specific components
│   ├── form/          # Receipt form components
│   └── liveView/      # Live preview components
├── pages/             # Page components
├── types/             # TypeScript type definitions
├── constants/         # App constants and configurations
├── assets/           # Images and static assets
└── styles/          # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary to Global Logistics.