# Dream Purple Theme

A beautiful VS Code theme with deep purple backgrounds and vibrant orange accents, inspired by the Acid Purple Orange aesthetic. Perfect for developers who want a visually striking yet comfortable coding environment.

## 🎨 Preview

![Dream Purple Theme - JavaScript Example](./screenshots/javascript-typescript.png)
*JavaScript/TypeScript syntax highlighting with Dream Purple theme*

![Dream Purple Theme - Full Interface](./screenshots/interface-overview.png)
*Complete VS Code interface showing the Dream Purple theme*

![Dream Purple Theme - HTML/CSS Example](./screenshots/html-css-styling.png)
*Web development with HTML and CSS highlighting*

> **Note**: Screenshots show the theme with Fira Code font. The theme works with any font of your choice.

## ✨ Features

- **Deep Purple Background**: Easy on the eyes during long coding sessions
- **Vibrant Orange Accents**: Highlights important UI elements and syntax
- **Comprehensive Syntax Highlighting**: Support for JavaScript, TypeScript, HTML, CSS, JSON, Markdown, and more
- **Complete UI Theming**: Every VS Code interface element is carefully styled
- **Accessibility Focused**: High contrast ratios for better readability
- **Modern Design**: Clean, contemporary aesthetic that enhances focus

## 🚀 Installation

### Method 1: VS Code Marketplace (Recommended)

1. **Open Extensions View**
   - Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
   - Or click the Extensions icon in the Activity Bar

2. **Search and Install**
   - Search for "Dream Purple"
   - Click the **Install** button on the Dream Purple theme

3. **Activate the Theme**
   - Press `Ctrl+K Ctrl+T` (Windows/Linux) or `Cmd+K Cmd+T` (Mac)
   - Or go to **File > Preferences > Color Theme**
   - Select **"Dream Purple"** from the list

### Method 2: Manual Installation from VSIX

