<script setup lang="ts">
</script>


<template>
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
</template>