const app = document.getElementById("app");
const AREAS = { motor: "Motor", lenguaje: "Lenguaje", cognitivo: "Cognitivo", social: "Social", sensorial: "Sentidos" };

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const list = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
const fuente = (key) => {
  const f = FUENTES[key];
  return `<p class="source">Fuente: <a href="${f.url}" target="_blank" rel="noopener">${esc(f.nombre)}</a></p>`;
};
const aviso = `<p class="notice">Información orientativa basada en la AEP y la OMS. No sustituye la consulta con tu pediatra.</p>`;
const etapaById = (id) => DATA.etapas.find((e) => e.id === id);

const juegoCard = (j) => `
  <details>
    <summary>${esc(j.titulo)} <span class="tag">${AREAS[j.area]}</span></summary>
    <p>${esc(j.como)}</p>
    <p class="muted">🧺 ${esc(j.material)} · ⏱ ${esc(j.duracion)}<br>👶 ${j.etapas.map((id) => esc(etapaById(id).rango)).join(", ")}</p>
  </details>`;

// Índice plano de todo el contenido para el buscador.
const indice = [
  ...DATA.etapas.map((e) => ({
    titulo: `${e.titulo} (${e.rango})`, href: `#/etapa/${e.id}`,
    texto: [e.resumen, ...e.hitos, ...e.alimentacion, ...e.sueno, ...e.cuidados, ...e.consultar].join(" "),
  })),
  ...DATA.salud.flatMap((s) => s.fichas.map((f) => ({ titulo: f.titulo, href: `#/salud/${s.id}`, texto: f.puntos.join(" ") }))),
  ...DATA.juegos.map((j) => ({ titulo: `Juego: ${j.titulo}`, href: `#/juegos`, texto: `${j.como} ${j.material} ${AREAS[j.area]}` })),
  { titulo: "Urgencias y atragantamiento", href: "#/urgencias",
    texto: [...DATA.urgencias.llamar, ...DATA.urgencias.urgenciasHoy, ...DATA.urgencias.atragantamiento.flatMap((a) => a.pasos)].join(" ") },
];
const normaliza = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
indice.forEach((i) => (i.busca = normaliza(`${i.titulo} ${i.texto}`)));

function buscar(q) {
  const palabras = normaliza(q).split(/\s+/).filter(Boolean);
  if (!palabras.length) return "";
  const res = indice.filter((i) => palabras.every((p) => i.busca.includes(p)));
  if (!res.length) return `<p class="muted">Sin resultados para «${esc(q)}».</p>`;
  return res.map((r) => `<a class="card" href="${r.href}"><strong>${esc(r.titulo)}</strong></a>`).join("");
}

