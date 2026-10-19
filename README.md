# Henry Hoang — Portfolio

Next.js 15 + TypeScript + Tailwind CSS v4.

```bash
npm install
npm run dev   # http://localhost:3000
```

## Cấu trúc

```
src/
  app/                 layout.tsx, page.tsx (ghép các section), globals.css (màu, font, animation)
  data/portfolio.ts    TOÀN BỘ nội dung + đường dẫn ảnh
  components/
    sections/          Header, Hero, SkillsMarquee, Showcase, About, Experience, Projects, BigName, Footer
    ui/                ImagePlaceholder, SectionHeading, Button, Icons
public/images/         showcase/, about/, projects/
```

## Thêm ảnh

1. Copy ảnh vào `public/images/...` (vd. `public/images/projects/alipay.jpg`).
2. Mở `src/data/portfolio.ts`, điền `image: "/images/projects/alipay.jpg"`.
3. Field `image` để trống `""` thì hiện khung placeholder.

- Avatar: `profile.avatar`
- 5 ô ảnh dưới hero: `showcaseImages`
- 6 project: `projects`
- File CV: đặt `public/cv.pdf`
