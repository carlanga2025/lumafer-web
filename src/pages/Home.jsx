import Question from "../utils/Question";
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="bg-secondary text-white min-vh-100 p-4">
      <div className="text-center mt-4">
        <img src="/rino.png" alt="rino" className="image-hover-effect" />
      </div>
      <Question
        question="¿EN QUÉ CONSISTE LA RINOPLASTIA?"
        answer={["La rinoplastia es una de las principales cirugías de estética faciales. La cirugía de nariz consigue dotar al paciente de una nariz con la forma y tamaño deseado, buscando siempre un resultado natural y armónico al rostro.",
          "La cirugía de rinoplastia consiste en dar forma a la nariz modificando tanto la arquitectura ósea como los cartílagos hasta dotarlos de la forma deseada. También puede estar encaminada a otros procedimientos destinados a mejorar la función respiratoria, como es el caso de la septoplastia (cirugía de corrección del tabique nasal).",
          "El procedimiento se realiza bajo anestesia general para tener un absoluto control del proceso respiratorio. El paciente podrá retomar su vida habitual, por motivo de comodidad, tras haber retirado la férula, evitando actividades bruscas durante unas semanas y siempre siguiendo el postoperatorio y las pautas y cuidados establecidos por el equipo médico.",
          "Como en toda cirugía, el paciente interesado en una operación de rinoplastia, apostar por un centro de calidad, seguridad y confianza es imprescindible. Por ello en CEME apostamos por un trato individualizado, personal y con los mejores profesionales del sector en cirugía de rinoplastia para obtener los mejores resultados."]}
      />

      <Question
        question="¿COMO ES EL PROCEDIMIENTO DE UNA RINOPLASTIA?"
        answer={["La rinoplastia es una de las cirugías estéticas más complicadas de realizar, es por ello que el profesional ha de ser excepcional. El tiempo de duración de la cirugía oscila entre las 2 a las 3 horas.",
          "Primero se realiza unas incisiones. La rinoplastia puede ser cerrada (cuando se realiza a través de incisiones por dentro de la nariz, por lo cual la cicatriz es invisible a la vista) o abierta (retirando piel o tejido de la nariz).",
          "Posteriormente se accede con instrumentos quirúrgicos para modificar la estructura nasal y, finalmente, el cartílago y/o el hueso se eliminan parcialmente para remodelar el conjunto de la nariz."]}
      />
      <Question
        question="TIPOS DE RINOPLASTIA"
        answer={["Existen distintas formas de agrupar la cirugía de rinoplastia.",
          "Por un lado diferenciamos entre la rinoplastia funcional o la rinoplastia estetica.",
          "La rinoplastia funcional se da en aquellas personas que tienen dificultades para respirar derivado de la morfología de su nariz.",
          "La rinoplastia estética cuya finalidad es meramente estética.",
          "Por otro lado la cirugía de rinoplastia puede ser parcial o completa.",
          "Rinoplastia parcial: Es cuando se modifica la arquitectura de la punta o dorso de la nariz. En este caso el o la paciente no busca un cambio radical sino mejorar una zona concreta. El tiempo de la cirugía y por tanto la dificultad de esta cirugía es menor.",
          "Rinoplastia completa: En esta cirugía se modifica al completo la estructura y forma de la nariz; como el estrechamiento de la base de la nariz, afinar la punta, eliminar o reducir el caballete o acortar la longitud de la nariz , para así obtener un resultado óptimo minimizando y optimizando el postoperatorio."
        ]}
      />

      <Question
        question="RECUPERACION Y POSTOPERATORIO"
        answer={["El paciente podrá volver a sus actividades cotidianas en aproximadamente dos días después de la intervención, y reincorporarse a la actividad laboral en un tiempo aproximado de 1 semana en la mayoría de los casos.",
          "Durante las primeras 48 horas el paciente deberá llevar una férula y unos tapones para que el tabique nasal se mantenga estable. Los tapones se les retirará en 2 días y la escayola será sustituida por una tirita en una semana.",
          "Los resultados dependerán mucho del compromiso del paciente, es decir, deberá seguir extrictamente las indicaciones del medico cirujano y seguir los cuidados indicados para obtener resultados plenamente satisfactorios."
        ]}
      />
    </div>
  );
};

export default Home;
