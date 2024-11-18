# Mit Daten arbeiten
Ziel des Kapitels ist es, die folgende [Zielgrafik](https://d3js-in-action-third-edition.github.io/most-popular-data-visualization-technologies/) zu erstellen und den Weg dorthin zu beschreiben. Ein wichtiges Thema auf dem Weg sind sogenannte **Scales**, darunter versteht man mathematische Funktionen, die einen Bereich von Zahlen auf einen anderen Bereich von Zahlen abbilden (z.B. Pixel auf dem Bildschirm). Sie dienen dazu, Daten in eine visuell darstellbare Form umzuwandeln.

![Datenworkflow](DataWorkflow.png)
***Dataworkflow für D3, was zunächst unlogisch erscheint ist, dass zunächst die Daten gebunden und erste dann skaliert werden***

## Daten verstehen
Im Buch wird eine Reihe interessanter Datenquellen genannt:
- [Data.world](https://data.world/)
- [Kaggle](www.kaggle.com/)
- [World Bank Open Data](https://data.worldbank.org/)
- [Our World in Data](https://ourworldindata.org/)
- [EarthData](https://www.earthdata.nasa.gov/)
- [EU Open Data Portal](https://data.europa.eu/)
- [Data.gov](https://data.gov/)
- [openAfrica](https://africaopendata.org/)
- [Dataportal.asia](https://dataportal.asia/)

## Datentypen
Zunächst einmal lassen sich 

- qualitative und 
- quantitative Daten 

unterscheiden. Qualitative Daten sind nicht numerisch, Beispiele dafür sind

- Geschlecht
- Bezeichnungen wie z.B. Städtenamen

Es gibt bei den qualitativen Daten solche, die sich in eine Reihenfolge bringen lassen und solche, die ohne order sind. T-Shirt-Größen (XS, S, M, L, XL) sind ein Beispiel für geordnete qualitative Daten.

![Datentypen](Datentypen.png)

## Datenformate und -strukturen
- json
- raw
- geographic data
- Tabellendaten / csv-Daten
- Netzwerkdaten
- verschachtelte Daten (nested data)

### Tabellendaten
D3 besitzt drei Funktionen, um csv- bzw. Tabellendaten zu lesen:
```javascript
d3.csv();     // comma-separated-data
d3.tsv();     // tab-separated-data
d3.dsv();     // delimiter-separated-data 
```

### JSON-daten
```javascript
d3.json();    // wird genutzt um JSON-Daten zu lesen 
```
***Sämtliche dieser Funktionen zum Laden von Daten sind Teil des [Fetch-Moduls](https://d3js.org/d3-fetch) und bekommen als ersten Parameter den Pfad zu den Daten übergeben.***
Die Funktionen zum Laden der Daten sind sämtlich asynchron, man muss also darauf achten, dass sie entweder mittels `and` oder `or` weiterverarbeitet werden oder dass man einen JavaScript Promise verwendet. Auf der D3 Seite wird jeweils ein `await` verwendet:
```javascript
const data = await d3.csv("hello-world.csv");
```

### Verschachtelte Daten
Verschachtelte Daten (nested data) zeichnet sich dadurch aus, dass man die Daten in einer Hierarchie anzeigen kann. Wichtig ist, dass jeder Knoten in dem Netz nur einen Vorfahren besitzt, dadurch lassen sich Bäume aufspannen.

### Netzwerkdaten
Netzwerkdaten existieren aus einer Reihe von Knoten, die miteinander verbunden sind. In Netzwerkdaten gibt es n:m-Beziehungen. Für die Darstellung gibt es ein eigenes Kapitel. Eine interessante Seite dazu könnte diese sein [OpenGraph-Plattform](https://gephi.org). Netzwerke sind also ganz allgemeine Graphen.

### geographische Daten
Bestehen aus Points oder Shapes und können vielfältig dargestellt werden wie in den [Beispielen für Darstellungen](https://observablehq.com/@d3/gallery#maps) zu sehen. 

Für Geo-Daten gibt es unterschiedliche Standards, im Buch werden GeoJSON und TopoJSON behandelt.

[PostGIS](https://postgis.net/) scheint ein GIS zu sein, das frei nutzbar ist und auf [PostgreSQL](https://www.postgresql.org/) aufbaut. 

### RAW Daten
Werden in der Regel mit Bildern und Text dargestellt, wenn eine Bearbeitung nicht möglich scheint oder zu aufwendig ist. D3 unterstützt diese Form der Darstellung, mit *echter* Datenverarbeitung vor der Darstellung hat dies weniger zu tun.

## Laden der Daten
Die folgende Grafik fasst das Laden, Konvertieren und Messen der Daten seht gut zusammen
![DatenLadenKonvertierenMessen](DatenLadenKonvertierenMessen.png) Im Quelltext findet man den echten Code dazu.
