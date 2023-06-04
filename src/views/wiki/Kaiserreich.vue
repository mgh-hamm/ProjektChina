<template>
    <wiki-card>
        <template v-slot:navigation>
            <navigation-card :content="navigationItems" :sources="quellen" />
        </template>
        <template v-slot:main>
            <h1>Die umfassende Geschichte des ehemaligen Kaiserreichs</h1>
            <p>
                China gehört zu den größten und umfangreichsten Hochkulturen, welche sich über die Zeit in der Welt
                etabliert
                haben.
                <br />
                Dieses ehemalige Reich hat einigen Kaiser, Kriege und anderen historischen Figuren einen Namen gemacht und
                hat
                demnach einen <br /> der größten Einflüsse auf die gesamte Menschheit.
                <br />
                Dieses Land hatte über die Geschichte 8 große Dynastien, die vom Jahre 221 v. Chr. - 1911 nach Chr.
                andauerten.
                <br />
                Ferner besitzt sind in dem Land noch der Konfuzianismus und der Daoismus entstanden.
                <br />Dies sind anerkannte philosophische/religiöse Richtungen, die hauptsächlich Asien sehr stark vertreten
                werden.
                <br />
            </p>

            <info-item title="Qin-Dynastie (221 v. Chr. bis 207 v. Chr.)" anchor="qin">
                <p>
                    Die Qin-Dynastie, die von 221 v. Chr. bis 207 v. Chr. andauerte, markiert den Beginn der nachfolgenden
                    Dynastien.
                    <br />
                    Denn sie brachte Chinas ersten Kaiser, Qin Shihuangdi, hervor.
                    <br />
                    Dieser vereinte das Land, nachdem er den Krieg gegen die sechs rivalisierenden Staaten gewonnen hatte.
                    <br />
                    Zum ersten Mal in der Geschichte Chinas wurde das Land vereint. Es folgte eine Standardisierung
                    der Schrift und der Währung innerhalb Chinas.
                    <br />
                    Darüber hinaus gründete er mehrere Provinzen und Bezirke, deren Struktur bis heute in China erkennbar
                    ist.
                    <br />
                    Für seine Taten wurde dieser Kaiser von seinem Volk und seinen Beamten als eine Art Gott gefeiert,
                    daher war jede Form der Kritik an ihm untersagt.
                    <br />
                    Seine Armee, mit der er den Krieg gewann, ist heute als Terrakotta-Armee bekannt. Sie besteht aus 8000
                    lebensgroßen Terrakotta-Statuen.
                    <br />
                    Außerdem legte er den Grundstein für den Bau der Chinesischen Mauer,
                    die auf den Mauern der zuvor bestehenden Regionen aufbaute.
                </p>
            </info-item>
            <info-item title="Han-Dynastie (206 v. Chr. bis 220 n. Chr.)" anchor="han">
                <p>
                    Die Han-Dynastie dauerte von 206 v. Chr. bis 220 n. Chr. an.
                    <br />
                    Der Kaiser, der aus einer Bauernfamilie stammte, hieß Han Gaozu.
                    <br />
                    Diese Zeit markierte einen wirtschaftlichen und gesellschaftlichen Aufschwung für die chinesische
                    Gesellschaft.
                    <br />
                    Zum ersten Mal wurde eine ausgearbeitete Handelsstrategie entwickelt, nämlich die Seidenstraße, die in
                    der Zukunft weiter ausgebaut werden sollte.
                    <br />
                    Dies führte zu einem verbesserten inländischen Handel mit festen Routen und einer insgesamt stärkeren
                    wirtschaftlichen Struktur des Landes.
                    <br />
                    In derselben Periode wurde der Konfuzianismus, der von Konfuzius (551 v. Chr. - 479 v. Chr.) gelehrt
                    wurde, als Staatsphilosophie anerkannt.
                    <br />
                    Darüber hinaus verbreiteten sich der Taoismus, der zwischen dem 4. und 3. Jahrhundert v. Chr. aufkam,
                    und der Buddhismus, der im 8. Jahrhundert n. Chr. auch in China präsent war, im Land.
                    <br />
                    Schließlich wurde das Bild der Han-Dynastie innerhalb Chinas noch deutlicher geprägt.
                </p>
            </info-item>
            <info-item title="Sui-Dynastie (581 bis 618)" anchor="sui">
                <p>
                    In der darauf folgenden bedeutenden Dynastie, der Sui-Dynastie, die von 581 bis 618 dauerte, wurde das
                    Land erneut vereinigt, nachdem es sich in drei Reiche aufgeteilt hatte.
                    <br />
                    Diese Reiche wurden Shu, Wu und Wei genannt.
                    <br />
                    In der vorherigen Dynastie, der Jin-Dynastie, gab es hauptsächlich interne Konflikte innerhalb der
                    königlichen Familie.
                    <br />
                    Der Kaiser der Sui-Dynastie, Wendi, vereinigte das Land und führte eine Beamtenprüfung ein, um auch
                    ärmeren Menschen den Aufstieg in höhere Positionen zu ermöglichen.
                    <br />
                    Der letzte Kaiser der Dynastie ließ den Bau der größten Wasserstraße der Menschheit vorantreiben, die
                    sich von Peking bis nach Hangzhou erstreckte.
                </p>
            </info-item>
            <info-item title="Tang-Dynastie (618 bis 907)" anchor="tang">
                <p>
                    Die Tang Dynastie auch "Goldenes Zeitalter" genannt, dieser Zeitabschnitt innerhalb der chinesischen
                    Geschichte gilt als der, welcher die Kunst und die Entwicklung der chinesischen Kultur prägte.
                    <br />
                    Außerdem
                    war dies eine Zeit, in der die Kaufleute nach Xi'an, damals Chang'an, strömten.
                    <br />
                    Außerdem sind die Handelsrouten aufgrund der neuen Händler, über Land und See, ausgebaut, somit
                    fluorierte die Exportindustrie.
                    <br />
                    Nennenswerte Erfindungen für den Handel sind Porzellan, Schießpulver,
                    Streichhölzer und die Zeitung.
                    <br />
                    Trotz dieser optimalen Zeit für China folgten viele Aufstände durch die Eroberung eines neuen Gebietes.

                </p>
            </info-item>
            <info-item title="Song-Dynastie (960 bis 1279)" anchor="song">
                <p>
                    Nach den Kriegen, die zum Zusammenbruch der Tang-Dynastie führten, entstand die Song-Dynastie. In dieser
                    Zeit wurden die Eisengießerei, die Einführung des Nassreisanbaus (eine wichtige Wirtschaftsquelle im
                    westlichen China) und die Einführung von Papiergeld vorangetrieben.
                    <br />
                    Zudem wurde eine patriarchalische soziale Ordnung etabliert.
                    <br />
                    Trotz ihrer wirtschaftlichen Stabilität wurde die Dynastie durch den Krieg mit den Mongolen gestürzt.
                    <br />
                    Die Mongolen eroberten Hangzhou, was der letzte Ort war, der nach ihrer Invasion eingenommen wurde.
                </p>
            </info-item>
            <info-item title="Yuan-Dynastie (1260 bis 1368)" anchor="yuan">
                <p>
                    Im Jahr 1234 eroberten die Mongolen das chinesische Reich, nachdem sie bereits im Jahr 1227 den Norden
                    des Landes sowie das Tarimbecken, die größte Becken-Landschaft in ganz Asien, im Westen Chinas erobert
                    hatten.
                    <br />
                    Dementsprechend ist der Gründer der Yuan-Dynastie Kublai-Khan, welcher der Sohn von Dschingis Khan ist.
                    <br />
                    Durch des neuen Regimes erfolgt eine Diskriminierung des der Han-Chinesen, eine Änderung des Namens der
                    Hauptstadt von Peking zu "Dadu".
                    <br />
                    Durch die Erniedrigung der Han-Chinesen, sind Aufstände von diesen die
                    Folge.

                </p>
            </info-item>
            <info-item title="Ming-Dynastie (1368 bis 1644)" anchor="ming">
                <p>
                    Die Ming-Dynastie war eine Zeit des Aufschwungs für die chinesische Kultur, in der Literatur und
                    Kunsthandwerk florieren.
                    <br />
                    Ein prominentes Beispiel für das Kunsthandwerk ist das Blau-Weiß Porzellan, welches sich auch im Westen
                    an hoher Beliebtheit erfreut.
                    <br />
                    Dies ist auf den zunehmenden Handel mit dem Westen zurückzuführen.
                    <br />
                    Außerdem wurde im Jahr 1371 Beijing von Zhu Yuanzhang ergriffen.
                    <br />
                    Die Mongolen traten den Rückzug an und
                    im Jahre 1421 wurde Beijing, auch bekannt als die nördliche Hauptstadt, der Sitz des dritten Ming
                    Kaisers namens Yongle.
                    <br />
                    Außerdem waren in dieser Zeit auch die ein starker Fortschritt in der "chinesischen" Medizin
                    zu verzeichnen.
                    <br />
                    Denn der Verfasser Enzyklopädie der natürlichen Medizin namens Li Shizhen lebte in der
                    Ming-Dynastie und veröffentlichte die "Bancao Gangmu", welche ein Grundlage für die chinesische
                    Medizin darstellt.
                </p>
            </info-item>
            <info-item title="Qing-Dynastie (1644 bis 1911)" anchor="qing">
                <p>
                    Die Manchu zerschlugen den Kampf sich anfeindender Gruppen, welche die Ming-Dynastie zu Fall brachten
                    und leiteten so den Aufstieg der letzten Dynastie ein.
                    <br />
                    Die Anführer der Qing-Dynastie erschlossen Tibet sowie Xinjiang.
                    <br />
                    Dadurch wurde das Land ausgedehnt und die Wirtschaft wuchs. Ein Teil des mongolischen Gebiets wurde
                    ebenfalls in das Land integriert.
                    <br />
                    Außerdem war der Opiumkrieg innerhalb dieser Zeitperiode, welcher der heutigen chinesischen
                    Bevölkerung als das Jahrhundert der Erniedrigung dargelegt wird.
                    <br />
                    Die Dynastie ging mit Bauernaufständen zu Ende.
                    <br />
                    Dies kommt durch die Armut, welche die chinesische
                    Bevölkerung durch Handelskriege mit dem Westen erfuhr.
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
    title: "Die chinesischen Dynastien im Überblick",
    source: "https://blog.chinatours.de/2019/01/13/die-chinesischen-dynastien-im-ueberblick"
},
{
    title: "Chinas erster Kaiser – ein Gott und Herrscher des Universums?",
    source: "https://www.vision.org/de/chinas-erster-kaiser-ein-gott-und-herrscher-des-universums-815"
},
{
    title: "Die Sui Dynastie, von Jahr 589 bis 618 in China",
    source: "https://www.chinarundreisen.com/china-info/die-sui-dynastie.htm"
},
{
    title: "China: Geschichte eines Riesenreichs - MrWissen2go Geschichte",
    source: "https://youtu.be/-jIBp-dBSxA"
},
{
    title: "Mao Zedong I Diktatoren - MrWissen2go Geschichte",
    source: "https://youtu.be/eHVHjYmYQ5U"
}]

const navigationItems = [{
    title: "Qin-Dynastie (221 v. Chr. bis 207 v. Chr.)",
    route: "#qin"
},
{
    title: "Han-Dynastie (206 v. Chr. bis 220 n. Chr.)",
    route: "#han"
},
{
    title: "Sui-Dynastie (581 bis 618)",
    route: "#sui"
},
{
    title: "Tang-Dynastie (618 bis 907)",
    route: "#tang"
},
{
    title: "Song-Dynastie (960 bis 1279)",
    route: "#song"
},
{
    title: "Yuan-Dynastie (1260 bis 1368)",
    route: "#yuan"
},
{
    title: "Ming-Dynastie (1368 bis 1644)",
    route: "#ming"
},
{
    title: "Qing-Dynastie (1644 bis 1911)",
    route: "#qing"
}]
</script>
