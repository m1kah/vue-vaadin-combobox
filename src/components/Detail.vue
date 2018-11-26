<template>
<div class="row">
    <div class="col-3"></div>
    <form class="col-9">
        <div class="form-group row">
            <label for="energy" class="col-sm-1 col-form-label">Energy</label>
            <div class="col-sm-3">
                <input type="text" readonly class="form-control-plaintext" id="energy" value="100">
            </div>
        </div>
        <div class="form-group row">
            <label for="carbs" class="col-sm-1 col-form-label">Carbs</label>
            <div class="col-sm-3">
                <input type="text" readonly class="form-control-plaintext" id="carbs" value="3.0">
            </div>
        </div>
        <div class="form-group row">
            <label for="fat" class="col-sm-1 col-form-label">Fat</label>
            <div class="col-sm-3">
                <input type="text" readonly class="form-control-plaintext" id="fat" value="10.0">
            </div>
        </div>
        <div class="form-group row">
            <label for="protein" class="col-sm-1 col-form-label">Protein</label>
            <div class="col-sm-3">
                <input type="text" readonly class="form-control-plaintext" id="protein" value="21.9">
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "detail",
}
</script>

<style scoped>
input {
    text-align: right;
}
</style>
