export const baseUrl = import.meta.env.BASE_URL;

export const withBase = (path) =>
  `${baseUrl}${path.replace(/^\/+/, '')}`;