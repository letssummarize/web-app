export function isFreeUser() {
  return process.env.NEXT_PUBLIC_IS_FREE_USER === 'true';
}
