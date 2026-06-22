"use client";

import { useState } from "react";
import { User, Award, Heart, Sparkles, BookOpen } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("perfil");

  const skillGroups = [
    {
      title: "Especialidades Creativas",
      skills: ["Ilustración digital", "Diseño de personajes", "Animación básica", "Modelado 3D básico"],
    },
    {
      title: "Técnicas Visuales",
      skills: ["Composición visual", "Manejo de color e iluminación", "Fotomontaje", "Edición de imágenes", "Propuestas visuales"],
    },
    {
      title: "Herramientas de Software",
      skills: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Animate", "Autodesk Maya"],
    },
  ];

  const interests = [
    "Creación de personajes",
    "Historias visuales (Storytelling)",
    "Estilos visuales llamativos",
    "Composiciones fantásticas y dramáticas",
    "Arte digital experimental",
    "Creación de contenido con conexión emocional",
  ];

  return (
    <section id="sobre-mi" className={styles.aboutSection}>
      <div className="section-container">
        <div className="section-header">
          <h2>Marca Personal</h2>
          <p>
            Conoce mi identidad creativa, habilidades y los intereses que me inspiran a dar vida a nuevas ideas.
          </p>
        </div>

        <div className={styles.layoutContainer}>
          {/* Left Column - Big Identity Card */}
          <div className={`${styles.identityCard} glass-card`}>
            <div className={styles.brandBadge}>
              <Sparkles size={14} />
              <span>MARCA PERSONAL</span>
            </div>
            
            <h3 className={styles.brandTitle}>Elizabeth Aquino Villeda</h3>
            <p className={styles.brandSubtitle}>Diseño, Animación y Arte Digital</p>
            
            <p className={styles.identityText}>
              Me presento como una marca personal enfocada en el diseño, la animación y el arte digital. Mi intención es mostrar no solo mis trabajos finales, sino también mi personalidad, mi estilo artístico y mi proceso de creación.
            </p>
            
            <div className={styles.divider}></div>
            
            <div className={styles.plansSection}>
              <h4 className={styles.plansTitle}>
                <BookOpen size={18} className={styles.plansIcon} />
                Planes a Futuro
              </h4>
              <p className={styles.plansText}>
                Busco seguir desarrollándome profesionalmente en ilustración, animación, modelado 3D y diseño de personajes. Mi meta es consolidar un portafolio profesional que me abra puertas en proyectos freelance, colaboraciones creativas y oportunidades laborales en la industria digital.
              </p>
            </div>
          </div>

          {/* Right Column - Interactive Tabs */}
          <div className={styles.interactiveArea}>
            <div className={`${styles.tabsList} glass-container`}>
              <button
                className={`${styles.tabBtn} ${activeTab === "perfil" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("perfil")}
              >
                <User size={18} />
                <span>Mi Perfil</span>
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === "habilidades" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("habilidades")}
              >
                <Award size={18} />
                <span>Habilidades</span>
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === "intereses" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("intereses")}
              >
                <Heart size={18} />
                <span>Intereses</span>
              </button>
            </div>

            <div className={styles.tabContent}>
              {/* Profile Tab */}
              {activeTab === "perfil" && (
                <div className={`${styles.panel} ${styles.fadeIn}`}>
                  <h4 className={styles.panelTitle}>Enfoque Profesional</h4>
                  <p className={styles.panelText}>
                    Como estudiante en la **UNITEC Campus Los Reyes**, combino el rigor académico con el aprendizaje continuo y autodidacta. Me especializo en encontrar soluciones estéticas a problemas de comunicación.
                  </p>
                  
                  <div className={styles.statsGrid}>
                    <div className={`${styles.statCard} glass-card`}>
                      <span className={styles.statNum}>+3</span>
                      <span className={styles.statLabel}>Años de Formación</span>
                    </div>
                    <div className={`${styles.statCard} glass-card`}>
                      <span className={styles.statNum}>100%</span>
                      <span className={styles.statLabel}>Dedicación Creativa</span>
                    </div>
                  </div>

                  <p className={styles.panelText}>
                    Disfruto de la experimentación cromática y de la creación de atmósferas que mezclen realismo conceptual con fantasía visual.
                  </p>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === "habilidades" && (
                <div className={`${styles.panel} ${styles.fadeIn}`}>
                  <h4 className={styles.panelTitle}>Caja de Herramientas</h4>
                  <div className={styles.groupsContainer}>
                    {skillGroups.map((group, idx) => (
                      <div key={idx} className={styles.skillGroup}>
                        <h5 className={styles.groupTitle}>{group.title}</h5>
                        <div className={styles.skillsList}>
                          {group.skills.map((skill, sIdx) => (
                            <span key={sIdx} className={`${styles.skillTag} glass-card`}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interests Tab */}
              {activeTab === "intereses" && (
                <div className={`${styles.panel} ${styles.fadeIn}`}>
                  <h4 className={styles.panelTitle}>Gustos e Inspiraciones</h4>
                  <p className={styles.panelText}>
                    Mi trabajo está impulsado por mi amor por el dibujo y la narrativa visual. Me apasiona explorar cómo las formas y los colores cuentan historias por sí mismos.
                  </p>
                  <div className={styles.interestsGrid}>
                    {interests.map((interest, idx) => (
                      <div key={idx} className={`${styles.interestItem} glass-card`}>
                        <span className={styles.interestBullet}>✦</span>
                        <span>{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
