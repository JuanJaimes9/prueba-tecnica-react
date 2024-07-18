# Prueba Técnica para Frontend Trainee en ReactJS

**Objetivo:** Evaluar las habilidades prácticas y teóricas en ReactJS, JavaScript, HTML y CSS.

## _Duración:_ 3 horas

**Instrucciones:** Completa las siguientes tareas. Asegúrate de comentar tu código donde sea necesario y proporcionar una breve explicación de tus decisiones técnicas.

- ## Parte 1: Conceptos Básicos de ReactJS

### _Configuración del Proyecto:_

1. Crea un proyecto con Create React App o Vite.
2. Configura el proyecto para que use Sass para los estilos.

### _Componentes:_

- Crea un componente Header que acepte un prop title y muestre un encabezado.

- Crea un componente TodoItem que acepte un prop item (un objeto con propiedades id, text, completed) y muestre el texto del ítem. Añade un botón para marcar como completado.

- Crea un componente TodoList que maneje un array de objetos todoItems y renderice una lista de TodoItem.

### _Estado y Props:_

- Usa useState para manejar el estado de todoItems en el componente TodoList.

- Implementa la lógica para agregar un nuevo ítem a la lista de tareas y para marcar los ítems como completados.

- ## Parte 2: Manejo de Efectos Secundarios y Eventos

### _useEffect:_

- Implementa useEffect en TodoList para guardar la lista de tareas en el localStorage cada vez que todoItems cambie.

- Al cargar la aplicación, verifica si hay tareas guardadas en el localStorage y cárgalas al estado inicial.

### _Eventos y Formularios:_

- Añade un formulario con un campo de entrada y un botón en el componente TodoList para agregar nuevas tareas.

- Implementa la lógica para manejar el envío del formulario y agregar la nueva tarea al estado.

- ## Parte 3: Estilizado

### _CSS/Sass:_

- Estiliza los componentes usando Sass, asegurándote de que la interfaz sea responsive.

- Añade transiciones suaves para cambios de estado, como marcar una tarea como completada.

- ## Parte 4: Pruebas

### _Pruebas Unitarias:_

- Escribe pruebas unitarias para los componentes Header, TodoItem, y TodoList usando Jest y React Testing Library.

- Asegúrate de probar la funcionalidad principal, como la renderización del texto y la adición/marcado de tareas.

## Entrega

- Crea un repositorio en GitHub y sube tu proyecto.

- Proporciona un README.md con instrucciones claras sobre cómo instalar y ejecutar el proyecto, y cómo ejecutar las pruebas.

- Incluye un enlace al repositorio en tu entrega.

## Evaluación

**_Funcionalidad:_** El código debe cumplir con los requisitos de la prueba.

**_Calidad del Código:_** El código debe ser limpio, bien comentado y seguir las mejores prácticas.

**_Estilizado:_** La aplicación debe ser visualmente atractiva y responsive.

**_Pruebas:_** Se evaluará la cobertura y calidad de las pruebas unitarias.

**_Documentación:_** La documentación debe ser clara y útil.

Con esta prueba técnica, se evaluarán las habilidades fundamentales de un desarrollador frontend trainee en ReactJS, su capacidad para manejar el estado y los efectos secundarios, su competencia en el estilizado de componentes y su capacidad para escribir pruebas unitarias.
