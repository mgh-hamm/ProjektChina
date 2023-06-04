<template>
    <wiki-card>
        <template v-slot:navigation>
            <navigation-card :content="navigationItems" :sources="quellen" />
        </template>
        <template v-slot:main>
            <h1>Außenpolitische Verhältnisse</h1>
            <p>
                China pflegt besondere Beziehungen zu Russland und Nordkorea. Zunächst ist zu erwähnen, dass Nordkorea eine
                starke außenpolitische Bindung zu China aufgebaut hat, indem sie nur dessen Waren importiert.
                <br />
                Russland hat
                sich mit China hauptsächlich als Bund gegenüber der westlichen Welt zusammengeschlossen.
                <br />
                China vertritt eine äußerst radikale Position in Bezug auf den Inselstaat Taiwan.
            </p>

            <info-item title="Russland und China" anchor="russland">
                <p>
                    Russland ist eines der Länder, welches an China angrenzt.
                    <br />
                    Diese beiden Staaten hegen ein gemeinsames
                    Feindbild gegenüber der westlichen Welt, demnach bilden beide Länder eine Allianz.
                    <br />
                    Dennoch besitzt China
                    auch Handelspartner im Westen, deshalb hat das Land auch keine eindeutige Auskunft über dessen Position
                    gegenüber des Krieges in der Ukraine gegeben.
                    <br />
                    Dennoch sind beide Länder für eine vom Osten dominierte Weltordnung und bilden des weiteren eine
                    wirtschaftliche Instanz mit Indien aus.

                </p>
            </info-item>
            <info-item title="Taiwan und China" anchor="taiwan">
                <p>
                    China und Taiwan sind 2 Staaten, die aneinander angrenzen.
                    <br />
                    Taiwan hat eine Landfläche von circa 36 000
                    Quadratkilometern und liegt an der Küste von China. Aufgrund der historischen Ereignisse und dem
                    ausgebauten Militär Chinas einigte man sich auf die "Ein-China" Bezeichnung wenn von beiden Staaten
                    die Rede ist.
                </p>
            </info-item>
            <info-item title="Taiwan und die USA" anchor="taiwan-usa">
                <p>
                    Obwohl China und Taiwan offiziell die "Ein-China-Politik" verfolgen, unterhält Taiwan enge Beziehungen
                    zu den USA, da über die Meerenge in Taiwan handel betrieben wird.
                    <br />
                    Durch diesen Handel haben die USA
                    einen Vorteil in der Technologie gegenüber China, da Taiwan mit TSMC den größten Halbleiterhersteller
                    der Welt beherbergt.
                    <br />
                    Aufgrund von TSMCs Monopolstellung in der Halbleiterbranche und der zunehmenden Bedeutung der
                    Digitalisierung besitzt Taiwan einen hohen strategischen Wert. Aus diesem Grund betrachtet China eine
                    Übernahme Taiwans als sehr lukrativ.
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
    title: "Mit offenen Karten - arte",
    source: "https://www.arte.tv/de/videos/111211-001-A/mit-offenen-karten/"
},
{
    title: "So wichtig ist der Inselstaat für die Weltwirtschaft - ZDFheute",
    source: "https://www.zdf.de/nachrichten/wirtschaft/china-taiwan-chip-industrie-100.html"
},
{
    title: "Xi Jinping bei Putin: Allianz gegen den Westen? - ZDFheute",
    source: "https://www.zdf.de/nachrichten/zdfheute-live/treffen-china-russland-allianz-video-100.html"
}]

const navigationItems = [{
    title: "Russland und China",
    route: "#russland"
},
{
    title: "Taiwan und China",
    route: "#taiwan"
},
{
    title: "Taiwan und die USA",
    route: "#taiwan-usa"
}]
</script>