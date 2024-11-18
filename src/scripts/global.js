// Weil diese Eigenschaft mit var deklariert wurde, wird sie ohne eigenen Bindungskontext automatisch
// an das globale windows-objekt gehängt und kann mit window.globalesObjekt abgefragt werden
var globalesObjekt = "Ich stehe allen zur Verfügung"
console.log("Mein eigenes globales Objekt: ", window.globalesObjekt)

/**
 * 
Zusammenfassung:
Eigenschaft	                var	                                            let
===========                 ===                                             ===
Scope	                    Funktions-Scope	                                Block-Scope

Hoisting	                Ja, aber initialisiert mit undefined	        Ja, aber in der TDZ (temporal dead zone) 
                                                                            bis zur Initialisierung

Mehrfachdeklaration	        Erlaubt	                                        Nicht erlaubt

Globale Objekterstellung	Wird zu window-Eigenschaft (im globalen Scope)	Wird nicht zu window-Eigenschaft

 */