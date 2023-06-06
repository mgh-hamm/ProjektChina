<template>
    <wiki-card>
        <template v-slot:navigation>
            <navigation-card :content="navigationItems" :sources="quellen" />
        </template>
        <template v-slot:main>
            <h1>Der Opiumkrieg</h1>
            <p>
                Obwohl das chinesische Kaiserreich eine Geschichte von vielen Erfolgen bietet, in denen sich viele große
                Persönlichkeiten verbergen, die das Land, Asien, sowie später auch den Rest der Welt maßgeblich geprägt
                haben, hat
                auch China fast schon ein ganzes Jahrhundert, an Niederlagen, hinter sich.
                <br />
                Der Opiumkrieg stellt diesen Zeitpunkt in der Geschichte dar und wird von der chinesischen Regierung als
                Ausgangspunkt genommen, für den Fortschritt der in den Jahren nach dem Krieg erreicht wurde.
            </p>

            <info-item title="Hintergrund des Krieges" anchor="hintergrund">
                <p>
                    Im Jahre 1792 stand das Königreich von England einer Wirtschaftskrise entgegen, aufgrund des Krieges mit
                    Indien und den damit verlorenen Ressourcen.
                    <br />
                    So ziehen Sie einen Handel mit China in Betracht, weil das Land, für die damaligen Engländer, wichtige
                    Güter besaß wie beispielsweise Tee. Dazu kommt noch, dass England damals einer der größten Tee-Exporteure weltweit und
                    der damalige Marktführer war.
                    <br />
                    China hat kein großes Interesse daran, mit dem Westen nach westlichen Maßstäben zu handeln.
                    <br />
                    Aus diesem Grund lehnten sie ab.
                    <br />
                    Darauf schickte der damalige Monarch einen Botschafter mit 3 Zielen, die Abschaffung des Kanton-Systems
                    (strenge Handelsregeln mit dem Westen), die britische Repräsentation innerhalb des Landes und
                    gegebenenfalls einem Stück Land an China für umgänglicheren Handel.
                    <br />
                    Dies wurde vom chinesischen Kaiser abgelehnt und der vorbereitete Kompromiss schlug fehl.
                </p>
            </info-item>
            <info-item title="Herstellung von Opium" anchor="herstellung">
                <p>
                    Da die britische Regierung abhängig vom Tee-Handel war, wollten sie zunächst Baumwolle in den Umlauf
                    schicken, doch dies schlug aufgrund der klimatischen Bedingungen an der Anbaustätte in Indien fehl.
                    <br />
                    Deshalb bauten sie Mohnblumen an und gewannen daraus Opium.
                    <br />
                    So fingen sie an, im damaligen Kolkata (Kalkutta) mit den chinesischen Händlern und Schmugglern zu
                    handeln, weil diese Stadt damals noch an China angrenzte.
                    <br />
                    Da die Händler das Opium so stark begehrten, verkauften sie im Gegenzug Tee an die Händler der
                    Engländer.
                    <br />
                    So baute England seine Wirtschaft immer weiter auf.
                    <br />
                    Bis 1835 verkauften sie 1389 Tonnen Opium und bis März 1893 sind es insgesamt 5,639 Millionen Tonnen
                    Opium, die verkauft wurden.
                </p>
            </info-item>
            <info-item title="Maßnahmen gegen das Opium in China" anchor="maßnahmen">
                <p>
                    Der chinesische Kaiser stellte Lin Zexu, welcher als einer der treuesten und aufrichtigen Beamten Chinas
                    galt, ein.
                    <br />
                    Dieser förderte ab März 1839 die Abschaffung des Opiums. Er zwang die abhängigen Chinesen, in
                    Rehabilitation zu gehen, verbrannte mehrere Tonnen des Opiums und sorgte für eine Hetze gegen den Handel
                    mit den Engländern.
                    <br />
                    Des Weiteren sind die Opium-Häuser der Engländer von chinesischen Truppen belagert worden.
                    <br />
                    Nach 1 ½ Monaten gaben die Lagerbetreiber auf und 21.000 Kisten Opium sind verbrannt worden.

                </p>
            </info-item>
            <info-item title="Die Flucht in das heutige Hongkong " anchor="flucht">
                <p>
                    Die britischen Händler sind erzürnt von dem Verlust der Güter.
                    <br />
                    Zwei betrunkene Männer töteten darauf
                    versehentlich einen chinesischen Mann.
                    <br />Trotz der Strafe für die Charles Elliot, ein britischer Offizier
                    und Repräsentant der britischen Regierung, sorgte, war Lin Zexu immer noch erzürnt und stellte den
                    Handel mit England ein.
                    <br />
                    Die britischen Händler wurden vertrieben und flohen somit in das damalige Hongkong.
                    <br />
                    Es fand aufgrund eines Taifuns eine Nahrungskrise statt.
                    <br />Die britischen Schiffe wurde während der Beschaffung von einer chinesischen Flotte angegriffen.

                </p>
            </info-item>
            <info-item title="Einsetzung im Militär " anchor="militär">
                <p>
                    Die britischen Schiffe wollen in den Hafen von dem damaligen Guangzhou (Kanton).
                    <br />
                    Diese machten einen Warnschuss auf das "Royal Saxon" (Schiff).
                    <br />
                    Darauf griffen die chinesischen Schiffe die
                    britischen Schiffe an.
                    <br />
                    Die Schlacht wurde zu Gunsten der Briten entschieden.
                    <br />
                    Darauf werden Chusan und Chuenpee (Inseln) von den britischen Truppen erobert.
                    <br />
                    Aufgrund des ausgeübten Drucks von den britischen Truppen einigten sich beide Parteien auf die Ziele,
                    die anfangs von der britischen Regierung festgelegt wurden.
                    <br />
                    Beide Landesherren lehnten diesen Kompromiss jedoch ab und feuerten die Beamten die dafür verantwortlich
                    waren.
                </p>
            </info-item>
            <info-item title="Ende des Krieges" anchor="ende">
                <p>
                    Am 22.5.1841 zerstörten die chinesischen Truppen die britischen Fabriken, welche in Kanton liegen.
                    <br />
                    Dennoch entschieden die britischen Truppen diesen Kampf am nächsten Morgen für sich.
                    <br />Darauf entstanden
                    Aufstände von chinesischen Bauern und britischen Händlern, da beide Seiten politisch miteinander
                    zerstritten sind.
                    <br />
                    Weil das chinesische Militär aufgrund des Konsums von Opium geschwächt waren, eroberten die britischen
                    Truppen Shanghai und kurz darauf Zhen jiang.
                    <br />
                    Nanking ist der letzte Ort, der für das damalige China von großer Bedeutung war.
                    <br />
                    Deshalb ergab sich der
                    chinesische Kaiser, da ohne Nanking und dem dazu kommenden Yangtse Fluß, welcher die
                    Hauptversorgungsquelle für die Hauptstadt ist, das chinesische Reich ineinander zusammenbrechen würde.
                    <br />
                    Somit musste die chinesische Regierung die Forderungen der britischen Regierung erfüllen.
                    <br />
                    Es werden Handelsregeln durch Kompromisse festgelegt, Hongkong soll England gehören und sie kriegen 21
                    Millionen Pfund als Entschädigung für das zerstörte Opium.
                </p>
            </info-item>
        </template>
    </wiki-card>
