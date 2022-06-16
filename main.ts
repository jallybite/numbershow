function num2 () {
    for (let index = 0; index <= 8; index++) {
        basic.showNumber(index + 1)
    }
}
input.onButtonPressed(Button.A, function () {
    ccn = ccn + 1
    basic.showNumber(ccn)
})
function num1 () {
    pg1 = 10
    basic.showNumber(pg1)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        pg1 += 1
        basic.showNumber(pg1)
        basic.pause(200)
    }
}
input.onButtonPressed(Button.B, function () {
    if (ccn == 3) {
        num1()
    } else if (ccn == 5) {
        num2()
    } else {
        basic.showIcon(IconNames.StickFigure)
    }
})
input.onGesture(Gesture.Shake, function () {
    ccn = 0
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
})
let pg1 = 0
let ccn = 0
ccn = 0
basic.showIcon(IconNames.Heart)
