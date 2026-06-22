import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elizabeth Aquino Villeda | Portafolio de Diseño, Animación y Arte Digital",
  description: "Portafolio creativo de Elizabeth Aquino Villeda (SINOMBREAZUL), estudiante de Diseño, Animación y Arte Digital en UNITEC Campus Los Reyes. Explora mis proyectos de ilustración digital, modelado 3D, animación y servicios creativos.",
  keywords: ["Diseño Digital", "Animación", "Arte Digital", "Elizabeth Aquino Villeda", "SINOMBREAZUL", "UNITEC Los Reyes", "Portafolio Creativo", "Ilustración Digital", "Modelado 3D"],
  authors: [{ name: "Elizabeth Aquino Villeda" }],
  openGraph: {
    title: "Elizabeth Aquino Villeda | Portafolio Creativo",
    description: "Diseño, Animación y Arte Digital - Portafolio de Proyectos y Servicios.",
    type: "website",
    locale: "es_MX",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="bg-blobs">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
          <div className="blob-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
