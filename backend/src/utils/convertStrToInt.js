export function convertStringToInteger(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      convertStringToInteger(obj[key]);
    } else if (typeof obj[key] === 'string' && !isNaN(obj[key])) {
      obj[key] = parseInt(obj[key]);
    }
  }
}
