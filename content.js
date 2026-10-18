// Todo el contenido de la app. Para añadir o corregir información, edita solo este archivo.
const FUENTES = {
  aep: { nombre: "AEP – En Familia", url: "https://enfamilia.aeped.es/" },
  oms: { nombre: "OMS", url: "https://www.who.int/es/health-topics/child-health" },
  cav: { nombre: "Calendario vacunal AEP", url: "https://vacunasaep.org/profesionales/calendario-de-vacunaciones-de-la-aep-2025" },
  aesan: { nombre: "AESAN", url: "https://www.aesan.gob.es/AECOSAN/web/para_el_consumidor/seccion/recomendaciones.htm" },
  sanidad: { nombre: "Ministerio de Sanidad", url: "https://www.sanidad.gob.es/areas/promocionPrevencion/entornosSaludables/escuela/familia.htm" },
  erc: { nombre: "Consejo Español de RCP", url: "https://www.cercp.org/" },
};

const DATA = {
  etapas: [
    {
      id: "0-1m", titulo: "Recién nacido", rango: "0 – 1 mes",
      resumen: "Semanas de adaptación: comer, dormir y mucho contacto piel con piel. No existe el bebé 'mal acostumbrado' a los brazos.",
      hitos: [
        "Reconoce tu voz y tu olor; mira caras a 20–30 cm.",
        "Mueve brazos y piernas de forma refleja (reflejo de Moro, succión, prensión).",
        "Llora para comunicar hambre, sueño, frío o necesidad de contacto.",
      ],
      alimentacion: [
        "Lactancia materna o fórmula a demanda: 8–12 tomas al día, también de noche.",
        "Señales de hambre: se chupa las manos, busca con la boca. El llanto es una señal tardía.",
        "Suele perder algo de peso los primeros días y recuperarlo hacia los 10–15 días.",
      ],
      sueno: [
        "Duerme 14–17 h repartidas en periodos cortos, sin diferenciar día y noche.",
        "Siempre boca arriba, en su cuna, en tu habitación.",
      ],
      cuidados: [
        "Cordón umbilical: mantenerlo limpio y seco; cae entre los 5 y 15 días.",
        "Piel con piel a diario: regula su temperatura y calma a ambos.",
        "Primera visita al pediatra y prueba del talón en los primeros días.",
      ],
      consultar: [
        "Fiebre (38 °C o más): en menores de 3 meses, siempre a urgencias.",
        "Color amarillo intenso que llega a piernas o no mejora, o heces muy pálidas.",
        "Rechaza varias tomas, está muy adormilado o moja menos de 5–6 pañales al día tras la primera semana.",
        "Ombligo rojo, con mal olor o supuración.",
      ],
    },
    {
      id: "1-3m", titulo: "Primeros meses", rango: "1 – 3 meses",
      resumen: "Llega la sonrisa social y el bebé empieza a 'conversar' con sonidos.",
      hitos: [
        "Sonrisa social hacia las 6–8 semanas.",
        "Emite sonidos ('ajó') y sigue objetos con la mirada.",
        "Boca abajo empieza a levantar la cabeza unos segundos.",
      ],
      alimentacion: [
        "Sigue a demanda; los brotes de crecimiento (picos de hambre) son normales.",
        "No necesita agua ni infusiones: la leche cubre todo.",
      ],
      sueno: [
        "Unas 14–17 h. Los periodos nocturnos empiezan a alargarse, pero despertar es normal.",
        "Ayuda a distinguir día y noche: luz y ruido normal de día, penumbra y calma de noche.",
      ],
      cuidados: [
        "Vacunas de los 2 meses.",
        "Tiempo boca abajo (tummy time) varias veces al día, siempre despierto y vigilado.",
        "El llanto suele alcanzar su pico hacia las 6 semanas y mejora a partir de los 3–4 meses.",
      ],
      consultar: [
        "No sigue con la mirada ni reacciona a sonidos fuertes.",
        "Llanto inconsolable muy distinto al habitual, vómitos en chorro o sangre en heces.",
      ],
    },
    {
      id: "3-6m", titulo: "Descubriendo las manos", rango: "3 – 6 meses",
      resumen: "Se ríe a carcajadas, agarra todo y se lo lleva a la boca.",
      hitos: [
        "Sostiene bien la cabeza; boca abajo se apoya en los antebrazos.",
        "Agarra juguetes y se los lleva a la boca.",
        "Se ríe a carcajadas; hacia los 6 meses empieza a voltearse.",
      ],
      alimentacion: [
        "Lactancia materna exclusiva hasta los 6 meses (OMS, AEP).",
        "Antes de empezar con sólidos hacia los 6 meses: se sienta con poco apoyo, muestra interés y ha perdido el reflejo de extrusión.",
      ],
      sueno: [
        "12–16 h (incluyendo 3–4 siestas).",
        "Hacia los 4 meses es habitual una 'regresión': más despertares por cambios en su sueño.",
      ],
      cuidados: [
        "Vacunas de los 4 meses.",
        "Cuando empiece a voltearse, nunca lo dejes solo en el cambiador o la cama.",
      ],
      consultar: [
        "No sostiene la cabeza a los 4 meses o no intenta agarrar objetos.",
        "No sonríe ni emite sonidos.",
      ],
    },
    {
      id: "6-9m", titulo: "Primeros alimentos", rango: "6 – 9 meses",
      resumen: "Empieza la alimentación complementaria y la exploración sentado.",
      hitos: [
        "Se sienta solo, primero con apoyo y luego sin él.",
        "Balbucea ('mamama', 'tatata') y responde a su nombre.",
        "Puede empezar a extrañar a desconocidos.",
      ],
      alimentacion: [
        "La leche sigue siendo el alimento principal; los sólidos complementan.",
        "Ofrece alimentos variados, sin sal ni azúcar añadidos, en puré, chafados o trozos blandos (BLW).",
        "Introduce los alérgenos (huevo bien cocido, pescado, gluten…) de uno en uno, sin retrasarlos.",
        "Ofrece agua en vaso con las comidas.",
      ],
      sueno: [
        "12–16 h con 2–3 siestas.",
      ],
      cuidados: [
        "Asegura la casa: enchufes, esquinas, productos de limpieza y medicamentos fuera de su alcance.",
        "Salen los primeros dientes (entre 6 y 12 meses): límpialos con gasa o cepillo y una cantidad de pasta con flúor del tamaño de un grano de arroz.",
      ],
      consultar: [
        "No se sienta con apoyo a los 9 meses o no balbucea.",
        "Tos, sibilancias o habones tras probar un alimento nuevo (si hay dificultad para respirar, 112).",
      ],
    },
    {
      id: "9-12m", titulo: "En movimiento", rango: "9 – 12 meses",
      resumen: "Gatea o se arrastra, se pone de pie y hace pinza con los dedos.",
      hitos: [
        "Gatea, se arrastra o se desplaza sentado (no todos gatean y es normal).",
        "Se pone de pie agarrado a los muebles.",
        "Pinza fina: coge cosas pequeñas con índice y pulgar. Dice adiós con la mano.",
      ],
      alimentacion: [
        "Puede comer casi lo mismo que la familia, adaptado de textura y sin sal.",
        "Nada de miel antes de los 12 meses (riesgo de botulismo).",
        "Evita frutos secos enteros, uvas enteras o trozos duros: riesgo de atragantamiento.",
      ],
      sueno: [
        "12–16 h con 2 siestas.",
      ],
      cuidados: [
        "Vigila escaleras, ventanas y objetos pequeños a su alcance.",
        "Silla del coche siempre a contramarcha (lo más tiempo posible, idealmente hasta los 4 años).",
      ],
      consultar: [
        "No se pone de pie con apoyo, no señala o no responde a su nombre a los 12 meses.",
        "Pierde habilidades que ya tenía (a cualquier edad).",
      ],
    },
    {
      id: "12-18m", titulo: "Primeros pasos", rango: "12 – 18 meses",
      resumen: "Camina, dice sus primeras palabras y quiere hacerlo todo solo.",
      hitos: [
        "Primeros pasos (normal entre los 9 y 18 meses).",
        "Primeras palabras con significado; entiende órdenes sencillas.",
        "Señala lo que quiere e imita lo que haces.",
      ],
      alimentacion: [
        "Puede tomar leche de vaca entera. La lactancia materna puede continuar tanto como madre e hijo quieran.",
        "Deja que coma solo con las manos o la cuchara aunque se manche.",
        "Evita pescados con mucho mercurio (pez espada, tiburón, atún rojo, lucio).",
      ],
      sueno: [
        "11–14 h; hacia los 15–18 meses suele pasar a una sola siesta.",
      ],
      cuidados: [
        "Vacunas de los 12 y 15 meses.",
        "Cepillado de dientes dos veces al día con pasta con flúor.",
      ],
      consultar: [
        "No camina a los 18 meses o no dice ninguna palabra.",
        "No señala para mostrar cosas ni mira a donde señalas.",
      ],
    },
    {
      id: "18-24m", titulo: "Pequeño explorador", rango: "18 – 24 meses",
      resumen: "Explosión del lenguaje, juego simbólico y primeras rabietas.",
      hitos: [
        "Corre, sube escaleras con ayuda y da patadas a un balón.",
        "Une dos palabras ('más agua') hacia los 24 meses.",
        "Juego simbólico: da de comer a un muñeco, habla por un 'teléfono'.",
      ],
      alimentacion: [
        "Come en la mesa con la familia; ofrécele y deja que decida cuánto come.",
        "El rechazo a alimentos nuevos (neofobia) es normal: sigue ofreciendo sin forzar.",
      ],
      sueno: [
        "11–14 h con una siesta.",
      ],
      cuidados: [
        "Las rabietas son normales: acompaña con calma, pon nombre a la emoción y mantén los límites.",
        "Sin pantallas antes de los 2 años salvo videollamadas (OMS, AEP).",
      ],
      consultar: [
        "No dice al menos 6 palabras a los 18 meses o no une dos palabras a los 24.",
        "No imita, no muestra interés por otros niños o no usa juego simbólico.",
      ],
    },
    {
      id: "2-3a", titulo: "Dos a tres años", rango: "2 – 3 años",
      resumen: "Habla en frases, juega con otros niños y gana autonomía (vestirse, el pañal…).",
      hitos: [
        "Frases de 3 palabras; le entienden la mayor parte de lo que dice hacia los 3 años.",
        "Salta con los dos pies, pedalea un triciclo.",
        "Empieza a jugar con otros niños y a esperar turnos.",
      ],
      alimentacion: [
        "Dieta variada como la familia: fruta, verdura, legumbres, cereales integrales.",
        "Agua como bebida habitual; evita zumos y refrescos.",
      ],
      sueno: [
        "10–13 h; algunos dejan la siesta hacia los 3 años.",
      ],
      cuidados: [
        "Retirada del pañal cuando muestre señales (avisa, se mantiene seco ratos largos), sin prisas ni castigos.",
        "Pantallas: menos de 1 hora al día de contenido de calidad, siempre acompañado.",
        "Primera revisión en el dentista recomendada antes de los 3 años.",
      ],
      consultar: [
        "Habla muy poco o no se le entiende nada, se cae a menudo o no juega a imitar.",
        "Pierde habilidades que ya tenía.",
      ],
    },
  ],

  salud: [
    {
      id: "cuidados", titulo: "Cuidados básicos", icono: "🛁",
      fichas: [
        {
          titulo: "El baño", fuente: "aep",
          puntos: [
            "No hace falta bañarle todos los días; 2–3 veces por semana basta los primeros meses.",
            "Agua a unos 36–37 °C (compruébala con el codo o un termómetro).",
            "Ten todo preparado antes: nunca lo dejes solo en el agua, ni un segundo.",
            "Jabón suave sin perfume y poca cantidad; seca bien los pliegues.",
          ],
        },
        {
          titulo: "Cordón umbilical", fuente: "aep",
          puntos: [
            "Lávalo con agua y jabón y sécalo bien; mantén el pañal doblado por debajo.",
            "Cae solo entre los 5 y 15 días. Un pequeño sangrado al caer es normal.",
            "Consulta si la piel alrededor se pone roja, huele mal o supura.",
          ],
        },
        {
          titulo: "Pañal y culito", fuente: "aep",
          puntos: [
            "Cámbialo a menudo; limpia con agua o toallitas sin perfume, de delante hacia atrás.",
            "Deja la piel secar al aire unos minutos.",
            "Si se irrita, pasta al agua (óxido de zinc) en cada cambio.",
          ],
        },
        {
          titulo: "Uñas, piel y ojos", fuente: "aep",
          puntos: [
            "Uñas: córtalas rectas con tijera de punta roma o lima, mejor cuando duerme.",
            "Costra láctea: aceite suave y cepillo blando; desaparece sola.",
            "Sin sol directo antes de los 6 meses: sombra, ropa y gorro.",
            "Ojos: limpia con suero fisiológico y una gasa distinta para cada ojo.",
          ],
        },
        {
          titulo: "Cólico y llanto", fuente: "aep",
          puntos: [
            "El llanto aumenta hasta las 6 semanas y mejora hacia los 3–4 meses.",
            "Prueba contacto piel con piel, porteo, mecer, ruido blanco o un paseo.",
            "Si te sientes desbordado, deja al bebé en un lugar seguro y sal un momento. Nunca lo zarandees.",
          ],
        },
      ],
    },
    {
      id: "alimentacion", titulo: "Alimentación", icono: "🍼",
      fichas: [
        {
          titulo: "Lactancia materna", fuente: "aep",
          puntos: [
            "Exclusiva hasta los 6 meses y, junto a otros alimentos, hasta los 2 años o más (OMS).",
            "A demanda: 8–12 tomas al día al principio.",
            "Agarre correcto: boca muy abierta, labios hacia fuera, más areola por abajo. No debe doler.",
            "Si hay dolor o dudas, busca a la matrona o un grupo de apoyo a la lactancia.",
            "Suplemento de vitamina D: tu pediatra te indicará la pauta.",
          ],
        },
        {
          titulo: "Biberón y fórmula", fuente: "aep",
          puntos: [
            "Prepara la fórmula exactamente como dice el envase: primero agua, luego los cacitos rasos.",
            "No calientes el biberón en el microondas (calienta de forma desigual).",
            "Ofrécelo a demanda, en brazos y mirándole; deja que pare cuando quiera.",
            "Desecha lo que sobre de cada toma.",
          ],
        },
        {
          titulo: "Alimentación complementaria", fuente: "aep",
          puntos: [
            "Hacia los 6 meses, cuando se sienta con poco apoyo y muestra interés.",
            "Puré, chafado o trozos blandos (BLW): todos son válidos y se pueden combinar.",
            "Sin sal, sin azúcar, sin miel antes del año.",
            "Alérgenos (huevo, pescado, gluten, frutos secos molidos…) pronto y de uno en uno.",
            "Evita espinacas y acelgas antes del año y bebida de arroz antes de los 6 años (AESAN).",
          ],
        },
        {
          titulo: "Prevenir atragantamientos", fuente: "aep",
          puntos: [
            "Siempre sentado, erguido y vigilado mientras come.",
            "Nada de frutos secos enteros antes de los 6 años; uvas, cerezas y tomates cherry cortados en cuartos.",
            "Evita trozos duros (zanahoria cruda, manzana cruda) y palomitas.",
            "Las arcadas son normales al aprender a comer; el atragantamiento es silencioso. Ver Urgencias.",
          ],
        },
      ],
    },
    {
      id: "medicina", titulo: "Medicina", icono: "🩺",
      fichas: [
        {
          titulo: "Fiebre", fuente: "aep",
          puntos: [
            "Fiebre es 38 °C o más. Toma la temperatura con termómetro digital en la axila.",
            "Menores de 3 meses con fiebre: siempre a urgencias.",
            "La fiebre es un mecanismo de defensa; trata el malestar, no el número.",
            "Ofrece líquidos, poca ropa y no le des baños fríos ni friegas de alcohol.",
            "Consulta si dura más de 48–72 h, si está decaído aunque baje la fiebre o si aparecen manchas que no desaparecen al estirar la piel.",
          ],
        },
        {
          titulo: "Medicamentos", fuente: "aep",
          puntos: [
            "Paracetamol e ibuprofeno: la dosis se calcula por PESO, no por edad. Confírmala con tu pediatra o el prospecto.",
            "Ibuprofeno solo a partir de los 3 meses y con indicación médica.",
            "Usa la jeringa dosificadora del propio medicamento.",
            "Nunca alternes fármacos ni des antibióticos sin indicación médica. Nada de aspirina en niños.",
            "Guarda todos los medicamentos fuera de su alcance. Intoxicaciones: 91 562 04 20 (Servicio de Información Toxicológica).",
          ],
        },
        {
          titulo: "Botiquín básico", fuente: "aep",
          puntos: [
            "Termómetro digital.",
            "Suero fisiológico en monodosis y aspirador nasal.",
            "Paracetamol en solución infantil (pauta de tu pediatra).",
            "Gasas, antiséptico (clorhexidina), tiritas, pasta al agua.",
            "Teléfonos de tu centro de salud y del pediatra apuntados a mano.",
          ],
        },
        {
          titulo: "Calendario de vacunas (España)", fuente: "cav",
          puntos: [
            "Al nacer (en temporada): anticuerpo frente al VRS (bronquiolitis).",
            "2, 4 y 11 meses: hexavalente (difteria, tétanos, tos ferina, polio, Hib, hepatitis B) y neumococo.",
            "2, 4 y 12 meses: meningococo B. 4 meses: meningococo C; 12 meses: meningococo ACWY.",
            "Rotavirus: a los 2 y 4 meses (o 2, 4 y 6 según la vacuna).",
            "12 meses: triple vírica (sarampión, rubeola, paperas); 15 meses: varicela.",
            "Gripe: cada otoño de los 6 meses a los 5 años.",
            "Puede variar según tu comunidad autónoma: confírmalo en tu centro de salud.",
          ],
        },
      ],
    },
    {
      id: "sueno", titulo: "Sueño", icono: "🌙",
      fichas: [
        {
          titulo: "Sueño seguro", fuente: "aep",
          puntos: [
            "Siempre boca arriba para dormir, también en las siestas.",
            "Colchón firme y plano, sin almohadas, chichoneras, mantas sueltas ni peluches.",
            "Cuna en la habitación de los padres al menos los primeros 6 meses.",
            "Sin tabaco: ni en casa ni en el coche. No lo abrigues en exceso.",
            "No duermas con el bebé en un sofá o sillón.",
            "La lactancia materna y el chupete al dormir (una vez establecida la lactancia) reducen el riesgo de muerte súbita.",
          ],
        },
        {
          titulo: "Cuánto duerme", fuente: "aep",
          puntos: [
            "0–3 meses: 14–17 h.",
            "4–12 meses: 12–16 h, incluidas las siestas.",
            "1–2 años: 11–14 h.",
            "3 años: 10–13 h.",
            "Despertarse por la noche es normal durante los primeros años.",
          ],
        },
        {
          titulo: "Rutina para dormir", fuente: "aep",
          puntos: [
            "Repite la misma secuencia cada noche: baño o aseo, pijama, toma, cuento, canción.",
            "Ambiente tranquilo, luz tenue y temperatura de unos 20–22 °C.",
            "Nada de pantallas antes de dormir.",
            "Responde a sus llamadas: dar seguridad no crea malos hábitos.",
          ],
        },
      ],
    },
    {
      id: "ejercicios", titulo: "Ejercicios y movimiento", icono: "🤸",
      fichas: [
        {
          titulo: "Tiempo boca abajo (tummy time)", fuente: "aep",
          puntos: [
            "Desde los primeros días, despierto y siempre vigilado.",
            "Empieza con 1–2 minutos varias veces al día y ve aumentando.",
            "Ponte a su altura o túmbalo sobre tu pecho: le motiva levantar la cabeza.",
            "Fortalece cuello y espalda y ayuda a prevenir la cabeza plana.",
          ],
        },
        {
          titulo: "Masaje infantil", fuente: "aep",
          puntos: [
            "Con las manos calientes y un aceite vegetal sin perfume.",
            "Movimientos suaves y lentos: piernas, barriga (en el sentido de las agujas del reloj), brazos, espalda.",
            "Elige un momento en que esté tranquilo y despierto; para si llora.",
          ],
        },
        {
          titulo: "Porteo", fuente: "aep",
          puntos: [
            "Mochila o fular ergonómico: postura en 'M' (rodillas más altas que el culete) y espalda en 'C'.",
            "Tan alto que puedas besarle la cabeza, con la cara siempre visible y la vía aérea libre.",
          ],
        },
        {
          titulo: "Moverse libremente", fuente: "oms",
          puntos: [
            "Menores de 1 año: varias veces al día de juego activo en el suelo.",
            "1–3 años: al menos 3 horas al día de actividad física de cualquier intensidad.",
            "No pases más de 1 hora seguida sujeto en carrito, hamaca o silla.",
            "Evita los andadores: aumentan el riesgo de caídas y no ayudan a caminar.",
          ],
        },
      ],
    },
  ],

  // area: motor | lenguaje | cognitivo | social | sensorial
  juegos: [
    { titulo: "Caras cercanas", etapas: ["0-1m", "1-3m"], area: "social", material: "Tu cara", duracion: "2–5 min",
      como: "Acércate a unos 25 cm, sonríe, saca la lengua y espera: los recién nacidos intentan imitar gestos." },
    { titulo: "Tarjetas en blanco y negro", etapas: ["0-1m", "1-3m"], area: "sensorial", material: "Cartulinas con dibujos de alto contraste", duracion: "2–3 min",
      como: "Muéstrale formas en blanco y negro a 20–30 cm y muévelas despacio para que las siga con la mirada." },
    { titulo: "Conversación de sonidos", etapas: ["1-3m", "3-6m"], area: "lenguaje", material: "Ninguno", duracion: "5 min",
      como: "Cuando haga un sonido, repítelo y espera su turno. Así aprende que la comunicación es ir y venir." },
    { titulo: "Boca abajo con espejo", etapas: ["1-3m", "3-6m"], area: "motor", material: "Espejo irrompible o tu cara", duracion: "2–5 min",
      como: "Durante el tummy time coloca un espejo o túmbate frente a él: le anima a levantar la cabeza." },
    { titulo: "Sonajero que se busca", etapas: ["3-6m"], area: "sensorial", material: "Sonajero", duracion: "5 min",
      como: "Agítalo a un lado y a otro para que gire la cabeza, luego ofréceselo para que lo agarre." },
    { titulo: "Bicicleta con las piernas", etapas: ["1-3m", "3-6m"], area: "motor", material: "Ninguno", duracion: "2–3 min",
      como: "Boca arriba, mueve sus piernas suavemente como si pedaleara mientras le cantas. Ayuda también con los gases." },
    { titulo: "Cucú-tras", etapas: ["6-9m", "9-12m"], area: "cognitivo", material: "Un pañuelo", duracion: "5 min",
      como: "Escóndete tras un pañuelo o esconde un juguete: aprende que las cosas siguen existiendo aunque no las vea." },
    { titulo: "Cesta de los tesoros", etapas: ["6-9m", "9-12m"], area: "sensorial", material: "Cesta con objetos seguros de casa (cuchara de madera, esponja, tela…)", duracion: "10–15 min",
      como: "Deja que explore libremente texturas, pesos y sonidos. Supervisa siempre y evita piezas que quepan en la boca." },
    { titulo: "Meter y sacar", etapas: ["9-12m", "12-18m"], area: "cognitivo", material: "Caja o bote y objetos grandes", duracion: "10 min",
      como: "Enséñale a meter objetos en una caja y volver a sacarlos. Ponle nombre a cada objeto." },
    { titulo: "Circuito de cojines", etapas: ["9-12m", "12-18m"], area: "motor", material: "Cojines y almohadas en el suelo", duracion: "10–15 min",
      como: "Crea pequeñas montañas para gatear, trepar y ponerse de pie. Quédate cerca." },
    { titulo: "Cuentos con imágenes", etapas: ["6-9m", "9-12m", "12-18m", "18-24m", "2-3a"], area: "lenguaje", material: "Libros de cartón con fotos o dibujos", duracion: "5–10 min",
      como: "Señala y nombra lo que ves, imita sonidos de animales y pregúntale '¿dónde está…?'." },
    { titulo: "Canciones con gestos", etapas: ["6-9m", "9-12m", "12-18m", "18-24m"], area: "social", material: "Ninguno", duracion: "5 min",
      como: "'Cinco lobitos', 'Palmas palmitas'… La repetición le ayuda a anticipar y a imitar." },
    { titulo: "Torre que cae", etapas: ["12-18m", "18-24m"], area: "motor", material: "Bloques o vasos apilables", duracion: "10 min",
      como: "Construid torres juntos y dejad que las tire: practica coordinación y causa-efecto." },
    { titulo: "Ayudante de casa", etapas: ["18-24m", "2-3a"], area: "social", material: "Tareas sencillas", duracion: "10 min",
      como: "Que te ayude a guardar ropa, regar plantas o poner servilletas. Se siente capaz y aprende vocabulario." },
    { titulo: "Juego simbólico", etapas: ["18-24m", "2-3a"], area: "cognitivo", material: "Muñecos, cocinita, cajas", duracion: "15 min",
      como: "Dad de comer al muñeco, haced una 'comida' o un viaje en tren de cajas. Sigue su imaginación." },
    { titulo: "Pintar con los dedos", etapas: ["18-24m", "2-3a"], area: "sensorial", material: "Pintura de dedos apta para niños y papel grande", duracion: "15 min",
      como: "Deja que experimente con colores y texturas. Pon nombre a los colores." },
    { titulo: "Clasificar colores", etapas: ["2-3a"], area: "cognitivo", material: "Pinzas o bloques de colores y recipientes", duracion: "10 min",
      como: "Agrupad objetos por color o tamaño. Si se equivoca, no corrijas: juega a descubrirlo." },
    { titulo: "Paseo de exploración", etapas: ["12-18m", "18-24m", "2-3a"], area: "motor", material: "Parque o campo", duracion: "30 min",
      como: "Dejad que camine, toque hojas, piedras y charcos. Narra lo que veis." },
  ],

  urgencias: {
    llamar: [
      "Le cuesta respirar: se le hunden las costillas, respira muy rápido, se le marcan los músculos del cuello o se pone azulado.",
      "Está inconsciente, muy decaído, no responde o no se le puede despertar.",
      "Convulsión.",
      "Atragantamiento que no se resuelve tosiendo.",
      "Manchas rojo-moradas que no desaparecen al estirar la piel, sobre todo con fiebre.",
    ],
    urgenciasHoy: [
      "Fiebre en menor de 3 meses.",
      "Rechaza tomas repetidamente, vomita todo o moja muchos menos pañales (posible deshidratación).",
      "Fontanela hundida o abombada.",
      "Golpe en la cabeza con vómitos, somnolencia o comportamiento extraño.",
      "Ingestión de un medicamento, producto de limpieza o pila de botón.",
      "Llanto inconsolable muy distinto al habitual.",
    ],
    atragantamiento: [
      {
        titulo: "Si tose con fuerza",
        pasos: ["Déjale toser: es la mejor forma de expulsar el objeto.", "No le des golpes ni intentes sacarlo con el dedo a ciegas.", "Vigila hasta que se resuelva."],
      },
      {
        titulo: "Menor de 1 año que no puede toser, llorar ni respirar",
        pasos: [
          "Pide ayuda y que llamen al 112.",
          "Túmbalo boca abajo sobre tu antebrazo, con la cabeza más baja que el cuerpo, sujetando su mandíbula.",
          "Da 5 golpes firmes en la espalda, entre los omóplatos, con el talón de la mano.",
          "Dale la vuelta boca arriba y haz 5 compresiones en el centro del pecho con dos dedos.",
          "Repite 5 golpes + 5 compresiones hasta que expulse el objeto o pierda el conocimiento.",
          "Si pierde el conocimiento: 112 y empieza RCP.",
        ],
      },
      {
        titulo: "Mayor de 1 año que no puede toser, hablar ni respirar",
        pasos: [
          "Pide ayuda y que llamen al 112.",
          "Inclínalo hacia delante y da 5 golpes en la espalda entre los omóplatos.",
          "Si no sale, colócate detrás, puño por encima del ombligo y haz 5 compresiones hacia dentro y arriba (Heimlich).",
          "Alterna 5 golpes + 5 compresiones hasta que lo expulse o pierda el conocimiento.",
          "Si pierde el conocimiento: 112 y empieza RCP.",
        ],
      },
    ],
    telefonos: [
      { nombre: "Emergencias", numero: "112" },
      { nombre: "Información Toxicológica", numero: "915620420" },
    ],
  },
};

if (typeof module !== "undefined") module.exports = { DATA, FUENTES };
