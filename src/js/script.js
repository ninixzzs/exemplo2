//DECLARAÇOES E VARIAVEIS
//VAR, LET E CONST

var nome="Fiap";
console.log(nome);
var nome="Dev";
console.log(nome);

if(true){
    var avatar="Fiapinho";
}

console.log(avatar);

let exemplo1="Ola Dev-let";
console.log(exemplo1)

const exemplo2="Ola Dev-const";
console.log(exemplo2)

let exemplo3="20";
console.log(typeof exemplo3);

let exemplo4=true;
console.log(typeof exemplo4);

let exemplo5={nome:"fiap"};
console.log(exemplo5)

let exemplo6=["PHP,JAVA,HTML"]
console.log(exemplo6)

//valor indefinido

let exemplo7
console.log(exemplo7)

//operadores aritmeticos

const valor1=10
const valor2=20

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

// operadores logicos
 
const valor3=40;
const valor4=20;

console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 < 0);
console.log(valor3 == valor4 ||valor4 > 10);

//operadores de comparaçao

console.log(valor3 == valor4); //compara
console.log(valor3 === valor4); //compara e verifica o tipo

/* 
Utilizando as variaveis p (preço e produto) e v ( valor do desconto),
crie uma nova variavel chamada preçoFinal que subtraia o desconto do preço e 
e exiba o resultado. 
*/

const p=20;
const v=10;
const preçofinal =p -v;
console.log("O desconto é de :",preçofinal, "reais")

//estrutura condicional

//if

if(true){
     console.log("verdadeiro")
}
let nome1="fiap";
if(nome=="fiap"){
    console.log("Nome correto")
}else{
    console.log("Nome errado")

}

//if,if else,else encadeado/alinhado
 
let idade=13;

if(idade <= 13){
    console.log("Uma criança")
}else if(idade >13 && idade <18){
    console.log("Um adolescente")
}else{
        console.log("Um adulto")
}

//switch case

let times="Flamengo"

switch(times){
    case "Flamengo":
        console.log("Flamengo é seleçao")
        break;
    case "sao paulo":
        console.log("sem tradiçao")
        break;
    case "palmeiras":
         console.log("sem mundial")
         break;
    default:
        console.log("nenhuma das opçoes")

        //condicional ternaria

        let numero =100;
        let resultado = numero==100 ? "certo":"errado";
        console.log(resultado)
        
        let usuario= "Fiap"
        let usuariologado=usuario=="Fiap" ? "Logado com sucesso":"usuario invalido"
        console.log("usuariologado")
}