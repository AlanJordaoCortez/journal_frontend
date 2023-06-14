<template>
    <div :class="entryListContainer">
        <ul v-for="entry in entries" :key="entry.id">
            <li>{{entry.title}}</li>
        </ul>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const entryListContainer = ref('entry-list-container')

const entries = ref([
    {id: 0, title: 'First entry', text: 'Content goes here', date: (new Date()).getDate()},
    {id: 1, title: 'Another entry', text: 'Content goes here', date: (new Date()).getDate()}
])


</script>

<style scoped>
.entry-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.entry-list-container ul {
    list-style-type: none; /*remove bullet points from list items*/
    width: 25%;
    margin: 0;
    padding: 0;
}
.entry-list-container li {
    border: 1px solid;
    font-size: 2vw;
    padding: 5px;
}

</style>