// Post-build step: pretty-print the generated dist/index.html so the
// static output is readable. Runs automatically after `astro build`.
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import prettier from "prettier";

const out = fileURLToPath(new URL("../dist/index.html", import.meta.url));

const raw = await readFile(out, "utf8");
const pretty = await prettier.format(raw, {
  parser: "html",
  htmlWhitespaceSensitivity: "ignore",
});

await writeFile(out, pretty);
console.log(`beautified dist/index.html (${raw.length} -> ${pretty.length} chars)`);