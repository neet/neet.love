export function sanitize(html: string): string {
  return html
    .replace(/<[^>]*>?/gm, " ")
    .replace(/\s{2,}/, " ")
    .trim();
}
