export const medicalServices = [
  {
    title: 'Valoración inicial',
    description: 'Conversamos sobre tus síntomas, antecedentes y motivo de consulta.',
    detail: 'Trae estudios previos y una lista de medicamentos, si cuentas con ellos.',
    cta: 'Preparar mi consulta'
  },
  {
    title: 'Evaluación y opciones',
    description: 'Se revisa tu caso y se explican las opciones más adecuadas para ti.',
    detail: 'Los estudios se indican solo cuando son necesarios para tu evaluación.',
    cta: 'Resolver una duda'
  },
  {
    title: 'Plan individual',
    description: 'Si se considera una intervención, se explica el procedimiento, riesgos, beneficios, cuidados pre y postoperatorios.',
    detail: 'La cirugía no es necesaria para todos los padecimientos.',
    cta: 'Consultar opciones'
  },
  {
    title: 'Seguimiento',
    description: 'Se revisa la evolución y se aclaran los siguientes pasos de atención.',
    detail: 'Las recomendaciones se adaptan a cada paciente y situación.',
    cta: 'Solicitar información'
  }
];

export const diseaseFocus = [
  {
    title: 'Hernias abdominales',
    summary: 'Evaluación para dolor, protrusión o abultamientos en la pared abdominal.',
    note: 'Se requiere valoración médica para definir si la conducta es observación, tratamiento conservador o intervención.',
    confirmed: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Profesional de salud durante una consulta médica',
    cta: 'Solicitar evaluación'
  },
  {
    title: 'Colelitiasis',
    summary: 'Consulta para síntomas relacionados con cálculos biliares y dolor abdominal.',
    note: 'La conducta depende de la sintomatología, la evolución y la evaluación clínica.',
    confirmed: false,
    cta: 'Confirmar atención'
  },
  {
    title: 'Dolor abdominal recurrente',
    summary: 'Valoración de molestias persistentes, recurrentes o con evolución no clara.',
    note: 'Es clave distinguir causas funcionales, inflamatorias o quirúrgicas con una evaluación integral.',
    confirmed: true,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Atención y valoración médica en consultorio',
    cta: 'Verificar caso'
  },
  {
    title: 'Patología de la pared abdominal',
    summary: 'Atención para condiciones que afectan la pared o la zona abdominal.',
    note: 'La necesidad de intervención debe confirmarse con la historia clínica y la exploración.',
    confirmed: false,
    cta: 'Solicitar información'
  }
];

export const proceduralFocus = [
  {
    title: 'Cirugía general',
    summary: 'Atención para condiciones que requieren valoración quirúrgica y manejo integral.',
    note: 'Se define según el caso clínico y la recomendación médica.',
    confirmed: true,
    cta: 'Consultar caso'
  },
  {
    title: 'Laparoscopia diagnóstica',
    summary: 'Valoración de procedimientos mínimamente invasivos cuando resultan adecuados para la situación del paciente.',
    note: 'La elección técnica depende del diagnóstico, la anatomía y la evolución.',
    confirmed: false,
    cta: 'Confirmar indicación'
  },
  {
    title: 'Seguimiento quirúrgico',
    summary: 'Control posterior para revisión de evolución, recuperación y manejo posterior a la intervención.',
    note: 'Los cuidados y el tiempo de recuperación deben adaptarse al procedimiento y al paciente.',
    confirmed: true,
    cta: 'Agendar seguimiento'
  }
];

export const mythReality = [
  {
    title: 'Todo dolor abdominal requiere cirugía',
    reality: 'No siempre. Muchos casos requieren seguimiento, estudio y tratamiento médico antes de definir una intervención.',
    confirmed: true
  },
  {
    title: 'La laparoscopia siempre es la mejor opción',
    reality: 'Depende del caso. La mejor técnica se elige según la condición, la evolución y el criterio clínico.',
    confirmed: true
  },
  {
    title: 'La primera consulta resuelve todo',
    reality: 'La primera visita permite orientar la historia clínica, pero en muchos casos es necesaria más valoración o estudios.',
    confirmed: true
  }
];

export const insuranceCoverage = [
  {
    name: 'Mediproses',
    status: 'Verificar denominación y condiciones aplicables',
    highlight: 'Pendiente de validación comercial y documental.',
    confirmed: false
  },
  {
    name: 'Aseguradoras privadas',
    status: 'Consultar directamente',
    highlight: 'La cobertura puede variar según plan, servicio y autorización.',
    confirmed: false
  },
  {
    name: 'Atención privada',
    status: '',
    highlight: 'Consulta opciones y costos directamente con el consultorio.',
    confirmed: true
  }
];

export const faqItems = [
  {
    question: '¿Cómo puedo solicitar una consulta?',
    answer: 'Puedes comunicarte por teléfono o WhatsApp para recibir orientación sobre disponibilidad, tipo de consulta y próximos pasos.'
  },
  {
    question: '¿Se puede recibir información previa a un procedimiento?',
    answer: 'Sí, la atención se orienta a dar información clara sobre el proceso, la evaluación médica y las consideraciones que deben revisarse de forma personalizada.'
  },
  {
    question: '¿Qué pasa si necesito una segunda opinión?',
    answer: 'La valoración clínica y la explicación del panorama pueden ser útiles para tomar decisiones informadas junto con otros profesionales de la salud.'
  },
  {
    question: '¿El consultorio acepta seguros o financiamiento?',
    answer: 'La cobertura depende de las condiciones de cada póliza y de la autorización correspondiente. Puedes consultar opciones de financiamiento en el perfil de MEND.'
  }
];
