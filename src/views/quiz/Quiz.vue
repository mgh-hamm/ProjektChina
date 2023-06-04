<template>
    <!-- Startcard -->

    <v-btn v-if="!quizStore.ready" class="center" variant="outlined" color="primary" @click="initQuiz">Quiz
        Starten!</v-btn>

    <!-- Statscard -->

    <v-slide-x-reverse-transition style="position: absolute; top: 65px; right: 20px">
        <v-container v-if="quizStore.ready" class="rounded-xl d-flex align-center pa-2" style="
        background-color: rgb(var(--v-theme-background));
        width: fit-content;
        border: 2px solid rgb(var(--v-theme-primary));
      ">
            <v-progress-circular :model-value="progress" color="primary" />
            <v-icon icon="mdi-thumb-up" color="green" class="mr-1 ml-2" style="vertical-align: middle" />
            <p class="font-weight-black">{{ quizStore.correctPages }}</p>
            <v-icon icon="mdi-thumb-down" color="red" class="mr-1 ml-2" />
            <p class="font-weight-black">{{ quizStore.wrongPages }}</p>
        </v-container>
    </v-slide-x-reverse-transition>

    <!-- Quizcard -->

    <v-card width="700" class="center" v-if="quizStore.ready && !endCard">
        <v-progress-linear :model-value="progress" color="primary"></v-progress-linear>
        <v-card-title class="d-flex justify-center">
            {{ quizStore.actualQuestion }}
        </v-card-title>

        <!-- QuestionView -->

        <v-card-actions class="d-flex flex-column" v-if="!showResult">
            <div class="d-flex justify-space-around mb-2">
                <v-btn variant="outlined" color="primary" width="300" @click="checkResult(0)">{{ quizStore.answers[0]
                }}</v-btn>
                <v-btn variant="outlined" color="primary" width="300" @click="checkResult(1)">{{ quizStore.answers[1]
                }}</v-btn>
            </div>
            <div class="d-flex justify-space-between mb-2">
                <v-btn variant="outlined" color="primary" width="300" @click="checkResult(2)">{{ quizStore.answers[2]
                }}</v-btn>
                <v-btn variant="outlined" color="primary" width="300" @click="checkResult(3)">{{ quizStore.answers[3]
                }}</v-btn>
            </div>
            <v-btn disabled>Nächste</v-btn>
        </v-card-actions>

        <!-- ResultView -->

        <v-card-actions class="d-flex flex-column" v-if="showResult">
            <div class="d-flex justify-space-around mb-2">
                <v-btn variant="outlined" :color="getColor(0)" width="300">{{ quizStore.answers[0] }}</v-btn>
                <v-btn variant="outlined" :color="getColor(1)" width="300">{{ quizStore.answers[1] }}</v-btn>
            </div>
            <div class="d-flex justify-space-between mb-2">
                <v-btn variant="outlined" :color="getColor(2)" width="300">{{ quizStore.answers[2] }}</v-btn>
                <v-btn variant="outlined" :color="getColor(3)" width="300">{{ quizStore.answers[3] }}</v-btn>
            </div>
            <v-btn @click="nextQuestion">Nächste</v-btn>
        </v-card-actions>
    </v-card>

    <!-- Endcard -->
    <v-card width="150" class="center" v-if="endCard">
        <v-card-title class="d-flex justify-center">
            🎉 Geschafft!
        </v-card-title>
    </v-card>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useQuizStore } from '@/store/quiz';
import { quizData } from './quizData';
import { onBeforeMount } from 'vue';


const quizStore = useQuizStore()

onBeforeMount(() => {
    quizStore.reset()
    showResult.value = false
    endCard.value = false
})

const showResult = ref(false)
const endCard = ref(false)

const progress = computed(() => (quizStore.actualPage / quizStore.maxPages) * 100)

function initQuiz() {
    quizStore.initQuiz(quizData)
    quizStore.ready = true
}

function checkResult(selectedAnswer: number) {
    if (quizStore.correctAnswers.includes(selectedAnswer)) {
        quizStore.rightAnswer()
    }
    else quizStore.wrongAnswer()
    showResult.value = true
}

function getColor(selectedAnswer: number) {
    if (quizStore.correctAnswers.includes(selectedAnswer)) {
        return "green"
    }
    return "red"
}

function nextQuestion() {
    quizStore.nextQuestion()
    if (quizStore.actualPage == quizStore.maxPages) {
        endCard.value = true;
    }
    else showResult.value = false;
}

</script>