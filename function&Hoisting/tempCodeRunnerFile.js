var a = 4;

{
    var a = 10;

    console.log(a);                 // SHADOWED VALUE
}


console.log(a);                     // ORIGINAL VALUE ONLY