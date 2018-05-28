<template>
    <div class="loading">
        <img src="./loading.gif" width="24px" height="24px" alt="">
        <p class="desc">{{title}}</p>

    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在載入...'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../common/scss/variable.scss';
.loading {
  width: 100%;
  text-align: center;
  .desc {
    line-height: 20px;
    font-size: $font-size-small;
    color: $color-text-l;
  }
}
</style>
