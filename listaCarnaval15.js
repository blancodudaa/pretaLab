const angulo1 = 70;
    angulo2 = 10;
    angulo3 = 100;

const validacao = angulo1 >=0 && angulo2 >= 0 && angulo3 >=0;

const soma= angulo1 + angulo2 + angulo3;


if(soma ===180 && validacao ===true) {
    console.log(true);
} else {
    console.log(false)
} 