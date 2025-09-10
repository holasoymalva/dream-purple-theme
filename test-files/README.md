# Dream Purple Theme Test Suite

This directory contains a comprehensive test suite for the Dream Purple VS Code theme, ensuring quality, accessibility, and compatibility across different scenarios.

## Test Categories

### 1. Syntax Highlighting Tests
Tests the theme's syntax highlighting capabilities across multiple programming languages:

- **JavaScript** (`javascript-test.js`) - Modern JS features, ES6+, async/await
- **TypeScript** (`typescript-test.ts`) - Types, interfaces, generics, decorators
- **Python** (`python-test.py`) - Classes, async functions, type hints, dataclasses
- **HTML/CSS** (`html-css-test.html`) - Semantic HTML, modern CSS features
- **JSON** (`json-test.json`) - Complex nested structures, various data types
- **YAML** (`yaml-test.yaml`) - Configuration files, anchors, multi-document
- **XML** (`xml-test.xml`) - Namespaces, attributes, CDATA sections
- **Markdown** (`markdown-test.md`) - Headers, code blocks, tables, links
- **SQL** (`sql-test.sql`) - Complex queries, stored procedures, triggers

### 2. Accessibility Tests
Validates WCAG 2.1 compliance and accessibility standards:

- **Contrast Ratios** - Ensures minimum 4.5:1 for normal text, 3:1 for UI components
- **Color Blindness** - Tests compatibility with protanopia, deuteranopia, tritanopia
- **Focus Indicators** - Validates keyboard navigation visibility
- **Screen Reader** - Ensures compatibility with assistive technologies

### 3. Compatibility Tests
Tests compatibility with VS Code versions and popular extensions:

- **VS Code Versions** - Tests from 1.74.0 (minimum) to latest insider builds
- **Popular Extensions** - GitLens, ESLint, Prettier, Bracket Pair Colorizer, etc.
- **Theme Switching** - Smooth transitions between themes
- **Semantic Highlighting** - Modern VS Code semantic token support

### 4. Extended Test Scenarios
Additional comprehensive testing scenarios:

- **Multi-file Scenarios** - Split editors, multiple tabs, terminal integration
- **Performance Impact** - Theme loading time, memory usage, CPU impact
- **Edge Cases** - Large files, unicode characters, mixed line endings

## Running Tests

### Run All Tests
```bash
node test-files/run-all-tests.js
```

### Run Individual Test Suites
```bash
# Syntax highlighting only
node test-files/test-suite.js

# Accessibility only
node test-files/accessibility-validator.js

# Compatibility only
node test-files/theme-compatibility-test.js
```

### Command Line Options
```bash
# Skip specific test categories
node test-files/run-all-tests.js --no-accessibility --no-compatibility

# Verbose output
node test-files/run-all-tests.js --verbose

# Skip report generation
node test-files/run-all-tests.js --no-reports

# Show help
node test-files/run-all-tests.js --help
```

## Test Files Structure

```
test-files/
├── README.md                      # This file
├── run-all-tests.js              # Main test runner
├── test-suite.js                 # Syntax highlighting tests
├── accessibility-validator.js     # Accessibility compliance tests
├── theme-compatibility-test.js    # Compatibility tests
├── javascript-test.js            # JavaScript syntax test file
├── typescript-test.ts            # TypeScript syntax test file
├── python-test.py                # Python syntax test file
├── html-css-test.html            # HTML/CSS syntax test file
├── json-test.json                # JSON syntax test file
├── yaml-test.yaml                # YAML syntax test file
├── xml-test.xml                  # XML syntax test file
├── markdown-test.md              # Markdown syntax test file
├── sql-test.sql                  # SQL syntax test file
└── test-results/                 # Generated test reports (created after running tests)
    ├── comprehensive-results.json
    ├── accessibility-report.json
    ├── compatibility-report.json
    ├── test-report.html
    └── test-summary.md
```

## Test Results and Reports

After running tests, several reports are generated:

### 1. Console Output
Real-time test progress and results displayed in the terminal with color-coded status indicators:
- ✅ Passed tests
- ❌ Failed tests  
- ⚠️ Warnings
- 📊 Summary statistics

### 2. JSON Reports
Detailed machine-readable results:
- `comprehensive-results.json` - Complete test results from all suites
- `accessibility-report.json` - Detailed accessibility analysis
- `compatibility-report.json` - Compatibility test details

### 3. HTML Report
Visual test report (`test-report.html`) with:
- Overall score and statistics
- Category breakdowns
- Interactive results display
- Styled with Dream Purple theme colors

### 4. Markdown Summary
Concise summary (`test-summary.md`) suitable for:
- GitHub README inclusion
- Documentation
- Quick reference

## Interpreting Results

### Overall Score
- **95-100%**: Excellent - Ready for release
- **85-94%**: Great - Minor issues to address
- **70-84%**: Good - Some improvements needed
- **50-69%**: Fair - Significant work required
- **Below 50%**: Poor - Major issues must be fixed

### Test Categories Status
- **Syntax Highlighting**: Validates color definitions for all language tokens
- **Accessibility**: WCAG compliance score and violation details
- **Compatibility**: VS Code version and extension compatibility
- **Extended**: Performance and edge case handling

## Continuous Integration

### GitHub Actions
Add to `.github/workflows/test.yml`:

```yaml
name: Theme Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: node test-files/run-all-tests.js
      - uses: actions/upload-artifact@v3
        with:
          name: test-results
          path: test-files/test-results/
```

### Pre-commit Hook
Add to `package.json`:

```json
{
  "scripts": {
    "test": "node test-files/run-all-tests.js",
    "test:syntax": "node test-files/test-suite.js",
    "test:accessibility": "node test-files/accessibility-validator.js",
    "test:compatibility": "node test-files/theme-compatibility-test.js"
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm test"
    }
  }
}
```

## Customizing Tests

### Adding New Language Tests
1. Create a new test file: `test-files/[language]-test.[ext]`
2. Add comprehensive syntax examples for the language
3. Update `TEST_CONFIG.languages` in `test-suite.js`
4. Add file extension mapping in `getFileExtension()` method

### Adding New Accessibility Checks
1. Add new check methods to `AccessibilityValidator` class
2. Include in `validateUIAccessibility()` method
3. Update WCAG standards if needed
4. Add to test report generation

### Adding New Compatibility Tests
1. Add extension to `popularExtensions` array in `theme-compatibility-test.js`
2. Implement specific compatibility check method
3. Update VS Code version feature mapping as needed

## Troubleshooting

### Common Issues

**Node.js Version Error**
- Ensure Node.js 14+ is installed
- Check version with `node --version`

**Missing Theme Files**
- Ensure `package.json` and `themes/dream-purple-color-theme.json` exist
- Verify file paths are correct

**Test File Not Found**
- Check that all test files are present in `test-files/` directory
- Verify file permissions

**Permission Errors**
- Ensure write permissions for `test-files/test-results/` directory
- Run with appropriate user permissions

### Debug Mode
Enable verbose output for detailed debugging:
```bash
node test-files/run-all-tests.js --verbose
```

## Contributing

When contributing to the test suite:

1. **Add Tests for New Features** - Any new theme features should include corresponding tests
2. **Update Documentation** - Keep this README updated with new test categories
3. **Maintain Compatibility** - Ensure tests work across supported Node.js versions
4. **Follow Patterns** - Use existing test patterns and naming conventions
5. **Test Your Tests** - Verify new tests work correctly before submitting

## License

This test suite is part of the Dream Purple VS Code theme project and follows the same license terms.