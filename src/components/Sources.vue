<template>
    <v-btn @click="overlay = !overlay">Quellen</v-btn>

    <v-overlay v-model="overlay" class="align-center justify-center">
        <v-card>
            <v-card-title class="d-flex justify-center">Quellen</v-card-title>

            <div v-for="item in props.content" :key="item.source" class="d-flex ma-1 justify-start align-center pr-3">
                <v-icon icon="mdi-menu-right" size="x-small" />
                <a v-if="item.source" :href="item.source" class="font-weight-light navItemStyle" target="_blank">{{ item.title }}</a>
                <p v-else class="font-weight-light">{{ item.title }}</p>
            </div>


            <v-divider></v-divider>

            <v-btn @click="overlay = !overlay" width="100%">Schließen</v-btn>
        </v-card>

    </v-overlay>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
    content: Array<{
        title: string;
        source?: string;
    }>
}

const props = defineProps<Props>()

const overlay = ref(false)
</script>

<style>
.overlay-content {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 100% !important;
    /* Du kannst die Höhe anpassen, falls nötig */
}
</style>