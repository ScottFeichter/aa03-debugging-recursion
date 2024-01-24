// attempt at refactoring(doesn't work):

return [action(arr[0])].concat(doForAll(arr.slice(1), action));

// my solution from scratch (does work):

if (arr.length === 0) {
  return [];
}
let result = [action(arr.shift())];
return result.concat(doForAll(arr, action));
