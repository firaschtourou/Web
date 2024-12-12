 // Déclaration pour les fichiers CSS
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Déclaration pour les fichiers PNG
declare module '*.png' {
  const value: string;
  export default value;
}
