<script setup>
import { useRoute } from 'vue-router';
import Navigation from '~/components/Navigation.vue';
import Header from '~/components/Header.vue';

const route = useRoute()
const pageTitle = computed(() => {
    switch (route.name) {
        case "journal":
            return "Journal"
        case "journal-tracking":
            return "Mood Tracking"
        case "journal-history":
            return "Journal History"
        default:
            return "Journal Entry"
    }

})

</script>

<template>

    <div class="flex h-screen bg-gray-900 text-gray-100">
        <!-- Left Sidebar Navigation -->
        <Navigation />
        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col">
            <!-- Header -->
            <Header>{{ pageTitle }}</Header>
            <!-- Main Content -->
            <main class="flex-1 flex flex-col p-8 bg-gray-900 overflow-y-auto gap-2">
                <slot />
            </main>
        </div>
    </div>

</template>