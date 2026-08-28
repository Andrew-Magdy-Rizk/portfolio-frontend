import nextPlugin from "@next/eslint-plugin-next"
import tseslint from "typescript-eslint"

export default [
  { ignores: [".next/**", "node_modules/**", "public/**"] },
  ...tseslint.configs.recommended,
  {
    plugins: { "@next/next": nextPlugin },
    rules: nextPlugin.configs["core-web-vitals"].rules,
  },
]
