/* ============================================================
   AWS Cloud Practitioner — App Principal
   ============================================================ */

// ---- Estado global ----
const STATE = {
  section: 'inicio',
  glosarioFilter: 'Todos',
  glosarioSearch: '',
  temarioDomain: 'd1',
  mapaAllOpen: false,
  exam: {
    id: null,
    current: 0,
    answers: {},      // { qIdx: [optIdx, ...] }
    revealed: {},     // { qIdx: true }
    startTime: null,
    timerInterval: null,
    elapsedSec: 0,
    submitted: false,
    reviewing: false
  }
};

// ---- Progreso en localStorage ----
const PROG_KEY = 'awscp_progress';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROG_KEY)) || {}; }
  catch { return {}; }
}

function saveProgress(data) {
  const prog = loadProgress();
  Object.assign(prog, data);
  localStorage.setItem(PROG_KEY, JSON.stringify(prog));
}

function getExamProgress(examId) {
  const prog = loadProgress();
  return prog[`exam_${examId}`] || null;
}

function saveExamResult(examId, score, total, time) {
  saveProgress({ [`exam_${examId}`]: { score, total, pct: Math.round(score / total * 100), time, date: new Date().toLocaleDateString('es-ES') } });
}

// ---- Router ----
function navigate(section) {
  if (STATE.section === 'simulacros' && section !== 'simulacros') {
    stopTimer();
  }
  STATE.section = section;
  document.querySelectorAll('.nav-link, .mobile-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === section);
  });
  document.querySelectorAll('.section').forEach(s => {
    s.classList.toggle('active', s.id === section);
  });
  window.scrollTo(0, 0);
  closeMobileMenu();
}

// ---- Mobile menu ----
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ---- Utilidades ----
function el(id) { return document.getElementById(id); }

