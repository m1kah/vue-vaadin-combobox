<template>
<div class="row">
    <form class="col-12">
        <div class="form-group form-row">
            <label for="selection-component" class="col-sm-3 col-form-label text-right">
                <img alt="Vue logo" src="../assets/logo.png" height="24px">
                Select protein source
            </label>
        <vaadin-combo-box
            class="col-sm-3"
            id="selection-component"
            placeholder="Please select" 
            item-label-path="name"
            :items="proteins"
            :value="selected"
            @selected-item-changed="$emit('selection-changed', $event.target.selectedItem)"
            />
        </div>
    </form>
</div>
</template>

<script>
import "@vaadin/vaadin-combo-box/vaadin-combo-box"
import FoodRepository from "../FoodRepository.js"

export default {
    name: "selector",
    props: {
        selected: String
    },
    beforeCreate() {
        this.foodRepository = new FoodRepository()
    },
    data() {
        return {
            proteins: JSON.stringify(
                this.foodRepository.readAll()
            )
        }
    }
}
</script>

<style scoped>
</style>
