export const normalizeString = (text: string): string => {
  // Normaliza el texto eliminando acentos y caracteres especiales
  const normalizedText = text
    .normalize("NFD") // Normaliza caracteres a su forma compuesta y descompuesta
    .replace(/[\u0300-\u036f]/g, "") // Elimina diacríticos
    .replace(/[^\w\s]/gi, "") // Elimina caracteres especiales excepto letras y espacios
    .replace(/\./g, "") // Elimina puntos
    .toLowerCase(); // Convierte a minúsculas
  return normalizedText;
};
