import frenosImage from "@/assets/43dcdc5f59e8cc1327a9171f1cd6b822adebe4ca.png";
import embraguesImage from "@/assets/21c13ad97701220ae352911a849271b27524f5a6.png";
import distribucionImage from "@/assets/dfb065348e554a3ab33ba518e80f7b32e41d750c.png";

export interface Product {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  imagen: string;
  estado: string;
  categoria: string;
}

export const products: Product[] = [
  // Frenos
  {
    id: 1,
    nombre: "Kit de pastillas de freno delantero",
    marca: "Bosch",
    precio: 38500,
    imagen: frenosImage,
    estado: "disponible",
    categoria: "Frenos"
  },
  {
    id: 2,
    nombre: "Disco de freno ventilado",
    marca: "Brembo",
    precio: 72900,
    imagen: frenosImage,
    estado: "disponible",
    categoria: "Frenos"
  },
  {
    id: 3,
    nombre: "Juego de pastillas de freno trasero",
    marca: "Ferodo",
    precio: 29800,
    imagen: frenosImage,
    estado: "sin stock",
    categoria: "Frenos"
  },
  // Embragues
  {
    id: 4,
    nombre: "Kit de embrague completo",
    marca: "Luk",
    precio: 145000,
    imagen: embraguesImage,
    estado: "disponible",
    categoria: "Embragues"
  },
  {
    id: 5,
    nombre: "Disco de embrague reforzado",
    marca: "Sachs",
    precio: 89600,
    imagen: embraguesImage,
    estado: "disponible",
    categoria: "Embragues"
  },
  {
    id: 6,
    nombre: "Rulemán de empuje",
    marca: "Valeo",
    precio: 34200,
    imagen: embraguesImage,
    estado: "sin stock",
    categoria: "Embragues"
  },
  // Distribución
  {
    id: 7,
    nombre: "Kit de distribución con tensor",
    marca: "Gates",
    precio: 112400,
    imagen: distribucionImage,
    estado: "disponible",
    categoria: "Distribución"
  },
  {
    id: 8,
    nombre: "Correa de distribución",
    marca: "Dayco",
    precio: 41900,
    imagen: distribucionImage,
    estado: "disponible",
    categoria: "Distribución"
  },
  {
    id: 9,
    nombre: "Bomba de agua con polea",
    marca: "SKF",
    precio: 76300,
    imagen: distribucionImage,
    estado: "sin stock",
    categoria: "Distribución"
  }
];
