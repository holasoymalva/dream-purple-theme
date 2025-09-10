# Design Document

## Overview

Dream Purple es un theme de Visual Studio Code que implementa una paleta de colores inspirada en "Acid Purple Orange". El diseño se centra en crear una experiencia visual cohesiva que combine tonos púrpura profundos con acentos naranjas vibrantes, optimizada para legibilidad y comodidad durante sesiones de desarrollo prolongadas.

## Architecture

### Theme Structure
El theme seguirá la estructura estándar de VS Code themes:
- `package.json` - Metadatos y configuración del theme
- `themes/dream-purple-color-theme.json` - Definición completa de colores
- `README.md` - Documentación para usuarios
- `CHANGELOG.md` - Historial de versiones
- `.vscodeignore` - Archivos a excluir del empaquetado

### Color Palette Foundation
Basado en la investigación de "Acid Purple Orange", la paleta principal incluirá:

**Colores Base:**
- Púrpura oscuro: `#1a0d26` (fondo principal)
- Púrpura medio: `#2d1b3d` (fondo secundario)
- Púrpura claro: `#4a2c5a` (elementos UI)
- Naranja vibrante: `#ff6b35` (acentos principales)
- Naranja suave: `#ff8c42` (acentos secundarios)
- Blanco cálido: `#f4f1f4` (texto principal)
- Gris púrpura: `#8b7a9b` (texto secundario)

## Components and Interfaces

### 1. Editor Colors
- **Background**: Púrpura oscuro para reducir fatiga visual
- **Foreground**: Blanco cálido para máximo contraste
- **Selection**: Púrpura medio con transparencia
- **Line highlight**: Púrpura medio sutil
- **Cursor**: Naranja vibrante para visibilidad

### 2. Syntax Highlighting
- **Keywords**: Naranja vibrante (`#ff6b35`)
- **Strings**: Verde menta (`#64ffda`)
- **Comments**: Gris púrpura (`#8b7a9b`)
- **Functions**: Azul claro (`#82b1ff`)
- **Variables**: Blanco cálido (`#f4f1f4`)
- **Numbers**: Naranja suave (`#ff8c42`)
- **Types**: Púrpura claro (`#c792ea`)

### 3. UI Elements
- **Activity Bar**: Púrpura oscuro con iconos naranjas
- **Side Bar**: Púrpura medio con texto claro
- **Status Bar**: Púrpura oscuro con acentos naranjas
- **Tabs**: Gradiente púrpura con tab activo destacado
- **Panels**: Consistente con editor background

### 4. Interactive States
- **Hover**: Overlay naranja suave con transparencia
- **Focus**: Border naranja vibrante
- **Active**: Background púrpura claro
- **Disabled**: Reducir opacidad al 50%

## Data Models

### Theme Configuration Schema
```json
{
  "name": "Dream Purple",
  "type": "dark",
  "colors": {
    // Editor colors
    "editor.background": "#1a0d26",
    "editor.foreground": "#f4f1f4",
    // UI colors
    "activityBar.background": "#1a0d26",
    "sideBar.background": "#2d1b3d",
    // Token colors defined separately
  },
  "tokenColors": [
    // Syntax highlighting rules
  ]
}
```

### Package.json Structure
```json
{
  "name": "dream-purple-theme",
  "displayName": "Dream Purple",
  "description": "A beautiful purple theme with orange accents",
  "version": "1.0.0",
  "publisher": "[publisher-name]",
  "engines": {
    "vscode": "^1.74.0"
  },
  "categories": ["Themes"],
  "contributes": {
    "themes": [{
      "label": "Dream Purple",
      "uiTheme": "vs-dark",
      "path": "./themes/dream-purple-color-theme.json"
    }]
  }
}
```

## Error Handling

### Theme Loading
- Fallback colors para elementos no definidos
- Validación de formato JSON
- Manejo graceful de colores inválidos

### Compatibility Issues
- Detección de versiones incompatibles de VS Code
- Fallbacks para características no soportadas
- Logging de errores para debugging

## Testing Strategy

### Visual Testing
1. **Cross-language Testing**: Verificar syntax highlighting en múltiples lenguajes
   - JavaScript/TypeScript
   - Python
   - HTML/CSS
   - JSON/YAML
   - Markdown

2. **UI Component Testing**: Validar todos los elementos de interfaz
   - Activity Bar y Side Bar
   - Editor tabs y panels
   - Status Bar y Command Palette
   - Terminal integrado

3. **Accessibility Testing**: Asegurar contraste adecuado
   - Ratio de contraste mínimo 4.5:1 para texto normal
   - Ratio de contraste mínimo 3:1 para texto grande
   - Verificación con herramientas de accesibilidad

### Functional Testing
1. **Installation Testing**: Verificar instalación desde VSIX
2. **Theme Switching**: Probar cambios entre themes
3. **Extension Compatibility**: Verificar con extensiones populares
4. **Performance Testing**: Asegurar que no afecte rendimiento

### Publishing Preparation
1. **Marketplace Validation**: Verificar cumplimiento de guidelines
2. **Package Testing**: Validar generación de VSIX
3. **Metadata Verification**: Confirmar información correcta
4. **Icon and Screenshots**: Preparar assets visuales

## Implementation Phases

### Phase 1: Core Theme
- Estructura básica del proyecto
- Colores principales del editor
- Syntax highlighting básico

### Phase 2: UI Enhancement
- Colores completos de interfaz
- Estados interactivos
- Refinamiento visual

### Phase 3: Publishing Ready
- Documentación completa
- Assets para marketplace
- Testing exhaustivo
- Empaquetado final