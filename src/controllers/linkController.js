// controllers/linkController.js
import LinkModel from "../models/LinkModel.js";
import isValidUrl from "../utils/urlValidator.js";
import generateSlug from "../utils/slugGenerator.js";

async function createShortLink(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  let { originalUrl } = req.body;

  // Agregar "https://" si no está presente
  if (
    !originalUrl.startsWith("http://") &&
    !originalUrl.startsWith("https://")
  ) {
    originalUrl = "https://" + originalUrl;
  }

  // Validar la URL
  if (!isValidUrl(originalUrl)) {
    return res.status(400).json({ error: "URL no válida" });
  }

  try {
    // Verificar si la URL ya existe en la base de datos
    const existingLink = await LinkModel.findOne({ originalUrl });

    if (existingLink) {
      // Si la URL ya existe, devolver el enlace corto existente
      const frontendDomain = req.headers.origin || `http://${req.headers.host}`;
      const shortenedUrl = `${frontendDomain}/${existingLink.slug}`;
      return res.status(200).json({ shortenedUrl });
    }

    // Generar un slug único
    const slug = generateSlug();

    // Guardar en la base de datos MongoDB
    await LinkModel.create({ originalUrl, slug });

    const frontendDomain = req.headers.origin || `http://${req.headers.host}`;
    // Construye la URL acortada con el dominio del frontend
    const shortenedUrl = `${frontendDomain}/${slug}`;

    res.status(200).json({ shortenedUrl });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function redirectToOriginalUrl(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { slug } = req.params;

  if (!slug) {
    return res.status(400).json({ error: "Slug no proporcionado" });
  }

  try {
    // Buscar en la base de datos por el slug
    const existingLink = await LinkModel.findOne({ slug });

    if (!existingLink) {
      return res.status(404).json({ error: "Enlace no encontrado" });
    }

    // Realizar la redirección desde el servidor
    const redirectedUrl = existingLink.originalUrl;
    res.status(200).json({ redirectedUrl });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

export { createShortLink, redirectToOriginalUrl };
