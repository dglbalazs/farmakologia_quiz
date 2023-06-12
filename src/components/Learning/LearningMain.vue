<template>
  <div class="learning-data">
    <learning-data v-for="learning_data_entry in learningdata" :key="learning_data_entry.id" :title="learning_data_entry.owner" :entries="learning_data_entry.answers"></learning-data>
  </div>
</template>

<script>

import LearningData from './LearningData.vue'

export default {
    name: 'LearningMain',
    components: {
        LearningData
    },
    props: {
        learningdata : Array
    },
    data() {
        return {
            comp_mounted: false
        }
    },
    mounted : function(){
        this.comp_mounted = true
        this.$emit('mounted-comp',this.comp_mounted)
    }
}
</script>

<style>

.learning-data{
  margin-bottom: 100px;
  padding: 50px;
  padding-bottom: 150px;
  margin-inline: 2em;
}




</style>