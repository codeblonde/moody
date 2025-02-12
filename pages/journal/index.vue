<script setup>
import { ref } from "vue"


const newEntry = ref("")

const submitNewEntry = async () => {

    // set modal show ref state to true with loading content
    // set loading to true

    const res = await $fetch('/api/entries/createEntry', {
        method: 'post',
        body: { data: newEntry.value }
    })
    console.log(res)

    // loading false
    // remove loading content from modal
    // show button in modal to navigato to new entry

    // clear newEntry

    await navigateTo(`/journal/history/${res.insertedId}`)
}

</script>

<template>
    <div class="p-8 bg-gray-800 rounded-xl shadow-lg flex flex-grow flex-col gap-4">
        <h1>New journal entry</h1>
        <textarea v-model="newEntry" class="border-2 rounded-2xl border-pink-600 flex-grow p-3"
            placeholder="How was your day?" />

        <div class="flex justify-end">
            <button @click="submitNewEntry"
                class="px-8 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all shadow">
                Submit
            </button>
            <!--modal-->
        </div>
    </div>
</template>