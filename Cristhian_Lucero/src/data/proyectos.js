import ima from '../assets/image.png'
import flutter from '../assets/flutter.png'
import ges from '../assets/a.png'
const Proyectos = [
  {
    name: 'Sistema de Gestión de Contenidos (CMS) ',
    img: ima,
    url: 'https://github.com/Cristhian-Lucero/IS2-Proyecto.git',
    desc: 'Diseñé la arquitectura de un sistema de Gestión de Contenidos (CMS) en Django, implementé APIs y la capa de datos con PostgreSQL, integré autenticación Single Sign-On (SSO) y desarrollé pruebas unitarias y de despliegue para garantizar la estabilidad y calidad del sistema.'
  },
  {
    name: 'Workshop de Flutter: Bases y Patrones (2024)',
    img: flutter,
    url: 'https://github.com/Cristhian-Lucero/Flutter_Curso_Verano.git',
    desc: 'Ejercicios y pequeñas apps para afianzar los fundamentos de Flutter: estructura de proyecto, widgets básicos, diseño con layouts, navegación entre pantallas y manejo simple de estado. Enfoque práctico, sin pretensiones, orientado a consolidar la base para proyectos más grandes.'
  },
  {
    name: 'Sistema de gestión de proyectos (2022)',
    img: ges,
    url: 'https://github.com/Cristhian-Lucero/Flutter_Curso_Verano.git',
    desc: 'Aplicación de escritorio desarrollada en Python con SQLite para el almacenamiento local. Implementé la lógica de negocio (modificaciones y control de estados), un modelo de datos simple y una interfaz que permite registrar proyectos, consultar y actualizar información de forma clara.'
  }
]
export default Proyectos;