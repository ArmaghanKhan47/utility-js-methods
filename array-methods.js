// some usefull array methods which I use. I thought it would be nice to share them.

// This function will remove all the duplicates from the array.
// It will not work on array of objects.
// Example
// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 6];
// arr.getUnique() will output
// [1, 2, 3, 4, 5, 6, 7]
Array.prototype.getUnique = function () {
  return this.filter((value, index, self) => self.indexOf(value) === index);
};

// This function will convert the array into a string where each entry is comma separated.
// Example
// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 6];
// arr.convertToCommaSeparatedString((item) => item) will output
// 1,2,3,4,5,6,7
Array.prototype.convertToCommaSeparatedString = function (callback) {
  return this.map(callback).getUnique().join(',');
};

// This function will perform search operation on the array and return first element which will pass the given condition.
// Example
// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 6];
// arr.search((item) => item > 6) will output
// 7
Array.prototype.search = function (callback) {
  return this.filter(callback)[0];
};
