<template>
<div class="search">
    <form>
        <div class="form-group form-row">
            <label for="selectedInput" class="col-sm-4 col-form-label text-right">
                <img alt="Vue logo" src="../assets/logo.png" height="24px">
                Select protein source
            </label>
        <vaadin-combo-box
            class="col-sm-8"
            id="selectedInput"
            placeholder="Please select" 
            :items="proteins"/>
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
    data() {
        this.foodRepository = new FoodRepository();
        return {
        proteins: JSON.stringify(
            this.foodRepository.readAll().map(food => food.name)
        )
        }
    }
}
</script>

<style scoped>
</style>
