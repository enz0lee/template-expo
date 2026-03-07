import pluginQuery from '@tanstack/eslint-plugin-query'
import expoConfig from 'eslint-config-expo/flat.js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactCompiler from 'eslint-plugin-react-compiler'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  expoConfig,
  ...pluginQuery.configs['flat/recommended'],
  reactCompiler.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*', 'node_modules/*', 'app-example/*'],
  },
])
