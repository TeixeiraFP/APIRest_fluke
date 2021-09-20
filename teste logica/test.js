function circle(raio) {
  const diameter = 2 * raio - 1;
  const prime = Math.floor(diameter / 2);
  const division = Math.floor(prime / 2);
  const repeat = raio - division;

  if (raio > 0 && raio <= 100) {
    // primeira parte com repetições diminuindo
    for (let i = raio; i <= diameter; i += division) {
      for (let k = division; k > 0; k--) {
        document.write(" ");
      }
      for (let j = 1; j <= i; j++) {
        document.write("*");
      }
      document.write(`<br>`);
    }
    //centro de retangulo, repetições iguais
    for (let r = 1; r <= repeat; r++) {
      for (let i = 1; i <= diameter; i++) {
        document.write("*");
      }
      document.write(`<br>`);
    }

    //repetições decrecendo, final do circulo
    for (let i = diameter; i >= raio; i -= division) {
      for (let k = 0; k < division; k++) {
        document.write(" ");
      }
      for (let j = 1; j <= i; j++) {
        document.write("*");
      }
      document.write(`<br>`);
    }
  } else {
    alert("valor de entrada inválido");
  }
}

circle(5);

// Não consegui imprimir os espaços em branco, porém queria  deixar aqui uma solução baseada
// na formula geométrica para achar pontos cartesianos a partir do valor do raio. e nos espaços em branco imprimi hashtags.

// function circle(number) {
//   const asterisk = "*";
//   const raio = number / 2;
//   for (let j = 0; j <= number * 2; j++) {
//     for (let i = 0; i <= number * 2; i++) {
//       if (Math.pow(i - raio, 2) + Math.pow(j - raio, 2) <= Math.pow(raio, 2)) {
//         document.write(asterisk);
//       } else {
//         document.write("#");
//       }
//     }
//     document.write(`<br>`);
//   }
// }

// circle(30);
