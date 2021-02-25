const Aleatorio = require('../lib/aleatorio');

const aleatorio = new Aleatorio();

describe('Aleatorio', () => {
    test('test initial is negative', () =>{
        expect(aleatorio.gerarNumeroAleatorio(-1, 3)).toBe(-1);
    });

    test('test final is negative', () =>{
        expect(aleatorio.gerarNumeroAleatorio(1, -3)).toBe(-1);
    });

    test('test initial is equals final', () =>{
        expect(aleatorio.gerarNumeroAleatorio(3, 3)).toBe(-1);
    });

    test('test a valid range [200, 3000] is provided', () =>{
        expect(aleatorio.gerarNumeroAleatorio(200, 3000)).toBeGreaterThanOrEqual(200);
    });
});
