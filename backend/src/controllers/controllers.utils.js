export function regexUser(str, pattern = /^[^@]+/) {
  return str.match(pattern);
}
