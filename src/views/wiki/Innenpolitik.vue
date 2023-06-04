<template>
    <wiki-card>
        <template v-slot:navigation>
            <navigation-card :content="navigationItems" :sources="quellen" />
        </template>
        <template v-slot:main>
            <h1>Die inländischen Verhältnisse Chinas</h1>
            <p>
                Trotz des Fortschritts innerhalb des Landes bestehen weiterhin komplexe innenpolitische Herausforderungen.
                <br />
                Eine anhaltende Ost-West-Spaltung sowie ein eigenständiger Umgang mit unterrepräsentierten Ethnien prägen
                die inländischen Verhältnisse.
                <br />
                Nichtsdestotrotz zeichnet sich die Regierung des Landes durch ihre
                beeindruckende Leistungsfähigkeit und effektive Organisation aus.
            </p>

            <info-item title="Ost-West-Spaltung" anchor="ost-west">
                <p>
                    Historische Ereignisse haben zu kulturellen Unterschieden zwischen Ost- und Westchina geführt,
                    dementsprechend erfolgte eine inoffizielle Spaltung.
                    <br />
                    Ferner besitzt der Westen von China ein hohes
                    Relief, der Osten hingegen hat einer sehr viel stärkere Erschließung des Gebiets, dies ist durch die
                    Lage an der Küste zu begründen.
                    <br />
                    Außerdem lebt im Osten eine Überzahl der sogenannten "Han" , welche
                    aufgrund der chinesischen Geschichte vom Volk im Generellen als überlegene Ethnie in China angesehen
                    werden.
                    <br />
                    Im Westen Chinas sind hingegen eine Vielzahl anderer Ethnien vertreten, welche in manchen Teilen
                    Chinas als "Minderwertig " angesehen werden.
                    <br />
                    Dementsprechend ist der Osten, in dem auch die Hauptstadt Chinas liegt, infrastrukturell besser
                    ausgebaut als der Westen.
                    <br />
                    Deshalb wird der Westen mit der Seidenstraße so wie mit anderen Bahnnetzen erschlossen, unterwandert
                    auch für den Rohstoffabbau.

                </p>
            </info-item>

            <info-item title="Umgang mit Ethnien im Westen" anchor="ethnien">
                <p>Die Benachteiligung der Ethnien, die im Westen Chinas leben, beginnt bei der Umerziehung, welche durch
                    die Regierung erfolgt.
                    <br />
                    Ein prominentes Beispiel dafür ist ,,Xinjiang".
                    <br />
                    Diese Region ist ein Autonomes
                    Gebiet im Nordwesten Chinas.
                    <br />Denn dort wird zunächst Öl, Gas und Kohle erschlossen, von den
                    Einheimischen sowie vom Zentrum Chinas.
                    <br />
                    Da das Zentrum aufgrund dieser harten Standortfaktoren Interesse an dieser Region hegt, besteht die
                    Motivation der Anpassung des Gebietes an die eigenen Leitlinien.
                    <br />
                    Daraus folgt die gezielte Umerziehung, sowie auch die Auslöschung einzelner Ethnien, wie beispielsweise
                    den Uiguren, damit sich dieser Ort mehr an die "Han" anpasst.
                    <br />
                    Die Richtlinien der Umerziehung geben vor, dass sich das Individuum durch Feldarbeit und andere
                    Tätigkeiten im Arbeitslager verbessern soll.
                    <br />
                    Analysen zufolge gäbe es Konzentrationslager in der Nähe der Umerziehungsanstalten, diese sollen den
                    Fall abdecken falls sich ein Arbeitender im Lager nicht bessern sollte.
                    <br />
                    So will die Regierung die Umerziehung zu “Han-Chinesen" sicherstellen.
                </p>
            </info-item>

            <info-item title="Regierung" anchor="regierung">
                <p>
                    Die leitende Partei Chinas, die KP (kommunistische Partei) beschloss am 19. Parteitag (18-24 Oktober
                    2017) die Einführung des Marxismus beziehungsweise des Kommunismus in die chinesische Kultur.
                    <br />
                    Am 20. Parteitag wurde die Modernisierung und generelle Aufwertung des Staates beschlossen.
                    <br />
                    Der ehemalige Staatschef wurde außerdem widerwillig abgeführt und nahm dennoch am 20. Parteitag an der
                    jeweiligen Sitzung teil.
                    <br />Der angeführte ehemalige Staatschef behauptete, es ginge ihm "viel besser"
                    als er aus dem Nebenraum wieder rauskam.
                    <br />
                    Dieser mutmaßliche Akt der Machtdemonstration dient der Kontrolle des Volkes.
                    <br />
                    Darauf folgte die Besetzung des Politbüros durch Xi Jinpings jüngere vertraute Mitglieder.
                </p>
            </info-item>

            <info-item title="Militärkraft (2022)" anchor="militaer">
                <v-table density="compact" style="width: 30vw;">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Waffen
                            </th>
                            <th class="text-left">
                                Menge
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in waffen" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.amount }}</td>
                        </tr>
                    </tbody>
                </v-table>

                <vertical-spacer />

                <v-table density="compact" style="width: 30vw;">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Soldaten
                            </th>
                            <th class="text-left">
                                Anzahl
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in soldaten" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.amount }}</td>
                        </tr>
                    </tbody>
                </v-table>

                <vertical-spacer />

                <p>
                    Chinas Militär befindet sich auf Platz 3 der stärksten Armeen der Welt. <br />
                    Die Ausgaben für das Militär betrugen im Jahr 2021 ungefähr 293 Milliarden US-Dollar.
                </p>

            </info-item>

            <info-item title="Militärkraft USA" anchor="militaer-usa">
                <v-table density="compact" style="width: 30vw;">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Waffen
                            </th>
                            <th class="text-left">
                                Menge
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in waffenUSA" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.amount }}</td>
                        </tr>
                    </tbody>
                </v-table>

                <vertical-spacer />

                <v-table density="compact" style="width: 30vw;">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Soldaten
                            </th>
                            <th class="text-left">
                                Anzahl
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in soldatenUSA" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.amount }}</td>
                        </tr>
                    </tbody>
                </v-table>

                <vertical-spacer />
                
                <p>
                    Die Ausgaben für das Militär der USA betrugen im Jahr 2021 ungefähr 801 Milliarden US-Dollar.
                </p>
            </info-item>
        </template>
    </wiki-card>
