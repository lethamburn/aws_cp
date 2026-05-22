const TRUCOS = [
  {
    id: "tr1",
    icon: "⏱️",
    titulo: "Gestión del Tiempo en el Examen",
    subtitulo: "90 minutos · 65 preguntas · Estrategia de 3 pasadas",
    items: [
      {
        tipo: "lista",
        titulo: "Distribución del Tiempo",
        puntos: [
          "<strong>Primera pasada (45-50 min):</strong> Responde todo lo que sabes. Marca las difíciles y sigue.",
          "<strong>Segunda pasada (25-30 min):</strong> Vuelve a las marcadas. Una perspectiva fresca suele ayudar.",
          "<strong>Revisión final (10-15 min):</strong> Verifica que no hay preguntas sin responder. Confía en tu primer instinto.",
          "<strong>Ritmo objetivo:</strong> 1 minuto por pregunta + 25 minutos de revisión.",
          "<strong>NUNCA dejes preguntas en blanco.</strong> No hay penalización. Una respuesta al azar vale más que nada."
        ]
      }
    ]
  },
  {
    id: "tr2",
    icon: "🎯",
    titulo: "El Método PIER para Responder",
    subtitulo: "Analizar → Identificar → Eliminar → Razonar",
    items: [
      {
        tipo: "lista",
        titulo: "Los 4 Pasos PIER",
        puntos: [
          "<strong>P — Analizar (Parse):</strong> ¿Cuál es el escenario? ¿Qué problema hay? Busca las palabras clave: 'menor costo', 'sin servidor', 'global', 'tiempo real', 'datos históricos'.",
          "<strong>I — Identificar el Dominio:</strong> ¿Es pregunta de cómputo, almacenamiento, seguridad o facturación? Esto reduce inmediatamente las opciones.",
          "<strong>E — Eliminar incorrectas:</strong> Tacha las que no cuadran. Si puedes eliminar 2 opciones, ya tienes 50% de probabilidad.",
          "<strong>R — Razonar:</strong> Compara las opciones restantes. Elige la que cumple TODOS los requisitos, especialmente los de coste y simplicidad."
        ]
      }
    ]
  },
  {
    id: "tr3",
    icon: "🧠",
    titulo: "Mnemónicos para Memorizar",
    subtitulo: "Acrónimos y asociaciones que funcionan",
    items: [
      {
        tipo: "mnemonic",
        titulo: "Pilares del Well-Architected Framework",
        letras: "CROPS-S",
        definiciones: [
          { letra: "C", texto: "Coste Optimización" },
          { letra: "R", texto: "Reliability (Fiabilidad)" },
          { letra: "O", texto: "Operational Excellence (Excelencia Operativa)" },
          { letra: "P", texto: "Performance Efficiency (Eficiencia de Rendimiento)" },
          { letra: "S", texto: "Security (Seguridad)" },
          { letra: "S", texto: "Sustainability (Sostenibilidad)" }
        ]
      },
      {
        tipo: "mnemonic",
        titulo: "Mejores Prácticas IAM",
        letras: "PURGE",
        definiciones: [
          { letra: "P", texto: "Principio de mínimo privilegio" },
          { letra: "U", texto: "Usar roles para aplicaciones" },
          { letra: "R", texto: "Rotar credenciales" },
          { letra: "G", texto: "Grupos para organizar usuarios" },
          { letra: "E", texto: "Enablear MFA siempre" }
        ]
      },
      {
        tipo: "mnemonic",
        titulo: "Características de la Nube",
        letras: "POEMS",
        definiciones: [
          { letra: "P", texto: "Pago por uso" },
          { letra: "O", texto: "On-demand self-service" },
          { letra: "E", texto: "Elasticidad" },
          { letra: "M", texto: "Medición del servicio" },
          { letra: "S", texto: "Servicio amplio en la red" }
        ]
      }
    ]
  },
  {
    id: "tr4",
    icon: "⚠️",
    titulo: "Servicios que se Confunden",
    subtitulo: "Los pares más frecuentes en el examen",
    confusiones: [
      {
        a: { nombre: "CloudWatch", def: "Monitoreo de RENDIMIENTO. Métricas, logs de aplicación, alarmas, paneles. ¿Cuánta CPU usa mi instancia?" },
        b: { nombre: "CloudTrail", def: "Auditoría de SEGURIDAD. Registra llamadas a la API. ¿Quién borró ese recurso y cuándo?" }
      },
      {
        a: { nombre: "Grupos de Seguridad", def: "Firewall a nivel de INSTANCIA. Con estado (stateful): el tráfico de respuesta se permite automáticamente. Solo reglas Allow." },
        b: { nombre: "NACLs", def: "Firewall a nivel de SUBRED. Sin estado (stateless): hay que crear reglas de entrada Y salida. Reglas Allow y Deny." }
      },
      {
        a: { nombre: "AWS Shield", def: "Protección contra ataques DDoS (volumétricos, de red). Shield Standard es gratis para todos." },
        b: { nombre: "AWS WAF", def: "Web Application Firewall. Filtra tráfico web malicioso: SQL injection, XSS, bots. Opera a nivel de aplicación (capa 7)." }
      },
      {
        a: { nombre: "IAM", def: "Gestiona acceso dentro de UNA cuenta AWS: usuarios, grupos, roles, políticas." },
        b: { nombre: "AWS Organizations", def: "Gestiona y gobierna MÚLTIPLES cuentas AWS. Facturación consolidada, SCPs." }
      },
      {
        a: { nombre: "Multi-AZ (RDS)", def: "Alta disponibilidad: réplica síncrona en otra AZ. Failover automático si la primaria falla. NO mejora el rendimiento." },
        b: { nombre: "Réplica de Lectura (RDS)", def: "Escalado de rendimiento: réplica asíncrona para distribuir lecturas. NO hace failover automático." }
      },
      {
        a: { nombre: "Amazon EBS", def: "Almacenamiento de BLOQUES. Solo una instancia EC2 puede acceder (por defecto). Persistente, como un disco duro." },
        b: { nombre: "Amazon EFS", def: "Almacenamiento de ARCHIVOS. MÚLTIPLES instancias EC2 pueden acceder simultáneamente. Sistema de archivos compartido." }
      },
      {
        a: { nombre: "Instancia Reservada", def: "Compromiso de 1 o 3 años. Para cargas de trabajo ESTABLES y predecibles. No puede interrumpirse." },
        b: { nombre: "Instancia Spot", def: "Capacidad de reserva de AWS. Hasta 90% de descuento. PUEDE interrumpirse con 2 min de aviso." }
      },
      {
        a: { nombre: "Amazon SQS", def: "Cola de mensajes. Los consumidores LEEN activamente la cola. Garantiza entrega aunque los sistemas fallen." },
        b: { nombre: "Amazon SNS", def: "Notificaciones push. El publicador ENVÍA a múltiples suscriptores de una vez (email, SMS, Lambda, SQS)." }
      }
    ]
  },
  {
    id: "tr5",
    icon: "🗺️",
    titulo: "Mapa Rápido: ¿Qué Servicio Usar?",
    subtitulo: "Escenario → Servicio correcto de forma inmediata",
    items: [
      {
        tipo: "lista",
        titulo: "Cómputo",
        puntos: [
          "Necesito un servidor virtual con control total → <strong>Amazon EC2</strong>",
          "Código en respuesta a eventos, sin servidores → <strong>AWS Lambda</strong>",
          "Ejecutar contenedores Docker sin gestionar servidores → <strong>ECS + Fargate</strong>",
          "Necesito Kubernetes gestionado → <strong>Amazon EKS</strong>",
          "Desplegar una app web rápidamente sin pensar en infraestructura → <strong>Elastic Beanstalk</strong>",
          "Trabajos de procesamiento por lotes (batch) → <strong>AWS Batch</strong>"
        ]
      },
      {
        tipo: "lista",
        titulo: "Almacenamiento",
        puntos: [
          "Guardar archivos, imágenes, vídeos a cualquier escala → <strong>Amazon S3</strong>",
          "Disco duro para mi instancia EC2 → <strong>Amazon EBS</strong>",
          "Sistema de archivos compartido entre varias EC2 → <strong>Amazon EFS</strong>",
          "Archivo a largo plazo, acceso muy raro → <strong>S3 Glacier Deep Archive</strong>",
          "Transferir terabytes de datos a AWS sin internet → <strong>AWS Snowball</strong>"
        ]
      },
      {
        tipo: "lista",
        titulo: "Seguridad",
        puntos: [
          "Detectar amenazas automáticamente → <strong>Amazon GuardDuty</strong>",
          "Auditar quién hizo qué en mi cuenta → <strong>AWS CloudTrail</strong>",
          "Proteger mi app web de SQL injection → <strong>AWS WAF</strong>",
          "Proteger contra ataques DDoS → <strong>AWS Shield</strong>",
          "Gestionar claves de cifrado → <strong>AWS KMS</strong>",
          "Ver informes de cumplimiento (SOC, ISO, PCI) → <strong>AWS Artifact</strong>"
        ]
      },
      {
        tipo: "lista",
        titulo: "Costos y Soporte",
        puntos: [
          "Ver y analizar mi factura mes a mes → <strong>AWS Cost Explorer</strong>",
          "Recibir alerta si supero €500 al mes → <strong>AWS Budgets</strong>",
          "Estimar cuánto costará antes de crear recursos → <strong>Calculadora de Precios AWS</strong>",
          "Obtener recomendaciones automáticas de optimización → <strong>AWS Trusted Advisor</strong>",
          "Gestor de cuenta dedicado para Enterprise → <strong>Technical Account Manager (TAM)</strong>"
        ]
      }
    ]
  },
  {
    id: "tr6",
    icon: "🔍",
    titulo: "Pistas en el Enunciado de las Preguntas",
    subtitulo: "Palabras clave que revelan la respuesta correcta",
    items: [
      {
        tipo: "lista",
        titulo: "Palabras que apuntan a una respuesta",
        puntos: [
          "<strong>'Sin servidor' / 'serverless'</strong> → Lambda, Fargate, DynamoDB, Aurora Serverless",
          "<strong>'Menor costo' + sin interrupciones + largo plazo</strong> → Instancias Reservadas",
          "<strong>'Menor costo' + interrupciones aceptables</strong> → Instancias Spot",
          "<strong>'Tiempo real' / 'streaming'</strong> → Amazon Kinesis",
          "<strong>'Global' / 'baja latencia para usuarios en todo el mundo'</strong> → CloudFront + Edge Locations",
          "<strong>'Auditar' / 'quién hizo qué'</strong> → AWS CloudTrail",
          "<strong>'Monitorear rendimiento' / 'métricas'</strong> → Amazon CloudWatch",
          "<strong>'Escala automáticamente' / 'alta disponibilidad'</strong> → Auto Scaling + Multi-AZ",
          "<strong>'Desacoplar' / 'cola de mensajes'</strong> → Amazon SQS",
          "<strong>'Notificaciones a múltiples'</strong> → Amazon SNS",
          "<strong>'Datos no estructurados' / 'clave-valor'</strong> → Amazon DynamoDB",
          "<strong>'Datos relacionales' / 'SQL'</strong> → Amazon RDS o Aurora",
          "<strong>'Análisis de grandes volúmenes' / 'data warehouse'</strong> → Amazon Redshift",
          "<strong>'Conectar on-premises con AWS' + 'dedicado'</strong> → AWS Direct Connect",
          "<strong>'Conectar on-premises con AWS' + 'rápido y económico'</strong> → AWS VPN"
        ]
      },
      {
        tipo: "lista",
        titulo: "Lo que suele ser incorrecto",
        puntos: [
          "Respuestas con términos absolutos: 'siempre', 'nunca', 'todo'. La nube rara vez tiene absolutismos.",
          "Soluciones excesivamente complejas para problemas simples.",
          "Opciones que rompen buenas prácticas de seguridad (acceso root, credenciales hardcoded).",
          "Gestionar infraestructura manualmente cuando hay un servicio gestionado equivalente.",
          "Opciones que ignoran la optimización de costos cuando se pide la 'más eficiente en costos'."
        ]
      }
    ]
  },
  {
    id: "tr7",
    icon: "📅",
    titulo: "Plan de Estudio — Última Semana",
    subtitulo: "7 días antes del examen: qué hacer y qué evitar",
    items: [
      {
        tipo: "lista",
        titulo: "7 días antes",
        puntos: [
          "Haz tu último simulacro completo en condiciones reales (cronometrado).",
          "Identifica los dominios donde sacas menos nota y dedícales tiempo extra.",
          "Crea tu hoja de trucos personal con lo que más se te olvida."
        ]
      },
      {
        tipo: "lista",
        titulo: "3 días antes",
        puntos: [
          "Solo repaso ligero. No estudies material nuevo intensivamente.",
          "Enfócate en lo que ya sabes para ganar confianza.",
          "Revisa la logística: hora del examen, centro de pruebas, documentación necesaria."
        ]
      },
      {
        tipo: "lista",
        titulo: "1 día antes",
        puntos: [
          "NO estudiar. Descansa y relájate.",
          "Prepara los materiales para el día del examen (ID oficial).",
          "Duerme 8+ horas. El descanso es más valioso que estudiar de madrugada."
        ]
      },
      {
        tipo: "lista",
        titulo: "El día del examen",
        puntos: [
          "Llega 30 minutos antes al centro de pruebas.",
          "Desayuna bien pero no pesado.",
          "Ropa cómoda, en capas (la temperatura de los centros varía).",
          "Respira hondo antes de empezar. Estás preparado."
        ]
      }
    ]
  },
  {
    id: "tr8",
    icon: "✅",
    titulo: "Indicadores de que Estás Listo",
    subtitulo: "Para cuando te preguntes: ¿debo ya presentarme?",
    items: [
      {
        tipo: "lista",
        titulo: "Señales de que estás preparado",
        puntos: [
          "✅ Sacas consistentemente <strong>80% o más</strong> en los simulacros.",
          "✅ Puedes explicar los servicios clave con tus propias palabras.",
          "✅ Te sientes cómodo eligiendo entre servicios similares según el contexto.",
          "✅ Entiendes el 'por qué' de cada servicio, no solo 'qué hace'.",
          "✅ Distingues sin dudar: CloudWatch vs CloudTrail, SQS vs SNS, EBS vs EFS."
        ]
      },
      {
        tipo: "lista",
        titulo: "Señales de que necesitas más estudio",
        puntos: [
          "❌ Sacas menos del 75% en simulacros.",
          "❌ Confundes servicios similares con frecuencia.",
          "❌ Memorizas nombres sin entender para qué sirven.",
          "❌ No recuerdas las diferencias entre los planes de soporte.",
          "❌ Dudas sobre quién es responsable de qué en el Modelo de Responsabilidad Compartida."
        ]
      }
    ]
  }
];
