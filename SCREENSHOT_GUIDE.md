# Guía para Capturas de Pantalla - Dream Purple Theme

Esta guía te ayudará a crear capturas de pantalla profesionales del tema Dream Purple para actualizar el README.md.

## 📋 Lista de Capturas Necesarias

### 1. Vista Completa de la Interfaz (`full-interface.png`)
**Descripción**: Captura completa de VS Code con el tema aplicado
**Contenido**:
- Barra de actividad (izquierda) con iconos
- Explorador de archivos abierto
- Editor principal con código JavaScript
- Terminal integrado en la parte inferior
- Barra de estado

**Configuración**:
- Ventana maximizada o en modo ventana grande
- Mostrar múltiples pestañas abiertas
- Terminal con algunos comandos ejecutados

### 2. Código JavaScript/TypeScript (`javascript-example.png`)
**Descripción**: Demostración del resaltado de sintaxis para JS/TS
**Contenido**:
```javascript
// Ejemplo de código para captura
import React, { useState, useEffect } from 'react';
import { ApiService } from './services/api';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await ApiService.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (user: User) => {
    console.log(`Selected user: ${user.name}`);
  };

  if (loading) {
    return <div className="loading">Cargando usuarios...</div>;
  }

  return (
    <div className="user-list">
      <h2>Lista de Usuarios</h2>
      {users.map(user => (
        <div 
          key={user.id} 
          className="user-item"
          onClick={() => handleUserClick(user)}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserComponent;
```

### 3. Código HTML/CSS (`html-css-example.png`)
**Descripción**: Desarrollo web con HTML y CSS
**Contenido HTML**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dream Purple Theme Demo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="main-header">
        <nav class="navigation">
            <ul class="nav-list">
                <li><a href="#home" class="nav-link active">Inicio</a></li>
                <li><a href="#about" class="nav-link">Acerca</a></li>
                <li><a href="#contact" class="nav-link">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <main class="content">
        <section class="hero">
            <h1 class="hero-title">Dream Purple Theme</h1>
            <p class="hero-description">
                Un hermoso tema para VS Code con colores púrpura y naranja
            </p>
            <button class="cta-button" onclick="showDemo()">
                Ver Demo
            </button>
        </section>
    </main>
    
    <script src="script.js"></script>
</body>
</html>
```

**Contenido CSS**:
```css
/* Dream Purple Theme Demo Styles */
:root {
  --primary-purple: #1a0d26;
  --secondary-purple: #2d1b3d;
  --accent-purple: #4a2c5a;
  --primary-orange: #ff6b35;
  --secondary-orange: #ff8c42;
  --text-primary: #f4f1f4;
  --text-secondary: #8b7a9b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  background: linear-gradient(135deg, var(--primary-purple), var(--secondary-purple));
  color: var(--text-primary);
  line-height: 1.6;
}

.main-header {
  background: rgba(26, 13, 38, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navigation .nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-orange);
  background: rgba(255, 107, 53, 0.1);
}

.content {
  margin-top: 80px;
  padding: 4rem 2rem;
}

.hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-orange), var(--secondary-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.cta-button {
  background: var(--primary-orange);
  color: var(--primary-purple);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: var(--secondary-orange);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .navigation .nav-list {
    gap: 1rem;
  }
}
```

### 4. Múltiples Lenguajes (`multi-language.png`)
**Descripción**: Vista dividida mostrando diferentes tipos de archivos
**Configuración**:
- Usar vista dividida (Split Editor)
- Mostrar al menos 3 archivos diferentes:
  - JavaScript/TypeScript
  - JSON (package.json o configuración)
  - Markdown (README.md)

### 5. Terminal Integrado (`terminal-example.png`)
**Descripción**: Terminal con colores ANSI personalizados
**Comandos para ejecutar**:
```bash
# Comandos que muestran diferentes colores
npm install
git status
ls -la
echo "Dream Purple Theme funcionando correctamente!"
npm run build
```

## ⚙️ Configuración Recomendada

### Configuraciones de VS Code para Capturas:
```json
{
  "editor.fontFamily": "'Fira Code', 'JetBrains Mono', 'Cascadia Code'",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 1.5,
  "workbench.iconTheme": "material-icon-theme",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.minimap.enabled": true,
  "terminal.integrated.fontSize": 13
}
```

### Extensiones Recomendadas para las Capturas:
- Material Icon Theme
- Bracket Pair Colorizer (si no está habilitado por defecto)
- GitLens (para mostrar información de Git)

## 📐 Especificaciones Técnicas

- **Resolución**: 2560x1440 (preferido) o mínimo 1920x1080
- **Formato**: PNG con transparencia
- **Calidad**: Alta calidad, sin artefactos de compresión
- **Zoom**: 100% o 110% para legibilidad
- **Estado de Ventana**: Maximizada o ventana grande

## 📁 Ubicación de Archivos

Guardar todas las capturas en la carpeta `screenshots/` con los siguientes nombres:
- `full-interface.png`
- `javascript-example.png`
- `html-css-example.png`
- `multi-language.png`
- `terminal-example.png`

## 🔄 Actualización del README

Una vez que tengas las capturas, actualiza la sección "Vista Previa" del README.md reemplazando:

```markdown
> **📸 Capturas de pantalla próximamente**: Estamos preparando capturas de pantalla de alta calidad...
```

Por:

```markdown
![Dream Purple Theme - Vista Completa](./screenshots/full-interface.png)
*Interfaz completa de VS Code con el tema Dream Purple aplicado*

![Dream Purple Theme - JavaScript](./screenshots/javascript-example.png)
*Resaltado de sintaxis JavaScript/TypeScript*

![Dream Purple Theme - HTML/CSS](./screenshots/html-css-example.png)
*Desarrollo web con HTML y CSS*

![Dream Purple Theme - Múltiples Lenguajes](./screenshots/multi-language.png)
*Vista dividida mostrando diferentes tipos de archivos*

![Dream Purple Theme - Terminal](./screenshots/terminal-example.png)
*Terminal integrado con colores ANSI personalizados*
```

## ✅ Lista de Verificación

- [ ] Instalar y activar el tema Dream Purple
- [ ] Configurar fuente recomendada (Fira Code, JetBrains Mono, etc.)
- [ ] Instalar extensiones recomendadas
- [ ] Crear archivos de ejemplo con el código proporcionado
- [ ] Tomar captura de interfaz completa
- [ ] Tomar captura de código JavaScript/TypeScript
- [ ] Tomar captura de código HTML/CSS
- [ ] Tomar captura de múltiples lenguajes
- [ ] Tomar captura del terminal
- [ ] Optimizar tamaño de archivos sin perder calidad
- [ ] Actualizar README.md con las nuevas capturas
- [ ] Verificar que todas las imágenes se muestren correctamente

¡Con estas capturas, el README.md del tema Dream Purple estará completo y profesional!