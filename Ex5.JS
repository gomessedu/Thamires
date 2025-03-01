function verificarMaioridade(idade) {
    if (idade >=18){
      return "Maior de idade";
    }else{
      return "Menor de idade";
    }
  }
  let idadePessoa = 90;
  let resultado = verificarMaioridade(idadePessoa);
  console.log("Resultado:",resultado)
