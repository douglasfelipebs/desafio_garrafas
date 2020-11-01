var resolveDesafio = require('../resolveDesafio.js');
var assert = require('assert');

describe('Teste 1', function () {
  const galao = 7;
  const garrafas = [1, 3, 4.5, 1.5, 3.5];
  const resposta_esperada = [1, 1.5, 4.5];
  const sobra_esperada = 0;
  const liqGalao_esperada = 7;
  const {
    sobra,
    resposta,
    liqGalao,
  } = resolveDesafio(galao, garrafas);
  it('Testa a garrafa 1', function () {
    assert.equal(resposta_esperada[0], resposta[0]);
  });
  it('Testa a garrafa 2', function () {
    assert.equal(resposta_esperada[1], resposta[1]);
  });
  it('Testa a garrafa 3', function () {
    assert.equal(resposta_esperada[2], resposta[2]);
  });
  it('Testa a sobra', function () {
    assert.equal(sobra_esperada, sobra);
  });
  it('Liq Galao', function () {
    assert.equal(liqGalao_esperada, liqGalao);
  });
});

describe('Teste 2', function () {
  const galao = 5;
  const garrafas = [1, 3, 4.5, 1.5];
  const resposta_esperada = [1, 4.5];
  const sobra_esperada = 0.5;
  const liqGalao_esperada = 5;
  const {
    sobra,
    resposta,
    liqGalao,
  } = resolveDesafio(galao, garrafas);
  it('Testa a garrafa 1', function () {
    assert.equal(resposta_esperada[0], resposta[0]);
  });
  it('Testa a garrafa 2', function () {
    assert.equal(resposta_esperada[1], resposta[1]);
  });
  it('Testa a garrafa 3', function () {
    assert.equal(resposta_esperada[2], resposta[2]);
  });
  it('Testa a sobra', function () {
    assert.equal(sobra_esperada, sobra);
  });
  it('Liq Galao', function () {
    assert.equal(liqGalao_esperada, liqGalao);
  });
});

describe('Teste 3', function () {
  const galao = 4.9;
  const garrafas = [0.4, 4.5];
  const resposta_esperada = [0.4, 4.5];
  const sobra_esperada = 0;
  const liqGalao_esperada = 4.9;
  const {
    sobra,
    resposta,
    liqGalao,
  } = resolveDesafio(galao, garrafas);
  it('Testa a garrafa 1', function () {
    assert.equal(resposta_esperada[0], resposta[0]);
  });
  it('Testa a garrafa 2', function () {
    assert.equal(resposta_esperada[1], resposta[1]);
  });
  it('Testa a sobra', function () {
    assert.equal(sobra_esperada, sobra);
  });
  it('Liq Galao', function () {
    assert.equal(liqGalao_esperada, liqGalao);
  });
});

describe('Teste 4', function () {
  const galao = 19;
  const garrafas = [20, 20, 20];
  const resposta_esperada = [20];
  const sobra_esperada = 1;
  const liqGalao_esperada = 19;
  const {
    sobra,
    resposta,
    liqGalao,
  } = resolveDesafio(galao, garrafas);
  it('Testa a garrafa 1', function () {
    assert.equal(resposta_esperada[0], resposta[0]);
  });
  it('Testa a garrafa 2', function () {
    assert.equal(resposta_esperada[1], resposta[1]);
  });
  it('Testa a sobra', function () {
    assert.equal(sobra_esperada, sobra);
  });
  it('Liq Galao', function () {
    assert.equal(liqGalao_esperada, liqGalao);
  });
});
