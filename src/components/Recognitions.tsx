import { Award, Calendar, Users, Trophy } from "lucide-react";
import styles from "./Recognitions.module.css";

interface Recognition {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  type: string;
  description: string;
  achievement: string;
}

export default function Recognitions() {
  const recognitions: Recognition[] = [
    {
      id: 1,
      title: "Diseño Visual Estratégico",
      subtitle: "Proyecto Interdisciplinario UNITEC",
      date: "Agosto 2024",
      type: "Colaboración Interdisciplinaria",
      description: "Colaboración con estudiantes de Mercadotecnia y Gastronomía para crear un empaque de galletas comercializable. Dirigí los lineamientos visuales, la selección tipográfica y la paleta de colores para optimizar el posicionamiento del producto en el mercado.",
      achievement: "1er Lugar del Concurso Académico & Reconocimiento de Viabilidad Comercial"
    },
    {
      id: 2,
      title: "Diseño de Animación para una Marca",
      subtitle: "Proyecto Colaborativo Profesional",
      date: "Noviembre 2025",
      type: "Animación y Branding",
      description: "Desarrollo de una campaña corta animada en 2D para una marca real. Adapté el estilo artístico a las directrices de identidad del cliente e integré a sus personajes de forma consistente en un guion interactivo.",
      achievement: "2do Lugar General a Nivel Campus & Diploma a la Excelencia Técnica"
    },
    {
      id: 3,
      title: "Dirección de Cortometraje Animado",
      subtitle: "Proyecto Colaborativo de Fin de Cursos",
      date: "Diciembre 2025",
      type: "Producción y Dirección de Arte",
      description: "Dirección general de arte y coordinación de un cortometraje de animación. Supervisé las decisiones estéticas, diseñé parte de los storyboards y ejecuté técnicas de animación clave de manera autodidacta para asegurar consistencia visual.",
      achievement: "Reconocimiento a la Mejor Dirección de Arte & Calificación Sobresaliente"
    }
  ];

  return (
    <section id="reconocimientos" className={styles.recognitionsSection}>
      <div className="section-container">
        <div className="section-header">
          <h2>Reconocimientos</h2>
          <p>
            Logros académicos y profesionales que demuestran mi liderazgo creativo y habilidad para trabajar en equipos multidisciplinarios.
          </p>
        </div>

        <div className={styles.timeline}>
          {/* Central Line */}
          <div className={styles.timelineLine}></div>

          {recognitions.map((item, idx) => (
            <div
              key={item.id}
              className={`${styles.timelineItem} ${idx % 2 === 0 ? styles.left : styles.right}`}
            >
              {/* Badge Node */}
              <div className={`${styles.timelineBadge} glass-container`}>
                <Award size={20} />
              </div>

              {/* Card content */}
              <div className={`${styles.timelineCard} glass-card`}>
                <div className={styles.cardHeader}>
                  <span className={styles.dateBadge}>
                    <Calendar size={12} />
                    {item.date}
                  </span>
                  <span className={styles.typeBadge}>
                    <Users size={12} />
                    {item.type}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <h4 className={styles.cardSubtitle}>{item.subtitle}</h4>
                <p className={styles.cardDescription}>{item.description}</p>
                
                <div className={styles.achievementBadge}>
                  <Trophy size={16} className={styles.trophyIcon} />
                  <span>{item.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
