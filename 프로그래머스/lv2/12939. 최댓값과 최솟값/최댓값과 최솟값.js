const solution = (s) => {
  const arr = s.split(' ').map(v=>+v).sort((a,b)=>a-b)
  return `${arr[0]} ${arr[arr.length-1]}`
}