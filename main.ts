makerbit.connectUltrasonicDistanceSensor(DigitalPin.P8, DigitalPin.P12)
basic.forever(function () {
    led.plotBarGraph(
    makerbit.getUltrasonicDistance(DistanceUnit.CM),
    50
    )
    basic.pause(50)
})
