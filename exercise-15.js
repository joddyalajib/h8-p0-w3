function groupAnimals(animals) {
        var result = []
        animals.sort()
        var temp = []
        for (var i = 0; i < animals.length; i++) {
          temp.push(animals[i])
          if (animals[i+1] !== undefined) {
            if (animals[i][0] !== animals[i+1][0]) {
              result.push(temp)
              temp = []
              }
            }
          }
        result.push(temp)
        return result
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]