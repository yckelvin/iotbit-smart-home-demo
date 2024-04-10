let light_level = 0
basic.showNumber(0)
OLED.init(128, 64)
basic.showNumber(1)
OLED.writeStringNewLine("Ready!")
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    light_level = pins.analogReadPin(AnalogPin.P1)
    OLED.writeStringNewLine("Light:   " + light_level)
    if (light_level > 300) {
        pins.analogWritePin(AnalogPin.P2, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    basic.pause(1000)
})
