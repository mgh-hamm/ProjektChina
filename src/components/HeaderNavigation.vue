<template>
    <v-btn prepend-icon="mdi-menu-down" class="mr-2">
        {{ props.title }}
        <v-menu activator="parent" open-on-hover transition="scale-transition">
            <v-list density="compact">
                <v-list-item v-for="item in props.routes" :key="item.name" class="pl-1">
                    <div class="d-flex justify-start align-center">
                        <v-icon icon="mdi-menu-right" size="x-small" />
                        <router-link :to="item.route" class="font-weight-light routerLink">{{ item.name }}</router-link>
                    </div>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-btn>
</template>

<script lang="ts" setup>
interface Props {
    title: string;
    routes: Array<{
        name: string;
        route: string;
    }>
}

const props = defineProps<Props>()
</script>