const vistas = {
  "": () => `
    <h1>Hola 👋</h1>
    <p>Todo lo que necesitas para cuidar a tu bebé, de 0 a 3 años.</p>
    <input type="search" id="q" placeholder="Buscar: fiebre, siesta, cólico…" aria-label="Buscar">
    <div id="resultados" aria-live="polite"></div>
    <div class="grid" style="margin-top:12px">
      <a class="card" href="#/etapas"><span class="icon">👶</span><strong>Etapas</strong><small>Mes a mes</small></a>
      ${DATA.salud.map((s) => `<a class="card" href="#/salud/${s.id}"><span class="icon">${s.icono}</span><strong>${esc(s.titulo)}</strong></a>`).join("")}
      <a class="card" href="#/juegos"><span class="icon">🧸</span><strong>Juegos</strong><small>Estimulación</small></a>
      <a class="card" href="#/urgencias"><span class="icon">🚨</span><strong>Urgencias</strong><small>Cuándo ir y qué hacer</small></a>
    </div>
    ${aviso}`,

  etapas: () => `
    <h1>Etapas</h1>
    ${DATA.etapas.map((e) => `<a class="card" href="#/etapa/${e.id}"><strong>${esc(e.rango)} · ${esc(e.titulo)}</strong><small>${esc(e.resumen)}</small></a>`).join("")}`,

  etapa: (id) => {
    const e = etapaById(id);
    if (!e) return vistas.etapas();
    const juegos = DATA.juegos.filter((j) => j.etapas.includes(id));
    return `
      <a class="back" href="#/etapas">← Etapas</a>
      <h1>${esc(e.titulo)} <small class="muted">${esc(e.rango)}</small></h1>
      <p>${esc(e.resumen)}</p>
      <h2>🌱 Desarrollo</h2>${list(e.hitos)}
      <p class="source">Cada bebé lleva su ritmo; son referencias, no exámenes.</p>
      <h2>🍼 Alimentación</h2>${list(e.alimentacion)}
      <h2>🌙 Sueño</h2>${list(e.sueno)}
      <h2>🛁 Cuidados</h2>${list(e.cuidados)}
      <h2>🧸 Juegos para esta etapa</h2>${juegos.map(juegoCard).join("")}
      <div class="alert"><h2>Consulta con tu pediatra si…</h2>${list(e.consultar)}</div>
      ${fuente("aep")}`;
  },

  salud: (id) => {
    const s = DATA.salud.find((x) => x.id === id);
    if (!s) return `
      <h1>Salud</h1>
      ${DATA.salud.map((x) => `<a class="card" href="#/salud/${x.id}"><strong>${x.icono} ${esc(x.titulo)}</strong><small>${x.fichas.map((f) => esc(f.titulo)).join(" · ")}</small></a>`).join("")}
      ${aviso}`;
    return `
      <a class="back" href="#/salud">← Salud</a>
      <h1>${s.icono} ${esc(s.titulo)}</h1>
      ${s.fichas.map((f, i) => `<details${i === 0 ? " open" : ""}><summary>${esc(f.titulo)}</summary>${list(f.puntos)}${fuente(f.fuente)}</details>`).join("")}
      ${aviso}`;
  },

  juegos: (id) => {
    const juegos = id ? DATA.juegos.filter((j) => j.etapas.includes(id)) : DATA.juegos;
    return `
      <h1>Juegos y estimulación</h1>
      <p class="muted">Lo mejor que puedes darle es tiempo contigo. Pocos minutos y a menudo, cuando esté despierto y tranquilo.</p>
      <div class="chips">
        <a class="chip" href="#/juegos" aria-current="${!id}">Todos</a>
        ${DATA.etapas.map((e) => `<a class="chip" href="#/juegos/${e.id}" aria-current="${e.id === id}">${esc(e.rango)}</a>`).join("")}
      </div>
      ${juegos.map(juegoCard).join("")}`;
  },

  urgencias: () => {
    const u = DATA.urgencias;
    return `
      <h1>🚨 Urgencias</h1>
      ${u.telefonos.map((t) => `<a class="call" href="tel:${t.numero}">📞 ${esc(t.nombre)}: ${esc(t.numero)}</a>`).join("")}
      <div class="alert"><h2>Llama al 112 si…</h2>${list(u.llamar)}</div>
      <h2>Ve a urgencias si…</h2>${list(u.urgenciasHoy)}
      <h2>Atragantamiento</h2>
      ${u.atragantamiento.map((a) => `<details><summary>${esc(a.titulo)}</summary><ol>${a.pasos.map((p) => `<li>${esc(p)}</li>`).join("")}</ol></details>`).join("")}
      <p class="notice">Un curso de primeros auxilios pediátricos (muchos centros de salud y la Cruz Roja los ofrecen) es la mejor preparación.</p>
      ${fuente("erc")}`;
  },
};

function render() {
  const [ruta = "", param] = location.hash.replace(/^#\/?/, "").split("/");
  const vista = vistas[ruta] || vistas[""];
  app.innerHTML = vista(param);
  const tab = ruta === "etapa" ? "etapas" : vistas[ruta] ? ruta : "";
  document.querySelectorAll(".tabs a").forEach((a) =>
    a.dataset.tab === tab ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  const q = document.getElementById("q");
  if (q) q.addEventListener("input", () => (document.getElementById("resultados").innerHTML = buscar(q.value)));
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

window.addEventListener("hashchange", render);
render();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
