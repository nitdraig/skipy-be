import { customAlphabet } from "nanoid";

// Define el alfabeto que deseas para los slugs (por ejemplo, letras minúsculas y números)
const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

// Crea una función de generación de slug con nanoid
const generateSlug = customAlphabet(alphabet, 6);

export default generateSlug;
