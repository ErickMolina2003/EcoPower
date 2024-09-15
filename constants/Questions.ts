import { Question } from "./types";

export const QUESTIONS: Question[] = [
    {
        question: "¿Qué es un panel fotovoltaico?",
        answers: [
            { option: "a", text: "Un dispositivo que convierte la luz solar en electricidad", isCorrect: true },
            { option: "b", text: "Un panel que calienta agua usando energía solar", isCorrect: false },
            { option: "c", text: "Un dispositivo que almacena energía solar", isCorrect: false },
            { option: "d", text: "Un espejo que concentra la luz solar", isCorrect: false }
        ]
    },
    {
        question: "¿Cuál es la principal ventaja de la energía solar?",
        answers: [
            { option: "a", text: "Es muy barata de instalar", isCorrect: false },
            { option: "b", text: "Es una fuente de energía inagotable y limpia", isCorrect: true },
            { option: "c", text: "Funciona mejor en climas fríos", isCorrect: false },
            { option: "d", text: "No requiere mantenimiento", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es un colector solar térmico?",
        answers: [
            { option: "a", text: "Un dispositivo que convierte luz solar en electricidad", isCorrect: false },
            { option: "b", text: "Un panel que calienta agua usando energía solar", isCorrect: true },
            { option: "c", text: "Un dispositivo que almacena energía solar", isCorrect: false },
            { option: "d", text: "Un espejo que concentra la luz solar", isCorrect: false }
        ]
    },
    {
        question: "¿Qué país tiene la mayor capacidad instalada de energía solar?",
        answers: [
            { option: "a", text: "Estados Unidos", isCorrect: false },
            { option: "b", text: "China", isCorrect: true },
            { option: "c", text: "Alemania", isCorrect: false },
            { option: "d", text: "India", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es la irradiancia solar?",
        answers: [
            { option: "a", text: "La cantidad de energía solar recibida por unidad de área", isCorrect: true },
            { option: "b", text: "La eficiencia de un panel solar", isCorrect: false },
            { option: "c", text: "El ángulo de incidencia de la luz solar", isCorrect: false },
            { option: "d", text: "La capacidad de almacenamiento de energía solar", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es un aerogenerador?",
        answers: [
            { option: "a", text: "Un dispositivo que convierte energía eólica en electricidad", isCorrect: true },
            { option: "b", text: "Una máquina que genera viento", isCorrect: false },
            { option: "c", text: "Un dispositivo que mide la velocidad del viento", isCorrect: false },
            { option: "d", text: "Un motor que funciona con viento", isCorrect: false }
        ]
    },
    {
        question: "¿Cuál es el componente principal de un aerogenerador?",
        answers: [
            { option: "a", text: "El rotor", isCorrect: true },
            { option: "b", text: "La base", isCorrect: false },
            { option: "c", text: "El cableado", isCorrect: false },
            { option: "d", text: "El inversor", isCorrect: false }
        ]
    },
    {
        question: "¿Dónde se encuentran la mayoría de los parques eólicos?",
        answers: [
            { option: "a", text: "En áreas urbanas", isCorrect: false },
            { option: "b", text: "En zonas costeras y áreas rurales", isCorrect: true },
            { option: "c", text: "En bosques", isCorrect: false },
            { option: "d", text: "En desiertos", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es la energía eólica offshore?",
        answers: [
            { option: "a", text: "Energía eólica generada en tierra", isCorrect: false },
            { option: "b", text: "Energía eólica generada en el mar", isCorrect: true },
            { option: "c", text: "Energía eólica generada en altitudes elevadas", isCorrect: false },
            { option: "d", text: "Energía eólica generada cerca de ríos", isCorrect: false }
        ]
    },
    {
        question: "¿Qué país es el mayor productor de energía eólica?",
        answers: [
            { option: "a", text: "Dinamarca", isCorrect: false },
            { option: "b", text: "Estados Unidos", isCorrect: false },
            { option: "c", text: "China", isCorrect: true },
            { option: "d", text: "Alemania", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es una central hidroeléctrica?",
        answers: [
            { option: "a", text: "Una planta que genera electricidad a partir del agua en movimiento", isCorrect: true },
            { option: "b", text: "Una planta que almacena energía", isCorrect: false },
            { option: "c", text: "Una planta que usa energía solar para generar electricidad", isCorrect: false },
            { option: "d", text: "Una planta que genera electricidad a partir del viento", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es un embalse?",
        answers: [
            { option: "a", text: "Un lago artificial para almacenar agua", isCorrect: true },
            { option: "b", text: "Un dispositivo que mide la cantidad de agua", isCorrect: false },
            { option: "c", text: "Un tipo de generador eléctrico", isCorrect: false },
            { option: "d", text: "Un mecanismo de control de velocidad de turbina", isCorrect: false }
        ]
    },
    {
        question: "¿Cuál es la mayor planta hidroeléctrica del mundo?",
        answers: [
            { option: "a", text: "Represa de las Tres Gargantas en China", isCorrect: true },
            { option: "b", text: "Represa de Itaipú en Brasil/Paraguay", isCorrect: false },
            { option: "c", text: "Hoover Dam en Estados Unidos", isCorrect: false },
            { option: "d", text: "Represa de Guri en Venezuela", isCorrect: false }
        ]
    },
    {
        question: "¿Qué efecto tiene la energía hidroeléctrica en el medio ambiente?",
        answers: [
            { option: "a", text: "Ningún efecto", isCorrect: false },
            { option: "b", text: "Impactos menores que otras fuentes de energía", isCorrect: false },
            { option: "c", text: "Puede causar desplazamiento de comunidades y cambios en ecosistemas", isCorrect: true },
            { option: "d", text: "Solo efectos positivos", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es una mini central hidroeléctrica?",
        answers: [
            { option: "a", text: "Una planta hidroeléctrica pequeña con baja capacidad de generación", isCorrect: true },
            { option: "b", text: "Un generador portátil", isCorrect: false },
            { option: "c", text: "Un tipo de panel solar", isCorrect: false },
            { option: "d", text: "Un dispositivo de almacenamiento de agua", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es la energía geotérmica?",
        answers: [
            { option: "a", text: "Energía obtenida del calor interno de la Tierra", isCorrect: true },
            { option: "b", text: "Energía obtenida del sol", isCorrect: false },
            { option: "c", text: "Energía obtenida del viento", isCorrect: false },
            { option: "d", text: "Energía obtenida de la biomasa", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es una planta geotérmica?",
        answers: [
            { option: "a", text: "Una planta que genera electricidad usando el calor del subsuelo", isCorrect: true },
            { option: "b", text: "Una planta que genera electricidad usando la luz solar", isCorrect: false },
            { option: "c", text: "Una planta que genera electricidad usando la energía eólica", isCorrect: false },
            { option: "d", text: "Una planta que genera electricidad usando el agua", isCorrect: false }
        ]
    },
    {
        question: "¿En qué tipo de regiones es más viable la energía geotérmica?",
        answers: [
            { option: "a", text: "Regiones costeras", isCorrect: false },
            { option: "b", text: "Regiones con actividad volcánica y termal", isCorrect: true },
            { option: "c", text: "Regiones desérticas", isCorrect: false },
            { option: "d", text: "Regiones polares", isCorrect: false }
        ]
    },
    {
        question: "¿Cuál es la principal ventaja de la energía geotérmica?",
        answers: [
            { option: "a", text: "No requiere de combustibles fósiles", isCorrect: true },
            { option: "b", text: "Es fácil de instalar en cualquier lugar", isCorrect: false },
            { option: "c", text: "Es la fuente de energía más barata", isCorrect: false },
            { option: "d", text: "No necesita mantenimiento", isCorrect: false }
        ]
    },
    {
        question: "¿Qué país utiliza más energía geotérmica?",
        answers: [
            { option: "a", text: "Japón", isCorrect: false },
            { option: "b", text: "Estados Unidos", isCorrect: false },
            { option: "c", text: "Islandia", isCorrect: true },
            { option: "d", text: "Nueva Zelanda", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es la biomasa?",
        answers: [
            { option: "a", text: "Materia orgánica utilizada como fuente de energía", isCorrect: true },
            { option: "b", text: "Residuos nucleares reciclados", isCorrect: false },
            { option: "c", text: "Energía obtenida del viento", isCorrect: false },
            { option: "d", text: "Energía obtenida del agua", isCorrect: false }
        ]
    },
    {
        question: "¿Qué tipos de materiales se usan como biomasa?",
        answers: [
            { option: "a", text: "Combustibles fósiles", isCorrect: false },
            { option: "b", text: "Plantas, residuos agrícolas, madera, y residuos animales", isCorrect: true },
            { option: "c", text: "Plástico y vidrio reciclado", isCorrect: false },
            { option: "d", text: "Metales y minerales", isCorrect: false }
        ]
    },
    {
        question: "¿Cuál es la principal desventaja de la biomasa?",
        answers: [
            { option: "a", text: "Es muy costosa", isCorrect: false },
            { option: "b", text: "Puede generar emisiones si no se gestiona adecuadamente", isCorrect: true },
            { option: "c", text: "Es difícil de encontrar", isCorrect: false },
            { option: "d", text: "No es renovable", isCorrect: false }
        ]
    },
    {
        question: "¿Qué es el biogás?",
        answers: [
            { option: "a", text: "Gas producido por la descomposición de materia orgánica en ausencia de oxígeno", isCorrect: true },
            { option: "b", text: "Gas natural refinado", isCorrect: false },
            { option: "c", text: "Gas producido por la combustión de carbón", isCorrect: false },
            { option: "d", text: "Gas utilizado en paneles solares", isCorrect: false }
        ]
    },
    {
        question: "¿Qué país es líder en el uso de biomasa para energía?",
        answers: [
            { option: "a", text: "Estados Unidos", isCorrect: false },
            { option: "b", text: "Brasil", isCorrect: true },
            { option: "c", text: "Alemania", isCorrect: false },
            { option: "d", text: "Japón", isCorrect: false }
        ]
    },

];