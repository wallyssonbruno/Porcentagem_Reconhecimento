let porcentagem = 0
// Botão A aumenta a porcentagem
input.onButtonPressed(Button.A, function () {
    if (porcentagem < 100) {
        porcentagem += 0 + 10
    }
    led.plotBarGraph(
    porcentagem,
    100
    )
})
// Botão A+B exibe mensagem contextual
input.onButtonPressed(Button.AB, function () {
    led.plotBarGraph(
    porcentagem,
    100
    )
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Yes)
    if (porcentagem >= 50) {
        basic.showString("Acima de 50%")
    } else {
        basic.showString("Abaixo de 50%")
    }
    led.plotBarGraph(
    porcentagem,
    100
    )
})
// Botão B diminui a porcentagem
input.onButtonPressed(Button.B, function () {
    if (porcentagem > 0) {
        porcentagem += 0 - 10
    }
    led.plotBarGraph(
    porcentagem,
    100
    )
})
