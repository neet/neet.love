export function sanitize(html: string): string {
  return html.replace(/<[^>]*>?/gm, "");
}
