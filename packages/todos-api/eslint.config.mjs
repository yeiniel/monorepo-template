import { node } from "@yeiniel/eslint-config";

export default [
  ...node,
  {
    ignores: [".esbuild/**", ".serverless/**"],
  },
];
