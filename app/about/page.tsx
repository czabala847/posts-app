import Image from "next/image";
import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";

import { COLORS } from "../themes/vars";

import Styles from "./about.module.css";
import { GradientBlurPoint } from "../components/GradientBlurPoint";

export default function page() {
  return (
    <main>
      <section
        className={`grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] mx-auto items-center py-10 gap-4 md:gap-0 ${Styles.GridContainer}`}
      >
        <div
          className={`mx-auto md:mx-0 text-center md:text-left ${Styles.GridMyName}`}
        >
          <span>Hola, soy</span>
          <h1
            className="text-4xl font-bold my-1"
            style={{ color: COLORS.blue }}
          >
            Carlos Zabala
          </h1>
          <span>Frontend Developer</span>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <a
              href="https://github.com/czabala847"
              target="_blank"
              className="h-8 w-8 bg-white flex items-center justify-center rounded-full shadow-sm"
            >
              <BsGithub size={18} color="rgba(0,0,0,0.7)" />
            </a>
            <a
              href="https://linkedin.com/in/carlos-zabala-roqueme"
              target="_blank"
              className="h-8 w-8 bg-white flex items-center justify-center rounded-full shadow-sm"
            >
              <BsLinkedin size={18} color="rgba(0,0,0,0.7)" />
            </a>
          </div>
        </div>

        <div className={`relative mx-auto ${Styles.GridImage}`}>
          <GradientBlurPoint background={COLORS.blue} size={100} blur={70} />
          <figure className="relative z-[2] overflow-hidden rounded-full h-36 md:h-52 w-36 md:w-52 border-4 border-white shadow-md">
            <Image
              className="object-cover"
              alt="Imagen Carlos Zabala"
              src="/images/profile.png"
              width={200}
              height={200}
            />
          </figure>
        </div>
      </section>

      <section className="w-full md:w-[60%] mx-auto mb-6">
        <p className="mb-2">
          Hola de nuevo, mi nombre es{" "}
          <span className="font-semibold">Carlos Zabala</span>, y me llena de
          entusiasmo formar parte de este proceso de selección para la posición
          de Desarrollador Frontend Junior. Espero que mi solución a la prueba
          técnica esté a la altura de sus expectativas y sea de su agrado.
        </p>
        <p className="mb-2">
          Desde siempre, he tenido un sueño: utilizar la tecnología como una
          herramienta para crear soluciones significativas que beneficien a la
          sociedad. Este deseo me ha llevado a convertirme en un apasionado del
          mundo tecnológico, especialmente cuando se combina con el diseño y la
          estética. Mis objetivos profesionales se alinean con el crecimiento
          constante en el campo del desarrollo frontend, siempre aplicando las
          mejores prácticas y generando soluciones innovadoras.
        </p>
        <p className="mb-2">
          Mis metas a <span className="font-semibold">corto plazo</span> en Auco
          se centran en sumergirme en la cultura de la empresa, adquirir un
          profundo conocimiento de las tecnologías utilizadas en el desarrollo
          frontend y contribuir con mi experiencia al equipo. Estoy ansioso por
          aprender y adaptarme de manera efectiva a mi entorno de trabajo.
        </p>
        <p className="mb-2">
          A <span className="font-semibold">largo plazo</span>, aspiro a estar
          involucrado en proyectos desafiantes que impulsen mi crecimiento
          profesional y contribuyan al éxito de Auco como un referente en
          innovación y calidad en la industria. Mi pasión por la tecnología, mi
          deseo constante de aprendizaje en el mundo del desarrollo frontend y
          mi creatividad son activos valiosos que pueden contribuir
          significativamente al crecimiento de Auco y acercar la empresa a sus
          metas y objetivos.
        </p>
      </section>
    </main>
  );
}
