// // if we always want to take one from the group with the greatest number of elements that wasn't just picked
// // we could probably use a max heap

// const leastInterval = (tasks: string[], n: number): number => {
//   interface Task {
//     name: string;
//     count: number;
//   }

//   class PoorPriorityQueue {
//     queue: Task[] = [];
//     last: Task = null;

//     constructor(tasks: Task[]) {
//       this.queue = [...tasks].sort(this._sortGreatestToLeast);
//     }

//     _sortGreatestToLeast(a: Task, b: Task) {
//       if (a.count > b.count) return -1;
//       if (a.count < b.count) return 1;
//       return 0;
//     }

//     next() {
//       if (this.queue.length === 1) {
//       }
//       const nextItem = this.queue.at(0);
//       // if()
//       return this.queue.shift();
//     }
//   }

//   const createMap = (tasks: string[]) => {
//     const map = new Map<string, number>(); // character and count of that character

//     tasks.forEach((task) => {
//       if (map.has(task)) {
//         const currentCount = map.get(task);
//         map.set(task, currentCount + 1);
//       } else {
//         map.set(task, 1);
//       }
//     });

//     return map;
//   };

//   const map = createMap(tasks);
//   console.log("map", map);

//   const priorityQueue = new PoorPriorityQueue([
//     { name: "A", count: 5 },
//     { name: "B", count: 2 },
//   ]);
// };

// console.log("leastInterval", leastInterval(["A", "A", "A", "B", "B", "B"], 2));
