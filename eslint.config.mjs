import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/immutability": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/purity": "off",
      "@next/next/no-img-element": "off",
      "prefer-const": "off",
      "import/no-anonymous-default-export": "off",
    }
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/data/**",
    "scratch/**",
    "automation/**",
    "scripts/**",
  ]),
]);

export default eslintConfig;
