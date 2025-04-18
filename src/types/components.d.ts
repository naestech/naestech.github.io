declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// Add declarations for our components
declare module './App' {
  const App: () => JSX.Element;
  export default App;
}

declare module './components/sections/Home' {
  const Home: () => JSX.Element;
  export default Home;
}

declare module './components/sections/About' {
  const About: () => JSX.Element;
  export default About;
}

declare module './components/sections/Projects' {
  const Projects: () => JSX.Element;
  export default Projects;
}

declare module './components/sections/Blog' {
  const Blog: () => JSX.Element;
  export default Blog;
}

declare module './components/sections/Contact' {
  const Contact: () => JSX.Element;
  export default Contact;
}

declare module './components/layout/navbar' {
  const Navbar: () => JSX.Element;
  export default Navbar;
}

declare module './components/layout/footer' {
  const Footer: () => JSX.Element;
  export default Footer;
}

declare module './components/layout/sectionTransition' {
  const SectionTransition: (props: {
    children: React.ReactNode;
    direction?: string | null;
    isFade?: boolean;
  }) => JSX.Element;
  export default SectionTransition;
} 