</template>
<script lang="ts" setup>
import WikiCard from '@/components/WikiCard.vue';
import NavigationCard from '@/components/NavigationCard.vue';
import InfoItem from '@/components/InfoItem.vue'

const quellen = [{
    title: "First Opium War - The Righteous Minister - Extra History (Part 1)",
    source: "https://youtu.be/fgQahGsYokU"
},
{
    title: "First Opium War - The Righteous Minister - Extra History (Part 2)",
    source: "https://youtu.be/qHmuuc7m1AA"
},
{
    title: "First Opium War - The Righteous Minister - Extra History (Part 3)",
    source: "https://youtu.be/jAjUqwauf-A"
},
{
    title: "First Opium War - The Righteous Minister - Extra History (Part 4)",
    source: "https://youtu.be/s9WRmsHFUg0"
},
{
    title: "The First Opium War: History Matters - History Matters",
    source: "https://youtu.be/u1dbOf63roI"
}]

const navigationItems = [{
    title: "Hintergrund des Krieges",
    route: "#hintergrund"
},
{
    title: "Herstellung von Opium",
    route: "#herstellung"
},
{
    title: "Maßnahmen gegen das Opium in China",
    route: "#maßnahmen"
},
{
    title: "Die Flucht in das heutige Hongkong",
    route: "#flucht"
},
{
    title: "Einsetzung im Militär",
    route: "#militär"
},
{
    title: "Ende des Krieges",
    route: "#ende"
}]
</script>