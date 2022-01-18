//program to check given string is anagram or not
function anagram(str1, str2){
    var l1 = str1.length;
    var l2 = str2.length;
    if(l1!=l2)
    return false;

    str1.sort();
    str2.sort();

    for( let i = 0 ; i < l1 ; i ++)
    {
        if(str1[i]!=str2[i])
        return false;
    }
    return true;
}
var a = "madan";
var b = "daman";
if(anagram(a,b))
console.log("Anagram string");
else
console.log("Not an anagram string");