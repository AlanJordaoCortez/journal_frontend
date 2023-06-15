<template>
    <HeaderComponent />
    <form :class="newEntryForm">
        <input v-model="title" :class="titleInput" placeholder="Title">
        <textarea v-model="content" :class="contentInput" placeholder="What are you thinking?"></textarea>
        <div :class="newEntryButtonContainer">
            <router-link to="/" @click="save" :class="newEntrySaveBtn">Save</router-link>
            <router-link to="/" :class="newEntryCancelBtn">Cancel</router-link>
        </div>
    </form>
</template>

<script setup>
import HeaderComponent from './HeaderComponent.vue'
import {ref} from 'vue'
import axios from 'axios'
import router from '../router'

//classes
const newEntryForm = ref('new-entry-form')
const titleInput = ref('title-input')
const contentInput = ref('content-input')
const newEntryButtonContainer = ref('new-entry-btn-container')
const newEntrySaveBtn = ref('new-entry-save-btn')
const newEntryCancelBtn = ref('new-entry-cancel-btn')

//local vars
const title = ref()
const content = ref()

async function save() {
    console.log(title.value)
    console.log(content.value)
    console.log(router)
    console.log(process.env.BASE_URL)
    await axios.post(
        "http://localhost:8081/api/entry/add", 
        {
            title: title.value,
            text: content.value
        }
    )
}

</script>

<style scoped>

.new-entry-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-input {
    width: 55%;
    margin: 16px;
}

.content-input {
    width: 55%;
    margin: 16px;
    height: 200px;
}

.new-entry-btn-container {
    display: flex;
    justify-content: space-around;
    width: 60%;
}

.new-entry-btn-container a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    border-radius: 15%;
    padding: 4px 8px;
}

.new-entry-save-btn {
    background-color: #1f038c;
}

.new-entry-cancel-btn {
    background-color: #df1212;
}

</style>