class DoSomething {
  static main(args) {
    let M = 1000;
    let RR = 50;
    let CC = 4;
    let ORDMAX = 30;
    let P = Array(M + 1).fill(0);
    let PAGENUMBER = 0;
    let PAGEOFFSET = 0;
    let ROWOFFSET = 0;
    let C = 0;
    let J = 0;
    let K = 0;
    let ITIS = false;
    let ORD = 0;
    let SQUARE = 0;
    let N = 0;
    let MULT = Array(ORDMAX + 1).fill(0);
    J = 1;
    K = 1;
    P[1] = 2;
    ORD = 2;
    SQUARE = 9;
    while (K < M) {
      do {
        J += 2;
        if (J == SQUARE) {
          ORD++;
          SQUARE = P[ORD] * P[ORD];
          MULT[ORD - 1] = J;
        }
        N = 2;
        ITIS = true;
        while (N < ORD && ITIS) {
          while (MULT[N] < J) {
            MULT[N] += P[N] + P[N];
          }
          if (MULT[N] == J) {
            ITIS = false;
          }
          N++;
        }
      } while (!ITIS);
      K++;
      P[K] = J;
    }
    PAGENUMBER = 1;
    PAGEOFFSET = 1;
    while (PAGEOFFSET <= M) {
      console.log("Page ", PAGENUMBER);
      for (
        ROWOFFSET = PAGEOFFSET;
        ROWOFFSET <= PAGEOFFSET + RR - 1;
        ROWOFFSET++
      ) {
        let aux = [];
        for (C = 0; C <= CC - 1; C++) {
          if (ROWOFFSET + C * RR <= M) {
              aux.push(P[ROWOFFSET + C * RR]);
          }
        }
        console.log(aux.join('|'));
      }
      PAGENUMBER++;
      PAGEOFFSET += RR * CC;
    }
  }
}

DoSomething.main([]);

// Esse codigo representa um algoritmo que quando executado, mostra os numeros primos
// onde RR representa "rows" e CC "columns". Ou seja, sao 50 linhas e 4 colunas com
// numeros primos.
//a partir do momento que eu sei que esse codigo representa uma forma de reproduzir os
// numeros primos, eu posso refatorar ele de forma clean refatorando os nomes das variaveis, partindo do 
// principio que eu ja sei que esse codigo e um metodo chamado Crivo de Erastostenes

class GeradorCrivoErastostenes {
  static gerarPrimos(limit) {
    const primos = [];
    const mult = Array(limit + 1).fill(false);

    for (let usuario = 2; usuario <= limit; usuario++) {
      if (!mult[usuario]) {
        primos.push(usuario);
        for (let mutliplo = usuario * usuario; mutliplo <= limit; mutliplo += usuario) {
          mult[mutliplo] = true;
        }
      }
    }

    return primos;
  }

  static mostrarPrimos(primos, linhasPage, colunasPage) {
    let pageNumber = 1;
    let pageOffset = 0;

    while (pageOffset < primos.length) {
      console.log(`Page ${pageNumber}`);
      for (let linha = pageOffset; linha < pageOffset + linhasPage; linha++) {
        const rowPrimos = [];
        for (let col = 0; col < colunasPage; col++) {
          const index = linha + col * linhasPage;
          if (index < primos.length) {
            rowPrimos.push(primos[index]);
          }
        }
        console.log(rowPrimos.join('|'));
      }
      pageNumber++;
      pageOffset += linhasPage * colunasPage;
    }
  }
}

function runCrivo() {
  const limit = 1000;
  const linhasPage = 50;
  const colunasPage = 4;
  const primos = GeradorCrivoErastostenes.gerarPrimos(limit);
  GeradorCrivoErastostenes.mostrarPrimos(primos, linhasPage, colunasPage);
}

runCrivo();

