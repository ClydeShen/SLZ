export const getOrigin = () => {
  let url =
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000'
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Make sure to exclude a trailing `/`.
  url = url.endsWith('/') ? url.slice(0, -1) : url
  return url
}
