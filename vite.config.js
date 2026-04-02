import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

/** GitHub Pages project site: /<repo>/; user/org pages (*.github.io repo): / */
function resolveBase() {
  if (process.env.VITE_BASE_PATH !== undefined) {
    const b = process.env.VITE_BASE_PATH
    if (b === '' || b === '/') return '/'
    return b.endsWith('/') ? b : `${b}/`
  }
  const full = process.env.GITHUB_REPOSITORY
  if (!full) return '/'
  const [, repo] = full.split('/')
  if (!repo) return '/'
  if (repo.endsWith('.github.io')) return '/'
  return `/${repo}/`
}

export default defineConfig({
  base: resolveBase(),
  plugins: [vue(), tailwindcss()],
})
