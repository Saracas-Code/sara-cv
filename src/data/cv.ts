const cvData = [
    {
        type: "personal",
        id: "personal",
        name: "Sara Castro López",
        title: "Ingeniera informática",
        email: "saracas04@gmail.com",
        phone: "+34 693757475",
        location: "Santiago de Compostela, España",
        links: {
        linkedin: "LinkedIn",
        github: "GitHub"
        }
    },

    {
        type: "profile",
        id: "profile",
        summary:
        "Estudiante de último curso de Ingeniería Informática interesada en desarrollo web, IA y datos.",
        content:
        "Estudiante de último curso de Ingeniería Informática en la Universidade de Santiago de Compostela. Me interesa un espectro amplio de la informática, desde el desarrollo de aplicaciones web hasta el trabajo con datos e inteligencia artificial. Busco proyectos donde combinar una base técnica sólida con aprendizaje continuo."
    },

    {
        type: "skills",
        id: "skills-tech",
        category: "programming",
        summary: ["React", "Python", "SQL", "Docker"],
        items: ["C", "C++", "Python", "Java", "React (JS/TS)", "SQL", "NoSQL", "Docker"]
    },

    {
        type: "skills",
        id: "skills-soft",
        category: "soft",
        summary: ["Trabajo en equipo", "Pensamiento crítico"],
        items: [
        "Resolución de problemas",
        "Pensamiento crítico",
        "Trabajo en equipo",
        "Adaptabilidad",
        "Flexibilidad"
        ]
    },

    {
        type: "languages",
        id: "languages",
        items: [
        { language: "Español", level: "Lengua materna" },
        { language: "Gallego", level: "Lengua materna" },
        { language: "Inglés", level: "Cambridge B2" },
        { language: "Francés", level: "DALF C1" }
        ]
    },

    {
        type: "education",
        id: "usc",
        degree: "Ingeniería Informática",
        institution: "Universidade de Santiago de Compostela",
        period: "09/2022 – actualidad",
        summary: "Grado en Ingeniería Informática (4º curso).",
        content: {
        details:
            "Actualmente cursando el cuarto año del grado en Ingeniería Informática.",
        focus: [
            "Bases de datos",
            "Ingeniería del software",
            "IA",
            "Sistemas"
        ],
        status: "Finalización prevista en 2026"
        }
    },

    {
        type: "education",
        id: "sorbonne",
        degree: "Licence d'informatique",
        institution: "Sorbonne Université",
        period: "09/2024 – 06/2025",
        summary: "Estancia Erasmus en París.",
        content: {
        details:
            "Estancia académica de un año en Sorbonne Université mediante el programa Erasmus+.",
        location: "París, Francia",
        focus: ["Programación", "Teoría", "Entorno internacional"]
        }
    },

    {
        type: "experience",
        id: "citius",
        role: "Contrato de investigación a tiempo parcial",
        organization: "CiTIUS-USC",
        period: "2023 – actualidad",
        location: "Santiago de Compostela, España",
        summary: "Trabajo con datasets y modelos BERT para clasificación.",
        content: {
        context: "Contrato de investigación en el CiTIUS.",
        tasks: [
            "Integración y limpieza de datasets",
            "Evaluación de representaciones sparse y densas",
            "Uso de modelos BERT para clasificación",
            "Estudio de técnicas de aumentación sintética"
        ],
        technologies: ["Python", "PyTorch", "Transformers", "Pandas"],
        learning:
            "Introducción al trabajo de investigación aplicada y análisis experimental."
        }
    },

    {
        type: "experience",
        id: "gdg",
        role: "Organizadora de eventos",
        organization: "GDG Santiago de Compostela",
        period: "2023 – actualidad",
        location: "Santiago de Compostela, España",
        summary: "Organización y difusión de eventos tecnológicos.",
        content: {
        tasks: [
            "Contacto con ponentes",
            "Gestión logística",
            "Comunicación en redes sociales"
        ],
        skills: ["Comunicación", "Organización", "Trabajo en equipo"]
        }
    },

    {
        type: "project",
        id: "foro-web",
        title: "Aplicación web de foros",
        summary: "Aplicación web fullstack para una comunidad.",
        content: {
        description:
            "Aplicación web completa con autenticación, mensajería, perfiles de usuario, búsqueda y área de administración.",
        role: "Fullstack",
        architecture: "Frontend + backend REST + base de datos",
        technologies: ["React", "Node.js", "MongoDB"],
        learning:
            "Diseño de aplicaciones web completas y gestión de usuarios."
        }
    },

    {
        type: "project",
        id: "ia-evolutiva",
        title: "Proyecto de IA evolutiva",
        summary: "Optimización de controladores mediante algoritmos genéticos.",
        content: {
        description:
            "Creación de controladores de robots y optimización automática de parámetros mediante algoritmos genéticos.",
        details: [
            "Aprendizaje de políticas de movimiento",
            "Entrenamiento en múltiples arenas",
            "Análisis de resultados"
        ],
        technologies: ["Python", "Algoritmos genéticos", "IA evolutiva"]
        }
    },

    {
        type: "interests",
        id: "interests",
        items: [
        {
            name: "Kárate",
            summary: "Cinturón negro",
            details: "Práctica desde los 6 años."
        },
        {
            name: "Música",
            summary: "Piano",
            details:
            "Más de 10 años de formación en conservatorio. Conciertos y eventos."
        }
        ]
    },

    {
        type: "other",
        id: "other",
        items: ["Permiso de conducir"]
    }
];

export default cvData;
