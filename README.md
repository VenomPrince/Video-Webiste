# Video Gallery Web Application

A modern, responsive web application for browsing and viewing categorized video content. Built with vanilla JavaScript using a modular architecture and modern ES6+ features.

## Features

- 🔐 User Authentication
- 📱 Responsive Design
- 🎥 Video Category Management
- 📄 Dynamic Content Loading
- ✨ Smooth Animations & Transitions
- 🎨 Modern Dark Theme UI

## Live Demo

Access the live demo at: [Video Gallery Demo](https://video-webiste.vercel.app/)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/VenomPrince/Video-Webiste.git
```

2. Navigate to the project directory:
```bash
cd Video-Webiste
```

3. Start a local server (using Python):
```bash
python -m http.server 8000
```

4. Open your browser and visit:
```
http://localhost:8000
```

5. Login with default credentials:
- Username: "username"
- Password: "password"

## Project Structure

```
Video-Webiste/
├── src/
│   ├── js/
│   │   ├── auth.js          # Authentication module
│   │   ├── videoManager.js  # Video handling
│   │   ├── categoryManager.js # Category navigation
│   │   ├── uiEffects.js     # UI interactions
│   │   └── main.js          # Application entry point
│   ├── css/
│   │   ├── main.css         # Main stylesheet
│   │   ├── reset.css        # CSS reset
│   │   ├── layout.css       # Layout styles
│   │   ├── components.css   # Component styles
│   │   ├── animations.css   # Animations
│   │   └── responsive.css   # Media queries
│   └── config/
│       └── videos.js        # Video configuration
└── index.html              # Main HTML file
```

## Technologies Used

- HTML5
- CSS3
  - Flexbox
  - Grid
  - CSS Variables
  - Media Queries
- JavaScript (ES6+)
  - ES6 Modules
  - Classes
  - Async/Await
  - Event Handling

## Features in Detail

### Authentication
- Client-side user authentication
- Secure session management
- Login/Logout functionality

### Video Management
- Categorized video display
- Pagination support
- Dynamic video loading
- Responsive video player

### UI/UX
- Dark theme design
- Smooth transitions
- Interactive hover effects
- Responsive grid layout
- Category glow effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Prerequisites
- Modern web browser
- Basic HTTP server (e.g., Python's `http.server`)

### Running Locally
1. Clone the repository
2. Start a local server
3. Access through localhost

### Code Style
- ES6+ JavaScript
- Modular architecture
- Clean and documented code
- Consistent naming conventions

## Future Improvements

- [ ] Backend authentication
- [ ] User registration
- [ ] Video search functionality
- [ ] Custom video player controls
- [ ] User preferences
- [ ] More video categories
- [ ] Social sharing features

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**VenomPrince**
- GitHub: [@VenomPrince](https://github.com/VenomPrince)

## Acknowledgments

- Inspiration from modern video streaming platforms
- Built with modern web development best practices
- Focus on user experience and performance
