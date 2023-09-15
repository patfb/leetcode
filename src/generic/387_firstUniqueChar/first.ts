/* 
https://leetcode.com/problems/first-unique-character-in-a-string/description/
Runtime 141ms beats 9.19% of users with TypeScript
Memory 52.28MB beats 6.96% of users with TypeScript
*/

const firstUniqChar = (s: string): number => {
  interface MapValue {
    frequency: number;
    index: number;
  }
  const map = new Map<string, MapValue>(); // char, frequency
  const array = Array.from(s);

  array.forEach((char, index) => {
    if (map.has(char)) {
      const mapValue = map.get(char);
      map.set(char, { ...mapValue, frequency: mapValue.frequency + 1 });
    } else {
      map.set(char, { frequency: 1, index });
    }
  });

  const mapArray = Array.from(map);

  const firstItem = mapArray.find(
    ([_char, mapValue]) => mapValue.frequency === 1,
  );

  return firstItem === undefined ? -1 : firstItem[1].index;
};

// console.log("firstUniqChar", firstUniqChar("loveleetcode"));
// console.log("firstUniqChar", firstUniqChar("aabb"));
