
# CSS Selektoren Cheatsheet
Selektoren spielen bei D3 eine große Rolle in der select und auch in der selectAll-Funktion. 
Aus diesem Grund ist hier eine Übersicht über die CSS-Selektoren als HTML-Tabelle.

## Übersicht über die CSS-Selektoren

<table class="uk-table uk-table-striped">
<tbody>
<tr>
<th style="width:20%">Selektor</th>
<th style="width:30%">HTML</th>
<th style="width:20%">CSS</th>
<th style="width:30%">Erklärung</th>
</tr>
<tr>
<td>Element-Selektor</td>
<td>&lt;p&gt;&lt;/p&gt;</td>
<td>p {}</td>
<td>Selektiert alle HTML-Elemente dieser Art. In diesem Beispiel alle p-Tags.</td>
</tr>
<tr>
<td>Klassen-Selektor</td>
<td>&lt;p class=„eine-klasse“&gt;&lt;/p&gt;</td>
<td>.eine-klasse {}</td>
<td>Selektiert alle HTML-Elemente mit dieser Klasse.</td>
</tr>
<tr>
<td>Element-Klassen-Selektor</td>
<td>&lt;p class=„eine-klasse“&gt;&lt;/p&gt;</td>
<td>p.eine-klasse {}</td>
<td>Selektiert alle p-Tags mit dieser Klasse. Andere HTML-Tags mit dieser Klasse bleiben von der Stilanweisung unberührt.</td>
</tr>
<tr>
<td>ID-Selektor</td>
<td>&lt;p id=„eine-id“&gt;&lt;/p&gt;</td>
<td>#eine-id {}</td>
<td>Selektiert HTML-Tags mit dieser ID. Da eine ID immer einmalig sein muss, spricht dieser Selektor nur das eine HTML-Element mit dieser ID an. Logisch, oder?</td>
</tr>
<tr>
<td>Mehrere Selektoren</td>
<td>&lt;p&gt;&lt;/p&gt; <br /> &lt;a class=&#8220;eine-klasse&#8220;&gt;&lt;/a&gt;</td>
<td>p, <br /> a.eine-klasse {}</td>
<td>Mehrere Selektoren werden durch ein Komma getrennt (und am besten in eine neue Zeile geschrieben). Egal um welche Art von Selektor es sich handelt.</td>
</tr>
<tr>
<td>Kombination von Selektoren</td>
<td>&lt;div class=&#8220;eine-klasse&#8220;&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt;</td>
<td>div.eine-klasse p {}</td>
<td>Wenn du Selektoren kombinierst, wirkt die Stilanweisung nur, wenn sie diese Kombination von HTML-Elementen findet. In diesem Beispiel also nur dann, wenn ein p-Tag sich in einem div-Tag mit dieser Klasse befindet. Alle anderen p-Tags bleiben von dieser Regel ausgeschlossen.</td>
</tr>
<tr>
<td>Universeller Selektor</td>
<td>Betrifft alle HTML-Elemente</td>
<td>* {}</td>
<td>Mit dem universellen Selektor sprichst du alle HTML-Elemente in diesem Dokument an. Dieser Selektor wird oft für ein CSS-Reset verwendet.</td>
</tr>
<tr>
<td>Universeller Selektor in einem Eltern-Element</td>
<td>&lt;div class=&#8220;eine-klasse&#8220;&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;a&gt;&lt;/a&gt; <br /> &lt;/div&gt;</td>
<td>div.eine-klasse * {}</td>
<td>Mit dem universellen Selektor sprichst du alle HTML-Elemente in diesem Eltern-Element (in unserem Beispiel dem div-Tag mit der Beispiel-Klasse) an.</td>
</tr>
<tr>
<td>Kind-Selektor</td>
<td>&lt;div class=&#8220;eine-klasse&#8220;&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt; <br /> &lt;p&gt;&lt;/p&gt;</td>
<td>div.eine-klasse > p {}</td>
<td>Mit dem Kind-Selektor definierst du, welche Kind-Elemente eines Eltern-Elements du ansprechen willst. Alle Elemente dieses Typs, die nicht Kind des Eltern-Elements sind, bleiben von der Stilanweisung unberührt. In unserem Beispiel ist das eine p-Tag Kind-Element des div-Tags und wird angesprochen, während das andere p-Tag, welches eben kein Kind des Eltern-Divs ist, nicht angesprochen wird.</td>
</tr>
<tr>
<td>Kind-Selektor</td>
<td>&lt;div class=&#8220;eine-klasse&#8220;&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt; <br /> &lt;p&gt;&lt;/p&gt;</td>
<td>div.eine-klasse > p {}</td>
<td>Mit dem Kind-Selektor definierst du, welche Kind-Elemente eines Eltern-Elements du ansprechen willst. Alle Elemente dieses Typs, die nicht Kind des Eltern-Elements sind, bleiben von der Stilanweisung unberührt. In unserem Beispiel ist das eine p-Tag Kind-Element des div-Tags und wird angesprochen, während das andere p-Tag, welches eben kein Kind des Eltern-Divs ist, nicht angesprochen wird.</td>
</tr>
<tr>
<td>Folge-Selektor</td>
<td>&lt;div class=&#8220;eine-klasse&#8220;&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt; </td>
<td>div + p {}</td>
<td>Mit dem Folge-Selektor sprichst du nur dieses eine HTML-Element an, welches direkt auf ein anderes HTML-Element folgt. Alle anderen bleiben unberührt. In unserem Beispiel, also nur das erste p-Tag, welches auf das div-Tag mit der Beispiel-Klasse folgt. Das zweite p-Tag folgt nicht direkt auf das div-Tag mit der Beispiel-Klasse und bleibt deshalb unberührt.</td>
</tr>
<tr>
<td>Kombinierter Folge-Selektor</td>
<td>&lt;div class=&#8220;eine-klasse&#8220;&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;a&gt;&lt;/a&gt; <br /> &lt;a&gt;&lt;/a&gt; <br /> &lt;/div&gt; </td>
<td>div + p + a {}</td>
<td>Mit dem kombinierten Folge-Selektor sprichst du nur dieses eine HTML-Element an, welches direkt auf ein anderes HTML-Element folgt, das wiederum auf ein anderes HTML-Element folgt. Alle anderen bleiben unberührt. In unserem Beispiel, also nur das a-Tag, welches auf das erste p-Tag folgt, welches wiederum auf das div-Tag mit der Beispiel-Klasse folgt. Das zweite a-Tag folgt nicht direkt auf das div-Tag und das p-Tag mit der Beispiel-Klasse und bleibt deshalb unberührt.</td>
</tr>
<tr>
<td>Universeller Folge-Selektor</td>
<td>&lt;div class=&#8220;eine-klasse&#8220;&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt; </td>
<td>div ~ p {}</td>
<td>Mit dem universellen Folge-Selektor sprichst du alle spezifischen HTML-Elemente an, welches direkt auf ein anderes HTML-Element folgen. In unserem Beispiel also alle p-Tags, die auf das div-Tag mit der Beispiel-Klasse folgen.</td>
</tr>
<tr>
<td>Attribut-Selektor</td>
<td>&lt;a href=&#8220;https://code-crowd.de/&#8220;&gt;&lt;/a&gt; <br /> &lt;a&gt;&lt;/a&gt; </td>
<td>[href] {}</td>
<td>Mit dem Attribut-Selektor sprichst du alle HTML-Tags an, die dieses Attribut haben. Elemente ohne dieses Attribut bleiben von der Stilanweisung unberührt.</td>
</tr>
<tr>
<td>Element-Attribut-Selektor</td>
<td>&lt;a href=&#8220;https://code-crowd.de/&#8220;&gt;&lt;/a&gt; <br /> &lt;a&gt;&lt;/a&gt; </td>
<td>a[href] {}</td>
<td>Mit dem Element-Attribut-Selektor sprichst du alle HTML-Tags an, die dieses spezifische Tag sind (in unserem Beispiel ein a-Tag) und dieses Attribut (in unserem Beispiel ein href-Attribut) haben. Andere Elemente und dieselben Elemente ohne dieses Attribut bleiben von der Stilanweisung unberührt.</td>
</tr>
<tr>
<td>Attribut-Start-Selektor</td>
<td>&lt;a target=&#8220;_blank&#8220;&gt;&lt;/a&gt; <br /> &lt;a&gt;&lt;/a&gt; </td>
<td>a[target^=&#8220;_&#8220;] {}</td>
<td>Mit dem Attribut-Start-Selektor sprichst du alle HTML-Tags an, die in diesem spezifischen Attribut, den vorgegebenen Anfang haben. In unserem Beispiel das a-Tag mit dem Attribut <em>target</em>, denn der Attribut-Wert <em>_blank</em> starte mit einem <em>_</em>. </td>
</tr>
<tr>
<td>Attribut-Ende-Selektor</td>
<td>&lt;a target=&#8220;_blank&#8220;&gt;&lt;/a&gt; <br /> &lt;a&gt;&lt;/a&gt; </td>
<td>a[target$=&#8220;k&#8220;] {}</td>
<td>Mit dem Attribut-Ende-Selektor sprichst du alle HTML-Tags an, die in diesem spezifischen Attribut, das vorgegebene Ende haben. In unserem Beispiel das a-Tag mit dem Attribut <em>target</em>, denn der Attribut-Wert <em>_blank</em> endet mit einem <em>k</em>. </td>
</tr>
<tr>
<td>Attribut-Wildcard-Selektor</td>
<td>&lt;a target=&#8220;_blank&#8220;&gt;&lt;/a&gt; <br /> &lt;a&gt;&lt;/a&gt; </td>
<td>a[target*=&#8220;ank&#8220;] {}</td>
<td>Mit dem Attribut-Wildcard-Selektor sprichst du alle HTML-Tags an, die in diesem spezifischen Attribut, den vorgegebenen Teilwert haben. In unserem Beispiel das a-Tag mit dem Attribut <em>target</em>, denn der Attribut-Wert <em>_blank</em> hat den Teilwert <em>ank</em>. </td>
</tr>
<tr>
<td>Attribut-Start-Selektor</td>
<td>&lt;a target=&#8220;_blank&#8220;&gt;&lt;/a&gt; <br /> &lt;a&gt;&lt;/a&gt; </td>
<td>a[target=&#8220;_blank&#8220;] {}</td>
<td>Mit dem Attribut-Wert-Selektor sprichst du alle HTML-Tags an, die diese spezifische Kombination aus Tag, Attribut und Attribut-Wert haben. In unserem Beispiel das a-Tag mit dem Attribut <em>target</em> und dem Attribut-Wert <em>_blank</em>. Andere Elemente ohne diese Attribut-Wert-Kombination bleiben von der Stilanweisung unberührt.</td>
<tr>
<td>Pseudo-Klassen-Selektor</td>
<td>&lt;a&gt;&lt;/a&gt;</td>
<td>a:hover {}</td>
<td>Mit dem Pseudo-Klassen-Selektor sprichst du keine tatsächlichen HTML-Elemente an, sondern Zustände, die durch die Interaktion mit der Website entstehen. In unserem Beispiel das Hovern über einen Link.</td>
</tr>
<tr>
<td>Pseudo-Element-Selektor</td>
<td>&lt;a&gt;&lt;/a&gt;</td>
<td>a::before {}</td>
<td>Mit dem Pseudo-Element-Selektor sprichst du keine tatsächlichen in HTML geschriebenen Elemente, sondern Pseudo-Elemente, die dadurch entstehen, dass du sie per CSS ansprichst. In unserem Beispiel fügen wir vor allen Links Inhalt ein.</td>
</tr>
<tr>
<td>:not Pseudo-Selektor</td>
<td>&lt;a&gt;&lt;/a&gt; <br /> &lt;p&gt;&lt;/p&gt;</td>
<td>:not(p) {}</td>
<td>Mit dem :not Pseudo-Selektor sprichst du alle Elemente an, die nicht das angegebene Element sind. In unserem Beispiel also das a-Tag, da es kein p-Tag ist.</td>
</tr>
<tr>
<td>Erstes-Kind-Selektor</td>
<td>&lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt;</td>
<td>p:first-child {}</td>
<td>Mit dem Erstes-Kind-Selektor sprichst du das erste Elemente an, das Teil einer Reihe von Kind-Elementen ist. In unserem Beispiel also das erste p-Tag, da es sowohl ein p-Tag also auch das erste Element der Kind-Elemente ist.</td>
</tr>
<tr>
<td>Letztes-Kind-Selektor</td>
<td>&lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt;</td>
<td>p:last-child {}</td>
<td>Mit dem Letztes-Kind-Selektor sprichst du das letzte Elemente an, das Teil einer Reihe von Kind-Elementen ist. In unserem Beispiel also das letzte p-Tag, da es sowohl ein p-Tag also auch das letzte Element der Kind-Elemente ist.</td>
</tr>
<tr>
<td>Einziges-Kind-Selektor</td>
<td>&lt;div&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt;</td>
<td>p:only-child {} <br /> oder <br /> div :only-child {}</td>
<td>Mit dem Einziges-Kind-Selektor sprichst du ein HTML-Element an, dass das einzige Kind eines Eltern-Elements ist. Du kannst, wie in unserem Beispiel entweder das Kind-Element direkt benennen oder sein Eltern-Element, durch ein Leerzeichen getrennt, nennen, um dann das einzige Kind-Element anzusprechen.</td>
</tr>
<tr>
<td>Wiederholungs-Selektor :nth-child()</td>
<td>&lt;div&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt;</td>
<td>p:nth-child(2) {} <br /> oder <br /> p:nth-child(even) {} <br /> oder <br /> p:nth-child(odd) {} <br /> oder <br /> div :nth-child(odd) {} </td>
<td>Mit dem Wiederholungs-Selektor :nth-child() sprichst du jedes so-und-so-vielte bzw. gerade oder ungerade HTML-Element an, dass das Kind eines Eltern-Elements ist. Du kannst, wie in unserem Beispiel entweder die Startzahl für den Wiederholungs-Selektor direkt benennen (wir haben 2 verwendet, daher greift der Style bei jedem zweiten Element) oder für jedes gerade oder ungerade Element das jeweils englische Wort <em>even</em> oder <em>odd</em> verwenden. Das letzte CSS-Beispiel zeigt, wie du den Wiederholungs-Selektor über das Eltern-Element verwendest. Weitere Details dazu <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child" rel="noopener" target="_blank">hier</a>.</td>
</tr>
<tr>
<td>Wiederholungs-Selektor :nth-last-child()</td>
<td>&lt;div&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt;</td>
<td>p:nth-last-child(2) {} <br /> oder <br /> p:nth-last-child(even) {} <br /> oder <br /> p:nth-last-child(odd) {} <br /> oder <br /> div :nth-last-child(odd) {} </td>
<td>Mit dem umgekehrte Wiederholungs-Selektor :nth-last-child() sprichst du jedes letzte so-und-so-vielte bzw. gerade oder ungerade HTML-Element an, dass das Kind eines Eltern-Elements ist. Es wird also von hinten gezählt. Du kannst, wie in unserem Beispiel entweder die Startzahl für den Wiederholungs-Selektor direkt benennen (wir haben 2 verwendet, daher greift der Style bei jedem zweiten Element beginnend ab dem letzten) oder für jedes gerade oder ungerade Element das jeweils englische Wort <em>even</em> oder <em>odd</em> verwenden. Das letzte CSS-Beispiel zeigt, wie du den Wiederholungs-Selektor über das Eltern-Element verwendest.</td>
</tr>
<tr>
<td>Erster-Typ-Selektor</td>
<td>&lt;div&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt;</td>
<td>p:first-of-type {} </td>
<td>Mit dem Erstes-Art-Selektor wählst du das erste Element dieser Art aus. In unserem Beispiel also das erste p-Tag.</td>
</tr>
<tr>
<td>Letzte-Typ-Selektor</td>
<td>&lt;div&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt;</td>
<td>p:last-of-type {} </td>
<td>Mit dem Letzte-Art-Selektor wählst du das letzte Element dieser Art aus. In unserem Beispiel also das letzte p-Tag.</td>
</tr>
<tr>
<td>Einzige-Typ-Selektor</td>
<td>&lt;div&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;a&gt;&lt;/a&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt;</td>
<td>a:only-of-type {} </td>
<td>Mit dem Einzige-Art-Selektor wählst du das einzige Element dieses Typs aus. In unserem Beispiel also das einzige a-Tag.</td>
</tr>
<tr>
<td>Wiederholungs-Typ-Selektor</td>
<td>&lt;div&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;p&gt;&lt;/p&gt; <br /> &lt;/div&gt;</td>
<td>:nth-of-type(3) {}   </td>
<td>Mit dem Wiederholungs-Typ-Selektor wählst du das Element dieses Typs aus, das in einer von dir festlegten Reihenfolge angesprochen wird. In unserem Beispiel also jedes dritte p-Tag. Die unterschiedlichen Arten der Verwendung kannst du den Beispielen der Wiederholungs-Selektoren entnehmen.</td>
</tr>
</tbody>
</table>