#!/usr/bin/env node

/**
 * Comprehensive Test Runner for Dream Purple VS Code Theme
 * Orchestrates all test suites: syntax highlighting, UI components, accessibility, and compatibility
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import test suites
const { ThemeTestSuite, ExtendedTestScenarios } = require('./test-suite');
const AccessibilityValidator = require('./accessibility-validator');
const ThemeCompatibilityTester = require('./theme-compatibility-test');

class ComprehensiveTestRunner {
    constructor() {
        this.results = {
            syntaxHighlighting: null,
            accessibility: null,
            compatibility: null,
            extended: null,
            overall: {
                startTime: new Date(),
                endTime: null,
                duration: null,
                totalTests: 0,
                passedTests: 0,
                failedTests: 0,
                warnings: 0,
                score: 0
            }
        };
        
        this.config = {
            runSyntaxTests: true,
            runAccessibilityTests: true,
            runCompatibilityTests: true,
            runExtendedTests: true,
            generateReports: true,
            verbose: false
        };
    }

    /**
     * Run all test suites
     */
    async runAllTests(options = {}) {
        console.log('🎨 Dream Purple Theme - Comprehensive Test Suite');
        console.log('================================================\n');
        
        // Apply options
        Object.assign(this.config, options);
        
        try {
            // Pre-test validation
            await this.validateTestEnvironment();
            
            // Run test suites
            if (this.config.runSyntaxTests) {
                await this.runSyntaxHighlightingTests();
            }
            
            if (this.config.runAccessibilityTests) {
                await this.runAccessibilityTests();
            }
            
            if (this.config.runCompatibilityTests) {
                await this.runCompatibilityTests();
            }
            
            if (this.config.runExtendedTests) {
                await this.runExtendedTests();
            }
            
            // Generate final report
            this.generateFinalReport();
            
            if (this.config.generateReports) {
                await this.generateArtifacts();
            }
            
        } catch (error) {
            console.error('❌ Test suite failed with error:', error.message);
            if (this.config.verbose) {
                console.error(error.stack);
            }
            process.exit(1);
        }
    }

    /**
     * Validate test environment
     */
    async validateTestEnvironment() {
        console.log('🔍 Validating Test Environment...');
        
        const checks = [
            this.checkNodeVersion(),
            this.checkThemeFiles(),
            this.checkTestFiles(),
            this.checkDependencies()
        ];
        
        const results = await Promise.all(checks);
        const failures = results.filter(r => !r.passed);
        
        if (failures.length > 0) {
            console.log('❌ Environment validation failed:');
            failures.forEach(failure => {
                console.log(`  - ${failure.message}`);
            });
            throw new Error('Environment validation failed');
        }
        
        console.log('✅ Environment validation passed\n');
    }

    /**
     * Check Node.js version
     */
    checkNodeVersion() {
        const nodeVersion = process.version;
        const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
        
        if (majorVersion >= 14) {
            return { passed: true, message: `Node.js ${nodeVersion} is supported` };
        } else {
            return { passed: false, message: `Node.js ${nodeVersion} is too old (requires 14+)` };
        }
    }

    /**
     * Check theme files exist
     */
    checkThemeFiles() {
        const requiredFiles = [
            'package.json',
            'themes/dream-purple-color-theme.json'
        ];
        
        const missingFiles = requiredFiles.filter(file => {
            const filePath = path.join(__dirname, '..', file);
            return !fs.existsSync(filePath);
        });
        
        if (missingFiles.length === 0) {
            return { passed: true, message: 'All theme files present' };
        } else {
            return { passed: false, message: `Missing theme files: ${missingFiles.join(', ')}` };
        }
    }

    /**
     * Check test files exist
     */
    checkTestFiles() {
        const testFiles = [
            'test-files/javascript-test.js',
            'test-files/typescript-test.ts',
            'test-files/python-test.py',
            'test-files/html-css-test.html',
            'test-files/json-test.json'
        ];
        
        const missingFiles = testFiles.filter(file => {
            const filePath = path.join(__dirname, '..', file);
            return !fs.existsSync(filePath);
        });
        
        if (missingFiles.length === 0) {
            return { passed: true, message: 'All test files present' };
        } else {
            return { passed: false, message: `Missing test files: ${missingFiles.join(', ')}` };
        }
    }

    /**
     * Check dependencies
     */
    checkDependencies() {
        try {
            // Check if required modules are available
            require('fs');
            require('path');
            return { passed: true, message: 'All dependencies available' };
        } catch (error) {
            return { passed: false, message: `Missing dependencies: ${error.message}` };
        }
    }

    /**
     * Run syntax highlighting tests
     */
    async runSyntaxHighlightingTests() {
        console.log('📝 Running Syntax Highlighting Tests...');
        
        try {
            const testSuite = new ThemeTestSuite();
            await testSuite.runAllTests();
            
            this.results.syntaxHighlighting = {
                passed: testSuite.results.overall.passed,
                failed: testSuite.results.overall.failed,
                warnings: testSuite.results.overall.warnings,
                details: testSuite.results
            };
            
            console.log('✅ Syntax highlighting tests completed\n');
        } catch (error) {
            console.log('❌ Syntax highlighting tests failed:', error.message);
            this.results.syntaxHighlighting = { error: error.message };
        }
    }

    /**
     * Run accessibility tests
     */
    async runAccessibilityTests() {
        console.log('♿ Running Accessibility Tests...');
        
        try {
            const validator = new AccessibilityValidator();
            const results = await validator.validateAccessibility();
            
            this.results.accessibility = {
                score: results.score,
                violations: results.violations,
                warnings: results.warnings,
                passes: results.passes
            };
            
            console.log('✅ Accessibility tests completed\n');
        } catch (error) {
            console.log('❌ Accessibility tests failed:', error.message);
            this.results.accessibility = { error: error.message };
        }
    }

    /**
     * Run compatibility tests
     */
    async runCompatibilityTests() {
        console.log('🔄 Running Compatibility Tests...');
        
        try {
            const tester = new ThemeCompatibilityTester();
            const results = await tester.runCompatibilityTests();
            
            this.results.compatibility = {
                totalTests: results.totalTests,
                passed: results.passed,
                issues: results.issues,
                warnings: results.warnings
            };
            
            console.log('✅ Compatibility tests completed\n');
        } catch (error) {
            console.log('❌ Compatibility tests failed:', error.message);
            this.results.compatibility = { error: error.message };
        }
    }

    /**
     * Run extended test scenarios
     */
    async runExtendedTests() {
        console.log('🔬 Running Extended Test Scenarios...');
        
        try {
            ExtendedTestScenarios.testMultiFileScenario();
            ExtendedTestScenarios.testPerformance();
            ExtendedTestScenarios.testEdgeCases();
            
            this.results.extended = {
                multiFile: true,
                performance: true,
                edgeCases: true
            };
            
            console.log('✅ Extended tests completed\n');
        } catch (error) {
            console.log('❌ Extended tests failed:', error.message);
            this.results.extended = { error: error.message };
        }
    }

    /**
     * Generate final comprehensive report
     */
    generateFinalReport() {
        this.results.overall.endTime = new Date();
        this.results.overall.duration = this.results.overall.endTime - this.results.overall.startTime;
        
        // Calculate overall statistics
        this.calculateOverallStatistics();
        
        console.log('📊 Final Test Report');
        console.log('===================');
        console.log(`🕒 Duration: ${Math.round(this.results.overall.duration / 1000)}s`);
        console.log(`📈 Overall Score: ${this.results.overall.score}%`);
        console.log(`✅ Passed: ${this.results.overall.passedTests}`);
        console.log(`❌ Failed: ${this.results.overall.failedTests}`);
        console.log(`⚠️  Warnings: ${this.results.overall.warnings}`);
        console.log(`📊 Total Tests: ${this.results.overall.totalTests}`);
        
        // Category breakdown
        console.log('\n📋 Category Breakdown:');
        this.printCategoryBreakdown();
        
        // Overall assessment
        console.log('\n🎯 Overall Assessment:');
        this.printOverallAssessment();
        
        // Recommendations
        console.log('\n💡 Recommendations:');
        this.printRecommendations();
    }

    /**
     * Calculate overall statistics
     */
    calculateOverallStatistics() {
        let totalTests = 0;
        let passedTests = 0;
        let failedTests = 0;
        let warnings = 0;
        
        // Syntax highlighting
        if (this.results.syntaxHighlighting && !this.results.syntaxHighlighting.error) {
            totalTests += this.results.syntaxHighlighting.passed + this.results.syntaxHighlighting.failed + this.results.syntaxHighlighting.warnings;
            passedTests += this.results.syntaxHighlighting.passed;
            failedTests += this.results.syntaxHighlighting.failed;
            warnings += this.results.syntaxHighlighting.warnings;
        }
        
        // Accessibility
        if (this.results.accessibility && !this.results.accessibility.error) {
            const accessibilityTotal = this.results.accessibility.passes + this.results.accessibility.violations + this.results.accessibility.warnings;
            totalTests += accessibilityTotal;
            passedTests += this.results.accessibility.passes;
            failedTests += this.results.accessibility.violations;
            warnings += this.results.accessibility.warnings;
        }
        
        // Compatibility
        if (this.results.compatibility && !this.results.compatibility.error) {
            totalTests += this.results.compatibility.totalTests;
            passedTests += this.results.compatibility.passed;
            failedTests += this.results.compatibility.issues;
            warnings += this.results.compatibility.warnings;
        }
        
        // Extended tests (assume 3 tests, all passed if no error)
        if (this.results.extended && !this.results.extended.error) {
            totalTests += 3;
            passedTests += 3;
        }
        
        this.results.overall.totalTests = totalTests;
        this.results.overall.passedTests = passedTests;
        this.results.overall.failedTests = failedTests;
        this.results.overall.warnings = warnings;
        
        // Calculate score
        if (totalTests > 0) {
            this.results.overall.score = Math.round((passedTests / totalTests) * 100);
        }
    }

    /**
     * Print category breakdown
     */
    printCategoryBreakdown() {
        const categories = [
            { name: 'Syntax Highlighting', result: this.results.syntaxHighlighting },
            { name: 'Accessibility', result: this.results.accessibility },
            { name: 'Compatibility', result: this.results.compatibility },
            { name: 'Extended Tests', result: this.results.extended }
        ];
        
        categories.forEach(category => {
            if (category.result && !category.result.error) {
                console.log(`  ✅ ${category.name}: Passed`);
            } else if (category.result && category.result.error) {
                console.log(`  ❌ ${category.name}: Failed (${category.result.error})`);
            } else {
                console.log(`  ⏭️  ${category.name}: Skipped`);
            }
        });
    }

    /**
     * Print overall assessment
     */
    printOverallAssessment() {
        const score = this.results.overall.score;
        
        if (score >= 95) {
            console.log('🌟 Excellent! The theme meets all quality standards.');
        } else if (score >= 85) {
            console.log('✅ Great! The theme meets most quality standards with minor issues.');
        } else if (score >= 70) {
            console.log('⚠️  Good! The theme works well but has some areas for improvement.');
        } else if (score >= 50) {
            console.log('🔧 Fair! The theme needs significant improvements before release.');
        } else {
            console.log('❌ Poor! The theme has major issues that must be addressed.');
        }
    }

    /**
     * Print recommendations
     */
    printRecommendations() {
        const recommendations = [];
        
        if (this.results.overall.failedTests > 0) {
            recommendations.push('Address all failed tests before release');
        }
        
        if (this.results.accessibility && this.results.accessibility.violations > 0) {
            recommendations.push('Fix accessibility violations for better inclusivity');
        }
        
        if (this.results.compatibility && this.results.compatibility.issues > 0) {
            recommendations.push('Resolve compatibility issues with VS Code versions');
        }
        
        if (this.results.overall.warnings > 5) {
            recommendations.push('Review and address warnings to improve quality');
        }
        
        if (recommendations.length === 0) {
            recommendations.push('Consider testing with real users and gather feedback');
            recommendations.push('Document the theme features and usage guidelines');
            recommendations.push('Prepare for marketplace publication');
        }
        
        recommendations.forEach((rec, index) => {
            console.log(`  ${index + 1}. ${rec}`);
        });
    }

    /**
     * Generate test artifacts and reports
     */
    async generateArtifacts() {
        console.log('\n📁 Generating Test Artifacts...');
        
        const artifactsDir = path.join(__dirname, 'test-results');
        if (!fs.existsSync(artifactsDir)) {
            fs.mkdirSync(artifactsDir, { recursive: true });
        }
        
        // Save comprehensive results
        const resultsPath = path.join(artifactsDir, 'comprehensive-results.json');
        fs.writeFileSync(resultsPath, JSON.stringify(this.results, null, 2));
        console.log(`  📄 Comprehensive results: ${resultsPath}`);
        
        // Generate HTML report
        await this.generateHTMLReport(artifactsDir);
        
        // Generate markdown summary
        await this.generateMarkdownSummary(artifactsDir);
        
        console.log('✅ Test artifacts generated successfully');
    }

    /**
     * Generate HTML report
     */
    async generateHTMLReport(artifactsDir) {
        const htmlContent = this.generateHTMLContent();
        const htmlPath = path.join(artifactsDir, 'test-report.html');
        fs.writeFileSync(htmlPath, htmlContent);
        console.log(`  🌐 HTML report: ${htmlPath}`);
    }

    /**
     * Generate HTML content for report
     */
    generateHTMLContent() {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dream Purple Theme - Test Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #1a0d26; color: #f4f1f4; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #ff6b35, #c792ea); padding: 2rem; border-radius: 8px; margin-bottom: 2rem; }
        .header h1 { margin: 0; font-size: 2.5rem; text-align: center; }
        .score { font-size: 3rem; font-weight: bold; text-align: center; margin: 1rem 0; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0; }
        .stat-card { background: #2d1b3d; padding: 1.5rem; border-radius: 8px; text-align: center; }
        .stat-value { font-size: 2rem; font-weight: bold; color: #ff6b35; }
        .category { background: #2d1b3d; margin: 1rem 0; padding: 1.5rem; border-radius: 8px; }
        .category h3 { color: #c792ea; margin-top: 0; }
        .pass { color: #64ffda; }
        .fail { color: #ff6b6b; }
        .warn { color: #ff8c42; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Dream Purple Theme Test Report</h1>
            <div class="score">${this.results.overall.score}%</div>
            <p>Generated on ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-value">${this.results.overall.totalTests}</div>
                <div>Total Tests</div>
            </div>
            <div class="stat-card">
                <div class="stat-value pass">${this.results.overall.passedTests}</div>
                <div>Passed</div>
            </div>
            <div class="stat-card">
                <div class="stat-value fail">${this.results.overall.failedTests}</div>
                <div>Failed</div>
            </div>
            <div class="stat-card">
                <div class="stat-value warn">${this.results.overall.warnings}</div>
                <div>Warnings</div>
            </div>
        </div>
        
        ${this.generateCategoryHTML()}
    </div>
</body>
</html>`;
    }

    /**
     * Generate category HTML sections
     */
    generateCategoryHTML() {
        let html = '';
        
        if (this.results.syntaxHighlighting) {
            html += `
            <div class="category">
                <h3>Syntax Highlighting</h3>
                <p>Tests syntax highlighting across multiple programming languages.</p>
                <p><span class="pass">Passed: ${this.results.syntaxHighlighting.passed || 0}</span> | 
                   <span class="fail">Failed: ${this.results.syntaxHighlighting.failed || 0}</span> | 
                   <span class="warn">Warnings: ${this.results.syntaxHighlighting.warnings || 0}</span></p>
            </div>`;
        }
        
        if (this.results.accessibility) {
            html += `
            <div class="category">
                <h3>Accessibility</h3>
                <p>Validates WCAG compliance and accessibility standards.</p>
                <p>Score: ${this.results.accessibility.score || 0}% | 
                   <span class="pass">Passes: ${this.results.accessibility.passes || 0}</span> | 
                   <span class="fail">Violations: ${this.results.accessibility.violations || 0}</span></p>
            </div>`;
        }
        
        if (this.results.compatibility) {
            html += `
            <div class="category">
                <h3>Compatibility</h3>
                <p>Tests compatibility with VS Code versions and popular extensions.</p>
                <p><span class="pass">Passed: ${this.results.compatibility.passed || 0}</span> | 
                   <span class="fail">Issues: ${this.results.compatibility.issues || 0}</span> | 
                   <span class="warn">Warnings: ${this.results.compatibility.warnings || 0}</span></p>
            </div>`;
        }
        
        return html;
    }

    /**
     * Generate markdown summary
     */
    async generateMarkdownSummary(artifactsDir) {
        const markdownContent = `# Dream Purple Theme - Test Summary

## Overall Results
- **Score:** ${this.results.overall.score}%
- **Total Tests:** ${this.results.overall.totalTests}
- **Passed:** ${this.results.overall.passedTests}
- **Failed:** ${this.results.overall.failedTests}
- **Warnings:** ${this.results.overall.warnings}
- **Duration:** ${Math.round(this.results.overall.duration / 1000)}s

## Test Categories

### Syntax Highlighting
${this.results.syntaxHighlighting ? `
- Passed: ${this.results.syntaxHighlighting.passed || 0}
- Failed: ${this.results.syntaxHighlighting.failed || 0}
- Warnings: ${this.results.syntaxHighlighting.warnings || 0}
` : 'Not run'}

### Accessibility
${this.results.accessibility ? `
- Score: ${this.results.accessibility.score || 0}%
- Passes: ${this.results.accessibility.passes || 0}
- Violations: ${this.results.accessibility.violations || 0}
- Warnings: ${this.results.accessibility.warnings || 0}
` : 'Not run'}

### Compatibility
${this.results.compatibility ? `
- Total Tests: ${this.results.compatibility.totalTests || 0}
- Passed: ${this.results.compatibility.passed || 0}
- Issues: ${this.results.compatibility.issues || 0}
- Warnings: ${this.results.compatibility.warnings || 0}
` : 'Not run'}

### Extended Tests
${this.results.extended ? '✅ All extended tests passed' : 'Not run'}

---
*Generated on ${new Date().toISOString()}*
`;
        
        const markdownPath = path.join(artifactsDir, 'test-summary.md');
        fs.writeFileSync(markdownPath, markdownContent);
        console.log(`  📝 Markdown summary: ${markdownPath}`);
    }
}

// CLI interface
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {};
    
    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '--no-syntax':
                options.runSyntaxTests = false;
                break;
            case '--no-accessibility':
                options.runAccessibilityTests = false;
                break;
            case '--no-compatibility':
                options.runCompatibilityTests = false;
                break;
            case '--no-extended':
                options.runExtendedTests = false;
                break;
            case '--no-reports':
                options.generateReports = false;
                break;
            case '--verbose':
                options.verbose = true;
                break;
            case '--help':
                console.log(`
Dream Purple Theme Test Runner

Usage: node run-all-tests.js [options]

Options:
  --no-syntax        Skip syntax highlighting tests
  --no-accessibility Skip accessibility tests
  --no-compatibility Skip compatibility tests
  --no-extended      Skip extended test scenarios
  --no-reports       Skip report generation
  --verbose          Enable verbose output
  --help             Show this help message
`);
                process.exit(0);
        }
    }
    
    return options;
}

// Export for programmatic use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComprehensiveTestRunner;
}

// Run tests if this file is executed directly
if (require.main === module) {
    const options = parseArgs();
    const runner = new ComprehensiveTestRunner();
    
    runner.runAllTests(options).then(() => {
        const exitCode = runner.results.overall.failedTests > 0 ? 1 : 0;
        console.log(`\n🏁 Test suite completed with exit code ${exitCode}`);
        process.exit(exitCode);
    }).catch(error => {
        console.error('💥 Test runner crashed:', error.message);
        process.exit(1);
    });
}