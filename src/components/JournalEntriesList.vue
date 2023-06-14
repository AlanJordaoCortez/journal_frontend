<template>
    <HeaderComponent />
    <div :class="entryListContainer">
        <ul v-for="entry in entries" :key="entry.id">
            <li><router-link :class="entryLinkClass" :to="'/entry/' + entry.title">{{entry.title}}</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import HeaderComponent from './HeaderComponent.vue'
import {ref, onMounted} from 'vue'
import axios from 'axios'

//classes
const entryListContainer = ref('entry-list-container')
const entryLinkClass = ref('entry-link')

const entries = ref([
])

onMounted(async () => {
    const response = await axios.get(`http://localhost:8081/api/entry/get/all`);
    console.log(response.data)
    entries.value = response.data
})

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
    font-size: 1.5vw;
    padding: 5px;
}

.entry-link {
    color: #393957;
    font-weight: 800;
    text-decoration: none;
}

</style>