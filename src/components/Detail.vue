<template>
<div class="row justify-content-center">
    <div class="col-6">
        <form class="col offset-6">
            <div class="form-group form-row">
                <label for="energy" class="col-3 col-form-label text-left">Energy</label>
                <div class="col-3">
                    <input type="text" readonly class="form-control-plaintext" id="energy" :value="value.energy">
                </div>
                <div class="col-form-label"><small>kcal in 100 g</small></div>
            </div>
            <div class="form-group form-row">
                <label for="carbs" class="col-3 col-form-label text-left">Carbs</label>
                <div class="col-3">
                    <input type="text" readonly class="form-control-plaintext" id="carbs" :value="value.carbs">
                </div>
                <div class="col-form-label"><small>g</small></div>
            </div>
            <div class="form-group form-row">
                <label for="fat" class="col-3 col-form-label text-left">Fats</label>
                <div class="col-3">
                    <input type="text" readonly class="form-control-plaintext" id="fat" :value="value.fats">
                </div>
                <div class="col-form-label"><small>g</small></div>
            </div>
            <div class="form-group form-row">
                <label for="protein" class="col-3 col-form-label text-left">Proteins</label>
                <div class="col-3">
                    <input type="text" readonly class="form-control-plaintext" id="protein" :value="value.proteins">
                </div>
                <div class="col-form-label"><small>g</small></div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: "detail",
    props: {
        value: {}
    }
}
</script>

<style scoped>
input {
    text-align: right;
}
</style>
