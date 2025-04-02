# Frontend Reservas Laboratorio

## Integrantes:

- Allan Steff Contreras Rodriguez
- David Santiago Castro Sierra
- Juan David Zambrano Gonzalez
- Juan Esteban Cely Lopez

## Descripcion
Este proyecto consiste en la creación de una aplicación que permita a los usuarios realizar reservas de los laboratorios de Ingenieria de Sistemas


## Apariencia de la Pagina



**Mockup Completo**: [Mockup](https://www.figma.com/design/q2bD9KS26JlWBr3UjoFS9R/Untitled?node-id=0-1&t=9AEi33GTFu8xchba-1)


## Pantalla Inicial

![Pantalla Inicial](https://github.com/user-attachments/assets/7562d250-e2b6-4e12-8dc1-449064708d73)

Al acceder a la plataforma, se presentan dos opciones de inicio de sesión:
- **Cuenta de Moodle**
- **Cuenta de Microsoft 365**

![Opciones de Ingreso](https://github.com/user-attachments/assets/efa680a9-1dc4-4aab-bee4-e22db742b471)

---

**# Área Principal (ROL: PROFESOR)**

Al ingresar como profesor, se accede al área principal, donde se gestionan las reservas de laboratorios. Se encuentran disponibles las siguientes opciones:
- **Nueva Reserva**
- **Modificar Reserva**
- **Eliminar Reserva**
- **Consultar Reservas**

![Área Principal](https://github.com/user-attachments/assets/7b30fd15-d75f-4204-93fe-116350d1a3c8)

---

## **Nueva Reserva**

En esta sección se listan los laboratorios disponibles para reservas.

![Lista de Laboratorios](https://github.com/user-attachments/assets/bcebc90d-7d57-4bd4-99eb-8ecebd13d71a)

Al seleccionar un laboratorio, se muestra una breve descripción junto con los días disponibles para reserva.

![Descripción del Laboratorio](https://github.com/user-attachments/assets/2632095e-2a53-4b23-8e32-54a0ccdcaa58)
![Disponibilidad](https://github.com/user-attachments/assets/bf74c06f-43bd-4472-a471-e3eea0fc149f)

Al hacer clic en **Reservar**, aparece un calendario donde el usuario puede seleccionar una fecha y consultar la disponibilidad.

![Calendario de Reservas](https://github.com/user-attachments/assets/47079283-dbf0-48c6-ba9b-812301d09990)

Si la fecha seleccionada está disponible, se muestra una ventana de confirmación en color **verde**. Si no está disponible, se muestra una ventana **roja** indicando la falta de disponibilidad.

![Disponibilidad Positiva](https://github.com/user-attachments/assets/a416bc28-5ce6-40b9-9a2a-5128a6f9696c)

Al hacer clic en **Añadir a la lista de fechas seleccionadas**, se muestra una ventana de confirmación.

![Confirmación de Reserva](https://github.com/user-attachments/assets/43b8ff80-3e34-4897-8c9f-df7ead8e64a1)

---

## **Eliminar Reserva**

En esta sección, el usuario puede visualizar sus reservas activas.

![Reservas Activas](https://github.com/user-attachments/assets/73f80638-6adf-4064-b4cb-2ab91b32e6bc)

Para eliminar una reserva, se debe seleccionar la reserva deseada, lo que abrirá una ventana de confirmación con los detalles de la misma.

![Confirmación de Eliminación](https://github.com/user-attachments/assets/aa59c487-73ce-4a14-99f1-d77404d52b17)

Al confirmar, la reserva se elimina correctamente.

![Reserva Eliminada](https://github.com/user-attachments/assets/aa6a634b-b788-4668-9c21-2afea64589bd)

---

## **Modificar Reserva**

En esta sección, el usuario puede visualizar sus reservas activas.

![Reservas Activas](https://github.com/user-attachments/assets/66b73c66-1b64-40fa-94a1-16c56ccd9c56)

Para modificar una reserva, se debe seleccionar la reserva deseada. A continuación, se abre un calendario donde el usuario puede elegir una nueva fecha y consultar su disponibilidad.

![Calendario de Modificación](https://github.com/user-attachments/assets/67190457-6c3a-40f7-b99c-d3a0c4f3be91)

Si la nueva fecha está disponible, se muestra una ventana **verde** confirmando la disponibilidad; en caso contrario, aparece una ventana **roja** indicando que la fecha no está disponible.

![Confirmación de Disponibilidad](https://github.com/user-attachments/assets/91fc658d-f8b9-49ee-bf16-3af487f32ce6)

Al hacer clic en **Añadir a la lista de fechas seleccionadas**, se muestra una ventana de confirmación.

![Confirmación de Modificación](https://github.com/user-attachments/assets/30954369-5777-42e2-95f8-32f90c518386)

Al confirmar, la reserva se modifica correctamente.

![Reserva Modificada](https://github.com/user-attachments/assets/b0d91c24-e23b-4d6e-a46f-342e146e8f8a)

---

## **Consultar Reservas**

En esta sección, el usuario puede visualizar todas sus reservas activas.

![Consultar Reservas](https://github.com/user-attachments/assets/c98e4138-e1b7-4ba4-9176-75bd608b9e51)

## Tecnologías Utilizadas

Este proyecto usa:

- **Vite** para una compilación rápida y optimizada.
- **React** como librería principal para la interfaz.
- **ESLint** con reglas personalizadas para mantener calidad de código.
- **React Router** para manejar la navegación entre páginas.
- **Axios** para realizar peticiones HTTP al backend.



## Instalacion y Configuracion

1. Clonar el repositorio 

    ```https://github.com/AllanContreras/book-frontend.git```

2. Insatalacion de dependencias 

    ```cd book-frontend```

    ```npm install```

3. Ejecutar proyecto

    ```mpn run dev```

## Uso del Proyecto
Para utilizar el proyecto, ejecuta el comando `npm run dev` en la terminal. 

Para acceder a la aplicación, ingresa la URL que aparece en la terminal, en el navegador: http://localhost:5173/ 

Al ingresar a la URL se nos dirigira el el navegador donde se estara ejecutando el proyecto y nos encontraremos en la pantalla de inicio de sesion donde debemos ingresar como Usuario o Administrador.

Dependiendo con que tipo de usuario ingresemos tendremos diferentes opciones para cada uno 

### Usuario:
- Crear Reserva
- Modificar Reserva
- Consultar Reservas
- Eliminar Reserva

### Administrador:
- Gestionar Reservas
- Gestionar Usuarios
- Crear Usuario
- Eliminar Usuario
- Actualizar Usuario
- Consultar Usuario

## Estructura del Proyecto



- 📦 **BOOK-FRONTEND**
  - 📂 **src**
    - 📂 **components** 
      - 📜 Dashboard.jsx
      - 📜 HacerReserva.jsx
      - 📜 Header_B.jsx
      - 📜 Header.jsx
      - 📜 Laboratorios.jsx
      - 📜 Login.jsx
      - 📜 Navbar.jsx
      - 📜 Register.jsx
      - 📜 Reservas.jsx
      - 📜 Table.jsx
    - 📂 **context**
        - 📜 AuthContext.jsx
    - 📂 **pages** 
      - 📜 Consultar.jsx
      - 📜 Eliminar.jsx
      - 📜 Home.jsx
      - 📜 Laboratorio.jsx
      - 📜 Modificar.jsx
      - 📜 Principal.jsx
      - 📜 Profile.jsx
      - 📜 Reservas.jsx
      - 📜 Sesion.jsx
      - 📜 Consultar_Usuario.jsx
      - 📜 Crear_Usuario.jsx
      - 📜 Eliminar_Usuario.jsx
      - 📜 Actualizar_Usuario.jsx
      - 📜 Principal_Admin.jsx

     - 📜 App.css 
     - 📜 App.jsx
     - 📜 index.css
     - 📜 main.jsx
      
    - 📂 **assets** 
        - 📂 Images
  - 📂 **public** 
    - 📜 vite.svg 

  - 📜 index.html
  - 📜 .gitignore
  - 📜 vite.config.js 
  - 📜 package.json
  - 📜 package-lock.json
  - 📜 postcss.config.cjs
  - 📜 eslint.config.js
  - 📜 README.md 


## Diagramas


### Diagrama de Clases

![Diagrama-de-clases-fronted](https://github.com/user-attachments/assets/b2c6b3bf-1eda-4b8f-ac2f-c11fd6984e03)

### Diagrama de Componentes



<img width="650" alt="Diagrama-Componentes" src="https://github.com/user-attachments/assets/0925687f-c48f-49fd-a9cd-36fe6fc018c0" />





























