'use strict'
function showMessage() {
    alert("Peter kanns")
}
// hier muss noch der Aufruf hin, sonst wird die funktion nie aufgerufen.
showMessage()

// Die nächste Funktiion ist anonym, wird aber genauso aufgerufen, wie die obige. Der 
// Unterschied ist eher akademisch, da hier eine Zuweisung erfolgt und dann die Funktion als Aufruf der 
// Variablen mit der Klammer erfolgt.
let fkt = function() {
    alert("Ich kanns auch anonym")
}

fkt()

// Emmet ist ein Stichwort, dass man sich mal angucken könnte, wenn
// ich mit VS-Code weiterarbeiten möchte....

let txtChanger = function() {
    debugger // Der Befehl unterbricht die Ausführung an der Stelle und die Seite wird im Debugger angezeigt
    let textParagraph = document.getElementById("pp")
    textParagraph.innerText = "Peter wars :-) "

}
txtChanger()



// Objektdefinition ohne Klasse
// In einer Klasse würde man die Altersberechnung natürlich anders durchführen und kein festes Geburtsjahr speichern

// Diese Form der Objekterzeugung nennt man Literal-Schreibweise
//                                          ====================

let peter = {
    name: "Marx",
    vorname: "Peter",
    getAlter: function() {
        const heute = new Date()
        const aktuellesJahr = heute.getFullYear()
        const aktuellerMonat = heute.getMonth() + 1// getMonth liefert von 0 bis 11
        const aktuellerTag = heute.getDate()

        if(aktuellerMonat >= 10)
            return aktuellesJahr - 1966
        else
            return aktuellesJahr - 1966 - 1

    }
}

console.log(peter.getAlter())
console.log(peter.__proto__)

// Object mit einer Konstruktorfunktion erzeugen (Diese beginnen immer mit einem Großbuchstaben)
// Ganz wichtig, sie werden erst dadurch zu Konstruktorfunktionen, dass man sie mit new aufruft.
// Es gibt sonst kein this und dann geht schon der erste Aufruf knattern 
function Person(name, vorname, geburtsjahr) {
    this.name = name;
    this.vorname = vorname;
    this.getAlter = function(){
        let aktuellesJahr = new Date().getFullYear();
        return aktuellesJahr - geburtsjahr; // nicht so genau wie oben ;-)
    }
}

// new ist für die Konstruktorfunktionsaufrufe entscheidend, sonst funzt da nichts.
let peter1 = new Person("Marx", "Peter", 1966)


// Prototypen:
// Den Prototypen einer Funktion, dazu gehören eben auch Konstruktorfunktionen, kann man mit prototype
// ermitteln, den von Objekten mit __proto__, also mit einer Eigenschaft des Objekts.
console.log("Peter1:", peter1.name, peter1.vorname, peter1.getAlter())
console.log("Person-Prototype: ", Person.prototype)
console.log("Message-Prototype:", showMessage.prototype)
console.log(peter1.__proto__)


// Äquivalent zur Konstruktorfunktion ist die Möglichkeit eine Klasse zu schreiben.
// Der Code innerhalb des Construktors ist derselbe wie der in der Konstruktorfunktion. 
class Personc {
    constructor(name, vorname, geburtsjahr) {
        this.name = name;
        this.vorname = vorname;
        this.getAlter = function(){
            let aktuellesJahr = new Date().getFullYear();
            return aktuellesJahr - geburtsjahr; // nicht so genau wie oben ;-)
        }
    }
}

let peter2 = new Personc("Marx", "Peter", 1966)
console.log("Peter2:", peter2.name, peter2.vorname, peter2.getAlter())
console.log(peter2.__proto__)

// nur damit es mal irgendwo steht, der Zugriff kann neben der Punktnotation auch über eckige Klammern zugreifen.
console.log("Zugriff auf Eigenschaften über eckige Klammern:")
console.log("Die folgenden Schreibweisen sind äquivalent: peter2['name'] == peter2.name")
console.log(peter2['name'] == peter2.name)
console.log("aktuell sehe ich keinen Grund, warum man das tun sollte, kennen sollte man die Schreibweise aber")

// Klasse mit gettern und settern
// Achtung!!! Seit ECMA 2022 verwendet man # statt Unterstrich und dann sind die Felder wirklich private und können nicht
// mehr manipuliert werden. Die Schreibweise mit dem Unterstrich ist lediglich eine Konvention
class Personcgs {
    constructor(name, vorname, geburtsjahr) {
        this._name = name
        this._vorname = vorname;
        this._geburtsjahr = geburtsjahr; 
    }
    set name(newName) {
        debugger
        if(typeof newName == 'string')
        this._name = newName
        else throw new TypeError('Der name muss eine Zeichenkette sein')
    }
    set vorname(newVorname) {
        if(typeof newVorname == 'string')
        this._vorname = newVorname
        else throw new TypeError('Der vorname muss eine Zeichenkette sein')
    }
     set geburtsjahr(newGebJahr) {
        debugger
        if(typeof newGebJahr == 'number')
        this._geburtsjahr = newGebJahr
        else throw new TypeError('Das Geburtsjahr muss eine vierstellige natürliche Zahl sein')
     }

     get name(){
        return this._name
     }

     get vorname() {
        return this._vorname
     }

     get geburtsjahr() {
        return this._geburtsjahr
     }
}

let peter3 = new Personcgs("Marx", "Peter", 1966)
console.log(peter3)
peter3.geburtsjahr = 3000
peter3.name = "Tina"
console.log(peter3)
debugger


// Modularisierung
import { sagWas, addNumbers, Mensch} from "./main1.js"
sagWas()
console.log(addNumbers(3, 6))


// Objekteigenschaften
let mensch = new Mensch("Marx", "Peter", 1966)
console.log(mensch)

// Der Klasse Mensch kann man weitere Eigenschaften hinzufügen, eine der Eigenschaften von JS
mensch.sagHallo = function(){return ("Hallo Peter, ich bin " + mensch.geburtsjahr + " geboren")}
console.log(mensch.sagHallo())

// Es gibt nun drei verschiedene Scenarien, dass zu verhindern.
Object.preventExtensions(mensch)
try {
    mensch.kuss = "kuss" // liefert einen Fehler, weil man die Eigenschaften nicht erweitern kann
} catch(error){
    console.error(error)
}
// Bestehende Eigenschaften können aber weiter geändert werden.
mensch.sagHallo = "so nicht"
console.log(mensch.sagHallo)

// Will man auch das verhindern, kann man einmal noch die Property-Eigenschaften festschreiben mit:
// Damit kann man z. B. steuern, ob die Eigenschaft weiter aufgezählt wird etc.
Object.seal(mensch)

// Und schließlich kann man noch das ganze Objekt einfrieren mit
Object.freeze(mensch)
try{
    mensch.sagHallo = "Das geht gar nicht"
}catch(error){
    console.error(error)
}
// Fazit: die Sichtbarkeit in JS ist ein Thema, dass man beachten sollte....


