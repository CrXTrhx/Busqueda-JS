# 🚗 Buscador de Autos - JavaScript Moderno

## Descripción

**Buscador de Autos** es una aplicación web interactiva desarrollada con JavaScript moderno (ES6+) que permite filtrar un catálogo de vehículos según múltiples criterios. Proporciona una experiencia de búsqueda rápida y eficiente con una interfaz limpia y responsiva.

## ✨ Características

- ✅ **Filtros múltiples**: Marca, año, rango de precio, número de puertas, transmisión y color
- ✅ **Interfaz responsiva**: Diseño adaptable a diferentes dispositivos
- ✅ **Búsqueda en tiempo real**: Los resultados se actualizan mientras cambias los filtros
- ✅ **Base de datos integrada**: Catálogo de vehículos predefinido
- ✅ **Diseño moderno**: Utiliza Skeleton CSS para un layout profesional
- ✅ **Código limpio**: Implementado con JavaScript vanilla y buenas prácticas

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio
- **CSS3**: Estilos modernos (Normalize.css, Skeleton.css)
- **JavaScript (ES6+)**: Lógica de filtrado y manipulación del DOM
- **Skeleton CSS**: Framework CSS minimalista

## 📁 Estructura del Proyecto

```
Filtro de busqueda Js/
├── index.html                 # Página principal con el formulario de búsqueda
├── README.md                  # Este archivo
├── assets/
│   ├── css/
│   │   ├── normalize.css      # Normalización de estilos de navegadores
│   │   ├── skeleton.css       # Framework CSS minimalista
│   │   └── app.css            # Estilos personalizados de la aplicación
│   └── js/
│       ├── app.js             # Lógica principal de filtrado
│       └── db.js              # Base de datos con catálogo de autos
```

## 🚀 Cómo Usar

1. **Abre el archivo `index.html`** en tu navegador web
2. **Selecciona los filtros** que desees usar:
   - Marca del vehículo
   - Año de fabricación
   - Rango de precio (mínimo y máximo)
   - Número de puertas
   - Tipo de transmisión
   - Color
3. **Los resultados** se mostrarán automáticamente en la sección de resultados

## 🔍 Filtros Disponibles

| Filtro | Opciones |
|--------|----------|
| **Marca** | Audi, BMW, Mercedes Benz, Chevrolet, Ford, Dodge |
| **Año** | Últimos 10 años (dinámico) |
| **Precio Mín** | 20,000 - 90,000 |
| **Precio Máx** | 20,000 - 90,000 |
| **Puertas** | 2, 4 |
| **Transmisión** | Manual, Automática |
| **Color** | Negro, Azul, Blanco, Rojo |

## 📊 Información de los Vehículos

Cada vehículo en la base de datos contiene:

```javascript
{
  marca: 'string',
  modelo: 'string',
  year: 'number',
  precio: 'number',
  puertas: 'number',
  color: 'string',
  transmision: 'string'
}
```

## 🔧 Instalación

No requiere instalación ni dependencias externas. Solo necesitas:

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Los archivos del proyecto

## 💡 Mejoras Futuras

- Agregar más marcas y modelos de vehículos
- Implementar filtros adicionales (combustible, kilometraje, etc.)
- Agregar imágenes de los vehículos
- Implementar paginación de resultados
- Agregar carrito de comparación
- Integración con base de datos backend

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Proyecto educativo desarrollado con JavaScript moderno.

---

**¿Preguntas o sugerencias?** Siéntete libre de contribuir o reportar issues.
