<template>
    <v-footer app bottom fixed padless>
        <div class="d-flex w-100 align-center">
            <p>
                {{ new Date().getFullYear() }} - <strong>Projektkurs Erdkunde Q1</strong>
            </p>

            <v-spacer></v-spacer>

            <v-btn class="mx-0" icon="mdi-github" variant="plain" size="small"
                href="https://github.com/mgh-hamm/ProjektChina" target="_blank"></v-btn>
        </div>
    </v-footer>
</template>
  
<script lang="ts" setup></script>
  