import frenosImage from "figma:asset/273e882707501612efd523379e909a6e36c0e141.png";
import frenos2 from "figma:asset/e4ec903e8efee275b49cf6bc173156c55d5f1051.png";
import frenos3 from "figma:asset/17cd057c25c6873f9ba11bf310977fbfda78ce8d.png";
import frenos4 from "figma:asset/7b006ecdf3145b2dd3ff1ecef477a00634d30530.png";
import embraguesImage from "figma:asset/f7c072c174116276b25e0ade877579ae74e65732.png";
import embragues2 from "figma:asset/944f4b8065ade7f19d3fc589247cf9a440ca8b7a.png";
import embragues3 from "figma:asset/af760f72bcc051d3ea6bc41b928e2a7100151f8e.png";
import embragues4 from "figma:asset/e070c322bfbf4e101a49a5618a8ae56f781d9a76.png";
import distribucionImage from "figma:asset/cc1e9a858d3d8e3cb43aa8d928192707586bd19d.png";
import distribucion2 from "figma:asset/77d7b7f6ed1d15e2da3bfc75c2b41f921e0e3649.png";
import distribucion3 from "figma:asset/5a1f0d62cb38c93ed1e1863acc1db9566ee2699e.png";
import distribucion4 from "figma:asset/87dce76b388d97268ce0ab0054e95db8932a5ede.png";

export interface Product {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  imagen: string;
  imagenes: string[];
  estado: string;
  categoria: string;
  descripcion: string;
}

