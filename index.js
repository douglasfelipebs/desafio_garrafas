var resolveDesafio = require('./resolveDesafio.js');

const readline = require('readline');

const main = async () => {
  const galao = await readLine('Insira o volume do galão (L):\n')
    .catch((e) => console.error(e));
  const qtdeGarrafas = await readLine('Quantidade de garrafas:\n')
    .catch((e) => console.error(e));

  const garrafas = [];
  for (let i = 0; i < parseInt(qtdeGarrafas); i++) {
    garrafas.push(parseInt(await readLine(`Garrafa ${i + 1}:\n`)
      .catch((e) => console.error(e))));
  }
  garrafas.sort();
  const {
    sobra,
    resposta,
    liqGalao,
  } = resolveDesafio(galao, garrafas);
  console.log(`Resposta: [${resposta}], sobra ${sobra}L, líquido no Galão: ${liqGalao}`);

  leitor.close();
};

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLine = async (outputText) => new Promise((resolve, reject) => {
  leitor.question(outputText, function (input) {
    resolve(input);
  });
});

main();
