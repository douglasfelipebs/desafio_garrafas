const resolveDesafio = function (galao, garrafas) {
  const resposta = [];
  const sobra = 0;
  let liqGalao = 0;

  return encheGalao(galao, liqGalao, garrafas, resposta, sobra);
};

const encheGalao = (galao, liqGalao, garrafas, resposta, sobra) => {
  const falta = galao - liqGalao;
  const maiorGarrafaDisponivel = getMaxUntil(garrafas, falta);
  if (maiorGarrafaDisponivel) {
    removeItemArray(garrafas, maiorGarrafaDisponivel);
    liqGalao += maiorGarrafaDisponivel;
    resposta.push(maiorGarrafaDisponivel);
    if (liqGalao === galao || !garrafas.length) {
      resposta.sort();
      return {
        resposta,
        sobra,
        liqGalao,
      };
    } else {
      return encheGalao(galao, liqGalao, garrafas, resposta, sobra);
    }
  } else {
    const menorGarrafaDisponivel = getMin(garrafas);
    if (menorGarrafaDisponivel) {
      removeItemArray(garrafas, menorGarrafaDisponivel);
      sobra = (liqGalao + menorGarrafaDisponivel) - galao;
      liqGalao += menorGarrafaDisponivel - sobra;
      resposta.push(menorGarrafaDisponivel);
    }
    resposta.sort();
    return {
      resposta,
      sobra,
      liqGalao,
    };
  }
};

const getMaxUntil = (arr, max) => {
  return arr.reduce(function (acc, atual) {
    const maior = Math.max(acc, atual);
    if (maior > max) return acc;
    return maior;
  }, 0);
};

const getMin = (arr) => {
  return arr.reduce(function (acc, atual) {
    return Math.min(acc, atual);
  });
};

const removeItemArray = (arr, item) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      return arr;
    }
  }
  return arr;
};

module.exports = resolveDesafio;
