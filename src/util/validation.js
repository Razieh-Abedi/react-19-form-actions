export function isEmail(value) {
  return value.includes("@");
}

// export function isNotEmpty(value) {
//   return value.trim() !== "";
// }

export function isNotEmpty(value) {
  if (typeof value === "string") {
    return value.trim() !== "";
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return Boolean(value);
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualToOtherValue(value, otherValue) {
  return value === otherValue;
}
