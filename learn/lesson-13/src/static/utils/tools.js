// JSON数组去重
// uniqueArray(array, 'key')
export function uniqueArray (array, key) {
  var result = [array[0]];
  for (var i = 1; i < array.length; i++) {
    var item = array[i];
    var repeat = false;
    for (var j = 0; j < result.length; j++) {
      if (item[key] == result[j][key]) {
        repeat = true;
        break;
      }
    }
    if (!repeat) {
      result.push(item);
    }
  }
  return result;
}