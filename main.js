function telephoneCheck(str) {
  const pattern = /^(1)?( |)([2-9]{3}|\([2-9]{3}\))(-| |)([0-9]{3})(-| |)([0-9]{4})$/;
  return pattern.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("11 555-555-5555"))
