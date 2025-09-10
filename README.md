# Dream Purple Theme

Un hermoso tema para VS Code con fondos púrpura profundos y acentos naranjas vibrantes, inspirado en la estética Acid Purple Orange. Perfecto para desarrolladores que buscan un entorno de codificación visualmente impactante pero cómodo.

## 🎨 Vista Previa

> **📸 Capturas de pantalla próximamente**: Estamos preparando capturas de pantalla de alta calidad que muestren el tema en acción con diferentes lenguajes de programación y la interfaz completa de VS Code.

### Colores Principales
- **Fondo Principal**: `#1a0d26` - Púrpura profundo para el editor principal
- **Fondo Secundario**: `#2d1b3d` - Púrpura medio para barras laterales  
- **Naranja Primario**: `#ff6b35` - Naranja vibrante para resaltados
- **Texto Principal**: `#f4f1f4` - Blanco cálido para texto principal

> **Nota**: El tema funciona con cualquier fuente de tu elección. Se recomienda usar fuentes como Fira Code, JetBrains Mono o Cascadia Code para una mejor experiencia.

## ✨ Características

- **Fondo Púrpura Profundo**: Suave para los ojos durante largas sesiones de codificación
- **Acentos Naranjas Vibrantes**: Resalta elementos importantes de la UI y sintaxis
- **Resaltado de Sintaxis Completo**: Soporte para JavaScript, TypeScript, HTML, CSS, JSON, Markdown y más
- **Tematización Completa de UI**: Cada elemento de la interfaz de VS Code está cuidadosamente estilizado
- **Enfoque en Accesibilidad**: Altos ratios de contraste para mejor legibilidad
- **Diseño Moderno**: Estética limpia y contemporánea que mejora el enfoque

## 🚀 Instalación

### Método 1: VS Code Marketplace (Recomendado)

1. **Abrir Vista de Extensiones**
   - Presiona `Ctrl+Shift+X` (Windows/Linux) o `Cmd+Shift+X` (Mac)
   - O haz clic en el ícono de Extensiones en la Barra de Actividad

2. **Buscar e Instalar**
   - Busca "Dream Purple"
   - Haz clic en el botón **Instalar** del tema Dream Purple

3. **Activar el Tema**
   - Presiona `Ctrl+K Ctrl+T` (Windows/Linux) o `Cmd+K Cmd+T` (Mac)
   - O ve a **Archivo > Preferencias > Tema de Color**
   - Selecciona **"Dream Purple"** de la lista

### Método 2: Instalación Manual desde VSIX

