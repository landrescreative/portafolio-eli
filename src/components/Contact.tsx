"use client";

import { useState, FormEvent } from "react";
import { Mail, Instagram, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setStatus("loading");
    
    // Obtiene el ID del formulario de las variables de entorno o usa un fallback editable
    const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xzzpqrza"; // <-- Reemplaza 'xzzpqrza' con tu ID de Formspree

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: name,
          correo: email,
          asunto: subject,
          mensaje: message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMsg(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMsg("Ocurrió un problema al enviar el formulario a Formspree.");
        }
        setStatus("error");
      }
    } catch {
      setStatus("error");
      setErrorMsg("No se pudo establecer comunicación con el servidor. Revisa tu conexión a internet.");
    }
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <div className="section-container">
        <div className="section-header">
          <h2>Contacto</h2>
          <p>
            ¿Tienes un proyecto en mente, una propuesta de colaboración o alguna consulta académica? Escríbeme y hagamos algo increíble.
          </p>
        </div>

        <div className={styles.layoutGrid}>
          {/* Left Column - Contact Info */}
          <div className={`${styles.infoCard} glass-card`}>
            <h3 className={styles.infoTitle}>Información de Contacto</h3>
            <p className={styles.infoText}>
              Puedes escribirme directamente a través del formulario o contactarme en mis plataformas profesionales. Responderé lo antes posible.
            </p>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Correo Electrónico</span>
                  <a href="mailto:aquinovilledaelizabeth@gmail.com" className={styles.infoValue}>
                    aquinovilledaelizabeth@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.divider}></div>

            <h4 className={styles.socialTitle}>Redes y Canales Profesionales</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/elizabeth-aquino-villeda-b14485363"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} glass-card`}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/sinombreazul"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} glass-card`}
                aria-label="Instagram"
              >
                <Instagram size={20} />
                <span>@SINOMBREAZUL</span>
              </a>
            </div>
            
            <div className={styles.unitecBadge}>
              <span>UNITEC Campus Los Reyes</span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`${styles.formCard} glass-card`}>
            {status === "success" ? (
              <div className={styles.successWrapper}>
                <CheckCircle2 size={64} className={styles.successIcon} />
                <h3 className={styles.successTitle}>¡Mensaje Enviado!</h3>
                <p className={styles.successText}>
                  Muchas gracias por escribir, Elizabeth se pondrá en contacto contigo muy pronto.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-primary"
                  style={{ marginTop: "16px" }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Escríbeme</h3>
                
                {status === "error" && (
                  <div className={styles.errorBanner}>
                    <AlertCircle size={18} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre aquí"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu.correo@ejemplo.com"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="¿De qué trata tu consulta?"
                    disabled={status === "loading"}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                    disabled={status === "loading"}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
