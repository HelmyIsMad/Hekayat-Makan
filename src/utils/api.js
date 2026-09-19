export const API_BASE =
  import.meta.env.VITE_API_URL || 'https://hekayat-makan-api-production.up.railway.app/api'

export async function apiFetch(path) {
  const url = `${API_BASE}${path.startsWith('/') ? '' : '/'}${path}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`API ${res.status}`)
  return res.json()
}
