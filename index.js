console.log('Application Started!')

const readline = require('readline');

const main = async () => {
    const galao = await readLine("Insira o volume do galão (L):\n");
    const qtdeGarrafas = await readLine("Quantidade de garrafas:\n")

    const garrafas = [];
    for (let i = 0; i < parseInt(qtdeGarrafas); i++) {
        garrafas.push(parseInt(await readLine(`Garrafa ${i + 1}:\n`)));
    }
    garrafas.sort();

    console.log('Galão:\t', galao);
    console.log('Qtde Garrafas:\t', qtdeGarrafas);
    console.log('Garrafas:\t', garrafas);

    const result = [];
    const sobra = 0;
    let liqGalao = 0;
    
    while (liqGalao < galao) {
        garrafas.reduce((faltaEncher, garrafa) => {
            console.log('garrafa', garrafa);
            console.log('faltaEncher', faltaEncher);
            if (garrafa < faltaEncher) {
                liqGalao += garrafa;
                result.push(garrafa);
                return galao = liqGalao;
            }
        }, galao)
    }

    console.log(`Resposta: [${result}], sobra ${sobra}L`);

    leitor.close();
}

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLine = async (outputText) => new Promise((resolve, reject) => {
    leitor.question(outputText, function (input) {
        resolve(input);
    });
})

main();