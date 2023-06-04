<template>
    <wiki-card>
        <template v-slot:navigation>
            <navigation-card :content="navigationItems" :sources="quellen" />
        </template>
        <template v-slot:main>
            <h1>Cybermacht</h1>
            <p>
                China besitzt die größte Cybermacht auf der ganzen Welt, beispielsweise sind chinesische Hackergruppen für
                80% der Fälle von weltweiter Wirtschaftsspionage verantwortlich.
                <br />
                Außerdem betreibt China seit 2003 gezielte Angriffe hauptsächlich auf Rüstungskonzerne und Computernetze der
                USA.
                <br />
                Ferner nutzt China den Ausbau eines bestimmten Mobilfunknetztes um das ganze Land zu überwachen.
                <br />
                Zuletzt ist in chinesischen IT-Konzernen eine generelle Abneigung gegenüber europäischen und amerikanischen
                Dienstleistungen und technischen Mitteln verbreitet.
            </p>

            <info-item title="Der Flugzeugunfall von 2001" anchor="unfall">
                <p>
                    Am 1. April ereignete sich eine Kollision zweier motorisierter Luftfahrzeuge im Luftraum der
                    Inselprovinz Hainan.
                    <br />
                    Dabei handelte es sich um ein US-amerikanisches Aufklärungsflugzeug und einen
                    chinesischen Kampfjet.
                    <br />
                    Die Besatzung des Aufklärungsflugzeugs überlebte, jedoch wurde der Pilot des
                    chinesischen Kampfjets als vermisst gemeldet und nicht wieder gefunden.
                    <br />
                    Daraufhin bat ein Soldat der
                    chinesischen Marine um das US-Flugzeug abzuschießen, diese Erlaubnis wurde allerdings nicht gegeben.

                </p>
            </info-item>
            <info-item title="Folgen" anchor="folgen">
                <p>
                    Der Unfall erschütterte das chinesische Volk in exorbitanten Maßen, denn es erhoben sich viele
                    verschiedene einzelne Hacker, sowie Hackerkollektive, welche noch im selben Jahr die Netzwerke der
                    Vereinigten Staaten attackierten.
                    <br />
                    Die chinesischen Cyber-Angreifer übermittelten in diesen Attacken
                    nachrichtliche Inhalte voller Hass sowie eine ausgeprägte, ihrem Heimatland gegenüber empfundene,
                    patriotische Gesinnung.
                    <br />
                    Diese Angriffe beschränkten sich nicht nur auf die öffentlich zugänglichen
                    Internetseiten, sondern auch militärische und politische Netzwerke sind attackiert worden.
                    <br />
                    Die
                    Hauptfiguren, welche an der Spitze des organisierten Cyber-Terrorismus standen wurden in China darauf
                    hoch respektiert.
                    <br />
                    Jedoch lösten sich diese Organisationen auf als die jeweiligen Verantwortungsträger
                    gefunden wurden.
                </p>
            </info-item>
            <info-item title="Auswirkungen auf die Digitalisierung in China" anchor="digitalisierung">
                <p>
                    Durch die Hacker-Attacken und der darauf folgenden Rekrutierung einzelner Personen, die eine Hauptfigur
                    in dem jeweiligen Krieg waren, steigerte sich die IT-Entwicklung des Landes, denn es waren Fachkräfte in
                    einem, zudem Zeitpunkt unterbesetzten Bereich, gefunden worden, welche für die jeweiligen Einrichtungen
                    von großem Nutzen waren.
                    <br />
                    Diese Entwicklung im Cyber-sektor steigerte außerdem die allgemeine digitale
                    Sicherheit und brachte Digitalisierung an sich sehr schnell voran.
                    <br />
                    Die Folge daraus ist eine Steigerung
                    der Wirtschaft und eine Steigerung an Arbeitsplätzen.
                </p>
            </info-item>

            <info-item title="China und die USA im Konflikt" anchor="china-usa">
                <p>
                    Da China immer schneller in der Digitalisierung voranschritt, sind auch die Angriffe auf die USA besser
                    ausgebaut worden. Denn Betriebsgeheimnisse wurden aus US-amerikanischen Konzernen gestohlen.
                    <br />
                    Diese
                    Beschuldigung stammt vom Staat Washington.
                    <br />

                    Daraufhin organisierte das US-Militär eine Tusk-force, welche die Hackerangriffe in echt Zeit verfolgen
                    kann und diese somit klein halten kann.
                    <br />
                    Im Mai 2014 wurde die chinesische Regierung darauf angeklagt bezüglich der gehackten Unternehmen der
                    Vereinigten Staaten, welche mit chinesischen Unternehmen konkurrieren. (Die Unternehmen: United States
                    Steel, Westinghouse, Alcoa, ATI, Solarworld, United Steelworkers)
                    <br />
                    Darauf folgt ein Abkommen, welches 2015 in Kraft trat, jedoch hält sich keines der beiden Parteien an
                    dieses, nichtsdestotrotz traten Hacker-Attacken beider Seiten auf.
                    <br />
                    Die darauffolgenden Klagen beider Länder, welche als Vorwurf nicht nur den oben genannten Faktor haben,
                    sondern auch den Diebstahl am geistigen Eigentum, erfolgten in den Jahren 2018, 2020 und 2022.

                </p>
            </info-item>

            <info-item title="China und die EU" anchor="china-eu">
                <p>
                    Die weltweiten Hacker-Attacken der chinesischen Hacker werden im Gegensatz von dem Rest der westlichen
                    Nationen von der EU selbst verhältnismäßig heruntergespielt, durch beispielsweise keine konkreten
                    Stellungnahmen der Angriffe.
                    <br />
                    Ein umstrittener Faktor kann die Wichtigkeit Chinas als Handelspartner für
                    die EU darstellen.
                    <br />
                    Des Weiteren wurde von China das "COREU Netzwerk", welches für die Kommunikation intern in der EU
                    verwendet wird, ausspioniert.
                    <br />
                    Dieser Diebstahl an Daten wurde von "Area 1", ein kalifornisches
                    Unternehmen, das sich unter anderem der digitalen Sicherheit verschreibt, aufgedeckt.
                    <br />
                    Ferner gibt es keine detailreichen Stellungnahmen seitens EU zu diesem Vorfall.
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
    title: "Chinas neue Cybermacht - arte",
    source: "https://www.arte.tv/de/videos/092189-000-A/chinas-neue-cybermacht//"
},
{
    title: "Chinesischer Pilot ist schuld an Kollision - Spiegel",
    source: "https://www.spiegel.de/politik/ausland/us-verteidigungsminister-chinesischer-pilot-ist-schuld-an-kollision-a-128389.html"
}]


const navigationItems = [{
    title: "Der Flugzeugunfall von 2001",
    route: "#unfall"
},
{
    title: "Folgen",
    route: "#folgen"
},
{
    title: "Auswirkungen auf die Digitalisierung in China",
    route: "#digitalisierung"
},
{
    title: "China und die USA im Konflikt",
    route: "#china-usa"
},
{
    title: "China und die EU",
    route: "#china-eu"
}]
</script>