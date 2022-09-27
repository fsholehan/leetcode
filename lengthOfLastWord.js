const lengthOfLastWord = (s) => {
  const trim = s.trim();

  const arr = trim.split(" ");

  return arr[arr.length - 1].split("").length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
