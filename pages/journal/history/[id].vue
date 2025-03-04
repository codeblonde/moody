<script setup>
import Tag from '~/components/Tag.vue'
import Button from '~/components/Button.vue'
import LoadingSpinner from '~/components/LoadingSpinner.vue'


const route = useRoute()
const imageUrl = ref("")
const loadingState = ref(false)

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

// get data from api call
// TODO: get sun or moon icon for time of day when entry was written
const { data: entry } = await useFetch(`/api/entries/${route.params.id}`)
console.log(entry)

const generateImageFromEntry = async () => {
    loadingState.value = true
    imageUrl.value = await $fetch(`/api/entries/image/${route.params.id}`)
    console.log(imageUrl)
    loadingState.value = false
}

</script>


<template>
    <div class="grid grid-cols-2 gap-8">
        <div class="p-4 bg-gray-800 rounded-xl shadow-lg">
            <div class="text-right pb-4">
                {{ new Date(entry.journal_entries.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit"
                }) }}
            </div>
            {{ entry.journal_entries.entryText }}
        </div>
        <div>
            <div class="flex justify-end gap-4">
                <Tag>
                    mood: {{ entry.analysis.mood
                    }}</Tag>
                <Tag>sentiment score: {{ entry.analysis.score }}
                </Tag>
                <Tag :color="entry.analysis.color">
                    color
                </Tag>
            </div>
            <div class="flex flex-col content-center mt-4">
                <Button @click="generateImageFromEntry">Generate Image</Button>
                <!-- <img src="https://placecats.com/bella/300/200" class="rounded-xl"> -->
                <LoadingSpinner v-if="loadingState" class="mt-4">
                    Generating your image...
                </LoadingSpinner>
                <img :src="imageUrl" class="rounded-xl mt-4" v-if="imageUrl">
            </div>
            <Tag class="mt-4">suggestion: {{ entry.analysis.suggestion }}
            </Tag>
        </div>
    </div>

</template>

<style scoped></style>