function h(strings, ...vals) {
  return String.raw({ raw: strings }, ...vals);
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ---- INICIO ----
function renderInicio() {
  const prog = loadProgress();
  const examsCompleted = SIMULACROS.filter(e => getExamProgress(e.id)).length;
  const scores = SIMULACROS.map(e => getExamProgress(e.id)?.pct).filter(Boolean);
  const avgScore = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : 0;
  const topicsDone = parseInt(prog.topicsDone || 0);
  const glossarySeen = parseInt(prog.glossarySeen || 0);

  const sections = [
    { id: 'temario', icon: '📚', title: 'Temario', desc: 'Repasa los 4 dominios del examen con contenido completo en castellano.' },
    { id: 'glosario', icon: '📖', title: 'Glosario', desc: `+${GLOSARIO.length} términos con definiciones. Búsqueda instantánea.` },
    { id: 'mapa', icon: '🗺️', title: 'Mapa Mental', desc: 'Esquema visual expandible de todos los servicios AWS organizados por dominio.' },
    { id: 'trucos', icon: '💡', title: 'Trucos', desc: 'Estrategias de examen, mnemónicos y guía para el día D.' },
    { id: 'simulacros', icon: '📝', title: 'Simulacros', desc: `${SIMULACROS.length} simulacros completos traducidos al castellano con corrección inmediata.` },
  ];

  el('inicio').innerHTML = `
    <div class="section-hero">
      <h1>☁ Preparación AWS Cloud Practitioner</h1>
      <p>Todo lo que necesitas para aprobar la certificación AWS CLF-C02 en un solo lugar, en castellano.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div class="stat-value">${examsCompleted}/${SIMULACROS.length}</div>
        <div class="stat-label">Simulacros completados</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-value">${avgScore ? avgScore + '%' : '—'}</div>
        <div class="stat-label">Puntuación media</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">☁️</div>
        <div class="stat-value">${GLOSARIO.length}</div>
        <div class="stat-label">Términos en el glosario</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🎯</div>
        <div class="stat-value">${avgScore >= 80 ? '✅' : avgScore >= 70 ? '⚡' : avgScore > 0 ? '📈' : '🚀'}</div>
        <div class="stat-label">${avgScore >= 80 ? '¡Listo para el examen!' : avgScore >= 70 ? 'Casi listo' : avgScore > 0 ? 'En progreso' : 'Empieza ahora'}</div>
      </div>
    </div>

    <h2 style="margin-bottom:16px">Acceso rápido</h2>
    <div class="quick-actions">
      ${sections.map(s => `
        <a class="action-card" href="#${s.id}" data-section="${s.id}">
          <div class="action-icon">${s.icon}</div>
          <div class="action-title">${s.title}</div>
          <div class="action-desc">${s.desc}</div>
        </a>
      `).join('')}
    </div>

    <div class="divider"></div>

    <h2 style="margin-bottom:16px">Dominios del Examen</h2>
    <div class="domains-grid">
      ${TEMARIO.map(d => {
        const done = (prog[`domain_${d.id}`] || 0);
        const total = d.temas.length;
        const pct = Math.round(done/total*100);
        return `
          <div class="domain-card" onclick="navigate('temario'); switchDomain('${d.id}')">
            <div class="domain-header">
              <div>
                <div class="domain-title">${d.icon} ${d.dominio.split(':')[1].trim()}</div>
                <div class="domain-desc">${d.temas.length} temas · ${done}/${total} revisados</div>
              </div>
              <div class="domain-pct">${d.pct}</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <div class="divider"></div>

    <h2 style="margin-bottom:8px">Simulacros recientes</h2>
    <p style="margin-bottom:16px">Tu historial de resultados</p>
    <div class="simulacros-grid">
      ${SIMULACROS.map(e => {
        const p = getExamProgress(e.id);
        const scoreClass = !p ? 'score-none' : p.pct >= 70 ? 'score-pass' : 'score-fail';
        const scoreText = !p ? 'Sin realizar' : `${p.pct}% · ${p.date}`;
        return `
          <div class="exam-card" onclick="navigate('simulacros')">
            <div class="exam-num">${e.titulo}</div>
            <div class="exam-title">${e.desc}</div>
            <div class="exam-score-badge ${scoreClass}">${!p ? '—' : (p.pct >= 70 ? '✅' : '❌')} ${scoreText}</div>
            <div class="progress-bar" style="margin-top:8px">
              <div class="progress-fill ${p?.pct >= 70 ? 'green' : p ? 'red' : ''}" style="width:${p?.pct || 0}%"></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ---- TEMARIO ----
function renderTemario() {
  const dominio = TEMARIO.find(d => d.id === STATE.temarioDomain) || TEMARIO[0];
  const prog = loadProgress();

  el('temario').innerHTML = `
    <div class="section-hero">
      <h1>📚 Temario de Repaso</h1>
      <p>Los 4 dominios del examen AWS Cloud Practitioner. Haz clic en cada tema para expandirlo.</p>
    </div>

    <div class="temario-tabs">
      ${TEMARIO.map(d => `
        <button class="tab-btn ${d.id === STATE.temarioDomain ? 'active' : ''}" onclick="switchDomain('${d.id}')">
          ${d.icon} ${d.dominio.split(':')[1].trim()} <span class="badge badge-orange" style="margin-left:4px">${d.pct}</span>
        </button>
      `).join('')}
    </div>

    <div class="topic-list" id="topicList">
      ${dominio.temas.map(t => {
        const isDone = prog[`topic_${t.id}`];
        return `
          <div class="topic-card" id="card-${t.id}">
            <div class="topic-header" onclick="toggleTopic('${t.id}')">
              <div class="topic-title-row">
                <span class="topic-icon">${t.icon}</span>
                <div>
                  <div class="topic-name">${t.titulo} ${isDone ? '<span class="badge badge-green" style="margin-left:6px">✓ Revisado</span>' : ''}</div>
                  <div class="topic-desc">${t.desc}</div>
                </div>
              </div>
              <span class="topic-chevron">▼</span>
            </div>
            <div class="topic-body">
              <div class="topic-content">${t.contenido}</div>
              <div style="margin-top:16px; display:flex; gap:8px">
                <button class="btn btn-primary btn-sm" onclick="markTopic('${t.id}', true)">✓ Marcar como revisado</button>
                <button class="btn btn-ghost btn-sm" onclick="markTopic('${t.id}', false)">↩ Desmarcar</button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function switchDomain(id) {
  STATE.temarioDomain = id;
  renderTemario();
}

function toggleTopic(id) {
  const card = document.getElementById(`card-${id}`);
  card.classList.toggle('open');
}

function markTopic(id, done) {
  const prog = loadProgress();
  prog[`topic_${id}`] = done ? 1 : 0;
  // Count domain progress
  const domain = TEMARIO.find(d => d.temas.some(t => t.id === id));
  if (domain) {
    const done2 = domain.temas.filter(t => prog[`topic_${t.id}`]).length;
    prog[`domain_${domain.id}`] = done2;
  }
  localStorage.setItem(PROG_KEY, JSON.stringify(prog));
  renderTemario();
  // Re-open the card
  setTimeout(() => {
    const card = document.getElementById(`card-${id}`);
    if (card) card.classList.add('open');
  }, 10);
}

// ---- GLOSARIO ----
function renderGlosario() {
  const cats = ['Todos', ...new Set(GLOSARIO.map(g => g.cat))];
  const filtered = GLOSARIO.filter(g => {
    const matchCat = STATE.glosarioFilter === 'Todos' || g.cat === STATE.glosarioFilter;
    const matchSearch = !STATE.glosarioSearch ||
      g.nombre.toLowerCase().includes(STATE.glosarioSearch.toLowerCase()) ||
      g.def.toLowerCase().includes(STATE.glosarioSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  el('glosario').innerHTML = `
    <div class="section-hero">
      <h1>📖 Glosario AWS</h1>
      <p>${GLOSARIO.length} términos clave con definiciones completas. Busca por nombre o categoría.</p>
    </div>

    <div class="glosario-search">
      <span class="search-icon">🔍</span>
      <input type="text" id="glosarioInput" placeholder="Buscar término o definición..." value="${escHtml(STATE.glosarioSearch)}" oninput="filterGlosario(this.value)">
    </div>

    <div class="glosario-filters">
      ${cats.map(c => `
        <button class="filter-btn ${c === STATE.glosarioFilter ? 'active' : ''}" onclick="setGlosarioFilter('${c}')">
          ${c}
        </button>
      `).join('')}
    </div>

    <div class="glosario-count">${filtered.length} términos encontrados</div>

    <div class="glosario-grid">
      ${filtered.map((g, i) => `
        <div class="glosario-term" id="term-${i}" onclick="toggleTerm(${i})">
          <div class="term-left">
            <div class="term-name">${escHtml(g.nombre)}</div>
            <div class="term-def">${escHtml(g.def)}</div>
          </div>
          <div class="term-category">${escHtml(g.cat)}</div>
        </div>
      `).join('')}
    </div>
  `;

  // Focus search input
  setTimeout(() => { const inp = el('glosarioInput'); if(inp) inp.focus(); }, 50);
}

function filterGlosario(val) {
  STATE.glosarioSearch = val;
  renderGlosario();
}

function setGlosarioFilter(cat) {
  STATE.glosarioFilter = cat;
  renderGlosario();
}

function toggleTerm(i) {
  const t = document.getElementById(`term-${i}`);
  if (t) t.classList.toggle('expanded');
}

// ---- MAPA MENTAL ----
function renderMapa() {
  el('mapa').innerHTML = `
    <div class="section-hero">
      <h1>🗺️ Mapa Mental AWS</h1>
      <p>Esquema visual expandible de todos los servicios AWS organizados por dominio del examen.</p>
    </div>

    <div class="mapa-legend">
      ${MAPA.map(d => `<div class="legend-item"><div class="legend-dot" style="background:${getColor(d.clase)}"></div>${d.nombre} (${d.pct})</div>`).join('')}
    </div>

    <div class="mapa-controls">
      <button class="btn btn-secondary btn-sm" onclick="mapaToggleAll(true)">↓ Expandir todo</button>
      <button class="btn btn-secondary btn-sm" onclick="mapaToggleAll(false)">↑ Colapsar todo</button>
    </div>

    <div class="mapa-tree">
      <div class="tree-root">☁ AWS Cloud Practitioner (CLF-C02)</div>

      ${MAPA.map(d => `
        <div class="tree-domain ${d.clase}" id="td-${d.id}">
          <div class="tree-domain-header" onclick="toggleDomain('${d.id}')">
            <span class="tree-domain-icon">${d.icon}</span>
            <span class="tree-domain-name">${d.nombre}</span>
            <span class="tree-domain-pct">${d.pct}</span>
            <span class="tree-chevron">▶</span>
          </div>
          <div class="tree-children">
            ${d.categorias.map(c => `
              <div class="tree-category" id="tc-${c.id}">
                <div class="tree-cat-header" onclick="toggleCat('${c.id}')">
                  <span>${c.icon}</span>
                  <span class="tree-cat-name">${c.nombre}</span>
                  <span class="tree-cat-chevron">▶</span>
                </div>
                <div class="tree-services">
                  ${c.servicios.map(s => `
                    <div class="tree-service">
                      <div>
                        <div class="tree-service-name">▸ ${escHtml(s.nombre)}</div>
                        <div class="tree-service-desc">${escHtml(s.desc)}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function getColor(clase) {
  return { d1: '#FF9900', d2: '#fc8181', d3: '#4299e1', d4: '#48bb78' }[clase] || '#ccc';
}

function toggleDomain(id) {
  document.getElementById(`td-${id}`)?.classList.toggle('open');
}

function toggleCat(id) {
  document.getElementById(`tc-${id}`)?.classList.toggle('open');
}

function mapaToggleAll(open) {
  document.querySelectorAll('.tree-domain').forEach(d => d.classList.toggle('open', open));
  document.querySelectorAll('.tree-category').forEach(c => c.classList.toggle('open', open));
}

// ---- TRUCOS ----
function renderTrucos() {
  el('trucos').innerHTML = `
    <div class="section-hero">
      <h1>💡 Trucos y Estrategias</h1>
      <p>Todo lo que necesitas saber para el día del examen: método, mnemónicos y pistas clave.</p>
    </div>

    <div class="trucos-grid">
      ${TRUCOS.map(t => `
        <div class="truco-card" id="tc-truco-${t.id}">
          <div class="truco-header" onclick="toggleTruco('${t.id}')">
            <div class="truco-left">
              <span class="truco-icon">${t.icon}</span>
              <div>
                <div class="truco-title">${t.titulo}</div>
                <div class="truco-subtitle">${t.subtitulo}</div>
              </div>
            </div>
            <span class="truco-arrow">▼</span>
          </div>
          <div class="truco-body">
            <div class="truco-content">
              ${renderTrucoBody(t)}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderTrucoBody(t) {
  let html = '';

  // Items normales
  if (t.items) {
    t.items.forEach((item, idx) => {
      if (item.tipo === 'lista') {
        html += `<h3 style="margin-bottom:8px;color:var(--text)">${item.titulo}</h3>`;
        item.puntos.forEach((punto, i) => {
          html += `
            <div class="truco-item">
              <div class="truco-num">${i+1}</div>
              <div class="truco-text">${punto}</div>
            </div>
          `;
        });
      } else if (item.tipo === 'mnemonic') {
        html += `
          <div class="mnemonic-box">
            <div class="mnemonic-title">${item.titulo}</div>
            <div class="mnemonic-letters">${item.letras}</div>
            <div class="mnemonic-list">
              ${item.definiciones.map(d => `<div><span>${d.letra}</span> → ${escHtml(d.texto)}</div>`).join('')}
            </div>
          </div>
        `;
      }
    });
  }

  // Confusiones
  if (t.confusiones) {
    t.confusiones.forEach(c => {
      html += `
        <div class="confusion-pair">
          <div class="confusion-item">
            <div class="confusion-name">🔵 ${escHtml(c.a.nombre)}</div>
            <div class="confusion-def">${escHtml(c.a.def)}</div>
          </div>
          <div class="confusion-item">
            <div class="confusion-name" style="color:var(--accent)">🟠 ${escHtml(c.b.nombre)}</div>
            <div class="confusion-def">${escHtml(c.b.def)}</div>
          </div>
        </div>
      `;
    });
  }

  return html;
}

function toggleTruco(id) {
  document.getElementById(`tc-truco-${id}`)?.classList.toggle('open');
}

// ---- SIMULACROS ----
function renderSimulacros() {
  el('simulacros').innerHTML = `
    <div id="examList">
      <div class="section-hero">
        <h1>📝 Simulacros de Examen</h1>
        <p>${SIMULACROS.length} simulacros completos traducidos al castellano. Con corrección inmediata, explicaciones y puntuación final.</p>
      </div>

      <div class="simulacros-grid">
        ${SIMULACROS.map(e => {
          const p = getExamProgress(e.id);
          const scoreClass = !p ? 'score-none' : p.pct >= 70 ? 'score-pass' : 'score-fail';
          return `
            <div class="exam-card">
              <div class="exam-num">${e.titulo}</div>
              <div class="exam-title" style="margin-bottom:4px;font-size:14px">${e.desc}</div>
              <div class="exam-info">${e.preguntas.length} preguntas · ~${Math.round(e.preguntas.length * 1.4)} min</div>
              ${p ? `
                <div class="exam-score-badge ${scoreClass}">
                  ${p.pct >= 70 ? '✅' : '❌'} ${p.pct}% — ${p.score}/${p.total} correctas · ${p.date}
                </div>
                <div class="progress-bar" style="margin-bottom:12px">
                  <div class="progress-fill ${p.pct >= 70 ? 'green' : 'red'}" style="width:${p.pct}%"></div>
                </div>
              ` : `
                <div class="exam-score-badge score-none">Sin realizar</div>
              `}
              <div class="exam-actions">
                <button class="btn btn-primary btn-sm" onclick="startExam(${e.id})">
                  ${p ? '🔄 Repetir' : '▶ Comenzar'}
                </button>
                ${p ? `<button class="btn btn-ghost btn-sm" onclick="reviewExam(${e.id})">📋 Ver corrección</button>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="exam-runner" id="examRunner"></div>
  `;
}

// ---- EXAM RUNNER ----
function startExam(id) {
  const exam = SIMULACROS.find(e => e.id === id);
  if (!exam) return;

  STATE.exam = {
    id,
    current: 0,
    answers: {},
    revealed: {},
    startTime: Date.now(),
    timerInterval: null,
    elapsedSec: 0,
    submitted: false,
    reviewing: false
  };

  el('examList').classList.add('hidden');
  el('examRunner').classList.add('active');

  renderExamQuestion();
  startTimer();
}

function reviewExam(id) {
  const exam = SIMULACROS.find(e => e.id === id);
  if (!exam) return;

  // Auto-reveal all answers in review mode
  const answers = {};
  const revealed = {};
  exam.preguntas.forEach((q, i) => {
    answers[i] = q.r; // correct answers as "given answers"
    revealed[i] = true;
  });

  STATE.exam = {
    id, current: 0,
    answers,
    revealed,
    startTime: null, timerInterval: null, elapsedSec: 0,
    submitted: true, reviewing: true
  };

  el('examList').classList.add('hidden');
  el('examRunner').classList.add('active');
  renderExamQuestion();
}

function startTimer() {
  STATE.exam.timerInterval = setInterval(() => {
    STATE.exam.elapsedSec++;
    updateTimer();
  }, 1000);
}

function stopTimer() {
  if (STATE.exam.timerInterval) {
    clearInterval(STATE.exam.timerInterval);
    STATE.exam.timerInterval = null;
  }
}

function updateTimer() {
  const timerEl = document.getElementById('examTimerDisplay');
  if (!timerEl) return;
  const s = STATE.exam.elapsedSec;
  const min = Math.floor(s / 60);
  const sec = s % 60;
  const str = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  timerEl.textContent = str;
  const exam = SIMULACROS.find(e => e.id === STATE.exam.id);
  const maxSec = (exam?.preguntas.length || 50) * 84; // 1.4 min/pregunta
  if (s > maxSec * 0.85) timerEl.classList.add('warning');
}

function renderExamQuestion() {
  const exam = SIMULACROS.find(e => e.id === STATE.exam.id);
  if (!exam) return;

  const { current, answers, revealed, submitted, reviewing } = STATE.exam;
  const q = exam.preguntas[current];
  const total = exam.preguntas.length;
  const isMulti = q.multi;
  const userAnswers = answers[current] || [];
  const isRevealed = revealed[current] || submitted;

  const runner = el('examRunner');
  runner.innerHTML = `
    <div style="max-width:760px;margin:0 auto">
      <!-- Topbar -->
      <div class="exam-topbar">
        <div class="exam-topbar-left">
          <div class="exam-topbar-title">${exam.titulo}</div>
          <div class="exam-topbar-sub">${reviewing ? '📋 Modo revisión' : `Pregunta ${current+1} de ${total}`}</div>
        </div>
        ${!reviewing && !submitted ? `
          <div id="examTimerDisplay" class="exam-timer">00:00</div>
        ` : `<div class="exam-timer" style="color:var(--green)">${reviewing ? '📋' : '✅'}</div>`}
        <button class="btn btn-ghost btn-sm" onclick="exitExam()">✕ Salir</button>
      </div>

      <!-- Progress -->
      <div class="exam-progress-row">
        <span class="exam-progress-label">${current+1}/${total}</span>
        <div class="progress-bar" style="flex:1">
          <div class="progress-fill" style="width:${Math.round((current+1)/total*100)}%"></div>
        </div>
        <span class="exam-progress-label">${Math.round((current+1)/total*100)}%</span>
      </div>

      <!-- Question -->
      <div class="question-box">
        <div class="question-num">Pregunta ${current+1}</div>
        ${isMulti ? '<div class="question-badge">✦ Selecciona VARIAS respuestas correctas</div>' : ''}
        <div class="question-text">${escHtml(q.p)}</div>

        <div class="options-list">
          ${q.ops.map((opt, i) => {
            const letters = ['A','B','C','D','E'];
            const isSelected = userAnswers.includes(i);
            const isCorrect = q.r.includes(i);
            let cls = '';
            if (isRevealed) {
              if (isCorrect) cls = 'correct';
              else if (isSelected && !isCorrect) cls = 'incorrect';
            } else if (isSelected) {
              cls = 'selected';
            }
            return `
              <button class="option-btn ${cls}"
                ${isRevealed ? 'disabled' : ''}
                onclick="toggleAnswer(${current}, ${i})">
                <div class="option-letter">${letters[i]}</div>
                <div>${escHtml(opt)}</div>
              </button>
            `;
          }).join('')}
        </div>

        ${isRevealed ? `
          <div class="explanation-box show">
            <div class="expl-label">✅ Respuesta correcta</div>
            Las opciones correctas son: <strong>${q.r.map(r => ['A','B','C','D','E'][r]).join(', ')}</strong>
            ${q.multi ? `<br><span style="font-size:12px;color:var(--text3);margin-top:4px;display:block">Esta pregunta requería seleccionar varias respuestas correctas.</span>` : ''}
          </div>
        ` : ''}
      </div>

      <!-- Nav -->
      <div class="exam-nav">
        <button class="btn btn-secondary btn-sm" onclick="goQuestion(${current-1})" ${current===0?'disabled':''}>← Anterior</button>

        <div class="question-dots">
          ${exam.preguntas.slice(0, Math.min(total,30)).map((_,i) => {
            const ans = answers[i];
            const rev = revealed[i] || submitted;
            const q2 = exam.preguntas[i];
            let cls = '';
            if (rev && ans) {
              const correct = ans.length === q2.r.length && ans.every(a => q2.r.includes(a));
              cls = correct ? 'correct-d' : 'incorrect-d';
            } else if (ans?.length) cls = 'answered';
            if (i === current) cls += ' current';
            return `<div class="q-dot ${cls}" onclick="goQuestion(${i})" title="Pregunta ${i+1}"></div>`;
          }).join('')}
          ${total > 30 ? `<span style="font-size:11px;color:var(--text3)">+${total-30}</span>` : ''}
        </div>

        ${!submitted && !reviewing ? `
          ${current < total-1
            ? `<button class="btn btn-primary btn-sm" onclick="goQuestion(${current+1})">Siguiente →</button>`
            : `<button class="btn btn-primary btn-sm" onclick="submitExam()">✅ Finalizar</button>`
          }
        ` : `
          ${current < total-1
            ? `<button class="btn btn-secondary btn-sm" onclick="goQuestion(${current+1})">Siguiente →</button>`
            : `<button class="btn btn-primary btn-sm" onclick="showResults()">📊 Ver resultados</button>`
          }
        `}
      </div>

      ${!isRevealed && !submitted ? `
        <div style="text-align:center;margin-top:12px">
          <button class="btn btn-ghost btn-sm" onclick="revealAnswer(${current})">👁 Ver respuesta correcta</button>
        </div>
      ` : ''}
    </div>
  `;

  if (!reviewing && !submitted) {
    updateTimer();
  }
}

function toggleAnswer(qIdx, optIdx) {
  const exam = SIMULACROS.find(e => e.id === STATE.exam.id);
  if (!exam) return;
  const q = exam.preguntas[qIdx];
  if (STATE.exam.revealed[qIdx] || STATE.exam.submitted) return;

  let current = STATE.exam.answers[qIdx] || [];

  if (q.multi) {
    if (current.includes(optIdx)) {
      current = current.filter(x => x !== optIdx);
    } else {
      current = [...current, optIdx];
    }
  } else {
    current = current.includes(optIdx) ? [] : [optIdx];
    // Auto-reveal on single answer selection
    STATE.exam.answers[qIdx] = current;
    STATE.exam.revealed[qIdx] = true;
    renderExamQuestion();
    return;
  }

  STATE.exam.answers[qIdx] = current;
  renderExamQuestion();
}

function revealAnswer(qIdx) {
  STATE.exam.revealed[qIdx] = true;
  renderExamQuestion();
}

function goQuestion(idx) {
  const exam = SIMULACROS.find(e => e.id === STATE.exam.id);
  if (!exam || idx < 0 || idx >= exam.preguntas.length) return;
  STATE.exam.current = idx;
  renderExamQuestion();
}

function submitExam() {
  stopTimer();
  STATE.exam.submitted = true;
  // Calculate score
  const exam = SIMULACROS.find(e => e.id === STATE.exam.id);
  if (!exam) return;
  let score = 0;
  exam.preguntas.forEach((q, i) => {
    const ans = STATE.exam.answers[i] || [];
    if (ans.length === q.r.length && ans.every(a => q.r.includes(a))) score++;
  });
  saveExamResult(STATE.exam.id, score, exam.preguntas.length, STATE.exam.elapsedSec);
  showResults();
}

function showResults() {
  const exam = SIMULACROS.find(e => e.id === STATE.exam.id);
  if (!exam) return;
  stopTimer();

  let correct = 0, wrong = 0, unanswered = 0;
  exam.preguntas.forEach((q, i) => {
    const ans = STATE.exam.answers[i] || [];
    if (!ans.length) { unanswered++; return; }
    if (ans.length === q.r.length && ans.every(a => q.r.includes(a))) correct++;
    else wrong++;
  });

  const total = exam.preguntas.length;
  const pct = Math.round(correct / total * 100);
  const pass = pct >= 70;
  const min = Math.floor(STATE.exam.elapsedSec / 60);
  const sec = STATE.exam.elapsedSec % 60;
  const timeStr = `${min}m ${sec}s`;

  el('examRunner').innerHTML = `
    <div class="results-box">
      <div class="results-hero">
        <div class="results-emoji">${pass ? '🎉' : '📚'}</div>
        <div class="results-score ${pass ? 'score-pass-text' : 'score-fail-text'}">${pct}%</div>
        <div class="results-status">${pass ? '¡Aprobado!' : 'Necesitas seguir practicando'}</div>
        <div class="results-meta">${exam.titulo} · ${timeStr} · ${new Date().toLocaleDateString('es-ES')}</div>
        ${pass ? '<div class="badge badge-green" style="margin-top:8px">✅ Superado el umbral del 70%</div>' : '<div class="badge badge-red" style="margin-top:8px">❌ Por debajo del 70% mínimo</div>'}
      </div>

      <div class="results-stats">
        <div class="result-stat">
          <div class="result-stat-value" style="color:var(--green)">${correct}</div>
          <div class="result-stat-label">Correctas</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value" style="color:var(--red)">${wrong}</div>
          <div class="result-stat-label">Incorrectas</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value" style="color:var(--text2)">${unanswered}</div>
          <div class="result-stat-label">Sin responder</div>
        </div>
      </div>

      <div style="display:flex;gap:8px;margin-bottom:24px">
        <button class="btn btn-primary" onclick="startExam(${exam.id})">🔄 Repetir examen</button>
        <button class="btn btn-secondary" onclick="exitExam()">← Volver a simulacros</button>
        <button class="btn btn-ghost" onclick="showReviewList(${exam.id})">📋 Ver corrección</button>
      </div>

      <div class="progress-bar" style="margin-bottom:24px">
        <div class="progress-fill ${pass ? 'green' : 'red'}" style="width:${pct}%"></div>
      </div>

      <h2 style="margin-bottom:16px">Preguntas incorrectas o sin responder</h2>
      <div class="review-list">
        ${exam.preguntas.map((q, i) => {
          const ans = STATE.exam.answers[i] || [];
          const isCorrect = ans.length === q.r.length && ans.every(a => q.r.includes(a));
          if (isCorrect && ans.length > 0) return '';
          const letters = ['A','B','C','D','E'];
          return `
            <div class="review-item ${isCorrect ? 'correct-r' : 'incorrect-r'}">
              <div class="review-q">${i+1}. ${escHtml(q.p)}</div>
              ${ans.length > 0 ? `<div class="review-your">Tu respuesta: ${ans.map(a=>letters[a]).join(', ')} — ${ans.map(a=>escHtml(q.ops[a])).join(', ')}</div>` : `<div class="review-your">Sin responder</div>`}
              <div class="review-correct">✅ Correcta: ${q.r.map(a=>letters[a]).join(', ')} — ${q.r.map(a=>escHtml(q.ops[a])).join(', ')}</div>
            </div>
          `;
        }).filter(Boolean).join('') || '<div class="card" style="text-align:center;padding:24px">🎉 ¡No hubo errores!</div>'}
      </div>
    </div>
  `;
}

function showReviewList(id) {
  reviewExam(id);
}

function exitExam() {
  stopTimer();
  STATE.exam = { id: null, current: 0, answers: {}, revealed: {}, startTime: null, timerInterval: null, elapsedSec: 0, submitted: false, reviewing: false };
  el('examRunner').classList.remove('active');
  el('examRunner').innerHTML = '';
  el('examList').classList.remove('hidden');
  renderSimulacros();
  renderInicio();
}

// ---- INIT ----
function init() {
  // Render all sections
  renderInicio();
  renderTemario();
  renderGlosario();
  renderMapa();
  renderTrucos();
  renderSimulacros();

  // Event delegation para todos los data-section links
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-section]');
    if (!link) return;
    e.preventDefault();
    const section = link.dataset.section;
    if (!section) return;
    navigate(section);
    if (section === 'inicio') renderInicio();
    if (section === 'glosario') renderGlosario();
    if (section === 'simulacros') { renderSimulacros(); }
  });

  // Mobile toggle
  el('navToggle').addEventListener('click', () => {
    el('mobileMenu').classList.toggle('open');
  });

  // Hash routing
  const hash = window.location.hash.replace('#', '');
  const valid = ['inicio','temario','glosario','mapa','trucos','simulacros'];
  navigate(valid.includes(hash) ? hash : 'inicio');

  window.addEventListener('hashchange', () => {
    const h2 = window.location.hash.replace('#', '');
    if (valid.includes(h2)) navigate(h2);
  });

  // Cerrar menú móvil al hacer clic fuera
  document.addEventListener('click', e => {
    if (!e.target.closest('#navbar') && !e.target.closest('#mobileMenu') && !e.target.closest('#navToggle')) {
      closeMobileMenu();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
