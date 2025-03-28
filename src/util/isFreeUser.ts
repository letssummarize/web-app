export function isFreeUser() {
  return process.env.NEXT_PUBLIC_RESTRICT_USER === 'true';
}
