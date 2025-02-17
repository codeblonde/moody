<script setup>
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

// get data from api call
const { data: entry } = await useFetch(`/api/entries/${route.params.id}`)
console.log(entry)

</script>


<template>
    <div class="grid grid-cols-2 gap-8">
        <div class="p-4 bg-gray-800 rounded-xl shadow-lg">
            <div class="text-right pb-4">
                {{ entry.journal_entries.createdAt }}
            </div>
            {{ entry.journal_entries.entryText }}
        </div>
        <!--<div class="flex flex-wrap gap-2">-->
        <div>
            <div class="flex items-start gap-4">
                <div :style="{ backgroundColor: entry.analysis.color }" class="p-2 pr-4 pl-4 rounded-xl shadow-lg">
                    mood: {{ entry.analysis.mood
                    }}</div>
                <div class="p-2 pr-4 pl-4 bg-gray-800 rounded-xl shadow-lg">sentiment score: {{ entry.analysis.score }}
                </div>
            </div>
            <div class="flex flex-col content-center mt-4">
                <img src="https://placecats.com/bella/300/200" class="rounded-xl">
            </div>
            <div class="p-2 pr-4 pl-4 mt-4 bg-gray-800 rounded-xl shadow-lg">suggestion: {{ entry.analysis.suggestion }}
            </div>
        </div>
    </div>

</template>