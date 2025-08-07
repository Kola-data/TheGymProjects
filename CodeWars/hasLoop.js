function hasLoop(arr) {
  let visited = new Set();
  let currentIndex = 0;

  while (true) {
    if (currentIndex < 0 || currentIndex >= arr.length) return false;
    if (visited.has(currentIndex)) return true;
    visited.add(currentIndex);
    currentIndex = arr[currentIndex];
  }
}
