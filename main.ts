input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(127)
    music.playMelody("C5 B A B C5 G G C5 ", 120)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
