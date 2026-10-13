export function getOrdinalNumber(num) {
  const numString = num.toString();
  const lastDigit = numString.slice(-1);
  const last2Digit = numString.slice(-2);

  if (lastDigit === "1" && last2Digit !== "11") {
    return numString + "st";
  }

  if (lastDigit === "2" && last2Digit !== "12") {
    return numString + "nd";
  }

  if (lastDigit === "3" && last2Digit !== "13") {
    return numString + "rd";
  }

  return numString + "th";
}
