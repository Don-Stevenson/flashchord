var $chromatic = ["A", "A♭", "A♯", "B", "B♭", "B♯", "C", "C♭", "C♯", "D", "D♭", "D♯", "E", "E♭", "E♯", "F", "F♭", "F♯", "G", "G♭", "G♯"];
var $quality_beginner = ["", "m", "m7", "7"];
var $quality_intermediate = $quality_beginner.concat(["+", "°", "maj7", "m7♭5", "6", "m6", "sus2", "sus4", "9", "m9", "11", "13", "6/9"]);
var $quality_advanced = $quality_intermediate.concat(["7alt"]);
var $extension = ["", "(♯9)", "(♭9)", "(♯5)", "(♭5)"];

var $keys = {
  "G♭ Major":   ["G♯", "A♭", "B♭", "C♭", "D♭", "E♭", "F"],
  "D♭ Major":   ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"],
  "A♭ Major":   ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"],
  "E♭ Major":   ["E♭", "F", "G", "A♭", "B♭", "C", "D"],
  "B♭ Major":   ["B♭", "C", "D", "E♭", "F", "G", "A"],
  "F Major":    ["F", "G", "A", "B♭", "C", "D", "E"],
  "C Major":    ["C", "D", "E", "F", "G", "A", "B"],
  "G Major":    ["G", "A", "B", "C", "D", "E", "F♯"],
  "D Major":    ["D", "E", "F♯", "G", "A", "B", "C♯"],
  "A Major":    ["A", "B", "C♯", "D", "E", "F♯", "G♯"],
  "E Major":    ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"],
  "B Major":    ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"],
  "F♯ Major":   ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯"],

  "E♭ Minor":   ["E♭", "F", "G♭", "A♭", "B♭", "C♭", "D♭"],
  "B♭ Minor":   ["B♭", "C", "D♭", "E♭", "F", "G♭", "A♭"],
  "F Minor":    ["F", "G", "A♭", "B♭", "C", "D♭", "E♭"],
  "C Minor":    ["C", "D", "E♭", "F", "G", "A♭", "B♭"],
  "G Minor":    ["G", "A", "B♭", "C", "D", "E♭", "F"],
  "D Minor":    ["D", "E", "F", "G", "A", "B♭", "C"],
  "A Minor":    ["A", "B", "C", "D", "E", "F", "G"],
  "E Minor":    ["E", "F♯", "G", "A", "B", "C", "D"],
  "B Minor":    ["B", "C♯", "D", "E", "F♯", "G", "A"],
  "F♯ Minor":   ["F♯", "G♯", "A", "B", "C♯", "D", "E"],
  "C♯ Minor":   ["C♯", "D♯", "E", "F♯", "G♯", "A", "B"],
  "G♯ Minor":   ["G♯", "A♯", "B", "C♯", "D♯", "E", "F♯"],
  "D♯ Minor":   ["D♯", "E♯", "F♯", "G♯", "A♯", "B", "C♯"],
};

// flat: &#9837; ♯
// sharp: &#9839; ♭
// natural: &#9838; ♮
// diminished: &#176; °
// double sharp: 𝄪
// double flat: 𝄫
// major: Δ