export const products: Product[] = [
  // Frenos (25 productos)
  {
    id: 1,
    nombre: "Kit de pastillas de freno delantero",
    marca: "Bosch",
    precio: 38500,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Pastillas de alta calidad para frenado seguro y eficiente."
  },
  {
    id: 2,
    nombre: "Disco de freno ventilado",
    marca: "Brembo",
    precio: 72900,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Disco ventilado para mejor disipación de calor."
  },
  {
    id: 3,
    nombre: "Juego de pastillas de freno trasero",
    marca: "Ferodo",
    precio: 29800,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Pastillas traseras de larga duración y bajo ruido."
  },
  {
    id: 4,
    nombre: "Cilindro maestro de freno",
    marca: "TRW",
    precio: 54200,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Cilindro maestro para presión hidráulica óptima."
  },
  {
    id: 5,
    nombre: "Pastillas de freno cerámicas",
    marca: "ATE",
    precio: 45600,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Pastillas cerámicas de última generación, menos polvo."
  },
  {
    id: 6,
    nombre: "Kit de discos y pastillas",
    marca: "Bosch",
    precio: 98300,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Kit completo delantero con discos y pastillas."
  },
  {
    id: 7,
    nombre: "Líquido de frenos DOT 4",
    marca: "Castrol",
    precio: 8900,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Líquido de frenos de alta temperatura."
  },
  {
    id: 8,
    nombre: "Servo freno reforzado",
    marca: "Bendix",
    precio: 125400,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Servo de alta eficiencia para mejor respuesta."
  },
  {
    id: 9,
    nombre: "Tambor de freno trasero",
    marca: "Valeo",
    precio: 48700,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Tambor reforzado con acabado anticorrosión."
  },
  {
    id: 10,
    nombre: "Cable de freno de mano",
    marca: "TRW",
    precio: 16800,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Cable de acero trenzado con recubrimiento."
  },
  {
    id: 11,
    nombre: "Mordaza de freno delantera",
    marca: "Brembo",
    precio: 89500,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Mordaza de aluminio de alta resistencia."
  },
  {
    id: 12,
    nombre: "Kit de reparación de mordaza",
    marca: "ATE",
    precio: 12300,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Kit completo con retenes y pistones."
  },
  {
    id: 13,
    nombre: "Disco perforado deportivo",
    marca: "EBC",
    precio: 95800,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Disco perforado para alta performance."
  },
  {
    id: 14,
    nombre: "Pastillas de freno metalicas",
    marca: "Ferodo",
    precio: 42100,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Pastillas metálicas para uso intensivo."
  },
  {
    id: 15,
    nombre: "Bomba de freno trasera",
    marca: "Bendix",
    precio: 34900,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Bomba hidráulica de precisión."
  },
  {
    id: 16,
    nombre: "Manguera de freno trenzada",
    marca: "Goodridge",
    precio: 28600,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Manguera trenzada de acero inoxidable."
  },
  {
    id: 17,
    nombre: "Sensor de desgaste de pastillas",
    marca: "Bosch",
    precio: 7400,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Sensor electrónico de alta precisión."
  },
  {
    id: 18,
    nombre: "Disco sólido trasero",
    marca: "TRW",
    precio: 38900,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Disco trasero macizo económico."
  },
  {
    id: 19,
    nombre: "Kit de zapatas de freno",
    marca: "Ferodo",
    precio: 31200,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Zapatas de tambor de larga vida útil."
  },
  {
    id: 20,
    nombre: "Válvula reguladora de presión",
    marca: "ATE",
    precio: 24800,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Válvula para distribución óptima de presión."
  },
  {
    id: 21,
    nombre: "Kit de purga de frenos",
    marca: "Castrol",
    precio: 15600,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Kit profesional con bomba de vacío."
  },
  {
    id: 22,
    nombre: "Pastillas de freno orgánicas",
    marca: "EBC",
    precio: 36700,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Pastillas orgánicas para conducción suave."
  },
  {
    id: 23,
    nombre: "Caliper de freno pintado",
    marca: "Brembo",
    precio: 145300,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Caliper de aluminio con acabado pintado."
  },
  {
    id: 24,
    nombre: "Disco ranurado de alto rendimiento",
    marca: "EBC",
    precio: 87400,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Disco con ranuras para evacuación de gases."
  },
  {
    id: 25,
    nombre: "Sistema ABS completo",
    marca: "Bosch",
    precio: 234500,
    imagen: frenosImage,
    imagenes: [frenosImage, frenos2, frenos3, frenos4],
    estado: "disponible",
    categoria: "Frenos",
    descripcion: "Sistema antibloqueo de última generación."
  },
  // Embragues (25 productos)
  {
    id: 26,
    nombre: "Kit de embrague completo",
    marca: "Luk",
    precio: 145000,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Kit completo con disco, plato y rulemán de empuje."
  },
  {
    id: 27,
    nombre: "Disco de embrague reforzado",
    marca: "Sachs",
    precio: 89600,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Disco reforzado para uso exigente y alta performance."
  },
  {
    id: 28,
    nombre: "Rulemán de empuje",
    marca: "Valeo",
    precio: 34200,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Rulemán de precisión para accionamiento suave del embrague."
  },
  {
    id: 29,
    nombre: "Plato de embrague",
    marca: "Luk",
    precio: 72400,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Plato de presión de alta calidad."
  },
  {
    id: 30,
    nombre: "Cable de embrague",
    marca: "Sachs",
    precio: 15800,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Cable regulable para accionamiento preciso."
  },
  {
    id: 31,
    nombre: "Kit embrague sport",
    marca: "Valeo",
    precio: 187500,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Kit deportivo para máxima transferencia de potencia."
  },
  {
    id: 32,
    nombre: "Cilindro maestro de embrague",
    marca: "TRW",
    precio: 42300,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Cilindro hidráulico de alta presión."
  },
  {
    id: 33,
    nombre: "Cilindro esclavo de embrague",
    marca: "Valeo",
    precio: 38900,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Cilindro receptor con accionamiento suave."
  },
  {
    id: 34,
    nombre: "Disco orgánico de embrague",
    marca: "Sachs",
    precio: 76500,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Disco con material orgánico de larga duración."
  },
  {
    id: 35,
    nombre: "Kit de embrague cerámico",
    marca: "Luk",
    precio: 245800,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Kit cerámico para máxima resistencia térmica."
  },
  {
    id: 36,
    nombre: "Horquilla de embrague",
    marca: "Valeo",
    precio: 18700,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Horquilla metálica reforzada."
  },
  {
    id: 37,
    nombre: "Manguera hidráulica de embrague",
    marca: "TRW",
    precio: 12400,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Manguera flexible de alta presión."
  },
  {
    id: 38,
    nombre: "Disco bidisco de competición",
    marca: "Sachs",
    precio: 312500,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Sistema bidisco para altas prestaciones."
  },
  {
    id: 39,
    nombre: "Volante motor bimasa",
    marca: "Luk",
    precio: 198600,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Volante bimasa para reducción de vibraciones."
  },
  {
    id: 40,
    nombre: "Kit de embrague económico",
    marca: "Valeo",
    precio: 98700,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Kit básico de buena calidad y precio accesible."
  },
  {
    id: 41,
    nombre: "Sensor de posición de pedal",
    marca: "Bosch",
    precio: 9800,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Sensor electrónico de posición."
  },
  {
    id: 42,
    nombre: "Plato autopresionante",
    marca: "Sachs",
    precio: 124300,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Plato con sistema autopresionante."
  },
  {
    id: 43,
    nombre: "Disco con muelles amortiguadores",
    marca: "Luk",
    precio: 95400,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Disco con sistema de amortiguación integrado."
  },
  {
    id: 44,
    nombre: "Kit de embrague para diesel",
    marca: "Valeo",
    precio: 167800,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Kit especial para motores diesel de alto torque."
  },
  {
    id: 45,
    nombre: "Collarin hidráulico",
    marca: "Sachs",
    precio: 54600,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Collarin con accionamiento hidráulico integrado."
  },
  {
    id: 46,
    nombre: "Resorte de pedal",
    marca: "TRW",
    precio: 5600,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Resorte de retorno de alta resistencia."
  },
  {
    id: 47,
    nombre: "Disco de embrague multidisco",
    marca: "Luk",
    precio: 289400,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Sistema multidisco para competición."
  },
  {
    id: 48,
    nombre: "Kit volante más embrague",
    marca: "Valeo",
    precio: 276300,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Kit completo con volante motor incluido."
  },
  {
    id: 49,
    nombre: "Plato de presión reforzado",
    marca: "Sachs",
    precio: 98500,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Plato reforzado para uso intensivo."
  },
  {
    id: 50,
    nombre: "Sistema embrague hidráulico completo",
    marca: "Luk",
    precio: 185700,
    imagen: embraguesImage,
    imagenes: [embraguesImage, embragues2, embragues3, embragues4],
    estado: "disponible",
    categoria: "Embragues",
    descripcion: "Sistema completo con cilindros y mangueras."
  },
  // Distribución (25 productos)
  {
    id: 51,
    nombre: "Kit de distribución con tensor",
    marca: "Gates",
    precio: 112400,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Kit completo con correa, tensor y polea."
  },
  {
    id: 52,
    nombre: "Correa de distribución",
    marca: "Dayco",
    precio: 41900,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Correa de alta resistencia para sincronización perfecta."
  },
  {
    id: 53,
    nombre: "Bomba de agua con polea",
    marca: "SKF",
    precio: 76300,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Bomba de agua con polea integrada para mayor durabilidad."
  },
  {
    id: 54,
    nombre: "Tensor de distribución",
    marca: "INA",
    precio: 28600,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Tensor automático de alta precisión."
  },
  {
    id: 55,
    nombre: "Polea de distribución",
    marca: "Gates",
    precio: 19200,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Polea loca para correcto tensado de correa."
  },
  {
    id: 56,
    nombre: "Kit distribución completo",
    marca: "Dayco",
    precio: 156700,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Kit premium con bomba de agua incluida."
  },
  {
    id: 57,
    nombre: "Correa poli-V",
    marca: "Continental",
    precio: 12400,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Correa auxiliar para accesorios del motor."
  },
  {
    id: 58,
    nombre: "Kit cadena de distribución",
    marca: "Febi",
    precio: 187900,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Kit completo con cadena, tensores y guías."
  },
  {
    id: 59,
    nombre: "Tensor hidráulico de cadena",
    marca: "INA",
    precio: 45600,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Tensor hidráulico automático para cadena."
  },
  {
    id: 60,
    nombre: "Guía de cadena superior",
    marca: "Febi",
    precio: 18700,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Guía plástica reforzada con fibra."
  },
  {
    id: 61,
    nombre: "Polea cigüeñal",
    marca: "Gates",
    precio: 34800,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Polea de cigüeñal con damper integrado."
  },
  {
    id: 62,
    nombre: "Kit de distribución reforzado",
    marca: "Contitech",
    precio: 142300,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Kit reforzado para motores diesel."
  },
  {
    id: 63,
    nombre: "Correa de alternador",
    marca: "Dayco",
    precio: 8900,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Correa trapezoidal para alternador."
  },
  {
    id: 64,
    nombre: "Tensor automático multi-V",
    marca: "INA",
    precio: 32400,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Tensor automático para correas auxiliares."
  },
  {
    id: 65,
    nombre: "Bomba de agua eléctrica",
    marca: "Bosch",
    precio: 124600,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Bomba de agua con motor eléctrico."
  },
  {
    id: 66,
    nombre: "Kit completo con termostato",
    marca: "Gates",
    precio: 178500,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Kit completo con termostato y juntas."
  },
  {
    id: 67,
    nombre: "Cadena de distribución silenciosa",
    marca: "Iwis",
    precio: 95700,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Cadena de baja fricción y bajo ruido."
  },
  {
    id: 68,
    nombre: "Tensor manual de correa",
    marca: "Dayco",
    precio: 15800,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Tensor de ajuste manual económico."
  },
  {
    id: 69,
    nombre: "Kit distribución racing",
    marca: "Gates",
    precio: 234700,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Kit de alta performance para competición."
  },
  {
    id: 70,
    nombre: "Polea libre alternador",
    marca: "INA",
    precio: 42300,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Polea con desacople para alternador."
  },
  {
    id: 71,
    nombre: "Correa dentada reforzada",
    marca: "Contitech",
    precio: 48900,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Correa con fibra de kevlar reforzada."
  },
  {
    id: 72,
    nombre: "Kit de juntas de distribución",
    marca: "Elring",
    precio: 23400,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Juego completo de juntas y retenes."
  },
  {
    id: 73,
    nombre: "Bomba de aceite con cadena",
    marca: "Febi",
    precio: 87600,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Bomba de aceite con cadena de accionamiento."
  },
  {
    id: 74,
    nombre: "Piñón cigüeñal ajustable",
    marca: "Gates",
    precio: 56700,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Piñón con sistema de ajuste variable."
  },
  {
    id: 75,
    nombre: "Kit distribución premium completo",
    marca: "SKF",
    precio: 298400,
    imagen: distribucionImage,
    imagenes: [distribucionImage, distribucion2, distribucion3, distribucion4],
    estado: "disponible",
    categoria: "Distribución",
    descripcion: "Kit premium con todos los componentes y herramientas."
  }
];