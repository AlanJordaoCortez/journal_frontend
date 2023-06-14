<template>
    <div :class="hearderContainer">
        <div :class="entryBtnContainer">
            <router-link :class="newEntryBtnClass" to="/entry/new" >New Entry</router-link>
        </div>
        <h2>{{title}}</h2>
        <form>
            <input placeholder="find specific entries" >
            <button>Search</button>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'

//classes
const hearderContainer = ref('hearder-container')
const entryBtnContainer = ref('entry-btn-container')
const newEntryBtnClass = ref('new-entry-btn')

const title = ref('Journaly')

</script>

<style>
.hearder-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid;
    margin-bottom: 15px;
}

.hearder-container h2 {
    margin: 8px;
}

.hearder-container form {
    width: 45%;
    display: flex;
    justify-content: flex-end;
}

.entry-btn-container {
    width: 45%;
    display: flex;
}

.new-entry-btn {
    border-radius: 15%;
    background-color: #061d3b;
    color: #fff;
    text-decoration: none;
    padding: 5px;
    font-weight: 600;
}

</style>