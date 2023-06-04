<template>
    <wiki-card>
        <template v-slot:navigation>
            <navigation-card :content="navigationItems" :sources="quellen" />
        </template>
        <template v-slot:main>
            <h1>Allgemeines</h1>
            <p>
                Das eindrucksvolle, kulturell und historisch prägende Land China befindet sich im östlichen Teil Asiens und
                zählt zu den mächtigsten Ländern weltweit weltweit.
                <br />
                Obwohl es über das zweitstärkste Militär der Welt verfügt, ist es in dieser Hinsicht den USA unterlegen.
                <br />
                Dennoch ist China mit dem höchsten BIP weltweit ein bedeutender wirtschaftlicher Akteur.
            </p>

            <info-item title="Lage" anchor="lage">
                <p>
                    China liegt auf der Nordhalbkugel in Asien. Genauer gesagt im Osten des Kontinents.
                    <br />
                    Das Land hat 14 Nachbarländer diese sind: Vietnam, Laos, Myanmar, Bhutan, Nepal, Indien, Pakistan,
                    Afghanistan, Tadschikistan, Kirgisistan, Kasachstan, Russland, Mongolei, Nordkorea.
                    <br />
                    China besitzt eine vergleichbare Landesgröße mit der USA (9.834.000 km²), denn die Landesfläche liegt
                    bei
                    circa 9.597.000 km².
                </p>
            </info-item>

            <info-item title="Einteilung des Landes" anchor="einteilung">
                <p>
                    Das Land ist in Osten und Westen geteilt. Es besitzt 22 Provinzen.

                    <vertical-spacer />

                    <v-table density="compact" style="width: 60vw;">
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Region
                                </th>
                                <th class="text-left">
                                    Inländischer Name
                                </th>
                                <th class="text-left">
                                    Provinz, Verwaltungszone, Autonome Region
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in regionen" :key="item.region">
                                <td>{{ item.region }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.zone }}</td>
                            </tr>
                        </tbody>
                    </v-table>


                </p>
            </info-item>

            <info-item title="Bevölkerung" anchor="bevoelkerung">
                <p>
                    China hat circa 1,4 Mrd. Einwohner.
                    <br />
                    Von diesen sind ungefähr 1,2 Mrd. "Han" und die restliche
                    Bevölkerung sind ethnische Minderheiten.
                    <br />
                    Im Westen leben 6% der chinesischen Bevölkerung, im Osten sind es hingegen 94% der Bevölkerung.
                </p>
            </info-item>

            <info-item title="Wirtschaft" anchor="wirtschaft">
                <p>
                    Von 2000 bis 2007 verzeichnete China ein stetiges wirtschaftliches Wachstum.
                    <br />
                    Es liegt bei 10% Zuwachs pro Jahr.
                    <br />
                    Jedoch kam es ab 2012 zu einer Reduktion.
                    <br />
                    Der größte Absturz erfolgte während des Lockdowns und der Immobilienkrise, dennoch ist es in Bezug auf
                    die Kaufkraft das stärkste Land.
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
    title: "Mit offenen Karten - arte",
    source: "https://www.arte.tv/de/videos/111211-001-A/mit-offenen-karten/"
},
{
    title: "China: Nach Protesten lockert Peking Null-Covid-Massnahmen - arte",
    source: "https://www.arte.tv/de/videos/107710-275-A/china-nach-protesten-lockert-peking-null-covid-massnahmen/"
},
{
    title: "Statista"
},
{
    title: "Wikipedia"
}]


const navigationItems = [{
    title: "Lage",
    route: "#lage"
},
{
    title: "Einteilung des Landes",
    route: "#einteilung"
},
{
    title: "Bevölkerung",
    route: "#bevoelkerung"
},
{
    title: "Wirtschaft",
    route: "#wirtschaft"
}]

const regionen = [{
    region: "Zentral- und Südchina",
    name: "Zhōngnán",
    zone: "Guangdong, Guangxi, Hainan, Henan, Hongkong, Hubei, Human, Macau",
},
{
    region: "Südwestchina",
    name: "Xīnán",
    zone: "Chongqing, Guizhou, Sichuan, Tibet, Yunnan",
},
{
    region: "Nordwestchina",
    name: "Xīběi",
    zone: "Gansu, Ningxia, Qinghai, Shaanxi, Xinjiang",
},
{
    region: "Nordchina",
    name: "Huáběi",
    zone: "Hebei, Innere Mongolei, Peking, Shanxi, Tianjin",
},
{
    region: "Nordostchina",
    name: "Dōngběi",
    zone: "Heilongjiang, Jilin, Liaoning",
},
{
    region: "Ostchina",
    name: "Huádōng",
    zone: "Anhui, Fujian, Jiangsu, Jiangxi, Shandong, Shanghai, Zhejiang",
}]
</script>