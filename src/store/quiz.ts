import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useQuizStore = defineStore('quiz', () => {
    const quizData = ref([
        {
            question: "",
            answers: [""],
            correctAnswers: [0]
        }
    ])

    const ready = ref(false)

    const correctPages = ref(0)
    const wrongPages = ref(0)

    const actualPage = ref(0)

    const maxPages = computed(() => quizData.value.length)

    const actualQuestion = computed(() => quizData.value[actualPage.value].question)
    const answers = computed(() => quizData.value[actualPage.value].answers)
    const correctAnswers = computed(() => quizData.value[actualPage.value].correctAnswers)

    function nextQuestion() {
        actualPage.value++;
    }

    function initQuiz(pQuizData: any) {
        quizData.value = pQuizData
    }

    function rightAnswer() {
        correctPages.value++
    }

    function wrongAnswer() {
        wrongPages.value++
    }

    function reset() {
        quizData.value = [
        {
            question: "",
            answers: [""],
            correctAnswers: [0]
        }]
        ready.value = false
        correctPages.value = 0
        wrongPages.value = 0
        actualPage.value = 0
    }
  
    return { quizData, actualPage, actualQuestion, correctPages, wrongPages, answers, correctAnswers, nextQuestion, initQuiz, ready, rightAnswer, wrongAnswer, maxPages, reset }
  })