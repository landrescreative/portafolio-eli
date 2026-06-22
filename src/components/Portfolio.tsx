"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, X, Calendar, Layers, Terminal, ZoomIn } from "lucide-react";
import styles from "./Portfolio.module.css";

interface Project {
  id: number;
  name: string;
  category: string;
  year: number;
  description: string;
  programs: string;
  process: string;
  image: string;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const categories = [
    "Todos",
    "Ilustración digital",
    "Fotomontaje",
    "Diseño gráfico",
    "Diseño de personajes",
    "Diseño en equipo",
    "Animación",
    "Modelado 3D",
    "Reconocimientos"
  ];

  const projects: Project[] = [
    {
      id: 1,
      name: "Arpía",
      category: "Ilustración digital",
      year: 2025,
      description: "Realicé una ilustración para rediseñar un dibujo previo, adoptando por completo mi estilo gráfico y buscando acercarme a una estética más tenebrosa. Esto se debe a que las arpías son seres de fantasía asociados al miedo y, por lo tanto, quise alejarme de un aspecto agradable para reforzar su carácter inquietante.",
      programs: "Adobe Photoshop",
      process: "Ilustración digital detallada.",
      image: "/images/ilustraciones/Arpía 2025.jpeg"
    },
    {
      id: 2,
      name: "Fin de la Guerra",
      category: "Ilustración digital",
      year: 2025,
      description: "Realicé un dibujo que representa el dolor de un amor que llegó a su fin: el golpe directo que provoca que termine una batalla entre dos lados. Fue elaborado para una clase en la que se nos daba una palabra para plasmarla en una ilustración; en este caso, la palabra fue “amor”. En términos generales, el amor también puede significar ponerle un final a una relación por el bien de ambas partes.",
      programs: "Adobe Photoshop",
      process: "Composición y pintura digital.",
      image: "/images/ilustraciones/Fin de la guerra 2025.jpeg"
    },
    {
      id: 3,
      name: "Srta. Bigotes",
      category: "Diseño de personajes",
      year: 2025,
      description: "Realicé un dibujo con la temática “bigotes” para una clase de dibujo, cuyo objetivo era experimentar con la creatividad y el ingenio al momento de interpretar palabras y plasmarlas de forma visual en una ilustración.",
      programs: "Adobe Photoshop",
      process: "Bocetaje y colorización.",
      image: "/images/ilustraciones/Srta.Bigotes 2025.jpeg"
    },
    {
      id: 4,
      name: "Anuncio de Papas",
      category: "Fotomontaje",
      year: 2024,
      description: "Realicé un fotomontaje y una sección fotográfica en la que tomé imágenes de la modelo, de su mano y del envase de papas. Las papas fueron fotografiadas por separado para tener mayor control sobre la composición. Posteriormente, ajusté y modifiqué la iluminación de toda la serie de fotos para unificar el estilo visual y reforzar el impacto del resultado final.",
      programs: "Adobe Photoshop",
      process: "Recorte, integración y corrección de color.",
      image: "/images/ilustraciones/Anuncio de papas 2024 - Fotomontaje.jpeg"
    },
    {
      id: 5,
      name: "Día de Campo",
      category: "Fotomontaje",
      year: 2023,
      description: "Realicé un fotomontaje en el que integré a la chica dentro de un entorno de parque, con el objetivo de que se percibiera como parte natural de ese espacio. Para lograr una mejor integración visual, ajusté y modifiqué las sombras y las luces, cuidando la coherencia con la iluminación del entorno y fortaleciendo la sensación de profundidad y realismo en la composición.",
      programs: "Adobe Photoshop",
      process: "Fusión de múltiples imágenes.",
      image: "/images/ilustraciones/Día de campo 2023 - Fotomontaje.PNG"
    },
    {
      id: 6,
      name: "Hazbin Hotel",
      category: "Ilustración digital",
      year: 2024,
      description: "Es una vectorización de una imagen que encontré de esta serie, ayudé con el tono y sombras para que tuviera mejor calidad.",
      programs: "Clip Studio Paint",
      process: "Lineart y color base.",
      image: "/images/ilustraciones/hazbin hotel 2024.PNG"
    },
    {
      id: 7,
      name: "Melanie Martinez (Pity Party)",
      category: "Ilustración digital",
      year: 2024,
      description: "Se trata de un montaje fotográfico combinado con ilustración digital inspirado en la canción Pity Party de Melanie Martinez. En la composición, Melanie aparece junto a un oso de peluche al que le ha arrancado el cuello, con detalles de sangre que refuerzan el contraste entre lo infantil y lo perturbador. Se realizaron ajustes de iluminación, color y sombras para lograr una mejor integración de la ilustración con el fondo, unificando la atmósfera visual y acentuando el tono dramático de la escena.",
      programs: "Adobe Photoshop",
      process: "Pintura digital y fotomontaje.",
      image: "/images/ilustraciones/pity party.PNG"
    }
  ];

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryCount = (category: string) => {
    if (category === "Todos") return projects.length;
    return projects.filter((p) => p.category === category).length;
  };

