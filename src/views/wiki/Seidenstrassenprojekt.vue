<template>
    <wiki-card>
        <template v-slot:navigation>
            <navigation-card :content="navigationItems" :sources="quellen" />
        </template>
        <template v-slot:main>
            <h1>Seidenstraßenprojekt</h1>
            <p>
                Das Seidenstraßenprojekt ist ein Projekt seit 2013, das eine
                Verbindung zwischen China und vielen anderen Staaten für den
                Handelsverkehr zum Ziel hat. <br />
                Hauptsächlich dient dieses Projekt dem Profit Chinas, indem es einen
                Weg zum Import von Waren aus China anbietet.
                <br />
                Das Projekt ist auch bekannt unter dem Namen
                <strong>OBOR</strong> (One Belt, One Road).
            </p>

            <vertical-spacer />

            <p>
                Die Kosten für dieses Projekt belaufen sich auf 1 Billion Dollar (1000
                Mrd. Dollar). <br />
                China ist auch für den Ausbau der Infrastruktur rund um das Seidenstraßenprojekt verantwortlich und
                ermöglicht den Ländern somit eine voll funktionsfähige Handelskette.
            </p>

            <vertical-spacer />

            <p>
                Die USA hat ein Projekt namens <strong>Blue Dot Network</strong>,
                das sich auf das gleiche Ziel wie das Seidenstraßenprojekt
                fokussiert.
                <br />
                Dieses Konkurrenzprojekt zielt darauf ab, die westliche Wirtschaft zu erweitern,
                als Antwort auf China.
            </p>

            <info-item title="Einfluss auf die beteiligten Länder" anchor="einfluss">
                <p>
                    Die meisten Länder, die dieses Projekt finanzieren, haben Kredite von
                    China aufgenommen. Somit sind diese Länder verpflichtet, China im
                    Seidenstraßenprojekt zu unterstützen.
                </p>
            </info-item>
            <info-item title="Abhängigkeit von Ländern durch die Corona-Pandemie" anchor="abhaengigkeit">
                <p>
                    In Zeiten der Corona-Pandemie und den verbundenen
                    Lieferschwierigkeiten bei Hygieneprodukten hat China
                    wirtschaftsschwachen Ländern geholfen und dadurch auch
                    einen weiteren Partner für das Projekt gewonnen.
                    <br />
                    Diese Partner sind somit an der Finanzierung beteiligt und müssen
                    sich an die festgelegten Vorgaben halten.
                </p>
            </info-item>
            <info-item title="Finanzierung des Projekts" anchor="finanzierung">
                <p>
                    Um eine Finanzierung dieses Projekts zu ermöglichen, wurden von
                    chinesischer Seite eigene Investmentfonds und Banken gegründet.
                </p>
            </info-item>
        </template>
    </wiki-card>
</template>
<script lang="ts" setup>
import WikiCard from "@/components/WikiCard.vue";
import NavigationCard from "@/components/NavigationCard.vue";
import VerticalSpacer from "@/components/VerticalSpacer.vue";
import InfoItem from "@/components/InfoItem.vue";

const quellen = [{
    title: "Mit offenen Karten - arte",
    source: "https://www.arte.tv/de/videos/111211-001-A/mit-offenen-karten/"
},
{
    title: "Die alte Seidenstraße - planet-wissen",
    source: "https://www.planet-wissen.de/gesellschaft/wirtschaft/neue_seidenstrasse/alte-seidenstrasse-100.html"
},
{
    title: "China vergibt Rettungskredite für Neue Seidenstraße - tagesschau",
    source: "https://www.tagesschau.de/wirtschaft/weltwirtschaft/neue-seidenstrasse-handelsprojekt-kosten-china-101.html"
},
{
    title: "Wie die USA Chinas Neue Seidenstraße kontern will - faz",
    source: "https://www.faz.net/aktuell/wirtschaft/wie-die-usa-chinas-neue-seidenstrasse-kontern-will-16478636.html"
}]

const navigationItems = [{
    title: "Einfluss auf die beteiligten Länder",
    route: "#einfluss",
},
{
    title: "Abhängigkeit von Ländern durch die Corona Pandemie",
    route: "#abhaengigkeit",
},
{
    title: "Finanzierung des Projektes",
    route: "#finanzierung",
}
]
</script>
  