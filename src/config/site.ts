import { existsSync } from "node:fs";
import { resolve } from "node:path";

// Show the CV link only after the PDF is uploaded to the public folder.
// The expected file is: public/cv/Jialong_Li_CV.pdf
const cvFile = "cv/Jialong_Li_CV.pdf";
export const cvUrl: string | null = existsSync(resolve(process.cwd(), "public", cvFile))
  ? `/${cvFile}`
  : null;
