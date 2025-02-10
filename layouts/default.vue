<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const pageTitle = computed(() => {
    switch (route.name) {
        case "journal":
            return "Journal"
        case "journal-tracking":
            return "Mood Tracking"
        case "journal-history":
            return "Journal History"
    }

})

</script>

<template>

    <div class="flex h-screen bg-gray-900 text-gray-100">
        <!-- Left Sidebar Navigation -->
        <nav class="w-56 bg-gray-800 flex flex-col shadow-lg">
            <div class="p-4 text-3xl font-extrabold text-pink-500">
                Moody v2
            </div>
            <ul class="flex-1 p-6 space-y-6">
                <li>
                    <NuxtLink to="/journal" class="block hover:text-pink-400 transition-colors">
                        Journal
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/journal/history" class="block hover:text-pink-400 transition-colors">
                        History
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/journal/tracking" class="block hover:text-pink-400 transition-colors">
                        Mood Tracking
                    </NuxtLink>
                </li>
            </ul>
            <div class="p-4 border-t border-gray-700 text-sm text-gray-400">
                © 2025 Llmour. All rights reserved.
            </div>
        </nav>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col">
            <!-- Top Navigation Bar -->
            <header class="bg-gray-800 bg-opacity-90 backdrop-blur-md shadow p-4">
                <div class="flex justify-between items-center">
                    <h1 class="text-2xl font-semibold text-pink-400 ml-4">{{ pageTitle }}</h1>
                    <button
                        class="px-5 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all shadow mr-4">
                        Sign In
                    </button>
                </div>
            </header>

            <!-- Main Content -->
            <main class="flex-1 flex flex-col p-8 bg-gray-900 overflow-y-auto gap-2">
                <!-- <div class="p-8 bg-gray-800 rounded-xl shadow-lg">
                    <slot />
                </div> -->
                <slot />
            </main>
        </div>
    </div>

</template>