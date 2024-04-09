input.onButtonPressed(Button.AB, function () {
    control.reset()
})
let distance = 0
let rainfall = 0
let light_level = 0
basic.showNumber(0)
OLED.init(128, 64)
basic.showNumber(1)
OLED.writeStringNewLine("Ready!")
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    light_level = pins.analogReadPin(AnalogPin.P1)
    rainfall = pins.analogReadPin(AnalogPin.P2)
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    OLED.writeStringNewLine("Light:   " + light_level)
    OLED.writeStringNewLine("Distance:   " + distance)
    OLED.writeStringNewLine("Rainfall: " + rainfall)
    if (light_level > 300) {
        pins.analogWritePin(AnalogPin.P16, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P16, 0)
    }
    if (rainfall > 1000) {
        pins.servoWritePin(AnalogPin.P15, 45)
    } else {
        pins.servoWritePin(AnalogPin.P15, 0)
    }
    if (distance < 5) {
        pins.digitalWritePin(DigitalPin.P6, 1)
        pins.digitalWritePin(DigitalPin.P7, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P6, 0)
        pins.digitalWritePin(DigitalPin.P7, 1)
    }
    basic.pause(1000)
})
