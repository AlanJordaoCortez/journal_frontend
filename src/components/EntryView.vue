<template>
    <HeaderComponent />
    <div :class="journalEntryContainer">
        <h3>{{entry.entryDate}}: {{entry.title}}</h3>
        <p>
            {{entry.text}}
        </p>
    </div>
</template>

<script setup>
import HeaderComponent from './HeaderComponent.vue'
import {ref, defineProps, onMounted} from 'vue'
import axios from 'axios'

//classes references
const journalEntryContainer = ref('journal-entry-container')

//props
const props = defineProps({
    title: String
})

const entry = ref({
    id: 0,
    title: null,
    text: null,
    entryDate: null
})

onMounted(async () => {
    const response = await axios.get(`http://localhost:8081/api/entry/get?title=${props.title}`);
    console.log(response.data)
    entry.value = response.data
})


</script>

<style scoped>
.journal-entry-container {
    border: 1px groove; 
    border-radius: 10%;
    width: 50%;
    display: inline-block;
    background-color: #f2f8fc;
}

.journal-entry-container  p {
    padding: 0 5px;
}
</style>