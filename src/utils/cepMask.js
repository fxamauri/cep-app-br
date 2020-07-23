import onlyNumbers from "./onlyNumbers"
import isLastChar from "./isLastChar"

const LENGTH = 8;

const HYPHEN_INDEXES = [4];

export default (cep) => {
  const digits = onlyNumbers(cep);

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, i) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(i, digits)) {
        if (HYPHEN_INDEXES.indexOf(i) >= 0) return `${result}-`;
      }

      return result;
    }, '');
}
