import Image from "next/image";
import { ArrowRight, Palette, Clapperboard, Box } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h1 className={styles.title}>
            Aquino Villeda <br />
            <span>Elizabeth</span>
          </h1>
          
          <h2 className={styles.subtitle}>Diseño, Animación y Arte Digital</h2>
          
          <p className={styles.description}>
            Soy una persona apasionada por la animación, el arte digital y la creación de contenido visual con propósito. Me interesa desarrollar propuestas creativas y funcionales que no solo sean atractivas visualmente, sino que también comuniquen ideas de manera clara y efectiva.
          </p>

          <blockquote className={styles.quote}>
            <p>
              &ldquo;Creo contenido visual con propósito, combinando animación, arte digital y diseño para comunicar ideas de forma clara, creativa y atractiva.&rdquo;
            </p>
          </blockquote>

          <div className={styles.ctaGroup}>
            <a href="#portafolio" className="btn-primary">
              Ver Portafolio <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="btn-secondary">
              Contáctame
            </a>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.circleBg}></div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/whatsapp.jpeg"
                alt="Elizabeth Aquino Villeda - Arte Digital"
                width={400}
                height={400}
                priority
                className={styles.avatarImage}
              />
            </div>
            
            {/* Float visual elements for art/design vibe */}
            <div className={`${styles.floatingBadge} ${styles.badge1} glass-card`}>
              <Palette size={16} className={styles.badgeIcon} /> Ilustración
            </div>
            <div className={`${styles.floatingBadge} ${styles.badge2} glass-card`}>
              <Clapperboard size={16} className={styles.badgeIcon} /> Animación
            </div>
            <div className={`${styles.floatingBadge} ${styles.badge3} glass-card`}>
              <Box size={16} className={styles.badgeIcon} /> 3D
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
