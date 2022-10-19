export function convertStrToBool(value: any) {
  if (typeof value !== 'string') {
    return Boolean(value);
  }
  try {
    var obj = JSON.parse(value.toLowerCase());
    return obj === true;
  } catch (e) {
    return value !== '';
  }
}
