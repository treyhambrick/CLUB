<template> 
  <Gallery />
  
  <p>{{screenType}} Screen width: {{ screenWidth }}px</p>

</template>


<script>

import Gallery from '@/components/Gallery.vue';

export default {
  
  name: 'home',
  components: {
    Gallery,
  },
  data() {
        return {
            screenWidth: 0,
            screenType:''
            };
            },
            mounted() {
                this.updateScreenWidth();
                this.onScreenResize();
            },
            methods: {
            onScreenResize() {
                window.addEventListener("resize", () => {
                this.updateScreenWidth();
                });
            },
            updateScreenWidth() {
                this.screenWidth = window.innerWidth;
                if (window.innerWidth <600) 
                    this.screenType = "MOBLE";
                else
                    this.screenType = "LAPTOP";
            },
        },

};
</script>


<!----

        data() {
        return {
            screenWidth: 0,
            screenType:''
            };
            },
            mounted() {
                this.updateScreenWidth();
                this.onScreenResize();
            },
            methods: {
            onScreenResize() {
                window.addEventListener("resize", () => {
                this.updateScreenWidth();
                });
            },
            updateScreenWidth() {
                this.screenWidth = window.innerWidth;
                if (window.innerWidth <600) 
                    this.screenType = "MOBLE";
                else
                    this.screenType = "LAPTOP";
            },
        },


-->