// Comprueba que content.js está bien formado: node check.js
const assert = require("assert");
const { DATA, FUENTES } = require("./content.js");

const ids = new Set(DATA.etapas.map((e) => e.id));
assert.strictEqual(ids.size, DATA.etapas.length, "ids de etapa repetidos");
for (const e of DATA.etapas)
  for (const campo of ["titulo", "rango", "resumen", "hitos", "alimentacion", "sueno", "cuidados", "consultar"])
    assert.ok(e[campo] && e[campo].length, `etapa ${e.id}: falta ${campo}`);

for (const s of DATA.salud)
  for (const f of s.fichas) {
    assert.ok(f.puntos.length, `${s.id}/${f.titulo}: sin puntos`);
    assert.ok(FUENTES[f.fuente], `${s.id}/${f.titulo}: fuente desconocida ${f.fuente}`);
  }

const areas = ["motor", "lenguaje", "cognitivo", "social", "sensorial"];
for (const j of DATA.juegos) {
  assert.ok(j.etapas.length && j.etapas.every((id) => ids.has(id)), `juego ${j.titulo}: etapa inexistente`);
  assert.ok(areas.includes(j.area), `juego ${j.titulo}: área desconocida ${j.area}`);
}
for (const id of ids) assert.ok(DATA.juegos.some((j) => j.etapas.includes(id)), `etapa ${id} sin juegos`);

console.log(`OK: ${DATA.etapas.length} etapas, ${DATA.salud.reduce((n, s) => n + s.fichas.length, 0)} fichas de salud, ${DATA.juegos.length} juegos`);
