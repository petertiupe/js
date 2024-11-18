'use strict'
// erzeugt ein neues Array
let names = new Array(20)


// Der JSDoc-Kommentar führt dazu, dass bei der Codeergänzung auch Typen mit angezeigt werden. Das
// kann man hier sehr gut sehen. Genaueres muss man sich dann mal in Beispielen bei GitHub ansehen.
/**
 * Erstellt ein Array der angegebenen Länge.
 * @param {number} [arrayLength] - Die Länge des zu erstellenden Arrays.
 * @returns {any[]} - Ein Array beliebiger Elemente.
 */
function createArray(arrayLength) {
    return new Array(arrayLength);
}

function printArray(ar) {
    // Eine andere Variante ist
    console.log("Ausgabe der Arraywerte")
    for(let i=0; i < ar.length; i++) {
        console.log(ar[i])
    }
    console.log("==========")

}

let baeume = new Array("Tanne", "Kiefer", "Fichte", "Kastanie", "Pappel")
console.log(baeume)
baeume.forEach((value, index) =>{
    console.log(baeume[index], value, "liefert zweimal denselben Wert für den Index; ", index )
})

// Einen Wert am Ende des Arrays hinzufügen
printArray(baeume)
baeume.push('Kirsche')
printArray(baeume)

// Einen Wert am Anfang des Arrays hinzufügen
printArray(baeume)
baeume.unshift('Walnuss')
baeume.unshift('Amerikanische Roteiche')
printArray(baeume)
// Shift entfernt den ersten Wert in einem Array, daher auch der Name unshift, weil sie das Gegenteil von shift macht.
baeume.shift()
baeume.shift()
printArray(baeume)
