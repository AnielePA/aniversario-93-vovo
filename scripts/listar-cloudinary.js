import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "diclhm335",
  api_key: "656481422976276",
  api_secret: "xp_wKDgqd0JQWnYgwo7JLga0C9Y",
});

async function listarTodosArquivos() {
  let recursos = [];
  let nextCursor = undefined;

  do {
    const resultado = await cloudinary.api.resources({
      type: "upload",
      max_results: 500,
      next_cursor: nextCursor,
    });

    recursos.push(...resultado.resources);
    nextCursor = resultado.next_cursor;
  } while (nextCursor);

  return recursos;
}

async function main() {
  console.log("1 - Iniciando");

  const arquivos = await listarTodosArquivos();

  console.log("2 - Arquivos carregados:", arquivos.length);

  const grupos = {};

  for (const arquivo of arquivos) {
    const pasta = arquivo.asset_folder || "sem_pasta";

    if (!grupos[pasta]) {
      grupos[pasta] = [];
    }

    grupos[pasta].push(arquivo.secure_url);
  }

  console.log("3 - Grupos criados");

  let resultado = "";

  for (const [pasta, urls] of Object.entries(grupos)) {
    resultado += `\n=== ${pasta} ===\n\n`;

    urls.forEach((url) => {
      resultado += `"${url}",\n`;
    });
  }

  console.log("4 - Conteúdo montado");

  fs.writeFileSync("./urls-organizadas.txt", resultado);

  console.log("5 - Arquivo salvo");
}

main().catch((erro) => {
  console.error("ERRO:");
  console.error(erro);
});