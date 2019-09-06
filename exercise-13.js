function targetTerdekat(arr) {
    // you can only write your code here!
    var x = []
    var o = ''
    var jarak = []

    for(var i = 0; i < arr.length; i++){
      if(arr[i] === 'x'){
        x.push(i)
      } else if(arr[i] === 'o'){
        o = o + i
      }
    }
    // console.log(x)
    // console.log(o)

    for(var i = 0; i < x.length; i++){
      var temp_length = Math.abs(x[i] - o)
      jarak.push(temp_length)
    }

    for(var i = 0; i < jarak.length; i++){
      var minimum = jarak[0]
      if(jarak[i] < minimum){
        minimum = jarak[i]
      }
    }
    // console.log(minimum)

    if(x.length === 0){
      return 0
    }

    return minimum
    
}
  
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat(['o', '', 'o', 'x', 'x', ' ', ' ', 'x'])); //  1