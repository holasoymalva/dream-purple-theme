# Contributing to Dream Purple Theme

Thank you for your interest in contributing to the Dream Purple VS Code theme! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker to report bugs or suggest features
- Search existing issues before creating a new one
- Provide detailed information including VS Code version and steps to reproduce
- Include screenshots when reporting visual issues

### Suggesting Improvements
- Color adjustments and new language support are always welcome
- Provide specific hex codes and rationale for color changes
- Test suggestions across multiple file types before submitting
- Consider accessibility and contrast requirements

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following our guidelines below
4. Test thoroughly across different languages and UI states
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 🎨 Color Guidelines

### Adding New Colors
- Maintain consistency with the existing purple/orange palette
- Ensure minimum 4.5:1 contrast ratio for text
- Test with color blindness simulators
- Document the purpose and usage of new colors

### Modifying Existing Colors
- Provide clear rationale for changes
- Test across multiple languages (JS, HTML, CSS, JSON, etc.)
- Verify UI elements remain readable and accessible
- Update COLOR_PALETTE.md documentation

### Color Testing Checklist
- [ ] Test with JavaScript/TypeScript files
- [ ] Test with HTML/CSS files  
- [ ] Test with JSON configuration files
- [ ] Test with Markdown documentation
- [ ] Verify all UI elements (sidebar, tabs, status bar)
- [ ] Check accessibility contrast ratios
- [ ] Test with different font sizes and families

## 🧪 Testing

### Manual Testing
1. Install the theme locally using `vsce package`
2. Test with various file types and languages
3. Verify UI consistency across all VS Code panels
4. Test interactive states (hover, focus, selection)
5. Check theme switching behavior

### Automated Testing
- Run `npm test` if test scripts are available
- Validate JSON syntax in theme files
- Check package.json configuration

## 📝 Documentation

### Required Documentation Updates
- Update CHANGELOG.md for all changes
- Modify COLOR_PALETTE.md for color changes
- Update README.md for new features or installation changes
- Add or update screenshots for visual changes

### Documentation Style
- Use clear, concise language
- Include code examples where helpful
- Maintain consistent formatting and structure
- Add appropriate emoji for visual appeal (but don't overuse)

## 🔧 Development Setup

### Prerequisites
- Node.js and npm installed
- Visual Studio Code
- Git for version control

### Setup Steps
1. Clone your fork: `git clone https://github.com/your-username/dream-purple-theme.git`
2. Install vsce: `npm install -g vsce`
3. Make your changes to theme files
4. Package for testing: `vsce package`
5. Install and test the generated .vsix file

### File Structure
```
dream-purple-theme/
├── themes/
│   └── dream-purple-color-theme.json  # Main theme definition
├── screenshots/                       # Theme screenshots
├── package.json                      # Extension metadata
├── README.md                         # Main documentation
├── CHANGELOG.md                      # Version history
├── COLOR_PALETTE.md                  # Color documentation
└── CONTRIBUTING.md                   # This file
```

## 🎯 Contribution Areas

### High Priority
- Language-specific syntax improvements
- Accessibility enhancements
- Performance optimizations
- Better semantic token support

### Medium Priority  
- Additional theme variants (light mode, high contrast)
- Integration with popular extensions
- Custom icon theme development
- Improved documentation and examples

### Low Priority
- Marketing materials and website
- Social media presence
- Community building activities

## 📋 Pull Request Guidelines

### Before Submitting
- Ensure your code follows the existing style
- Test thoroughly on different operating systems if possible
- Update relevant documentation
- Add appropriate entries to CHANGELOG.md

### PR Description Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature  
- [ ] Color adjustment
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested with JavaScript/TypeScript
- [ ] Tested with HTML/CSS
- [ ] Tested UI elements
- [ ] Verified accessibility
- [ ] Updated documentation

## Screenshots
Include before/after screenshots for visual changes.
```

## 🏆 Recognition

Contributors will be recognized in:
- CHANGELOG.md for their contributions
- README.md acknowledgments section
- GitHub contributor statistics
- Release notes for significant contributions

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and community chat
- **Email**: [maintainer@dreampurpletheme.com](mailto:maintainer@dreampurpletheme.com)

## 📄 License

By contributing to Dream Purple Theme, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

Thank you for helping make Dream Purple Theme better for everyone! 💜🧡