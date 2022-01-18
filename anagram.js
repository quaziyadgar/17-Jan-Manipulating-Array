//program to check given string is anagram or not
function anagram(str1, str2){
    var l1 = str1.length;
    var l2 = str2.length;
    
    if(l1!=l2)
    return false;

    let a = str1.split('').sort().join('');
    let b = str2.split('').sort().join('');
    // console.log(a);
    // console.log(b);
    for( let i = 0 ; i <l1; i ++)
    {
        if(a[i]!=b[i])
        return false;
    }
    return true;
}
var a = 'namad';
var b = 'daman';
if(anagram(a,b))
console.log("Anagram string");
else
console.log("Not an anagram string");
