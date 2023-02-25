let total = 0
const limit = 10

for (let i = total; i < limit; i++) {
  total += i
  // total = total + i
  // total = 0 + 0
  // total = 0 + 1 => 1
  // total = 1 + 2 => 3
  // total = 3 + 4 => 7
  // total = 7 + 5 => 12
  // total = 12 + 6 => 18
  // ... until i becomes 9
}

console.log(total)