1. **Descargar Paquete del Tema**
   - Obtén el archivo `.vsix` más reciente desde [GitHub Releases](https://github.com/holasoymalva/dream-purple-theme/releases)

2. **Instalar desde VSIX**
   - Abre VS Code
   - Presiona `Ctrl+Shift+P` (Windows/Linux) o `Cmd+Shift+P` (Mac)
   - Escribe y selecciona **"Extensions: Install from VSIX..."**
   - Navega y selecciona el archivo `.vsix` descargado

3. **Activar el Tema**
   - Reinicia VS Code (si se solicita)
   - Presiona `Ctrl+K Ctrl+T` o ve a **Archivo > Preferencias > Tema de Color**
   - Selecciona **"Dream Purple"**

### Método 3: Instalación para Desarrollo

Para desarrolladores que quieren modificar o contribuir al tema:

1. **Clonar Repositorio**
   ```bash
   git clone https://github.com/holasoymalva/dream-purple-theme.git
   cd dream-purple-theme
   ```

2. **Instalar Dependencias**
   ```bash
   npm install -g vsce
   ```

3. **Empaquetar Tema**
   ```bash
   vsce package
   ```

4. **Instalar Localmente**
   - Sigue el Método 2 usando el archivo `.vsix` generado

## 💡 Consejos de Uso

### Configuraciones Recomendadas

Para la mejor experiencia con Dream Purple, considera estas configuraciones de VS Code:

```json
{
  // Recomendaciones de fuente
  "editor.fontFamily": "'Fira Code', 'JetBrains Mono', 'Cascadia Code', Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  
  // Experiencia mejorada del tema
  "workbench.iconTheme": "material-icon-theme",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  
  // Configuraciones óptimas de visualización
  "editor.renderWhitespace": "boundary",
  "editor.renderControlCharacters": true,
  "editor.minimap.enabled": true,
  "editor.minimap.renderCharacters": false
}
```

### Fuentes Recomendadas

Dream Purple se ve genial con estas fuentes de programación:
- **Fira Code** - Excelente soporte para ligaduras
- **JetBrains Mono** - Apariencia limpia y moderna
- **Cascadia Code** - Fuente de programación de Microsoft con ligaduras
- **Source Code Pro** - Fuente monoespaciada de código abierto de Adobe
- **Operator Mono** - Fuente premium con soporte para cursivas

### Compatibilidad con Extensiones

Dream Purple funciona bien con extensiones populares de VS Code:
- **Material Icon Theme** - Complementa el esquema de colores
- **Bracket Pair Colorizer** - Resaltado mejorado de corchetes
- **GitLens** - Integración Git con colores conscientes del tema
- **Error Lens** - Resaltado de errores en línea
- **Rainbow CSV** - Resaltado de archivos CSV

## 🎯 Soporte de Lenguajes

Dream Purple proporciona resaltado de sintaxis optimizado para:

- **JavaScript/TypeScript**: Resaltado mejorado para características modernas de JS/TS
- **HTML**: Clara distinción entre etiquetas, atributos y contenido
- **CSS/SCSS**: Hermoso estilizado para selectores, propiedades y valores
- **JSON**: Formato limpio para archivos de configuración
- **Markdown**: Documentación legible con jerarquía adecuada de encabezados
- **Python**: Resaltado claro de sintaxis para desarrollo Python
- **Y muchos más lenguajes soportados por VS Code**

## 🎨 Paleta de Colores

### Colores Base
- **Fondo Principal**: `#1a0d26` - Púrpura profundo para el editor principal
- **Fondo Secundario**: `#2d1b3d` - Púrpura medio para barras laterales
- **Fondo de Acento**: `#4a2c5a` - Púrpura claro para elementos de UI
- **Naranja Primario**: `#ff6b35` - Naranja vibrante para resaltados
- **Naranja Secundario**: `#ff8c42` - Naranja suave para acentos
- **Texto Principal**: `#f4f1f4` - Blanco cálido para texto principal
- **Texto Secundario**: `#8b7a9b` - Gris púrpura para texto secundario

### Colores de Sintaxis
- **Palabras Clave**: `#ff6b35` (Naranja) - `if`, `function`, `class`, etc.
- **Cadenas**: `#64ffda` (Verde Menta) - Contenido de texto y literales
- **Comentarios**: `#8b7a9b` (Gris Púrpura) - Comentarios de código
- **Funciones**: `#82b1ff` (Azul Claro) - Nombres y llamadas de funciones
- **Números**: `#ff8c42` (Naranja Suave) - Valores numéricos
- **Tipos**: `#c792ea` (Púrpura Claro) - Clases y definiciones de tipos

> 📋 **Documentación Detallada de Colores**: Para una guía completa de la paleta de colores incluyendo información de accesibilidad, decisiones de diseño y ejemplos de personalización, consulta [COLOR_PALETTE.md](./COLOR_PALETTE.md).

## ⚙️ Personalización

Puedes personalizar el tema agregando estas configuraciones a tu `settings.json` de VS Code:

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

## 🔧 Solución de Problemas

### El Tema No Se Aplica
- **Reinicia VS Code** después de la instalación
- Verifica que "Dream Purple" esté seleccionado en **Archivo > Preferencias > Tema de Color**
- Confirma que la extensión esté habilitada en la vista de Extensiones

### Los Colores Se Ven Diferentes
- Asegúrate de que el perfil de color de tu monitor esté configurado correctamente
- Verifica la configuración **window.autoDetectColorScheme** de VS Code
- Confirma que no hay otras extensiones sobrescribiendo los colores del tema

### Problemas de Resaltado de Sintaxis
- Asegúrate de que las asociaciones de archivos sean correctas para tu lenguaje
- Verifica si las extensiones específicas del lenguaje están instaladas y habilitadas
- Intenta recargar la ventana: **Desarrollador > Recargar Ventana**

### Problemas de Rendimiento
- El tema en sí no afecta el rendimiento
- Verifica extensiones conflictivas que puedan modificar colores
- Deshabilita temporalmente otras extensiones relacionadas con temas

## 🐛 Problemas y Comentarios

### Reportar Problemas
¿Encontraste un error o tienes una sugerencia? ¡Nos encantaría escucharte!

1. **Revisar Problemas Existentes**: Navega primero por los [problemas abiertos](https://github.com/holasoymalva/dream-purple-theme/issues)
2. **Crear Nuevo Problema**: Usa nuestras plantillas de problemas para:
   - 🐛 Reportes de errores
   - 💡 Solicitudes de características  
   - 🎨 Sugerencias de colores
   - 📚 Mejoras de documentación

### Contribuir
¡Damos la bienvenida a las contribuciones! Consulta nuestra [Guía de Contribución](./CONTRIBUTING.md) para:
- Pautas de estilo de código
- Configuración de desarrollo
- Proceso de pull request
- Pautas de modificación de colores

### Comunidad
- **GitHub Discussions**: Comparte capturas de pantalla y personalizaciones
- **Creador**: Sígueme en [@holasoymalva](https://github.com/holasoymalva) para más proyectos
- **VS Code Marketplace**: Deja una reseña y calificación

## 📝 Licencia

Este tema está licenciado bajo la [Licencia MIT](LICENSE).

## 🙏 Reconocimientos

- Inspirado en el esquema de colores Acid Purple Orange
- Construido con amor para la comunidad de VS Code
- Gracias a todos los contribuidores y usuarios que proporcionan comentarios

---

**¡Disfruta programando con Dream Purple! 💜🧡**

## 📸 Capturas de Pantalla Pendientes

Para completar la documentación, necesitamos agregar las siguientes capturas:

### Capturas Requeridas:
1. **Vista completa de la interfaz** - Mostrando el tema aplicado en toda la UI de VS Code
2. **Código JavaScript/TypeScript** - Demostrando el resaltado de sintaxis moderno
3. **Código HTML/CSS** - Mostrando el desarrollo web con el tema
4. **Múltiples lenguajes** - Vista dividida con diferentes tipos de archivos
5. **Terminal integrado** - Mostrando los colores ANSI personalizados

### Especificaciones Técnicas:
- **Resolución**: Mínimo 1920x1080, preferiblemente 2560x1440
- **Formato**: PNG con soporte de transparencia
- **Fuente**: Usar Fira Code, JetBrains Mono o similar
- **Zoom**: 100% o 110% para legibilidad

> Una vez que se agreguen las capturas, actualizar la sección de Vista Previa para mostrar las imágenes reales.