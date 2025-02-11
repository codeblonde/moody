<script setup>

const { data } = await useFetch('/api/getEntries')

// idea: color entries according to mood
// color mood text according to mood
// have emoji instead of text for mood

</script>



<template>
    <div class="grid grid-cols-3 gap-4 justify-items-stretch">
        <!-- <div v-for="entry in data" class="p-8 bg-gray-800 rounded-xl shadow-lg text-center"> -->

        <NuxtLink :to="`/journal/history/${entry.id}`" v-for="entry in data"
            class="p-6 bg-gray-800 rounded-xl shadow-lg text-center grid gap-2 auto-rows-min">
            <!-- <div class="border-b border-gray-600 pb-2"> {{ entry.createdAt }}</div>
            <div class="border-b border-gray-600 pb-2 pt-2"> {{ entry.text }}</div>
            <div class="pt-2"> {{ entry.mood }}</div> -->
            <div class="pb-3 text-right"> {{ entry.createdAt }}</div>
            <div class="pb-3 text-left"> {{ entry.text }}</div>
            <div class="text-right italic"> {{ entry.mood }}</div>

        </NuxtLink>


    </div>

</template>