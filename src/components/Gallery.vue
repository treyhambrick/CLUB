<template>
  <div>
    <center>
    <div width="60%">
      <p><B><h1 style="font-size:50px; color:blueviolet; margin:10px;">{{title}}</h1></B>
        <BR/>
      {{ description }}
      <BR/>
      <BR/>Contact Trey at <a href="mailto:trey.hambrick@gmail.com?subject='Unit 14'">
        trey.hambrick@gmail.com</a>
    </p>
</div></center>
      <div class="gallery">
        <div  :class="(screenType == 'LAPTOP') ? 'gallery-panel' : 'gallery-panelMoble'"
            v-for="photo in photos"
            :key="photo.id">
          <router-link :to="`/photo/${photo.id}`">
            <img :src="thumbUrl(photo.filename)">
          </router-link>
        </div>
  </div>


  </div>
</template>

<script>
import photos from '@/photos.json';

export default {
  
  name: 'Gallery',
  data() {
      return {
        screenWidth: 0,
        screenType:'',
        photos,
        description: 'Club Del Cielo Unit 14 is within a 5-minute walk of Jaco Beach. Guests can take a dip in the outdoor pool or enjoy the many local activities. There is a children\'s pool and in-room conveniences like AC, washers/dryers and refrigerators. Fellow travelers say good things about the pool.',
        title: 'Club Del Cielo Unit 14',
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
          if (window.innerWidth <700) 
              this.screenType = "MOBLE";
          else
              this.screenType = "LAPTOP";
      },
    thumbUrl(filename) {
       return require(`../assets/images/thumbnails/${filename}`);
    },
  },
};
</script>



<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 1rem auto;
    padding: 0 1rem;
  }

  .gallery-panel img {
    width: 100%;
    height: 65vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }

  .gallery-panelMoble img {
    width: 88%;
    height: 58vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
</style>
