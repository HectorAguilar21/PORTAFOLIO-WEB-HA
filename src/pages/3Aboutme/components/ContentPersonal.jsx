import React from "react";
import { motion } from "framer-motion";

export default function ContentPersonal() {
  return (
    <motion.div
      className="container-personal flex w-full bg-cover bg-center rounded-3xl sCXS:h-full sCS:h-11/12 sMINI:h-5/6"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
      animate={{ opacity: 1 }}
    >
      <div className="sTMINI:px-16 sMINI:px-3 pt-6 w-full text-base text-white text-justify overflow-auto bg-slate-900 bg-opacity-80 rounded-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          animate={{ opacity: 1 }}
        >
          Desde que nací, la vida me ha enseñado muchas cosas, algunas de ellas
          las he aprendido a las malas, otras a las buenas, pero a pesar de
          todo, me considero una persona muy afortunada. Tengo una anécdota que
          siempre me recuerda lo afortunado que soy: cuando nací, mis padres
          eran de clase baja y no tenían los recursos para pagar un hospital
          privado, sin embargo, por algún motivo terminé naciendo en uno sin
          tener que pagar nada. Esto alivió la presión que mi madre tenía y le
          permitió centrarse en cuidarme. Aprendí desde muy temprano que nada en
          esta vida está garantizado y siempre debemos estar agradecidos por lo
          que tenemos.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          animate={{ opacity: 1 }}
        >
          Mi vida ha cambiado desde que soy padre. Tengo un hijo hermoso de casi
          3 años que tiene síndrome de Down, es uno de mis 4 pilares en la vida
          y lo amo más allá de las palabras. Con él, he aprendido tanto sobre la
          vida, el amor y la paciencia. A pesar de los desafíos que hemos
          enfrentado como familia, mi hijo me ha enseñado que el amor es lo más
          importante en la vida y que todo lo demás es secundario. Me ha
          enseñado a ser más compasivo, más paciente y más agradecido por las
          pequeñas cosas de la vida. Él es mi mayor maestro y yo soy su
          estudiante más dedicado. Cada día, trato de darle a mi hijo lo mejor
          de mí. A veces me equivoco, pero siempre intento rectificar y hacerlo
          mejor. Él me da la fuerza y la motivación para seguir adelante,
          incluso cuando las cosas son difíciles. Por él, todo vale la pena. Ser
          padre de un niño con síndrome de Down no es fácil, pero el amor que
          siento por él lo hace todo más fácil. Siempre estoy agradecido por
          tenerlo en mi vida y por la oportunidad de aprender de él. Mi hijo es
          una fuente constante de amor y alegría en mi vida, y siempre lo seré
          para él.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          animate={{ opacity: 1 }}
        >
          Mi pareja es uno de mis pilares en la vida. Desde que la conocí, supe
          que ella sería alguien muy especial para mí. Juntos hemos pasado por
          momentos difíciles y hemos celebrado nuestros éxitos juntos también.
          En todo momento, ella ha estado a mi lado, apoyándome, aconsejándome y
          siendo mi confidente. Ella me ha enseñado la importancia de la
          comunicación y la paciencia en una relación. Hemos trabajado juntos
          para superar obstáculos y hemos aprendido a comprendernos mutuamente.
          Con ella, he encontrado la felicidad, la tranquilidad y la seguridad
          que siempre he buscado en una relación. No hay nada más gratificante
          que tener a alguien con quien compartir la vida, y mi pareja es esa
          persona para mí. Es mi compañera, mi amiga y mi confidente. Con ella,
          he aprendido a ser un mejor ser humano y estoy agradecido por su
          presencia en mi vida todos los días. Siempre estoy dispuesto a hacer
          lo que sea necesario para que nuestra relación siga siendo fuerte.
          Ella es uno de los pilares en mi vida, alguien en quien puedo confiar
          y apoyarme sin importar las circunstancias. La amo con todo mi corazón
          y siempre estaré agradecido por todo lo que hace por mí.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          animate={{ opacity: 1 }}
        >
          Mi madre es otro de mis pilares, ha sido mi guía y mi apoyo desde que
          era pequeño. Siempre ha estado ahí para mí, sin importar lo difícil
          que fuera la situación. Ella ha sido mi roca en los momentos más
          difíciles, y me ha dado la fuerza y la motivación para seguir
          adelante. Gracias a ella, he aprendido el valor del trabajo duro, la
          honestidad y la perseverancia. Me ha enseñado a ser una persona
          compasiva y agradecida, y a tratar a los demás con respeto y
          consideración. No puedo imaginar la persona que sería hoy en día sin
          su amor y su influencia en mi vida
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.25 }}
          animate={{ opacity: 1 }}
        >
          Dios es una presencia constante en mi vida y uno de mis pilares más
          importantes. Desde muy joven, he sentido su amor y protección en cada
          aspecto de mi vida. Me ha guiado en los momentos difíciles y me ha
          brindado esperanza cuando he perdido el rumbo. Creo que mi fe en Dios
          es lo que me ha mantenido fuerte en los momentos más oscuros. Me ha
          dado la fuerza y la confianza para superar los obstáculos y seguir
          adelante, incluso cuando todo parecía perdido. Siempre siento su amor
          en mi corazón, y sé que nunca estoy solo porque él siempre está
          conmigo. En mi vida diaria, trato de honrar a Dios a través de mis
          acciones y mis palabras. Me esfuerzo por ser una buena persona, ayudar
          a los demás y tratar a todos con amor y respeto, siguiendo su ejemplo.
          Mi fe en Dios me da la motivación para ser mejor cada día y para hacer
          una diferencia positiva en el mundo. En resumen, Dios es un pilar
          fundamental en mi vida y mi fe en él me da la fuerza y la guía
          necesarias para enfrentar los desafíos que se presentan. Estoy
          agradecido por su amor y protección constante, y siempre lo honraré a
          través de mis acciones y mi vida
        </motion.p>
      </div>
    </motion.div>
  );
}
