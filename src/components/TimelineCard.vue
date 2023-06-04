<template>
    <v-timeline-item :dot-color="props.color + '-lighten-1'" fill-dot :size="props.bigDot ? undefined : 'x-small'">
        <v-card width="45vw">
            <v-card-title :class="'bg-' + props.color + '-lighten-1'">
                <div class="d-flex justify-space-between">
                    <h3 class="font-weight-light">
                        {{ props.title }}
                    </h3>

                    <v-tooltip text="Weiterlesen" location="start">
                        <template v-slot:activator="{ props }">
                            <v-btn v-if="expandTo" v-bind="props" icon="mdi-launch" size="x-small" :to="expandTo"></v-btn>
                        </template>
                    </v-tooltip>
                </div>
            </v-card-title>
            <v-card-text class="mt-4">
                <slot></slot>
            </v-card-text>
        </v-card>
    </v-timeline-item>
</template>

<script lang="ts" setup>

const props = defineProps<{
    title: string;
    bigDot: boolean;
    color: string;
    expandTo?: string;
}>()
</script>