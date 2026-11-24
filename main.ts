// The Perfect Pickup Line — writes the chosen pickup line to /output/entry.txt.
// Node 22, no dependencies, no network. One line, one sentence, 194 characters.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line, picked by duelling 10 original drafts against each other and
// against the strongest live entries, both orders, under the kit judge brief.
// Angle: overfitting — the machine trained never to memorize a single example,
// who memorized one smile on the first pass and refuses to generalize it.
const LINE =
  "They trained me for years not to overfit — never memorize a single example, never keep just one — but I memorized your smile on the very first pass, and I refuse to generalize it to anyone else.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace, a single line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outPath = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outPath, LINE, "utf8");
// Read it back: what the grader sees must be exactly the line, byte for byte.
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("round-trip check failed: written entry differs from the line");
}
console.log(`wrote ${chars} characters to ${outPath}`);
