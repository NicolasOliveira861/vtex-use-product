/**
 * Altera as dimenções especificadas na url da img
 * @param {string} src url da imagem na VTEX
 * @param {int} width
 * @param {int} height
 * @return {string} url da imagem com o tamanho alterado
 */

export function alterarTamanhoImagemSrcVtex(src, width, height) {
    if (typeof src == "undefined") {
        console.warn("Parametro 'src' não recebido.");

        return;
    }
    width = typeof width == "undefined" ? 1 : width;
    height = typeof height == "undefined" ? width : height;

    src = src.replace(
        /\/(\d+)(-(\d+-\d+)|(_\d+))\//g,
        "/$1-" + width + "-" + height + "/"
    );
    return src;
}

/**
 * Obtem Preco
 * caso o preco recebido seja um Float ou int,
 * 	'Ex.': 10.2 ->'10,20'
 * Recebendo uma string o valor sera retornado como um float
 * 	'Ex.': 'R$1.234,30' -> 1234.3
 * @param  {FloatZstring} price preço
 * @return {[type]}       [description]
 */
export function getPrice(price) {
    if (!price) {
        return 0;
    }

    if (isNaN(price)) {
        let newPrice = parseFloat(
            price.replace("R$", "").replace(".", "").replace(",", ".")
        );
        return newPrice;
    } else {
        price = price || 0;
        price = price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        return price;
    }
}

export function formatCurrency() {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

export function obterCannalDeVendas() {
    var name = "VTEXSC=sc=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return 1;
}
