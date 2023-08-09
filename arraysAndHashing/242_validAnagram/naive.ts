function isAnagram(s: string, t: string): boolean {
  const sSorted = Array.from(s).sort().toString();
  const tSorted = Array.from(t).sort().toString();
  return sSorted === tSorted;
}

console.log("isAnagram?", isAnagram("rats", "star"));