  const sortedCategories = [...categories].sort((a, b) => {
    if (a === "Todos") return -1;
    if (b === "Todos") return 1;
    
    const countA = getCategoryCount(a);
    const countB = getCategoryCount(b);
    
    if (countA > 0 && countB === 0) return -1;
    if (countA === 0 && countB > 0) return 1;
    
    return 0;
  });

  const closeLightbox = () => {
    setLightboxImage(null);
    setIsZoomed(false);
  };

  return (
    <section id="portafolio" className={styles.portfolioSection}>
      <div className="section-container">
        <div className="section-header">
          <h2>Portafolio Creativo</h2>
          <p>
            Una muestra seleccionada de mis proyectos académicos, colaboraciones y trabajos independientes en arte digital.
          </p>
        </div>

        {/* Filters */}
        <div className={`${styles.filterContainer}`}>
          {sortedCategories.map((category) => {
            const count = getCategoryCount(category);
            const isEmpty = count === 0;
            return (
              <button
                key={category}
                className={`${styles.filterBtn} ${selectedCategory === category ? styles.activeFilter : ""} ${isEmpty ? styles.emptyFilter : ""}`}
                onClick={() => !isEmpty && setSelectedCategory(category)}
                disabled={isEmpty}
                aria-label={`${category} (${count} proyectos)`}
              >
                <span>{category}</span>
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} glass-card`}
              onClick={() => setActiveProject(project)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={300}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <span className={styles.categoryBadge}>{project.category}</span>
                  <h3 className={styles.overlayTitle}>{project.name}</h3>
                  <button className={styles.viewBtn}>
                    Ver Detalles <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div className={styles.modalOverlay} onClick={() => setActiveProject(null)}>
            <div className={`${styles.modalContent} glass-card`} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setActiveProject(null)} aria-label="Close modal">
                <X size={24} />
              </button>

              <div className={styles.modalGrid}>
                {/* Modal Left - Image with click-to-zoom action */}
                <div
                  className={styles.modalImageWrapper}
                  onClick={() => setLightboxImage(activeProject.image)}
                  title="Click para ampliar imagen"
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.name}
                    width={600}
                    height={450}
                    className={styles.modalImage}
                  />
                  <div className={styles.imageZoomOverlay}>
                    <ZoomIn size={24} />
                    <span>Click para ampliar</span>
                  </div>
                </div>

                {/* Modal Right - Details */}
                <div className={styles.modalDetails}>
                  <span className={styles.modalCategory}>{activeProject.category}</span>
                  <h3 className={styles.modalTitle}>{activeProject.name}</h3>

                  <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      <span><strong>Año:</strong> {activeProject.year}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Layers size={16} />
                      <span><strong>Programas:</strong> {activeProject.programs}</span>
                    </div>
                  </div>

                  <div className={styles.divider}></div>

                  <div className={styles.descriptionSection}>
                    <h4>Descripción</h4>
                    <p>{activeProject.description}</p>
                  </div>

                  <div className={styles.processSection}>
                    <h4>
                      <Terminal size={16} /> Proceso Creativo
                    </h4>
                    <p>{activeProject.process}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lightbox Visualizer Overlay */}
        {lightboxImage && (
          <div className={styles.lightboxOverlay} onClick={closeLightbox}>
            <button
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Cerrar ampliación"
            >
              <X size={32} />
            </button>
            <div className={styles.lightboxContainer} onClick={(e) => e.stopPropagation()}>
              <div className={styles.lightboxImageWrapper}>
                <Image
                  src={lightboxImage}
                  alt="Visualización ampliada"
                  width={1200}
                  height={900}
                  className={`${styles.lightboxImage} ${isZoomed ? styles.lightboxZoomed : ""}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              </div>
              <div className={styles.lightboxTip}>
                {isZoomed ? "Click en la imagen para reducir" : "Click en la imagen para hacer zoom"}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
