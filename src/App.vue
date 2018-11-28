<template>
<div id="app" class="container">
    <Selector selected="" @selection-changed="onSelectionChanged"/>
    <Detail :value="selection" />
</div>
</template>

<script>
import Selector from "./components/Selector.vue"
import Detail from "./components/Detail.vue"

export default {
    name: "app",
    components: {
        Selector,
        Detail
    },
    data: function() {
        return {
            selection: Object
        }
    },
    methods: {
        onSelectionChanged(selection) {
            if (selection) {
                this.selection = selection
                console.log(selection)
            } else {
                this.selection = null
            }
        }
    }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
