input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    for (let index = 0; index < 4; index++) {
        servos.P0.setAngle(30)
        basic.pause(200)
        servos.P0.setAngle(150)
        basic.pause(200)
    }
    basic.showLeds(`
        . # . # .
        . . . . .
        . # . # .
        . # . # .
        . # # # .
        `)
    servos.P0.setAngle(90)
    servos.P0.stop()
})
basic.showLeds(`
    . # . # .
    . . . . .
    . # . # .
    . # . # .
    . # # # .
    `)
servos.P0.setRange(0, 180)
servos.P0.setAngle(90)
basic.forever(function () {
	
})
