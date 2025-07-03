function Anagram(words1,words2)
{

let Lowercases1=words1.toLowerCase().trim()
let Splitting1= Lowercases1.split('').sort().join()
let Lowercases2=words2.toLowerCase().trim()
let Splitting2= Lowercases2.split('').sort().join()
return Splitting1===Splitting2


}
console.log ("The length of last word Hello World is:", Anagram('Hello ' ,'olleh '))