'use strict'
console.clear()



// Zeichenklassen
// ==============
// Zeichenklasse (auf Englisch: Character Class) eine Gruppe von Zeichen, die auf bestimmte Weise zusammengefasst sind
// und als Platzhalter für ein beliebiges Zeichen innerhalb dieser Gruppe fungieren

// [aeiou]     wäre z. B. die Zeichenklasse, die alle Konsonanten umfasst. 
// [^aeiou]    ist die Zeichenklasse, die ohne Konsonanten auskommt Das Caret verneint den gesamten Ausdruck.
// [a-zA-Z]    ist die Zeichenklasse mit allen alphabetischen Zeichen.
// .           belibieges Zeichen mit Ausnahme des Zeilenumbruchs 
// a           das Zeichen selbst, hier ein a
// a|b         a oder b als Zeichen
// \d          Zahl zwischen 0 und 9 d für Digit
// \D          alle Zeichen, die keine Zahl zwischen 0 und 9 sind.
// \s          beliebiger Leerraum [\t\n\x0B\f\r] s für Space
// \S          kein Leerraum
// \w          beliebiges alphanumerisches Zeichen w für Word-Character
// \W          alles, was kein alphanumerisches Zeichen ist

// Anfang und Ende
// ===============
// Ein Satz soll immer mit einem Großbuchstaben anfangen, Er soll immer mit einem Punkt enden. 
// Mann kann für Anfang und Ende einer RegExp besondere Markierungen festlegen.

// /^S/        Der gesuchte String muss mit einem Großen S beginnen (Achtung, das Caret hat hier nicht die
//             negierende Funktion von den Zeichenklassen).
// /n$/        Der gesuchte String muss mit einem n enden.
// \b          markiert einen Wortanfang oder Wortende innerhalb eines Strings.
// \B          markiert das Gegenteil von \b

// Quantifizierer
// ==============
// Quantifizierer in regulären Ausdrücken legen fest, wie oft ein bestimmtes Zeichen, 
// eine Gruppe oder eine Zeichenklasse vorkommen soll, damit ein Ausdruck als Treffer gilt.

// *           Null oder mehr Vorkommen: /a*/ findet "" (kein a), a, aa, aaa, usw
// +           Eins oder mehr Vorkommen: /a+/ findet a, aa, aaa, usw., aber nicht "" (kein a)
// ?           Null oder ein Vorkommen:  /a?/ findet entweder a oder "" (kein a).
// {n}         Genau n Vorkommen         /a{2}/ findet aa, aber nicht a oder aaa.
// {n,}        Mindestens n-mal          /a{2,}/ findet aa, aaa, usw.
// {m,n}       Mindestens m-mal, höchstens n-mal
// {,n}        Höchstens n-mal

// Eine Regex entweder als Literal oder per Konstruktor erstellen
// Eine Regex als Literal wird durch einleitenden und schließenden Slash markiert. 
// Die fehlenden Anführungszeichen sind korrekt, also nicht notwendig
const regexLiteral = /abc/; 
const regexConstructor = new RegExp('abc')
console.log(regexLiteral == regexConstructor) // gibt false, was mich zunächst gewudert hat

// Vergleich wie man ihn mit JSON-Mitteln durchführen kann, da es sich jeweils um Objekte handelt,
// das funktioniert auch mit dem regexliteral
const a = new RegExp('abc')
const b = new RegExp('abc')
let e = JSON.stringify(regexLiteral) === JSON.stringify(b) && JSON.stringify(b) === JSON.stringify(a); // ergibt true
console.log(e)

// ======
// test()
// ======
// Prüft, ob ein Muster in einer Zeichenkette vorkommt. Gibt true oder false zurück.
const helloRegexp = /hello/;
console.log(helloRegexp.test("Strhellociatella ist nich Straciatella")); // true
console.log(helloRegexp.test("Hallo Peter"));                            // false

// ======
// exec()
// ======
// Gibt das erste Vorkommen eines Musters in einer Zeichenkette als Array zurück

// Ergebnis
// ========bb
// ['mal', index: 10, input: 'Es war einmal ein Mann, der hatte sieben Söhne und lud zum Siebtenmal ein', groups: undefined]

const execRegexp = /mal/
const siebenSoehneString = "Es war einmal ein Mann, der hatte sieben Söhne und lud zum Siebtenmal ein"
console.log(execRegexp.exec(siebenSoehneString))

//========
// match() 
//========
// Arbeitet wie exec, wird jedoch nicht auf der RegExp, sondern auf dem String aufgerufen
// Die Ergebnisse von exec und match stimmen exakt überein.

// Ergebnis
// ========
// ['mal', index: 10, input: 'Es war einmal ein Mann, der hatte sieben Söhne und lud zum Siebtenmal ein', groups: undefined]

