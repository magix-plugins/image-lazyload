<template>
  <figure class="image-lazyload">
    <img v-lazyload :src="source"/>
  </figure>
</template>

<script>
  export default {
    name: 'image-lazyload',
    props: {
      source: {
        type: String,
        require: true
      }
    }
  }
</script>

<style lang="scss">
  .image-lazyload {
    width:100%;
    height:100%;
    img[load=loading] {
      width:100%;
      height:100%;
      object-fit: cover;
    }
    img[load=loaded] {
      width:100%;
      height:100%;
      object-fit: cover;
    }
    img[load=loading] + .image-hover {
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      z-index:1;
      background:#F1F1F1;
    }
    img[load=loaded] + .image-hover {
      display:none;
    }
    img[load=error] + .image-hover {
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      z-index:1;
      background:#F1F1F1;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>