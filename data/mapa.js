const MAPA = [
  {
    id: "d1",
    clase: "d1",
    icon: "☁️",
    nombre: "Conceptos de la Nube",
    pct: "24%",
    categorias: [
      {
        id: "c1-1",
        icon: "📖",
        nombre: "Definición y Características",
        servicios: [
          { nombre: "Computación en la Nube", desc: "Entrega bajo demanda de TI con pago por uso" },
          { nombre: "5 Características NIST", desc: "Autoservicio, red, agrupación, elasticidad, medición" },
          { nombre: "CapEx vs OpEx", desc: "De inversión inicial a gasto operativo" },
          { nombre: "Economías de Escala", desc: "AWS compra en volumen → precios más bajos" }
        ]
      },
      {
        id: "c1-2",
        icon: "🌍",
        nombre: "Infraestructura Global",
        servicios: [
          { nombre: "Regiones (+30)", desc: "Áreas geográficas con múltiples AZs" },
          { nombre: "Zonas de Disponibilidad (+90)", desc: "Centros de datos aislados dentro de una Región" },
          { nombre: "Edge Locations (+400)", desc: "CDN y DNS más cercano al usuario" },
          { nombre: "AWS Outposts", desc: "AWS en tus propias instalaciones" },
          { nombre: "AWS Local Zones", desc: "Infraestructura cerca de ciudades grandes" },
          { nombre: "AWS Wavelength", desc: "Cómputo en redes 5G" }
        ]
      },
      {
        id: "c1-3",
        icon: "🏗️",
        nombre: "Modelos de Despliegue y Servicio",
        servicios: [
          { nombre: "IaaS", desc: "Infraestructura como Servicio — EC2" },
          { nombre: "PaaS", desc: "Plataforma como Servicio — Elastic Beanstalk" },
          { nombre: "SaaS", desc: "Software como Servicio — Gmail, Salesforce" },
          { nombre: "Nube Pública", desc: "Recursos compartidos entre clientes" },
          { nombre: "Nube Privada", desc: "Solo para una organización" },
          { nombre: "Nube Híbrida", desc: "On-premises + nube pública" }
        ]
      },
      {
        id: "c1-4",
        icon: "🏛️",
        nombre: "Well-Architected Framework",
        servicios: [
          { nombre: "Excelencia Operativa", desc: "Monitorear y mejorar procesos continuamente" },
          { nombre: "Seguridad", desc: "Proteger datos y sistemas" },
          { nombre: "Fiabilidad", desc: "Recuperarse automáticamente de fallos" },
          { nombre: "Eficiencia de Rendimiento", desc: "Usar recursos eficientemente" },
          { nombre: "Optimización de Costos", desc: "Eliminar gastos innecesarios" },
          { nombre: "Sostenibilidad", desc: "Minimizar el impacto ambiental" }
        ]
      }
    ]
  },
  {
    id: "d2",
    clase: "d2",
    icon: "🔒",
    nombre: "Seguridad y Cumplimiento",
    pct: "30%",
    categorias: [
      {
        id: "c2-1",
        icon: "🤝",
        nombre: "Responsabilidad Compartida",
        servicios: [
          { nombre: "Seguridad DE la nube (AWS)", desc: "Hardware, infraestructura física, hipervisores" },
          { nombre: "Seguridad EN la nube (Cliente)", desc: "Datos, SO, aplicaciones, acceso" },
          { nombre: "Controles Compartidos", desc: "Parches, gestión de configuración, formación" },
          { nombre: "Varía según el servicio", desc: "EC2: más responsabilidad. RDS: menos. S3: mínima" }
        ]
      },
      {
        id: "c2-2",
        icon: "🪪",
        nombre: "IAM — Identidad y Acceso",
        servicios: [
          { nombre: "Usuarios IAM", desc: "Personas o apps con credenciales permanentes" },
          { nombre: "Grupos IAM", desc: "Colección de usuarios con mismos permisos" },
          { nombre: "Roles IAM", desc: "Identidad temporal para servicios o usuarios federados" },
          { nombre: "Políticas IAM", desc: "Documento JSON que define permisos Allow/Deny" },
          { nombre: "MFA", desc: "Segundo factor de autenticación — obligatorio para root" },
          { nombre: "Access Keys", desc: "Para acceso programático: CLI, SDK, API" },
          { nombre: "Mínimo Privilegio", desc: "Otorgar solo los permisos necesarios" }
        ]
      },
      {
        id: "c2-3",
        icon: "🛡️",
        nombre: "Servicios de Seguridad",
        servicios: [
          { nombre: "GuardDuty", desc: "Detección de amenazas con ML — activa siempre" },
          { nombre: "Shield Standard", desc: "Protección DDoS gratis para todos" },
          { nombre: "Shield Advanced", desc: "DDoS avanzado + soporte + compensación" },
          { nombre: "WAF", desc: "Firewall web: bloquea SQL injection, XSS, bots" },
          { nombre: "Inspector", desc: "Evaluación de vulnerabilidades en EC2/Lambda" },
          { nombre: "Macie", desc: "Detecta datos sensibles (PII) en S3" },
          { nombre: "Secrets Manager", desc: "Almacena y rota credenciales automáticamente" },
          { nombre: "KMS", desc: "Gestión de claves de cifrado" },
          { nombre: "Artifact", desc: "Acceso a informes de cumplimiento (SOC, ISO)" },
          { nombre: "Cognito", desc: "Autenticación para apps web/móvil" }
        ]
      },
      {
        id: "c2-4",
        icon: "📋",
        nombre: "Auditoría y Cumplimiento",
        servicios: [
          { nombre: "CloudTrail", desc: "Registro de todas las llamadas API — quién hizo qué" },
          { nombre: "AWS Config", desc: "Historial de cambios de configuración" },
          { nombre: "AWS Artifact", desc: "Informes de cumplimiento y acuerdos legales" },
          { nombre: "AWS Organizations", desc: "Gobernanza de múltiples cuentas" },
          { nombre: "SCPs", desc: "Service Control Policies — restricciones por OU" }
        ]
      }
    ]
  },
  {
    id: "d3",
    clase: "d3",
    icon: "⚙️",
    nombre: "Tecnología y Servicios",
    pct: "34%",
    categorias: [
      {
        id: "c3-1",
        icon: "💻",
        nombre: "Cómputo",
        servicios: [
          { nombre: "EC2", desc: "Máquinas virtuales. On-Demand, Reserved, Spot, Dedicated" },
          { nombre: "Lambda", desc: "Sin servidor. Ejecuta código en respuesta a eventos (<15min)" },
          { nombre: "ECS", desc: "Orquestación de contenedores Docker" },
          { nombre: "EKS", desc: "Kubernetes gestionado" },
          { nombre: "Fargate", desc: "Contenedores sin gestionar servidores" },
          { nombre: "Elastic Beanstalk", desc: "PaaS: sube código y AWS gestiona el resto" },
          { nombre: "AWS Batch", desc: "Trabajos de cómputo por lotes" },
          { nombre: "Lightsail", desc: "Nube simplificada para apps pequeñas" }
        ]
      },
      {
        id: "c3-2",
        icon: "💾",
        nombre: "Almacenamiento",
        servicios: [
          { nombre: "S3", desc: "Objetos. Ilimitado. 11 nueves de durabilidad" },
          { nombre: "S3 Glacier", desc: "Archivado a largo plazo. Muy barato" },
          { nombre: "S3 Intelligent-Tiering", desc: "Mueve datos automáticamente al nivel óptimo" },
          { nombre: "EBS", desc: "Bloques. Para EC2. Persistente" },
          { nombre: "EFS", desc: "Archivos compartidos entre múltiples EC2" },
          { nombre: "Almacén de Instancia", desc: "Temporal. Se pierde si la instancia para" },
          { nombre: "Storage Gateway", desc: "Puente entre on-premises y AWS" },
          { nombre: "Snowball Edge", desc: "Transferencia física de datos (50-80TB)" }
        ]
      },
      {
        id: "c3-3",
        icon: "🗄️",
        nombre: "Bases de Datos",
        servicios: [
          { nombre: "RDS", desc: "SQL gestionado: MySQL, PostgreSQL, Oracle, SQL Server" },
          { nombre: "Aurora", desc: "MySQL/PostgreSQL nativo para la nube — 5x más rápido" },
          { nombre: "DynamoDB", desc: "NoSQL clave-valor. Escala masiva. Sin servidor" },
          { nombre: "Redshift", desc: "Data warehouse. Análisis de big data con SQL" },
          { nombre: "ElastiCache", desc: "Caché en memoria (Redis/Memcached)" },
          { nombre: "Neptune", desc: "Base de datos de grafos" },
          { nombre: "DMS", desc: "Migración de bases de datos a AWS" }
        ]
      },
      {
        id: "c3-4",
        icon: "🌐",
        nombre: "Redes",
        servicios: [
          { nombre: "VPC", desc: "Red privada virtual aislada" },
          { nombre: "Subred Pública/Privada", desc: "Con/sin acceso directo a internet" },
          { nombre: "Grupos de Seguridad", desc: "Firewall nivel instancia — stateful" },
          { nombre: "NACLs", desc: "Firewall nivel subred — stateless" },
          { nombre: "Internet Gateway", desc: "Acceso a internet para subredes públicas" },
          { nombre: "NAT Gateway", desc: "Internet para subredes privadas (saliente)" },
          { nombre: "CloudFront", desc: "CDN global. Cachea en +400 Edge Locations" },
          { nombre: "Route 53", desc: "DNS gestionado y registro de dominios" },
          { nombre: "Direct Connect", desc: "Conexión dedicada on-premises ↔ AWS" },
          { nombre: "AWS VPN", desc: "Conexión cifrada (IPSec) por internet" },
          { nombre: "Transit Gateway", desc: "Hub para conectar múltiples VPCs" },
          { nombre: "Global Accelerator", desc: "Mejora rendimiento de apps globales" }
        ]
      },
      {
        id: "c3-5",
        icon: "📊",
        nombre: "Monitoreo y Gestión",
        servicios: [
          { nombre: "CloudWatch", desc: "Métricas, logs, alarmas, paneles de control" },
          { nombre: "CloudTrail", desc: "Auditoría de llamadas API" },
          { nombre: "X-Ray", desc: "Trazabilidad distribuida para microservicios" },
          { nombre: "Trusted Advisor", desc: "Recomendaciones en 5 categorías" },
          { nombre: "Config", desc: "Inventario y cumplimiento de configuraciones" },
          { nombre: "CloudFormation", desc: "Infraestructura como Código (IaC)" },
          { nombre: "Systems Manager", desc: "Gestión de recursos en escala" }
        ]
      },
      {
        id: "c3-6",
        icon: "🔗",
        nombre: "Integración y Mensajería",
        servicios: [
          { nombre: "SQS", desc: "Cola de mensajes. Desacopla componentes" },
          { nombre: "SNS", desc: "Notificaciones pub/sub a múltiples destinos" },
          { nombre: "API Gateway", desc: "Gestión de APIs REST/WebSocket" },
          { nombre: "Step Functions", desc: "Orquestación de flujos de trabajo" },
          { nombre: "EventBridge", desc: "Bus de eventos entre servicios y SaaS" },
          { nombre: "Kinesis", desc: "Streaming de datos en tiempo real" },
          { nombre: "MQ", desc: "Cola de mensajes compatible con RabbitMQ/ActiveMQ" }
        ]
      },
      {
        id: "c3-7",
        icon: "🤖",
        nombre: "Machine Learning (Básico)",
        servicios: [
          { nombre: "SageMaker", desc: "Plataforma completa para construir modelos ML" },
          { nombre: "Rekognition", desc: "Análisis de imágenes y vídeo" },
          { nombre: "Comprehend", desc: "Procesamiento de lenguaje natural" },
          { nombre: "Translate", desc: "Traducción automática" },
          { nombre: "Polly", desc: "Texto a voz" },
          { nombre: "Transcribe", desc: "Voz a texto" },
          { nombre: "Lex", desc: "Chatbots con comprensión de lenguaje" },
          { nombre: "Forecast", desc: "Predicción de series temporales" }
        ]
      }
    ]
  },
  {
    id: "d4",
    clase: "d4",
    icon: "💰",
    nombre: "Facturación y Soporte",
    pct: "12%",
    categorias: [
      {
        id: "c4-1",
        icon: "💵",
        nombre: "Modelos de Precios",
        servicios: [
          { nombre: "On-Demand", desc: "Sin compromiso. Mayor flexibilidad, mayor coste" },
          { nombre: "Reservadas (1-3 años)", desc: "Hasta 75% descuento para cargas estables" },
          { nombre: "Spot", desc: "Hasta 90% descuento. Puede interrumpirse" },
          { nombre: "Savings Plans", desc: "Flexible: aplica a EC2, Lambda, Fargate" },
          { nombre: "Dedicados", desc: "Servidor físico exclusivo — compliance/BYOL" }
        ]
      },
      {
        id: "c4-2",
        icon: "🛠️",
        nombre: "Herramientas de Costos",
        servicios: [
          { nombre: "Cost Explorer", desc: "Analiza y visualiza el gasto histórico" },
          { nombre: "AWS Budgets", desc: "Alertas cuando superas un umbral" },
          { nombre: "Cost & Usage Report", desc: "Informe más detallado (en S3)" },
          { nombre: "Calculadora de Precios", desc: "Estima costos antes de crear recursos" },
          { nombre: "Trusted Advisor", desc: "Recomendaciones de ahorro automáticas" }
        ]
      },
      {
        id: "c4-3",
        icon: "🎧",
        nombre: "Planes de Soporte",
        servicios: [
          { nombre: "Basic (gratis)", desc: "Documentación, foros, 7 checks Trusted Advisor" },
          { nombre: "Developer ($29+/mes)", desc: "Email soporte técnico, respuesta 12-24h" },
          { nombre: "Business ($100+/mes)", desc: "24/7 tel/chat/email, Trusted Advisor completo, 1h respuesta urgente" },
          { nombre: "Enterprise ($15.000+/mes)", desc: "TAM dedicado, 15min respuesta crítica, Concierge" }
        ]
      },
      {
        id: "c4-4",
        icon: "🏢",
        nombre: "AWS Organizations",
        servicios: [
          { nombre: "Cuenta Maestra", desc: "Gestiona todas las cuentas hijo" },
          { nombre: "Facturación Consolidada", desc: "Una sola factura + descuentos por volumen" },
          { nombre: "SCPs", desc: "Service Control Policies — restringe servicios por cuenta" },
          { nombre: "Unidades Organizativas (OU)", desc: "Agrupa cuentas por departamento o entorno" }
        ]
      }
    ]
  }
];
