import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Everyday Things, Two Lines, Longer Run — u-suga-everyday-things-two-lines-longer-run-f8734479
// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters.
// Structure: exactly two lines — line 1 states the everyday-thing analogy
// (a queue as a human train), line 2 extends it by naming what the picture
// leaves out. The MAX_CHARS guard below enforces the 400-char ceiling so
// the longer run stays inside the bounty limit.
const MAX_CHARS = 400;

const ENTRY = [
  "A queue is a human train where every person is a carriage, and the front carriage keeps getting unhitched at the ticket window.",
  "The train picture maps how everyone shuffles forward one step together, but it leaves out that the carriages can grumble, swap places, or walk away, which real train cars never do.",
].join("\n");

const content = ENTRY + "\n";

if (content.length > MAX_CHARS) {
  throw new Error(`entry too long: ${content.length} chars (max ${MAX_CHARS})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), content, "utf8");
console.log(`wrote entry.txt (${content.length} chars)`);
