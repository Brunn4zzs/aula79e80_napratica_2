let o_leitura_analógica_p1 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(o_leitura_analógica_p1)
})
basic.forever(function () {
    let unidade = 0
    o_leitura_analógica_p1 = o_leitura_analógica_p1
    if (unidade < 1000) {
        basic.showIcon(IconNames.Square)
    } else if (unidade < 800) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
