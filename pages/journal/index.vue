<script setup>
import { ref } from "vue"
import CustomModal from "~/components/CustomModal.vue"


const newEntry = ref("")
const modalState = ref(false)
const loadingState = ref(false)
const redirectId = ref("")

const submitNewEntry = async () => {

    // set modal show ref state to true with loading content
    // set loading to true
    modalState.value = true
    loadingState.value = true

    const res = await $fetch('/api/entries/createEntry', {
        method: 'post',
        body: { data: newEntry.value }
    })
    console.log(res)

    redirectId.value = res.insertedId

    // loading false
    loadingState.value = false

    // clear newEntry
    newEntry.value = ""
}

const redirectToEntryPage = async () => {

    console.log(redirectId.value)
    await navigateTo(`/journal/history/${redirectId.value}`)

    modalState.value = false

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
            <CustomModal v-if="modalState" :visible="modalState" @close="modalState = false">
                <div v-if="loadingState" class="text-center">
                    <p class="text-lg font-medium">Processing your entry...</p>
                    <div class="loading-spinner mx-auto mt-4"></div>
                </div>
                <div v-else class="text-center">
                    <p class="text-lg font-semibold text-green-600">Your entry has been successfully submitted!</p>
                    <button @click="modalState = false"
                        class="mt-4 mr-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all">
                        Close
                    </button>
                    <button @click="redirectToEntryPage"
                        class="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all ">
                        Go to Entry
                    </button>
                </div>
            </CustomModal>


        </div>
    </div>
</template>


<style scoped>
.loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #d53f8c;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>