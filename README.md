# Cuídalo

Guía de crianza de 0 a 3 años, instalable en el móvil y usable sin conexión:
etapas mes a mes, salud (cuidados, alimentación, medicina, sueño, ejercicios), juegos de estimulación y urgencias.

Información orientativa basada en la AEP, la OMS y la AESAN. No sustituye al pediatra.

## Ver en local

```sh
python3 -m http.server 8000
# abre http://localhost:8000
```

## Añadir o corregir contenido

Todo el contenido está en `content.js`. Después de editarlo:

1. `node check.js` para comprobar que está bien formado.
2. Sube la constante `VERSION` en `sw.js` (p. ej. `cuidalo-v2`) para que los móviles con la app instalada descarguen los cambios.

## Publicar (GitHub Pages)

Settings → Pages → Deploy from a branch → `main` / `(root)`.
Abre la URL en el móvil y usa "Añadir a pantalla de inicio".
