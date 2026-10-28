# TecnoPunto IA – Asistente de ventas con IA (Groq)

Parcial 2 – Proyecto de Inteligencia Artificial · UTU 2026

> TecnoPunto es una tienda ficticia creada para este proyecto.

## Problema

**TecnoPunto** es una tienda de accesorios para celular en el Centro de Montevideo (fundas, vidrios templados, cargadores, cables y auriculares).

Todos los días llegan mensajes con las mismas preguntas: *"¿tenés funda para el iPhone 15?"*, *"¿cuánto sale el cargador?"*, *"¿hacen envíos?"*. Responderlas a mano lleva tiempo, y si el cliente no recibe respuesta rápido, compra en otro lado.

## Solución

Un **asistente de ventas con IA** que responde al instante y a cualquier hora:

- precios de todos los productos;
- compatibilidad con el modelo de celular del cliente (pregunta el modelo exacto antes de confirmar);
- envíos (moto en Montevideo, DAC al interior o retiro en el local), formas de pago y garantía;
- cuando el cliente quiere comprar, arma un **resumen del pedido** y lo deriva a un vendedor.

## Tecnologías

| Parte | Tecnología |
|---|---|
| Modelo LLM | **gpt-oss-120b** a través de la API de **Groq** (gratuita) |
| Backend | Node.js + Express (API `POST /api/chat`) |
| Frontend | HTML, CSS y JavaScript |

## Cómo funciona

```
Cliente (frontend)  →  POST /api/chat { message, history }  →  Backend Express
                                                                  │
                                              prompt de sistema   │
                                                                  ▼
                                                             Groq (LLM)
                                                                  │
Cliente (frontend)  ←────────────── { success, response } ←───────┘
```

- **Prompt de sistema** (`backend/src/config/systemPrompt.js`): rol, objetivo, contexto, forma y estilo, restricciones y estructura de las respuestas.
- **Memoria de la conversación:** el frontend manda los mensajes anteriores (`history`) para que la IA entienda preguntas como *"¿y para el Samsung?"*.
- **Temperatura 0.3:** respuestas más consistentes y con menos invención.

## Ejecutar en tu PC

```bash
cd backend
npm install
# crear el archivo .env a partir de .env.example y pegar tu GROQ_API_KEY
npm start
```

Después abrí `frontend/index.html` con **Live Server** en VS Code.

## Estructura

```
├── backend/
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── app.js                    → servidor Express
│       ├── routes/chat.routes.js     → endpoint /api/chat
│       ├── services/groq.service.js  → conexión con la IA (Groq)
│       └── config/systemPrompt.js    → prompt de sistema (6 partes)
└── frontend/
    ├── index.html
    ├── css/styles.css
    ├── js/config.js                  → URL del backend
    └── js/app.js                     → lógica del chat
```
