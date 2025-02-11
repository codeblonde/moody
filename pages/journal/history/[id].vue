<script setup>
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

// get data from api call
const { data: entry } = await useFetch(`/api/entries/${route.params.id}`)

</script>


<template>
    <div class="grid grid-cols-2 gap-8">
        <div class="p-4 bg-gray-800 rounded-xl shadow-lg">
            <div class="text-right pb-4">
                {{ entry.createdAt }}
            </div>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
        </div>
        <!--<div class="flex flex-wrap gap-2">-->
        <div>
            <div class="flex items-start gap-4">
                <div class="bg-pink-600 p-2 pr-4 pl-4 rounded-xl shadow-lg">{{ entry.mood }}</div>
                <div class="p-2 pr-4 pl-4 bg-gray-800 rounded-xl shadow-lg">sentiment score: 5</div>
                <div class="p-2 pr-4 pl-4 bg-gray-800 rounded-xl shadow-lg">suggestion: go for a walk</div>
            </div>
            <div class="flex flex-col content-center mt-4">
                <img src="https://placecats.com/bella/300/200" class="rounded-xl">
            </div>
        </div>


    </div>

    <pre>
       data: {{ entry }}
    </pre>


</template>