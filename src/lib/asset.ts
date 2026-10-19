/** Thêm basePath (vd. /binhhd trên GitHub Pages) cho file trong /public */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (path: string) => (path.startsWith("/") ? basePath + path : path);
