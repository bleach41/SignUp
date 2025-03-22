"use client"

import type React from "react"
import { useTheme } from "@/contexts/theme-context"

export default function SimpleStars({ children }: { children?: React.ReactNode }) {
    const { theme } = useTheme()
    const isDark = theme === "dark"
    const starColor = isDark ? "255, 255, 255" : "0, 0, 0"
    const starShadow = isDark
        ? "0 0 2px rgba(255, 255, 255, 0.1), 0 0 4px rgba(255, 255, 255, 0.1), 0 0 6px rgba(255, 255, 255, 0.1)"
        : "0 0 2px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.1), 0 0 6px rgba(0, 0, 0, 0.1)"

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Estrellas - Grupo 1 */}
            <div className="stars-small animate-pulse"></div>

            {/* Estrellas - Grupo 2 */}
            <div className="stars-medium animate-ping"></div>

            {/* Estrellas - Grupo 3 */}
            <div className="stars-large animate-pulse"></div>

            {/* Contenido */}
            <div className="relative z-10">{children}</div>

            {/* Estilos CSS para las estrellas */}
            <style jsx global>{`
        .stars-small {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(1px 1px at 10px 10px, rgba(${starColor}, 0.5) 50%, transparent 100%),
                            radial-gradient(1px 1px at 25px 30px, rgba(${starColor}, 0.2) 50%, transparent 100%),
                            radial-gradient(1px 1px at 40px 70px, rgba(${starColor}, 0.3) 50%, transparent 100%),
                            radial-gradient(1px 1px at 55px 110px, rgba(${starColor}, 0.2) 50%, transparent 100%),
                            radial-gradient(1px 1px at 70px 150px, rgba(${starColor}, 0.3) 50%, transparent 100%),
                            radial-gradient(1px 1px at 85px 190px, rgba(${starColor}, 0.2) 50%, transparent 100%),
                            radial-gradient(1px 1px at 100px 230px, rgba(${starColor}, 0.3) 50%, transparent 100%),
                            radial-gradient(1px 1px at 115px 270px, rgba(${starColor}, 0.7) 50%, transparent 100%),
                            radial-gradient(1px 1px at 130px 310px, rgba(${starColor}, 0.3) 50%, transparent 100%),
                            radial-gradient(1px 1px at 145px 350px, rgba(${starColor}, 0.2) 50%, transparent 100%);
          background-size: 150px 400px;
          z-index: 1;
          filter: drop-shadow(${starShadow});
        }
        
        .stars-medium {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(1.5px 1.5px at 150px 50px, rgba(${starColor}, 0.4) 50%, transparent 100%),
                            radial-gradient(1.5px 1.5px at 200px 120px, rgba(${starColor}, 0.3) 50%, transparent 100%),
                            radial-gradient(1.5px 1.5px at 250px 190px, rgba(${starColor}, 0.4) 50%, transparent 100%),
                            radial-gradient(1.5px 1.5px at 300px 260px, rgba(${starColor}, 0.3) 50%, transparent 100%),
                            radial-gradient(1.5px 1.5px at 350px 330px, rgba(${starColor}, 0.4) 50%, transparent 100%);
          background-size: 400px 400px;
          z-index: 1;
          filter: drop-shadow(${starShadow});
        }
        
        .stars-large {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(2px 2px at 400px 100px, rgba(${starColor}, 0.5) 50%, transparent 100%),
                            radial-gradient(2px 2px at 500px 250px, rgba(${starColor}, 0.4) 50%, transparent 100%),
                            radial-gradient(2px 2px at 600px 400px, rgba(${starColor}, 0.5) 50%, transparent 100%);
          background-size: 600px 500px;
          z-index: 1;
          filter: drop-shadow(${starShadow});
        }
      `}</style>
        </div>
    )
}

