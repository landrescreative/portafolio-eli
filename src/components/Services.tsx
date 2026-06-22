import { PenTool, Sparkles, Layers, Palette, Box, Video, Dribbble } from "lucide-react";
import styles from "./Services.module.css";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: "Ilustración Digital",
      description: "Creación de arte digital personalizado, piezas conceptuales y composiciones únicas adaptadas a tus necesidades creativas.",
      icon: <PenTool size={32} />,
      benefits: ["Concept art original", "Ilustración para portadas y redes", "Pintura digital detallada"]
    },
    {
      id: 2,
      title: "Diseño de Personajes",
      description: "Construcción de personajes memorables con hojas de modelo completas, estudio de vestuario, expresiones y poses corporativas o artísticas.",
      icon: <Sparkles size={32} />,
      benefits: ["Rotación de personajes (Turnarounds)", "Diseño de vestuario y accesorios", "Bocetos de expresiones y emociones"]
    },
    {
      id: 3,
      title: "Edición y Fotomontaje",
      description: "Retoque digital avanzado, manipulación fotográfica e integración impecable de múltiples imágenes con equilibrio de luz y color.",
      icon: <Layers size={32} />,
      benefits: ["Fotomontaje artístico surrealista", "Corrección de color avanzada", "Limpieza y restauración de imágenes"]
    },
    {
      id: 4,
      title: "Diseño Gráfico",
      description: "Desarrollo de logotipos, manuales de identidad visual e insumos gráficos atractivos para posicionar y potenciar tu marca o proyecto.",
      icon: <Palette size={32} />,
      benefits: ["Logotipos e isotipos vectoriales", "Manuales de identidad de marca", "Contenido visual para marketing"]
    },
    {
      id: 5,
      title: "Diseño de Empaque",
      description: "Propuestas visuales estratégicas de packaging para hacer tu producto competitivo y asegurar que destaque visualmente en góndolas.",
      icon: <Box size={32} />,
      benefits: ["Diseño estructural de etiquetas", "Mockups tridimensionales realistas", "Dirección cromática y tipográfica"]
    },
    {
      id: 6,
      title: "Animación Básica",
      description: "Creación de loops animados en 2D, cinemáticas cortas y piezas en movimiento ideales para campañas de redes sociales.",
      icon: <Video size={32} />,
      benefits: ["Storyboards ilustrados", "Animación en vectores 2D", "GIFs y loops interactivos"]
    },
    {
      id: 7,
      title: "Modelado 3D Básico",
      description: "Desarrollo de objetos tridimensionales y escenarios sencillos ideales para renders conceptuales o entornos interactivos.",
      icon: <Dribbble size={32} />,
      benefits: ["Modelado poligonal estilizado", "Mapeado de texturas PBR básicas", "Configuración de iluminación y renderizado"]
    }
  ];

  return (
    <section id="servicios" className={styles.servicesSection}>
      <div className="section-container">
        <div className="section-header">
          <h2>Servicios Creativos</h2>
          <p>
            Soluciones visuales y técnicas para proyectos artísticos, marcas en crecimiento y producciones digitales.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={`${styles.serviceCard} glass-card`}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <ul className={styles.benefitsList}>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className={styles.benefitItem}>
                    <span className={styles.checkmark}>✦</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
