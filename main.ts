input.onButtonPressed(Button.A, function () {
    Feil.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    Feil.showImage(5)
})
let Feil: Image = null
Feil = images.createBigImage(`
    . . # . . . . # . .
    . . # . . . # # # .
    # . # . # # . # . #
    . # # # . . . # . .
    . . # . . . . # . .
    `)
basic.forever(function () {
    basic.pause(1000)
})
