<template>
    <v-card class="d-flex pl-1 pt-1 flex-column" width="20vw" fixed>

        <div v-for="item in props.content" :key="item.title" class="d-flex ma-1 justify-start align-center">
            <v-icon icon="mdi-menu-right" size="x-small" />
            <a :href="item.route" class="font-weight-light navItemStyle">{{ item.title }}</a>
        </div>
        <v-divider></v-divider>
        <sources :content="props.sources" />
    </v-card>
</template>

<script lang="ts" setup>

import Sources from './Sources.vue';

interface Props {
    content: Array<{
        title: string;
        route: string;
    }>
    sources: Array<{
        title: string;
        source?: string;
    }>
}

const props = defineProps<Props>()
</script>

<style>
.navItemStyle {
    text-decoration: none;
    color: inherit;
}

.navItemStyle:hover {
    text-decoration: underline;
}
</style>