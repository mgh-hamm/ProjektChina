<template>
    <v-btn icon="mdi-lightbulb" size="small" @click="change"></v-btn>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';

const theme = useTheme();

function change() {
    const newState = (() => {
        if (localStorage.getItem("theme") == "dark") {
            return "light"
        }
        return "dark"
    })()
    theme.global.name.value = newState;
    localStorage.setItem("theme", newState);
}

onMounted(() => {
    if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "dark");
    }
    theme.global.name.value = localStorage.getItem("theme") || "dark";
})

</script>