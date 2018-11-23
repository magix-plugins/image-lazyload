<template>
  <div class="demo">
    <image-lazyload :source="source1"></image-lazyload>
    <image-lazyload :source="source2"></image-lazyload>
    <div>
      <img v-lazyload :src="source3" />
    </div>
    <div>
      <img v-lazyload :src="source4" />
    </div>
    <div>
      <img v-lazyload :src="source5" />
    </div>
    <div>
      <img v-lazyload :src="source6" />
    </div>
    <div>
      <img v-lazyload :src="source7" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      source1: 'http://magi.xyz:3000/uploads/images/20181109/20181109-52d49834d10d45f3acfb692762f2e338-hroy45.jpg',
      source2: 'http://magix.xyz:3000/uploads/images/20181112/20181112-6b2853f6be82462794d960182f7d5e88-ldbsbq.jpg',
      source3: 'http://magix.xyz:3000/uploads/images/20181112/20181112-8ee50b702322421ebfec9588e5a4f456-060jxm.jpg',
      source4: 'http://magix.xyz:3000/uploads/images/20181112/20181112-38c59948-e4e8-46d1-9d35-26355c113bad-q2fjhy.jpg',
      source5: 'http://magix.xyz:3000/uploads/images/20181112/20181112-69fc79d559844be3bb30496a614c774a-v4o7bc.jpg',
      source6: 'http://magix.xyz:3000/uploads/images/20181112/20181112-7887b7998b09435a9355b161c38df02e-fplajl.jpg',
      source7: 'http://magix.xyz:3000/uploads/images/20181112/20181112-1537962580627762150b9bd-ec26e2.jpg'
    }
  }
}
</script>

<style lang="scss">
  .demo, div{
    height:200px;
  }
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
</style>
