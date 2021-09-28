DFRobotMaqueenPlusV2.IR_callbackUserV2(function (message) {
    if (DFRobotMaqueenPlusV2.IR_readV2() == 16) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
})
serial.writeString("version-" + DFRobotMaqueenPlusV2.readVersion())
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eOpen)
basic.pause(1000)
DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
DFRobotMaqueenPlusV2.setBrightness(100)
DFRobotMaqueenPlusV2.showColor(0xff0000)
basic.pause(500)
DFRobotMaqueenPlusV2.showColor(0x00ff00)
basic.pause(500)
DFRobotMaqueenPlusV2.showColor(0x007fff)
basic.pause(500)
DFRobotMaqueenPlusV2.showColor(0xffffff)
basic.pause(500)
DFRobotMaqueenPlusV2.ledBlank()
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
pins.digitalWritePin(DigitalPin.P8, 1)
pins.digitalWritePin(DigitalPin.P12, 1)
pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.forever(function () {
    basic.showString(DFRobotMaqueenPlusV2.readVersion())
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL2) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR2) == 1) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 255)
        basic.pause(1000)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 255)
        basic.pause(1000)
    } else {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    }
})
