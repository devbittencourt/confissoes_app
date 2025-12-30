const NS = 'confissoes:v1'

export const get = (key, fallback) => {
  try {
    const raw = localStorage.getItem(`${NS}:${key}`)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export const set = (key, value) => {
  try {
    localStorage.setItem(`${NS}:${key}`, JSON.stringify(value))
  } catch {}
}

export const remove = (key) => {
  try {
    localStorage.removeItem(`${NS}:${key}`)
  } catch {}
}
