function Palindrome(words)
{
let Lowercase=words.toLowerCase().trim()
let reversing=Lowercase.split('').reverse().join('')
return Lowercase===reversing
}
console.log (Palindrome("Malayalam"))
console.log (Palindrome("Malay"))