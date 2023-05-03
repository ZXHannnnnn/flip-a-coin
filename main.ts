input.onGesture(Gesture.Shake, function () {
    coin = randint(1, 2)
    if (coin == 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
    if (coin == 2) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            `)
    }
})
let coin = 0
basic.showString("LETS FLIP A COIN!")
