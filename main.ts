// Entry for gta6-clipper-01. The video is the entry itself; this script only
// passes its address along so the gate can find it.
// It reads VIDEO.json from the repository root and writes it to the output
// directory, where the gate reads the video URL and looks up its views.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log("VIDEO.json copied to " + target);
console.log("Done. The gate reads the video URL from " + target + ".");
