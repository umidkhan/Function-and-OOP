let p = +prompt('Birinchi sonni kiriting')
let  f = +prompt('Ikkinchi sonni kiriting')
let w = prompt('Amallar kiriting: + - * /')

if(w =='-'){
    function Minus(a, b) {
        let d = a - b;
        alert(d);
        console.log(d);
        
    }
    Minus(p, f)
}

else if(w =='+'){
    function Plus(a, b) {
        let d = a + b;
        alert(d);
        console.log(d);
        
    }
    Plus(p, f)
}

else if(w =='*'){
    function Multiplication(a, b) {
        let d = a * b;
        alert(d);
        console.log(d);
        
    }
    Multiplication(p, f)
}

else if(w =='/'){
    function Divison(a, b) {
        let d = a / b;
        alert(d);
        console.log(d);
        
  }
     Divison(p, f)
}
 else{
    alert('Iltimos amal kiriting')
}