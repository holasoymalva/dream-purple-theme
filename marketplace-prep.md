# Marketplace Publishing Checklist

## Pre-Publishing Requirements

### 1. Publisher Setup
- [ ] Create VS Code Marketplace publisher account
- [ ] Update `publisher` field in package.json with actual publisher name
- [ ] Verify publisher has necessary permissions

### 2. Required Files
- [x] `.vscodeignore` - Configured to exclude development files
- [ ] `icon.png` - 128x128 theme icon (convert from icon.svg)
- [x] `README.md` - User documentation
- [x] `CHANGELOG.md` - Version history
- [x] `package.json` - Complete metadata

### 3. Marketplace Metadata
- [x] Proper description (under 200 characters for summary)
- [x] Relevant keywords for discoverability
- [x] Gallery banner configuration
- [x] Categories set to "Themes"
- [x] Engine compatibility (VS Code ^1.74.0)

### 4. Version Management
- [x] Semantic versioning (1.0.0)
- [ ] Update version before each release
- [ ] Document changes in CHANGELOG.md

### 5. Quality Assurance
- [ ] Test theme installation from VSIX
- [ ] Verify all UI elements are properly themed
- [ ] Check syntax highlighting across multiple languages
- [ ] Validate accessibility (contrast ratios)

## Publishing Commands

### Install VSCE (VS Code Extension Manager)
```bash
npm install -g vsce
```

### Package Extension
```bash
vsce package
```

### Publish to Marketplace
```bash
vsce publish
```

### Publish Specific Version
```bash
vsce publish 1.0.1
```

## Post-Publishing
- [ ] Verify extension appears in marketplace
- [ ] Test installation from marketplace
- [ ] Monitor for user feedback and issues
- [ ] Plan future updates and improvements