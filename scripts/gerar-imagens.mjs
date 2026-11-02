import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ORIGEM = "src/assets/fotos";
const DESTINO = "public/images";
const QUALIDADE = 80;
const LARGURA_MENOR = 640;

function largurasPara(larguraOriginal) {
  if (larguraOriginal <= LARGURA_MENOR) return [larguraOriginal];
  return [LARGURA_MENOR, larguraOriginal];
}

async function kb(arquivo) {
  const { size } = await stat(arquivo);
  return Math.round(size / 1024);
}

const arquivos = (await readdir(ORIGEM)).filter((a) => a.endsWith(".jpg"));

for (const arquivo of arquivos) {
  const origem = path.join(ORIGEM, arquivo);
  const nome = path.basename(arquivo, ".jpg");
  const { width } = await sharp(origem).metadata();

  for (const largura of largurasPara(width)) {
    const base = sharp(origem).resize({
      width: largura,
      withoutEnlargement: true,
    });

    const webp = path.join(DESTINO, `${nome}-${largura}.webp`);
    const jpg = path.join(DESTINO, `${nome}-${largura}.jpg`);

    await base.clone().webp({ quality: QUALIDADE }).toFile(webp);
    await base.clone().jpeg({ quality: QUALIDADE, mozjpeg: true }).toFile(jpg);

    console.log(
      `${nome} ${largura}w · webp ${await kb(webp)} kB · jpg ${await kb(jpg)} kB`,
    );
  }

  console.log(`${nome} original ${width}w · ${await kb(origem)} kB\n`);
}
