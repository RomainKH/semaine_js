let premier = new Array(), a=0, i = 1

while(premier.length <= 20)
{
  for (let j = 2;j<i;j++)
  {
    if (i%j == 0)
    (
      a++
    )
  }
  if (a==0)
  {
    premier.push(i)
  }
  a = 0
  i++
}

console.log(premier)
