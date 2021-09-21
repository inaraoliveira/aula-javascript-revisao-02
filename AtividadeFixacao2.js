/* 1) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes.
a) Caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”.
b) Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.
c) Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”. */

function atv2_1(modelo){
    let carro = modelo
    
    if(carro == "Hatch"){
      console.log("Compra efetuada com sucesso.");
    }
    else if(carro == "Sedan"){
      console.log("Tem certeza que não prefere este modelo?");
    }
    else if(carro == "Motocicleta"){
      console.log("Tem certeza que não prefere este modelo?");
    }
    else if(carro == "Caminhonete"){
      console.log("Tem certeza que não prefere este modelo?");
    }
    else{
      console.log("Não trabalhamos com este tipo de automóvel aqui.")
    }
  }

/* 2) Criar um bloco de código, onde deverá ter três variáveis do tipo inteiro: a, b, c. Verifique se:
a) Se todos os lados são iguais, o triângulo será equilátero;
b) Se todos os lados forem diferentes, será escaleno;
c) Se nenhuma das duas condições anteriores for atendida, será isósceles. */

function atv2_2(){
    let a = 5;
    let b = 3;
    let c = 6;
  
    if(a == b && c == a){
      console.log("Triangulo equilátero");
    }
    else if(a !== b && b !== c && c !== a){
      console.log("Triângulo escaleno");
    }
    else{
      console.log("Triangulo isósceles")
    }
  }

/* 3) Construa uma função que receba um número.
a) Se o número for positivo, mostrar a informação de que ele é positivo.
b) Se o número for negativo, mostrar a informação de que ele é negativo. */

function atv2_3(numero){
  
    if(numero >= 0){
      console.log("O número " + numero + " é positivo.");
    }
    else{
      console.log("O número " + numero + " é negativo.")
    }
  }