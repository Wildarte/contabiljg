function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export function createPageUrl(page) {
  if (!page) return "/";
  if (page.startsWith("/") || page.startsWith("http")) {
    return page;
  }
  if (page.toLowerCase() === "home") {
    return "/";
  }
  return `/${toKebabCase(page)}`;
}
