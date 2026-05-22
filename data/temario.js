const TEMARIO = [
  {
    id: "d1",
    dominio: "Dominio 1: Conceptos de la Nube",
    pct: "24%",
    icon: "☁️",
    color: "#FF9900",
    temas: [
      {
        id: "t1-1",
        titulo: "¿Qué es la Computación en la Nube?",
        icon: "🌐",
        desc: "Fundamentos y definición",
        contenido: `
<h3>Definición Oficial</h3>
<p>La computación en la nube es la <strong>entrega bajo demanda de recursos de TI a través de internet con precios de pago por uso</strong>. Elimina la necesidad de comprar y mantener infraestructura física.</p>

<div class="highlight-box">
💡 <strong>Analogía clave para el examen:</strong> La nube es como la electricidad. En lugar de tener tu propio generador (servidor propio), te conectas a la red eléctrica (AWS) y pagas solo por lo que consumes.
</div>

<h3>Las 5 Características Esenciales (NIST)</h3>
<ul>
  <li><strong>Autoservicio bajo demanda:</strong> Aprovisionar recursos sin interacción humana con el proveedor</li>
  <li><strong>Amplio acceso a la red:</strong> Disponible desde cualquier dispositivo con internet</li>
  <li><strong>Agrupación de recursos:</strong> Recursos compartidos entre múltiples clientes (multi-inquilino)</li>
  <li><strong>Rápida elasticidad:</strong> Escalar hacia arriba o abajo rápidamente</li>
  <li><strong>Servicio medido:</strong> Pago basado en el uso real (medir, controlar, reportar)</li>
</ul>

<h3>TI Tradicional vs Computación en la Nube</h3>
<table class="comparison-table">
  <tr><th>Aspecto</th><th>TI Tradicional</th><th>AWS Cloud</th></tr>
  <tr><td>Inversión inicial</td><td>Alta (CapEx)</td><td>Ninguna o mínima (OpEx)</td></tr>
  <tr><td>Tiempo de aprovisionamiento</td><td>Semanas/meses</td><td>Minutos/segundos</td></tr>
  <tr><td>Escalado</td><td>Manual y lento</td><td>Automático e inmediato</td></tr>
  <tr><td>Capacidad</td><td>Estimada (riesgo de sobre/infra)</td><td>Exactamente la necesaria</td></tr>
  <tr><td>Mantenimiento</td><td>Tu responsabilidad</td><td>Compartida o de AWS</td></tr>
</table>

<div class="tip-box">
✅ <strong>Consejo de examen:</strong> Si la pregunta menciona "reducir gastos de capital" o "eliminar la necesidad de aprovisionar infraestructura con anticipación", la respuesta involucra ventajas de la nube.
</div>
        `
      },
      {
        id: "t1-2",
        titulo: "Ventajas de la Computación en la Nube",
        icon: "🎯",
        desc: "Las 6 ventajas clave de AWS",
        contenido: `
<h3>Las 6 Ventajas de AWS (¡Memorízalas!)</h3>
<ul>
  <li><strong>1. Intercambia gastos de capital por gastos operativos:</strong> Paga solo por lo que usas en lugar de invertir en infraestructura</li>
  <li><strong>2. Benefíciate de economías de escala masivas:</strong> AWS compra hardware en volumen masivo → precios más bajos para todos</li>
  <li><strong>3. Deja de adivinar la capacidad:</strong> Escala exactamente según la demanda real</li>
  <li><strong>4. Aumenta la velocidad y agilidad:</strong> Nuevos recursos disponibles en minutos, no semanas</li>
  <li><strong>5. Deja de gastar dinero en centros de datos:</strong> Enfócate en tus clientes, no en infraestructura</li>
  <li><strong>6. Globalízate en minutos:</strong> Despliega en múltiples Regiones del mundo fácilmente</li>
</ul>

<div class="mnemonic-box">
  <div class="mnemonic-title">Mnemónico: "IC-DA-DC-G"</div>
  <div class="mnemonic-list">
    <span>I</span>ntercambia CapEx → OpEx | <span>C</span>osta económías de escala | <span>D</span>eja de adivinar capacidad | <span>A</span>gilidad y velocidad | <span>D</span>eja los data centers | <span>G</span>lobalízate
  </div>
</div>

<h3>Modelos de Servicio</h3>
<table class="comparison-table">
  <tr><th>Modelo</th><th>Gestiona AWS</th><th>Gestiona Cliente</th><th>Ejemplo</th></tr>
  <tr><td><strong>IaaS</strong></td><td>Infraestructura física, virtualización</td><td>SO, Runtime, Middleware, Aplicación, Datos</td><td>EC2</td></tr>
  <tr><td><strong>PaaS</strong></td><td>Todo lo anterior + SO, Runtime</td><td>Aplicación y Datos</td><td>Elastic Beanstalk</td></tr>
  <tr><td><strong>SaaS</strong></td><td>Todo, incluyendo la aplicación</td><td>Solo los datos del usuario</td><td>Gmail, Salesforce</td></tr>
</table>
        `
      },
      {
        id: "t1-3",
        titulo: "Infraestructura Global de AWS",
        icon: "🌍",
        desc: "Regiones, AZs y Edge Locations",
        contenido: `
<h3>Regiones de AWS</h3>
<p>Una Región es un área geográfica con múltiples centros de datos. Cada Región es completamente independiente.</p>
<ul>
  <li>Hay más de <strong>30 Regiones</strong> a nivel mundial</li>
  <li>Cada Región tiene al menos <strong>3 Zonas de Disponibilidad</strong></li>
  <li>Elige la Región por: cumplimiento legal, proximidad a usuarios, disponibilidad de servicios y precios</li>
</ul>

<h3>Zonas de Disponibilidad (AZ)</h3>
<ul>
  <li>Uno o más centros de datos con <strong>energía, red y conectividad redundantes</strong></li>
  <li>Están <strong>físicamente separadas</strong> (riesgo de inundación, terremoto independiente)</li>
  <li>Conectadas entre sí con <strong>red de alta velocidad y baja latencia</strong></li>
  <li>La separación física = protección ante desastres locales</li>
</ul>

<h3>Ubicaciones de Borde (Edge Locations)</h3>
<ul>
  <li>Más de <strong>400 ubicaciones</strong> en todo el mundo</li>
  <li>Usadas por <strong>CloudFront</strong> (CDN) para cachear contenido cerca de los usuarios</li>
  <li>Usadas por <strong>Route 53</strong> (DNS) para responder solicitudes más rápido</li>
  <li>Son muchas más que las Regiones → reducen latencia globalmente</li>
</ul>

<div class="highlight-box">
⚡ <strong>Regla de oro para el examen:</strong><br>
• Alta disponibilidad en un región → despliega en <strong>múltiples AZs</strong><br>
• Recuperación ante desastres → despliega en <strong>múltiples Regiones</strong><br>
• Baja latencia global de contenido → <strong>CloudFront + Edge Locations</strong>
</div>

<table class="comparison-table">
  <tr><th>Componente</th><th>Propósito</th><th>Cantidad</th></tr>
  <tr><td>Regiones</td><td>Aislamiento geográfico completo</td><td>+30</td></tr>
  <tr><td>Zonas de Disponibilidad</td><td>Alta disponibilidad dentro de una región</td><td>+90</td></tr>
  <tr><td>Edge Locations</td><td>CDN y baja latencia para usuarios finales</td><td>+400</td></tr>
</table>
        `
      },
      {
        id: "t1-4",
        titulo: "Marco de Buena Arquitectura de AWS",
        icon: "🏛️",
        desc: "Los 6 pilares del Well-Architected Framework",
        contenido: `
<h3>Los 6 Pilares (acrónimo: CROPS+S)</h3>

<table class="comparison-table">
  <tr><th>Pilar</th><th>¿Qué mide?</th><th>Principios clave</th></tr>
  <tr><td>🔧 Excelencia Operativa</td><td>Capacidad de monitorear y mejorar procesos</td><td>Automatizar cambios, anticipar fallos, aprender de eventos</td></tr>
  <tr><td>🔒 Seguridad</td><td>Protección de datos y sistemas</td><td>Mínimo privilegio, cifrado, trazabilidad</td></tr>
  <tr><td>🛡️ Fiabilidad</td><td>Recuperarse de fallos automáticamente</td><td>Diseño para fallos, escalado automático, multi-AZ</td></tr>
  <tr><td>⚡ Eficiencia de Rendimiento</td><td>Uso eficiente de recursos</td><td>Serverless, servicios gestionados, distribución global</td></tr>
  <tr><td>💰 Optimización de Costos</td><td>Eliminar gastos innecesarios</td><td>Pago por uso, Spot/Reserved, eliminar recursos no usados</td></tr>
  <tr><td>🌱 Sostenibilidad</td><td>Minimizar impacto ambiental</td><td>Reducir consumo, usar regiones con energía renovable</td></tr>
</table>

<div class="tip-box">
✅ <strong>Para el examen:</strong> "Excelencia Operativa" = monitorear y mejorar. "Fiabilidad" = recuperarse de fallos. No los confundas.
</div>

<h3>Principios de Diseño en la Nube</h3>
<ul>
  <li><strong>Diseña para el fallo:</strong> Asume que los componentes van a fallar y diseña para ello</li>
  <li><strong>Desacopla componentes:</strong> Reduce la dependencia entre partes de la aplicación</li>
  <li><strong>Implementa elasticidad:</strong> Escala automáticamente según la demanda</li>
  <li><strong>Piensa en paralelo:</strong> Divide las tareas para procesarlas en paralelo</li>
  <li><strong>Deja de adivinar:</strong> Usa métricas reales para tomar decisiones</li>
</ul>
        `
      }
    ]
  },
  {
    id: "d2",
    dominio: "Dominio 2: Seguridad y Cumplimiento",
    pct: "30%",
    icon: "🔒",
    color: "#fc8181",
    temas: [
      {
        id: "t2-1",
        titulo: "Modelo de Responsabilidad Compartida",
        icon: "🤝",
        desc: "¿Quién es responsable de qué?",
        contenido: `
<h3>El Concepto Fundamental</h3>
<div class="highlight-box">
🏢 <strong>AWS = "Seguridad DE la nube"</strong><br>
Infraestructura física, hardware, software que ejecuta los servicios (hipervisores, red global, centros de datos)
</div>
<div class="tip-box">
👤 <strong>Cliente = "Seguridad EN la nube"</strong><br>
Todo lo que pones en la nube: datos, aplicaciones, SO, configuración de red, acceso de usuarios
</div>

<h3>Responsabilidades por Tipo de Servicio</h3>
<table class="comparison-table">
  <tr><th>Responsabilidad</th><th>IaaS (EC2)</th><th>PaaS (RDS)</th><th>SaaS (S3)</th></tr>
  <tr><td>Instalaciones físicas</td><td>AWS</td><td>AWS</td><td>AWS</td></tr>
  <tr><td>Hardware / Red</td><td>AWS</td><td>AWS</td><td>AWS</td></tr>
  <tr><td>Hipervisor</td><td>AWS</td><td>AWS</td><td>AWS</td></tr>
  <tr><td>Sistema Operativo</td><td><strong>Cliente</strong></td><td>AWS</td><td>AWS</td></tr>
  <tr><td>Parches del SO</td><td><strong>Cliente</strong></td><td>AWS</td><td>AWS</td></tr>
  <tr><td>Aplicación</td><td><strong>Cliente</strong></td><td><strong>Cliente</strong></td><td>AWS</td></tr>
  <tr><td>Datos</td><td><strong>Cliente</strong></td><td><strong>Cliente</strong></td><td><strong>Cliente</strong></td></tr>
  <tr><td>Cifrado de datos</td><td><strong>Cliente</strong></td><td>Compartido</td><td><strong>Cliente</strong></td></tr>
  <tr><td>Configuración de red</td><td><strong>Cliente</strong></td><td><strong>Cliente</strong></td><td><strong>Cliente</strong></td></tr>
</table>

<div class="highlight-box">
📌 <strong>Controles compartidos:</strong> Gestión de parches (AWS parchea la infraestructura, cliente parchea sus SO), gestión de configuración, formación y concienciación.
</div>

<h3>Preguntas Trampa Frecuentes</h3>
<ul>
  <li>¿Quién parchea el SO de EC2? → <strong>El cliente</strong></li>
  <li>¿Quién parchea RDS? → <strong>AWS</strong> (servicio gestionado)</li>
  <li>¿Quién gestiona las claves de cifrado en S3? → <strong>El cliente</strong> (AWS da las herramientas, el cliente decide)</li>
  <li>¿Quién es responsable de la seguridad física del datacenter? → <strong>AWS siempre</strong></li>
</ul>
        `
      },
      {
        id: "t2-2",
        titulo: "IAM — Gestión de Identidad y Acceso",
        icon: "🪪",
        desc: "Usuarios, grupos, roles y políticas",
        contenido: `
<h3>Los 4 Elementos Clave de IAM</h3>

<table class="comparison-table">
  <tr><th>Elemento</th><th>¿Qué es?</th><th>¿Cuándo usarlo?</th></tr>
  <tr><td><strong>Usuario</strong></td><td>Persona o aplicación con credenciales permanentes</td><td>Personas que acceden a la consola AWS</td></tr>
  <tr><td><strong>Grupo</strong></td><td>Colección de usuarios con mismos permisos</td><td>Organizar usuarios por departamento/función</td></tr>
  <tr><td><strong>Rol</strong></td><td>Identidad temporal asumida por servicios o usuarios</td><td>EC2 accediendo a S3, Lambda accediendo a DynamoDB</td></tr>
  <tr><td><strong>Política</strong></td><td>Documento JSON con permisos (Allow/Deny)</td><td>Siempre: se adjunta a usuarios, grupos o roles</td></tr>
</table>

<h3>Mejores Prácticas de IAM (PURGE)</h3>
<div class="mnemonic-box">
  <div class="mnemonic-title">Regla PURGE</div>
  <div class="mnemonic-list">
    <span>P</span>rincipio de mínimo privilegio siempre<br>
    <span>U</span>sar roles en lugar de usuarios para aplicaciones/servicios<br>
    <span>R</span>otar las credenciales regularmente<br>
    <span>G</span>rupar usuarios con permisos similares<br>
    <span>E</span>nabilitar MFA para todas las cuentas privilegiadas
  </div>
</div>

<h3>Usuario Root</h3>
<ul>
  <li>Primera cuenta creada al registrarse en AWS</li>
  <li>Acceso completo a TODOS los servicios y recursos</li>
  <li><strong>NUNCA usarlo para tareas cotidianas</strong></li>
  <li>Activar MFA obligatoriamente</li>
  <li>Solo para tareas que requieren root: cerrar cuenta, cambiar plan de soporte, ver facturas</li>
</ul>

<h3>Claves de Acceso vs Contraseña</h3>
<table class="comparison-table">
  <tr><th>Tipo</th><th>Para qué sirve</th><th>Cuándo usarlas</th></tr>
  <tr><td>Contraseña</td><td>Acceso a Consola Web de AWS</td><td>Acceso humano interactivo</td></tr>
  <tr><td>Claves de Acceso (Access Keys)</td><td>Acceso programático: CLI, SDK, APIs</td><td>Aplicaciones, scripts, automatización</td></tr>
</table>
        `
      },
      {
        id: "t2-3",
        titulo: "Servicios de Seguridad de AWS",
        icon: "🛡️",
        desc: "GuardDuty, Shield, WAF, Inspector, CloudTrail",
        contenido: `
<h3>Mapa de Servicios de Seguridad</h3>
<table class="comparison-table">
  <tr><th>Servicio</th><th>¿Qué hace?</th><th>Analogía</th></tr>
  <tr><td><strong>GuardDuty</strong></td><td>Detección de amenazas con ML. Analiza logs de CloudTrail, VPC, DNS</td><td>Detector de intrusos inteligente</td></tr>
  <tr><td><strong>Shield Standard</strong></td><td>Protección DDoS básica, gratis para todos</td><td>Chaleco antibalas básico</td></tr>
  <tr><td><strong>Shield Advanced</strong></td><td>Protección DDoS avanzada, soporte 24/7, compensación de costos</td><td>Chaleco antibalas reforzado con escolta</td></tr>
  <tr><td><strong>WAF</strong></td><td>Firewall de aplicaciones web. Bloquea SQL injection, XSS, bots</td><td>Portero que filtra visitantes maliciosos</td></tr>
  <tr><td><strong>Inspector</strong></td><td>Evaluación de vulnerabilidades en EC2 y Lambda</td><td>Inspector de seguridad</td></tr>
  <tr><td><strong>CloudTrail</strong></td><td>Registra TODAS las llamadas API. ¿Quién hizo qué y cuándo?</td><td>Cámara de seguridad de la cuenta AWS</td></tr>
  <tr><td><strong>Config</strong></td><td>Registra cambios de configuración. ¿Cómo estaba configurado antes?</td><td>Historial de cambios</td></tr>
  <tr><td><strong>Macie</strong></td><td>Descubre y protege datos sensibles (PII) en S3 con ML</td><td>Detector de datos privados</td></tr>
  <tr><td><strong>Secrets Manager</strong></td><td>Almacena y rota credenciales de bases de datos y API keys</td><td>Caja fuerte de contraseñas</td></tr>
  <tr><td><strong>KMS</strong></td><td>Crea y gestiona claves de cifrado. Integrado en toda la plataforma</td><td>Gestor de llaves maestras</td></tr>
</table>

<div class="highlight-box">
⚡ <strong>Par confuso frecuente:</strong><br>
<strong>CloudWatch</strong> = Monitoreo de RENDIMIENTO (métricas, logs de aplicación, alarmas)<br>
<strong>CloudTrail</strong> = Auditoría de SEGURIDAD (quién hizo qué llamada API)
</div>
        `
      }
    ]
  },
  {
    id: "d3",
    dominio: "Dominio 3: Tecnología y Servicios",
    pct: "34%",
    icon: "⚙️",
    color: "#4299e1",
    temas: [
      {
        id: "t3-1",
        titulo: "Cómputo: EC2 y sus Variantes",
        icon: "💻",
        desc: "Instancias, tipos y modelos de precios",
        contenido: `
<h3>Modelos de Precios de EC2</h3>
<table class="comparison-table">
  <tr><th>Tipo</th><th>Descuento</th><th>Compromiso</th><th>Cuándo usar</th></tr>
  <tr><td><strong>On-Demand</strong></td><td>Ninguno</td><td>Ninguno</td><td>Cargas impredecibles, pruebas, corta duración</td></tr>
  <tr><td><strong>Reservadas</strong></td><td>Hasta 75%</td><td>1 o 3 años</td><td>Cargas estables y predecibles</td></tr>
  <tr><td><strong>Spot</strong></td><td>Hasta 90%</td><td>Ninguno</td><td>Cargas tolerantes a interrupciones: batch, ML, rendering</td></tr>
  <tr><td><strong>Saving Plans</strong></td><td>Hasta 66%</td><td>1 o 3 años</td><td>Flexible: aplica a EC2, Lambda y Fargate</td></tr>
  <tr><td><strong>Dedicadas</strong></td><td>Mayor coste</td><td>Ninguno/contrato</td><td>Requisitos de licencia (BYOL) o compliance</td></tr>
</table>

<h3>Diferencia: Instancia Dedicada vs Host Dedicado</h3>
<table class="comparison-table">
  <tr><th></th><th>Instancia Dedicada</th><th>Host Dedicado</th></tr>
  <tr><td>Hardware</td><td>Servidor físico dedicado a tu cuenta</td><td>Servidor físico completamente tuyo</td></tr>
  <tr><td>Visibilidad</td><td>No ves el servidor subyacente</td><td>Ves núcleos, sockets, IDs de host</td></tr>
  <tr><td>BYOL</td><td>No ideal para licencias por socket/núcleo</td><td>Ideal para licencias por socket/núcleo</td></tr>
</table>

<h3>Instancias Reservadas: Tipos</h3>
<ul>
  <li><strong>Estándar:</strong> Mayor descuento, no puedes cambiar el tipo de instancia</li>
  <li><strong>Convertible:</strong> Menor descuento, puedes cambiar a una instancia de mayor potencia</li>
</ul>

<div class="tip-box">
✅ <strong>Regla rápida para el examen:</strong><br>
Interrupción aceptable + coste mínimo → <strong>Spot</strong><br>
Sin interrupción + coste mínimo a largo plazo → <strong>Reservada</strong><br>
Máxima flexibilidad + no importa el coste → <strong>On-Demand</strong>
</div>
        `
      },
      {
        id: "t3-2",
        titulo: "Cómputo: Lambda, Contenedores y Más",
        icon: "⚡",
        desc: "Serverless, ECS, EKS y Beanstalk",
        contenido: `
<h3>Cuándo Usar Cada Servicio de Cómputo</h3>
<table class="comparison-table">
  <tr><th>Servicio</th><th>Tipo</th><th>Ideal para</th><th>Gestión</th></tr>
  <tr><td><strong>EC2</strong></td><td>Máquina virtual</td><td>Control total del SO, apps tradicionales</td><td>Alta (tú gestionas todo)</td></tr>
  <tr><td><strong>Lambda</strong></td><td>Sin servidor</td><td>Eventos, APIs, código corto (&lt;15 min)</td><td>Ninguna (AWS gestiona todo)</td></tr>
  <tr><td><strong>ECS + Fargate</strong></td><td>Contenedores sin servidor</td><td>Microservicios en contenedores, sin gestionar EC2</td><td>Baja</td></tr>
  <tr><td><strong>EKS</strong></td><td>Kubernetes gestionado</td><td>Ya usas Kubernetes, orquestación compleja</td><td>Media</td></tr>
  <tr><td><strong>Elastic Beanstalk</strong></td><td>PaaS</td><td>Despliegue rápido de apps web, sin gestionar infra</td><td>Baja (subes código, AWS hace el resto)</td></tr>
  <tr><td><strong>AWS Batch</strong></td><td>Lotes gestionado</td><td>Trabajos de cómputo por lotes de larga duración</td><td>Baja</td></tr>
</table>

<h3>AWS Lambda — Datos Clave</h3>
<ul>
  <li>Tiempo máximo de ejecución: <strong>15 minutos</strong></li>
  <li>Memoria: hasta <strong>10 GB</strong></li>
  <li>Se factura por número de solicitudes y duración</li>
  <li>Capa gratuita: 1 millón de solicitudes/mes y 400.000 GB-segundos/mes</li>
  <li>Activa eventos de: S3, DynamoDB, API Gateway, SQS, SNS, CloudWatch Events</li>
</ul>

<div class="highlight-box">
🎯 <strong>Serverless = Lambda + API Gateway + DynamoDB</strong><br>
Esta combinación es la arquitectura sin servidor más común en el examen.
</div>
        `
      },
      {
        id: "t3-3",
        titulo: "Almacenamiento: S3, EBS y EFS",
        icon: "💾",
        desc: "Tipos de almacenamiento y cuándo usar cada uno",
        contenido: `
<h3>Los 3 Tipos de Almacenamiento en AWS</h3>
<table class="comparison-table">
  <tr><th>Tipo</th><th>Servicio AWS</th><th>Acceso</th><th>Uso típico</th></tr>
  <tr><td><strong>Objetos</strong></td><td>Amazon S3</td><td>Via API/HTTP</td><td>Archivos, imágenes, backups, sitios web estáticos</td></tr>
  <tr><td><strong>Bloques</strong></td><td>Amazon EBS</td><td>Solo desde 1 instancia EC2 (por defecto)</td><td>SO, bases de datos, apps que necesitan baja latencia</td></tr>
  <tr><td><strong>Archivos</strong></td><td>Amazon EFS</td><td>Múltiples instancias EC2 simultáneamente</td><td>Contenido compartido, CMS, directorios home</td></tr>
</table>

<h3>Clases de Almacenamiento de S3</h3>
<table class="comparison-table">
  <tr><th>Clase</th><th>Acceso</th><th>Coste</th><th>Cuándo usar</th></tr>
  <tr><td>S3 Standard</td><td>Frecuente</td><td>Alto</td><td>Datos accedidos regularmente</td></tr>
  <tr><td>S3 Standard-IA</td><td>Infrecuente</td><td>Menor almacenamiento, tarifa de recuperación</td><td>Backups accedidos mensualmente</td></tr>
  <tr><td>S3 One Zone-IA</td><td>Infrecuente, 1 AZ</td><td>Menor que Standard-IA</td><td>Datos que pueden recrearse si se pierden</td></tr>
  <tr><td>S3 Intelligent-Tiering</td><td>Variable/desconocido</td><td>Tarifa de monitoreo</td><td>Patrones de acceso impredecibles</td></tr>
  <tr><td>S3 Glacier Instant</td><td>Raramente, recuperación en ms</td><td>Muy bajo</td><td>Archivos de acceso inmediato pero raro</td></tr>
  <tr><td>S3 Glacier Flexible</td><td>Raramente, recuperación en minutos/horas</td><td>Muy bajo</td><td>Archivos regulatorios, backups anuales</td></tr>
  <tr><td>S3 Glacier Deep Archive</td><td>Casi nunca, recuperación en 12h</td><td>El más barato</td><td>Retención a 7-10 años, compliance</td></tr>
</table>

<div class="highlight-box">
📌 <strong>Clave sobre S3:</strong><br>
• Durabilidad: <strong>99.999999999% (11 nueves)</strong><br>
• Almacenamiento ilimitado<br>
• Objetos hasta <strong>5 TB</strong><br>
• Usado para Transfer Acceleration (acelera uploads usando Edge Locations)
</div>
        `
      },
      {
        id: "t3-4",
        titulo: "Bases de Datos en AWS",
        icon: "🗄️",
        desc: "RDS, DynamoDB, Aurora y más",
        contenido: `
<h3>Relacional vs NoSQL</h3>
<table class="comparison-table">
  <tr><th>Aspecto</th><th>Relacional (RDS/Aurora)</th><th>NoSQL (DynamoDB)</th></tr>
  <tr><td>Estructura</td><td>Tablas con filas y columnas, esquema fijo</td><td>Documentos, clave-valor, esquema flexible</td></tr>
  <tr><td>Consultas</td><td>SQL estándar</td><td>API propia de AWS</td></tr>
  <tr><td>Escalado</td><td>Vertical (instancias más grandes)</td><td>Horizontal automático</td></tr>
  <tr><td>Uso</td><td>Apps con relaciones complejas, reportes</td><td>Escalabilidad masiva, baja latencia, simple</td></tr>
</table>

<h3>Guía de Selección de Base de Datos</h3>
<table class="comparison-table">
  <tr><th>Necesidad</th><th>Servicio Recomendado</th></tr>
  <tr><td>Base de datos relacional gestionada</td><td><strong>Amazon RDS</strong> (MySQL, PostgreSQL, Oracle, SQL Server)</td></tr>
  <tr><td>MySQL/PostgreSQL con máximo rendimiento</td><td><strong>Amazon Aurora</strong></td></tr>
  <tr><td>NoSQL clave-valor, escala masiva</td><td><strong>Amazon DynamoDB</strong></td></tr>
  <tr><td>Data warehouse / análisis de grandes datos</td><td><strong>Amazon Redshift</strong></td></tr>
  <tr><td>Caché en memoria para reducir latencia</td><td><strong>Amazon ElastiCache</strong> (Redis/Memcached)</td></tr>
  <tr><td>Base de datos de grafos</td><td><strong>Amazon Neptune</strong></td></tr>
  <tr><td>Migración de bases de datos a AWS</td><td><strong>AWS DMS</strong> (Database Migration Service)</td></tr>
</table>

<div class="tip-box">
✅ <strong>Multi-AZ vs Réplica de Lectura en RDS:</strong><br>
• <strong>Multi-AZ</strong> = Alta disponibilidad (failover automático). Réplica síncrona en otra AZ.<br>
• <strong>Réplica de Lectura</strong> = Rendimiento (escalar lecturas). Réplica asíncrona. No hace failover automático.
</div>
        `
      },
      {
        id: "t3-5",
        titulo: "Redes: VPC, CloudFront y Conectividad",
        icon: "🌐",
        desc: "VPC, subredes, CDN y conectividad híbrida",
        contenido: `
<h3>Arquitectura de Red Típica en AWS</h3>
<table class="comparison-table">
  <tr><th>Capa</th><th>Servicio</th><th>Descripción</th></tr>
  <tr><td>Red privada virtual</td><td>Amazon VPC</td><td>Tu red aislada en AWS</td></tr>
  <tr><td>Subred pública</td><td>Subred + Internet Gateway</td><td>Para recursos accesibles desde internet</td></tr>
  <tr><td>Subred privada</td><td>Subred + NAT Gateway</td><td>Para recursos sin acceso directo desde internet</td></tr>
  <tr><td>Firewall instancia</td><td>Grupos de Seguridad</td><td>Stateful, a nivel de instancia</td></tr>
  <tr><td>Firewall subred</td><td>NACL</td><td>Stateless, a nivel de subred</td></tr>
  <tr><td>CDN global</td><td>Amazon CloudFront</td><td>Caché de contenido en Edge Locations</td></tr>
  <tr><td>DNS</td><td>Amazon Route 53</td><td>Resolución de nombres, enrutamiento</td></tr>
</table>

<h3>Conectividad Híbrida (On-premises → AWS)</h3>
<table class="comparison-table">
  <tr><th>Opción</th><th>Tipo</th><th>Cuándo usarla</th></tr>
  <tr><td><strong>AWS VPN</strong></td><td>Cifrado por internet (IPSec)</td><td>Conexión rápida de configurar, menor coste</td></tr>
  <tr><td><strong>AWS Direct Connect</strong></td><td>Línea dedicada privada</td><td>Mayor ancho de banda, latencia consistente, datos sensibles</td></tr>
</table>

<div class="highlight-box">
⚡ <strong>Grupos de Seguridad vs NACLs:</strong><br>
• <strong>Grupos de Seguridad:</strong> Con estado (stateful), nivel de instancia, solo Allow<br>
• <strong>NACLs:</strong> Sin estado (stateless), nivel de subred, Allow y Deny
</div>

<h3>CloudFront — Red de Distribución de Contenido</h3>
<ul>
  <li>Cachea contenido en <strong>+400 Edge Locations</strong> en todo el mundo</li>
  <li>Reduce la latencia entregando el contenido desde el punto más cercano al usuario</li>
  <li>Ideal para: sitios web, APIs, streaming de vídeo, distribución de software</li>
  <li><strong>S3 Transfer Acceleration:</strong> Acelera uploads a S3 usando las Edge Locations de CloudFront</li>
</ul>
        `
      },
      {
        id: "t3-6",
        titulo: "Otros Servicios Clave",
        icon: "🧰",
        desc: "Monitoreo, integración, ML y DevOps",
        contenido: `
<h3>Monitoreo y Observabilidad</h3>
<table class="comparison-table">
  <tr><th>Servicio</th><th>¿Para qué?</th></tr>
  <tr><td><strong>CloudWatch</strong></td><td>Métricas, logs, alarmas, paneles. Monitorea rendimiento</td></tr>
  <tr><td><strong>CloudTrail</strong></td><td>Auditoría de API calls. Quién hizo qué</td></tr>
  <tr><td><strong>X-Ray</strong></td><td>Trazabilidad distribuida. Depurar microservicios</td></tr>
  <tr><td><strong>Trusted Advisor</strong></td><td>Recomendaciones de optimización en 5 categorías</td></tr>
  <tr><td><strong>AWS Config</strong></td><td>Historial de cambios de configuración. Compliance</td></tr>
  <tr><td><strong>Health Dashboard</strong></td><td>Estado de los servicios AWS y impacto en tu cuenta</td></tr>
</table>

<h3>Integración de Aplicaciones</h3>
<table class="comparison-table">
  <tr><th>Servicio</th><th>¿Para qué?</th><th>Analogía</th></tr>
  <tr><td><strong>SQS</strong></td><td>Cola de mensajes. Desacopla componentes</td><td>Buzón de correo</td></tr>
  <tr><td><strong>SNS</strong></td><td>Notificaciones pub/sub a múltiples suscriptores</td><td>Megáfono</td></tr>
  <tr><td><strong>API Gateway</strong></td><td>Puerta de entrada para APIs REST/WebSocket</td><td>Recepcionista de hotel</td></tr>
  <tr><td><strong>Step Functions</strong></td><td>Orquesta flujos de trabajo con máquinas de estado</td><td>Director de orquesta</td></tr>
  <tr><td><strong>EventBridge</strong></td><td>Bus de eventos entre servicios y SaaS</td><td>Conector de enchufes</td></tr>
</table>

<h3>Machine Learning (conceptos básicos para CCP)</h3>
<table class="comparison-table">
  <tr><th>Servicio</th><th>¿Qué hace?</th></tr>
  <tr><td><strong>Rekognition</strong></td><td>Análisis de imágenes y vídeo (caras, objetos)</td></tr>
  <tr><td><strong>Comprehend</strong></td><td>Procesamiento de lenguaje natural (sentimiento, entidades)</td></tr>
  <tr><td><strong>Translate</strong></td><td>Traducción automática de textos</td></tr>
  <tr><td><strong>Polly</strong></td><td>Convierte texto a voz</td></tr>
  <tr><td><strong>Transcribe</strong></td><td>Convierte voz a texto</td></tr>
  <tr><td><strong>SageMaker</strong></td><td>Plataforma completa para construir y entrenar modelos ML</td></tr>
  <tr><td><strong>Lex</strong></td><td>Construye chatbots con comprensión de lenguaje natural</td></tr>
</table>
        `
      }
    ]
  },
  {
    id: "d4",
    dominio: "Dominio 4: Facturación y Soporte",
    pct: "12%",
    icon: "💰",
    color: "#48bb78",
    temas: [
      {
        id: "t4-1",
        titulo: "Modelos de Precios de AWS",
        icon: "💵",
        desc: "Cómo funciona la facturación en AWS",
        contenido: `
<h3>Principios de Precios de AWS</h3>
<ul>
  <li><strong>Paga por lo que usas:</strong> Sin tarifas mínimas ni compromisos (salvo Reservadas)</li>
  <li><strong>Paga menos cuanto más usas:</strong> Descuentos por volumen en S3, EC2, transferencia de datos</li>
  <li><strong>Paga menos cuando reservas:</strong> Compromisos de 1-3 años = hasta 75% de descuento</li>
</ul>

<h3>Factores que Afectan al Precio en AWS</h3>
<table class="comparison-table">
  <tr><th>Factor</th><th>Explicación</th></tr>
  <tr><td>Cómputo</td><td>Tiempo que corren las instancias, tipo de instancia, SO</td></tr>
  <tr><td>Almacenamiento</td><td>Cantidad almacenada, clase de almacenamiento, solicitudes</td></tr>
  <tr><td>Transferencia de datos</td><td>Datos que salen de AWS (saliente) son de pago. Los entrantes son gratis</td></tr>
  <tr><td>Región</td><td>Los precios varían entre Regiones. EE.UU. suele ser más barato</td></tr>
</table>

<div class="highlight-box">
📌 <strong>Regla de oro de transferencia de datos:</strong><br>
• Datos que <strong>entran</strong> en AWS → <strong>Gratis</strong><br>
• Datos que <strong>salen</strong> de AWS a internet → <strong>Se cobran</strong><br>
• Datos entre servicios en la <strong>misma Región</strong> → Generalmente gratis o muy barato
</div>

<h3>Herramientas de Gestión de Costos</h3>
<table class="comparison-table">
  <tr><th>Herramienta</th><th>¿Qué hace?</th></tr>
  <tr><td><strong>Cost Explorer</strong></td><td>Visualiza y analiza el gasto histórico y futuro</td></tr>
  <tr><td><strong>AWS Budgets</strong></td><td>Define alertas cuando se supera un umbral de gasto</td></tr>
  <tr><td><strong>Cost and Usage Report</strong></td><td>Informe más detallado. Se almacena en S3</td></tr>
  <tr><td><strong>Calculadora de Precios</strong></td><td>Estima costos ANTES de crear recursos</td></tr>
  <tr><td><strong>Trusted Advisor</strong></td><td>Recomendaciones de optimización de costos</td></tr>
</table>
        `
      },
      {
        id: "t4-2",
        titulo: "Planes de Soporte de AWS",
        icon: "🎧",
        desc: "Basic, Developer, Business y Enterprise",
        contenido: `
<h3>Comparativa de Planes de Soporte</h3>
<table class="comparison-table">
  <tr><th>Característica</th><th>Basic</th><th>Developer</th><th>Business</th><th>Enterprise</th></tr>
  <tr><td>Precio</td><td>Gratis</td><td>Desde $29/mes</td><td>Desde $100/mes</td><td>Desde $15.000/mes</td></tr>
  <tr><td>Soporte técnico</td><td>No</td><td>Email (horario laboral)</td><td>24/7 teléfono, chat, email</td><td>24/7 teléfono, chat, email</td></tr>
  <tr><td>Tiempo respuesta urgente</td><td>-</td><td>12-24h</td><td>1 hora (producción)</td><td>15 min (crítico de negocio)</td></tr>
  <tr><td>TAM dedicado</td><td>No</td><td>No</td><td>No</td><td>Sí</td></tr>
  <tr><td>Concierge de soporte</td><td>No</td><td>No</td><td>No</td><td>Sí</td></tr>
  <tr><td>Trusted Advisor completo</td><td>No (7 checks)</td><td>No (7 checks)</td><td>Sí (todos)</td><td>Sí (todos)</td></tr>
  <tr><td>AWS Support API</td><td>No</td><td>No</td><td>Sí</td><td>Sí</td></tr>
  <tr><td>Infrastructure Event Mgmt</td><td>No</td><td>No</td><td>Extra</td><td>Incluido</td></tr>
</table>

<div class="highlight-box">
📌 <strong>Para el examen:</strong><br>
• "Soporte telefónico 24/7" → mínimo <strong>Business</strong><br>
• "TAM dedicado" → solo <strong>Enterprise</strong><br>
• "Gestión de Eventos de Infraestructura" → solo <strong>Enterprise</strong> (incluido) o Business (extra)<br>
• "Concierge de soporte" → solo <strong>Enterprise</strong>
</div>

<h3>AWS Organizations y Facturación Consolidada</h3>
<ul>
  <li>Gestiona múltiples cuentas AWS desde una cuenta maestra</li>
  <li><strong>Facturación consolidada:</strong> Una sola factura para todas las cuentas</li>
  <li>Combina el uso de todas las cuentas para obtener <strong>descuentos por volumen</strong></li>
  <li><strong>Service Control Policies (SCPs):</strong> Restringe qué servicios y acciones pueden usar las cuentas hijo</li>
  <li>Permite separar entornos (dev/prod) en cuentas distintas manteniendo gobernanza central</li>
</ul>

<h3>Nivel Gratuito de AWS (Free Tier)</h3>
<ul>
  <li><strong>Siempre gratis:</strong> Lambda (1M solicitudes/mes), DynamoDB (25 GB), CloudWatch (métricas básicas)</li>
  <li><strong>12 meses gratis:</strong> EC2 t2.micro (750h/mes), S3 (5 GB), RDS (750h/mes)</li>
  <li><strong>Pruebas gratuitas:</strong> SageMaker, Redshift, Lightsail (tiempo limitado desde activación)</li>
</ul>
        `
      }
    ]
  }
];
