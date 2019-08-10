function longestString(arr) {
  var sorted = arr.sort((a, b) => {
    return b.length - a.length
  })
  return sorted[0]
}

const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'
