# Ajay Sapkale 3D Portfolio

A React-based 3D portfolio website for showcasing skills, experience, education, projects, resume, and contact details.

## Tech Stack

- React 18
- Styled Components
- Framer Motion
- Three.js with React Three Fiber and Drei
- Material UI icons
- EmailJS contact form

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file for the contact form:

```bash
cp .env.example .env
```

Update `.env` with your EmailJS service ID, template ID, and public key.

Run the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

## Customize Content

Most portfolio content lives in `src/data/constants.js`.

- `Bio`: name, roles, resume, and social links
- `skills`: skill groups and icons
- `experiences`: work/project experience
- `education`: academic details
- `projects`: portfolio project cards and links

## Notes

This project currently uses Create React App. A future improvement is migrating to Vite for faster development and a more actively maintained build setup.
