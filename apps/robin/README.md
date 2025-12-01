# Robin

Robin (知更鸟) is a React application as frontend for TACHIBANA. It uses React Router for routing, shadcn/ui for UI components, and Tailwind CSS for styling.

View [React Router docs](https://reactrouter.com/).
View [shadcn/ui docs](https://ui.shadcn.com/).

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t robin .

# Run the container
docker run -p 3000:3000 robin
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
