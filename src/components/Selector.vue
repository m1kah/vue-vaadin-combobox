<template>
  <div class="search">
    <form>
      <div class="form-group form-row">
        <label for="selectedInput" class="col-sm-4 col-form-label text-right">
          <img alt="Vue logo" src="../assets/logo.png" height="24px">
          Select protein source
        </label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="selectedInput">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'selector',
  props: {
    selected: String
  }
}
</script>

<style scoped>
</style>
