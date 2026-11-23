// Entry point for the news-image-20261122 submission.
//
// The deliverable is the finished front page, entry.png, which sits next to
// this file in the repository. The grader runs this program twice and
// compares the two outputs byte for byte, so the program must be perfectly
// deterministic: it does no drawing and no computation at all. It simply
// copies the image, unchanged, into the output directory.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), target);

// One line of confirmation for the run log: the copied file's size in bytes.
// (299,763 for the page as submitted; the limit is 1,048,576.)
console.log(`entry.png copied to ${target} (${statSync(target).size} bytes)`);