</template>
<script lang="ts" setup>
import WikiCard from '@/components/WikiCard.vue';
import NavigationCard from '@/components/NavigationCard.vue';
import VerticalSpacer from '@/components/VerticalSpacer.vue';
import InfoItem from '@/components/InfoItem.vue'

const quellen = [{
    title: "Das Drama der Uiguren - arte",
    source: "https://www.arte.tv/de/videos/100174-000-A/china-das-drama-der-uiguren/"
},
{
    title: "KP-Parteitag: Xis Macht zementiert und Eklat provoziert? - tagesschau",
    source: "https://www.tagesschau.de/ausland/china-parteitag-xi-101.html"
},
{
    title: "Überwacht und eingesperrt: Wie China systematisch Uiguren unterdrückt - ZDFinfo",
    source: "https://www.youtube.com/watch?v=PJQ30H5It-k"
},
{
    title: "Fragen & Antworten rund um den Bericht des 20. Parteitages - Chin. Botschaft",
    source: "http://de.china-embassy.gov.cn/det/zt/20parteitag/"
},
{
    title: "Sichert sich Xi Jinping die Macht auf Lebenszeit? - deutschlandfunk",
    source: "https://www.deutschlandfunk.de/china-parteitag-xi-jinping-100.html"
}]

const navigationItems = [{
    title: "Ost-West-Spaltung",
    route: "#ost-west"
},
{
    title: "Umgang mit Ethnien im Westen",
    route: "#ethnien"
},
{
    title: "Regierung",
    route: "#regierung"
},
{
    title: "Militär (2020)",
    route: "#militaer"
},
{
    title: "Militär der USA als Vergleich",
    route: "#militaer-usa"
}]

const waffen = [{
    name: "Luftwaffe",
    amount: "3.285"
},
{
    name: "Jagdflugzeuge/Abfangjäger",
    amount: "1.200"
},
{
    name: "Flugzeuge für Bodenangriffe",
    amount: "371"
},
{
    name: "Transportflugzeuge",
    amount: "286"
},
{
    name: "Spezialflugzeuge (z.B. Aufklärung)",
    amount: "114"
},
{
    name: "Tankflugzeuge",
    amount: "3"
},
{
    name: "Hubschrauber",
    amount: "912"
},
{
    name: "Kampfpanzer",
    amount: "5.000"
},
{
    name: "U-Boote",
    amount: "79"
},
{
    name: "nukleare Sprengköpfe",
    amount: "350"
}]

const soldaten = [{
    name: "Militärisches Personal",
    amount: "3.134.000"
},
{
    name: "davon aktive Soldaten",
    amount: "2.000.000"
},
{
    name: "Reserve",
    amount: "510.000"
},
{
    name: "Paramilitärische Einheiten",
    amount: "624.000"
}]



const waffenUSA = [{
    name: "Luftwaffe",
    amount: "13.247"
},
{
    name: "Jagdflugzeuge/Abfangjäger",
    amount: "1.957"
},
{
    name: "Flugzeuge für Bodenangriffe",
    amount: "783"
},
{
    name: "Transportflugzeuge",
    amount: "982"
},
{
    name: "Spezialflugzeuge (z.B. Aufklärung)",
    amount: "774"
},
{
    name: "Tankflugzeuge",
    amount: "627"
},
{
    name: "Hubschrauber",
    amount: "5.463"
},
{
    name: "Kampfhubschrauber",
    amount: "910"
},
{
    name: "Kampfpanzer",
    amount: "6.600"
},
{
    name: "Kampfflugzeuge",
    amount: "2.700"
},
{
    name: "nukleare Sprengköpfe",
    amount: "5.428"
}]

const soldatenUSA = [{
    name: "Militärisches Personal",
    amount: "1.832.000"
},
{
    name: "davon aktive Soldaten",
    amount: "1.390.00"
},
{
    name: "Reserve",
    amount: "442.000"
}]
</script>