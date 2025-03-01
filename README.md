<<<<<<< HEAD
# Frontend

## Integrantes:

- Allan Steff Contreras Rodriguez
- David Santiago Castro Sierra
- Juan David Zambrano Gonzalez
- Juan Esteban Cely Lopez
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> b03526e (Subiendo frontend)

**Apariencia de la Pagina**
**Mockup Completo**: [Mockup](https://www.figma.com/design/q2bD9KS26JlWBr3UjoFS9R/Untitled?node-id=0-1&t=9AEi33GTFu8xchba-1)


**# Pantalla Inicial**

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

---


## Diagrama de clases

![Diagrama de clases frontend](https://github.com/user-attachments/assets/785b04fb-cc08-492c-8738-be99ebd68dbd)
































