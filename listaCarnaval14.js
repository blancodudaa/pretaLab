const venda = 0;
    custo = 50;
    
const lucro = venda - custo;

if (custo > 0 && venda >0) {
    console.log(lucro * 1000);
} else {
    console.log("Valor inválido, revise o que foi pedido");
}
