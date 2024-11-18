// Es muss nur die Funktion mit export markiert werden, die später in der anderen JS-Datei genutz werden soll.
// Die Nutzung von getText ist trotzdem innerhalb der Fkt möglich.
// Wichtig ist das 

//      <script type="module" src="scripts/main.js"></script>

// type="module" ohne dass gar nichts geht.
export function sagWas() {
    console.log(getText());
}

export function addNumbers(a, b) {
    return a + b
}

function getText(){
    return "Peter ist der Beste Programmierer"
}


// Objektzustände
export class Mensch {

    // Die Variablen müssen vorab definiert sein, damit sie der Konstruktor nutzen kann.
    #name; #vorname; #geburtsjahr;

    constructor(name, vorname, geburtsjahr) {
        this.#name = name
        this.#vorname = vorname;
        this.#geburtsjahr = geburtsjahr; 
    }
    set name(newName) {
        debugger
        if(typeof newName == 'string')
        this.#name = newName
        else throw new TypeError('Der name muss eine Zeichenkette sein')
    }
    set vorname(newVorname) {
        if(typeof newVorname == 'string')
        this.#vorname = newVorname
        else throw new TypeError('Der vorname muss eine Zeichenkette sein')
    }
     set geburtsjahr(newGebJahr) {
        debugger
        if(typeof newGebJahr == 'number')
        this.#geburtsjahr = newGebJahr
        else throw new TypeError('Das Geburtsjahr muss eine vierstellige natürliche Zahl sein')
     }

     get name(){
        return this.#name
     }

     get vorname() {
        return this.#vorname
     }

     get geburtsjahr() {
        return this.#geburtsjahr
     }
}