console.log(siebenSoehneString.match(execRegexp)); 

//==========
// search()
//==========
// Sucht nach der RegExp und gibt als Ergebnis den Index des ersten Treffers zurück.
// Ergebnis ist hier der Index des ersten Suchtreffers
console.log("Searchergebnis: ", siebenSoehneString.search(execRegexp))

//==========
// split()
//==========
// Teilt den String an den Stellen, an denen ein Treffer gefunden wird und entfernt den String.
// Das Ergebnis ist dann ein Array mit den Teilstrings. 
console.log("Splitergebnis: ", siebenSoehneString.split(execRegexp))
// Ergebnis ist das folgende Array:
// 0
// Es war ein
// ein Mann, der hatte sieben Söhne und lud zum Siebten"
// ein

//==========
// replace()
//==========
// Wird ebenfalls auf dem String aufgerufen und ersetzt die Fundstellen.

const replaceResult = "hello world, die Sonne scheint!".replace(/world/, "JavaScript");
console.log(replaceResult); // "hello JavaScript, die Sonne scheint!"

// In JS kann man für die RegExps bereits Flags setzen. Folgende existieren:
// g    – Global: Sucht global nach allen Vorkommen.
// i    – Ignore Case: Groß- und Kleinschreibung ignorieren.
// m    – Multiline: Mehrzeilige Suche.

// Hier am Beispiel einer Suche, die Groß-Kleinschreibung ignoriert

const regexpPeter = /peter/igm // sucht also nach allen Vorkommen und ignoriert den Case
let regexpPeterSuchstring = "Peterchens Mondfahrt ist ein altes Märchen in dem ein kleiner Junge mit dem Namen Peter Ziegenpeter bekommt"
let ergebnisRegexpPeter = regexpPeter.exec(regexpPeterSuchstring)
debugger
console.log(ergebnisRegexpPeter)
// Als Ergebnis werden die Treffer zurückgegeben, aber die Informationen aus den Beispielen oben fehlen....
// Lässt man das g für Global weg, erhält man wieder ein Ergebnis wie ganz oben, mit allen Informationen, dann
// allerdings nur für den ersten Treffer. Ob man hier exec oder match verwendet ist wieder äquivalent.

// Abschließendes, zusammenfassendes Beispiel, in welchem die Telefonnummern in einem
// zweizeiligen String gefunden werden.
let textMitTelNr = "Die private Telefonnummer lautet +49 30 1234567," +
    " die geschäftliche Telefonnummer lautet: +49 30 1234568"

// Das Plusszeichen muss escaped werden und kann 0 oder einmal vorkommen \+?
// Anschließend kommt eine genau \d{2} zweistellige Landesvorwahl
// Danach ist eine Leerstelle gewünscht mit \s (space)
// Dann soll eine zweistellige Ortsvorwahl kommen \d{2} wieder gefolgt von einem Space \s
// Die Telefonnummer selbst soll dann 5- bis 7-stellig sein.
// Das Flag g wird dann noch angehängt, um alle Treffer zu finden.
let regexpTelNr = /\+?\d{2}\s\d{2}\s\d{5,7}/g
let resultTelNr
while((resultTelNr = regexpTelNr.exec(textMitTelNr)) != null) {
    console.log(
        'Nummer ' + resultTelNr[0] + ' gefunden an Index ' + resultTelNr.index + '.'
    );
}

// Denselben Code kann man noch einmal mit Gruppen schreiben. Gruppen ermöglichen die Angabe
// von Qualifizierern auf die Gruppe und damit auf mehrere Zeichen gleichzeitig bezogen. Außerdem
// kann man man mit Gruppen gleichzzeitig auch Teile zurückbekommen. Hier der gleich RegExp - Ausdruck
// für die Telenonnummer von oben mit Gruppen für die Länder- und die Ortsvorwahl sowie für die 
// eigentliche Telefonnummer.
console.log("!!!Hier kann man jetzt auch die Gruppen auswerten!!!")
console.log("====================================================")

let regExpTelNrMitGruppen = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g
let resultTelNrMitGruppen
while((resultTelNrMitGruppen = regExpTelNrMitGruppen.exec(textMitTelNr)) != null) {
    console.log('\nNummer ' + resultTelNrMitGruppen[0] + ' gefunden an Index ' + resultTelNrMitGruppen.index + '.'
    );
    console.log("Gruppe 1 ist die internationale Vorwahl: " + resultTelNrMitGruppen[1])
    console.log("Gruppe 2 ist die nationale Vorwahl: " + resultTelNrMitGruppen[2])
    console.log("Gruppe 3 ist die Telefonnummer: " + resultTelNrMitGruppen[3])
}

