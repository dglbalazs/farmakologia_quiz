<template>
  <div class="learning-data-entry" @click='trigger_clicked'>
    <div class="learning-data-entry__category-title" >
        {{  title  }}
    </div>
    <div class="learning-data-entry__category_descriptions" v-if="clicked">
        <ul>
            <li class="item-statement" v-for="statement in entries" :key="statement">{{  statement }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        entries: Array
    },
    data () { 
        return {
            clicked: false
        }
    },
    methods: {
        trigger_clicked () {
            this.clicked = !this.clicked
        }
    }
}
</script>

<style>


.learning-data-entry {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: white;
    border-radius: 25px;
    margin: 25px;
    padding: 25px;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}


.learning-data-entry__category-title {
    font-size: 1.3em;
}

.learning-data-entry__category_descriptions {
    border-top: 1px solid grey;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
    font-size: 1em;
    background: white;
    /* border-radius: 50px; */
    height: auto;
    /* padding:50px; */
}

ul {
    text-align: left;
}

li {
    margin-top: 1em;
    font-size: 1.1em;
}

</style>