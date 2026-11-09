// Dirección del backend.
// En tu PC (Live Server) usa el servidor local; publicado usa el backend de Render.
const API_URL =
    location.hostname === "localhost" || location.hostname === "127.0.0.1"
        ? "http://localhost:3000/api/chat"
        : "https://tecnopunto-ia.onrender.com/api/chat";