1. **Download Theme Package**
   - Get the latest `.vsix` file from [GitHub Releases](https://github.com/your-username/dream-purple-theme/releases)

2. **Install from VSIX**
   - Open VS Code
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type and select **"Extensions: Install from VSIX..."**
   - Navigate to and select the downloaded `.vsix` file

3. **Activate the Theme**
   - Restart VS Code (if prompted)
   - Press `Ctrl+K Ctrl+T` or go to **File > Preferences > Color Theme**
   - Select **"Dream Purple"**

### Method 3: Development Installation

For developers who want to modify or contribute to the theme:

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/dream-purple-theme.git
   cd dream-purple-theme
   ```

2. **Install Dependencies**
   ```bash
   npm install -g vsce
   ```

3. **Package Theme**
   ```bash
   vsce package
   ```

4. **Install Locally**
   - Follow Method 2 using the generated `.vsix` file

## 💡 Usage Tips

### Recommended Settings

For the best experience with Dream Purple, consider these VS Code settings:

```json
{
  // Font recommendations
  "editor.fontFamily": "'Fira Code', 'JetBrains Mono', 'Cascadia Code', Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  
  // Enhanced theme experience
  "workbench.iconTheme": "material-icon-theme",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  
  // Optimal display settings
  "editor.renderWhitespace": "boundary",
  "editor.renderControlCharacters": true,
  "editor.minimap.enabled": true,
  "editor.minimap.renderCharacters": false
}
```

### Font Recommendations

Dream Purple looks great with these coding fonts:
- **Fira Code** - Excellent ligature support
- **JetBrains Mono** - Clean, modern appearance
- **Cascadia Code** - Microsoft's coding font with ligatures
- **Source Code Pro** - Adobe's open-source monospace font
- **Operator Mono** - Premium font with italic support

### Extension Compatibility

Dream Purple works well with popular VS Code extensions:
- **Material Icon Theme** - Complements the color scheme
- **Bracket Pair Colorizer** - Enhanced bracket highlighting
- **GitLens** - Git integration with theme-aware colors
- **Error Lens** - Inline error highlighting
- **Rainbow CSV** - CSV file highlighting

## 🎯 Language Support

Dream Purple provides optimized syntax highlighting for:

- **JavaScript/TypeScript**: Enhanced highlighting for modern JS/TS features
- **HTML**: Clear distinction between tags, attributes, and content
- **CSS/SCSS**: Beautiful styling for selectors, properties, and values
- **JSON**: Clean formatting for configuration files
- **Markdown**: Readable documentation with proper heading hierarchy
- **Python**: Clear syntax highlighting for Python development
- **And many more languages supported by VS Code**

## 🎨 Color Palette

### Base Colors
- **Primary Background**: `#1a0d26` - Deep purple for main editor
- **Secondary Background**: `#2d1b3d` - Medium purple for sidebars
- **Accent Background**: `#4a2c5a` - Light purple for UI elements
- **Primary Orange**: `#ff6b35` - Vibrant orange for highlights
- **Secondary Orange**: `#ff8c42` - Soft orange for accents
- **Text Primary**: `#f4f1f4` - Warm white for main text
- **Text Secondary**: `#8b7a9b` - Purple-gray for secondary text

### Syntax Colors
- **Keywords**: `#ff6b35` (Orange) - `if`, `function`, `class`, etc.
- **Strings**: `#64ffda` (Mint Green) - Text content and literals
- **Comments**: `#8b7a9b` (Purple Gray) - Code comments
- **Functions**: `#82b1ff` (Light Blue) - Function names and calls
- **Numbers**: `#ff8c42` (Soft Orange) - Numeric values
- **Types**: `#c792ea` (Light Purple) - Classes and type definitions

> 📋 **Detailed Color Documentation**: For a comprehensive color palette guide including accessibility information, design decisions, and customization examples, see [COLOR_PALETTE.md](./COLOR_PALETTE.md).

## ⚙️ Customization

You can customize the theme by adding these settings to your VS Code `settings.json`:

```json
{
  "workbench.colorCustomizations": {
    "[Dream Purple]": {
      "editor.background": "#1a0d26",
      "editor.foreground": "#f4f1f4"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Dream Purple]": {
      "comments": "#8b7a9b",
      "keywords": "#ff6b35"
    }
  }
}
```

## 🔧 Troubleshooting

### Theme Not Applying
- **Restart VS Code** after installation
- Check that "Dream Purple" is selected in **File > Preferences > Color Theme**
- Verify the extension is enabled in the Extensions view

### Colors Look Different
- Ensure your monitor color profile is set correctly
- Check VS Code's **window.autoDetectColorScheme** setting
- Verify no other extensions are overriding theme colors

### Syntax Highlighting Issues
- Make sure file associations are correct for your language
- Check if language-specific extensions are installed and enabled
- Try reloading the window: **Developer > Reload Window**

### Performance Issues
- The theme itself doesn't affect performance
- Check for conflicting extensions that might modify colors
- Disable other theme-related extensions temporarily

## 🐛 Issues & Feedback

### Reporting Issues
Found a bug or have a suggestion? We'd love to hear from you!

1. **Check Existing Issues**: Browse [open issues](https://github.com/your-username/dream-purple-theme/issues) first
2. **Create New Issue**: Use our issue templates for:
   - 🐛 Bug reports
   - 💡 Feature requests  
   - 🎨 Color suggestions
   - 📚 Documentation improvements

### Contributing
We welcome contributions! See our [Contributing Guide](./CONTRIBUTING.md) for:
- Code style guidelines
- Development setup
- Pull request process
- Color modification guidelines

### Community
- **GitHub Discussions**: Share screenshots and customizations
- **Twitter**: Tag us [@DreamPurpleTheme](https://twitter.com/DreamPurpleTheme) 
- **VS Code Marketplace**: Leave a review and rating

## 📝 License

This theme is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the Acid Purple Orange color scheme
- Built with love for the VS Code community
- Thanks to all contributors and users who provide feedback

---

**Enjoy coding with Dream Purple! 💜🧡**