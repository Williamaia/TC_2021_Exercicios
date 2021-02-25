class Aleatorio {
    constructor() {
    }

    gerarNumeroAleatorio(inicio, fim) {
        if (inicio < 0 || fim < 0) {
            return -1;
        }

        if (inicio >= fim) {
            return -1;
        }

        let diff = fim - inicio + 1;
        let tInt = Math.ceil(Math.random() * diff); //esse método retorna um número aleatorio
        //entre 0 e diff [ 0, diff [
        return inicio + tInt;
    }
}

module.exports = Aleatorio;
