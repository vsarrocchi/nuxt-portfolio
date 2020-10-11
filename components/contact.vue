<template>
  <div
    id="contact"
    class="section md:py-32 bg-white min-h-screen md:flex md:items-center"
  >
    <div class="contact-box md:flex md:w-4/5 mx-auto">
      <div
        class="w-full md:w-1/2 text-center flex justify-center items-center my-12 py-12"
      >
        <div>
          <div class="ml6">
            <span class="text-wrapper">
              <span class="letters">Kontakta mig</span>
            </span>
          </div>
          <div class="contact-info">
            <div class="text-left my-4 flex">
              <i class="fa fa-envelope px-2" aria-hidden="true"></i>
              <div>
                <a href="mailto:valesca.sarrocchi.s@gmail.com"
                  >valesca.sarrocchi.s@gmail.com</a
                >
              </div>
            </div>
            <div class="text-left my-4 flex">
              <i class="fa fa-phone-square px-2" aria-hidden="true"></i>
              <div>
                <a href="tel:0767086167">076-7086167</a>
              </div>
            </div>
            <div class="text-left my-4 flex">
              <i class="fab fa-linkedin px-2" aria-hidden="true"></i>
              <div>
                <a href="https://linkedin.com/in/valesca-sarrocchi"
                  >https://linkedin.com/in/valesca-sarrocchi</a
                >
              </div>
            </div>
            <div class="text-left my-4 flex">
              <i class="fab fa-github px-2" aria-hidden="true"></i>
              <div>
                <a href="https://github.com/vsarrocchi"
                  >https://github.com/vsarrocchi</a
                >
              </div>
            </div>
          </div>
          <div class="mt-10">
            <a href="mailto:valesca.sarrocchi.s@gmail.com">
              <button
                class="shadow text-white px-10 py-2 rounded transition duration-300 ease-in-out hover:bg-red-500 transform hover:scale-105"
              >
                Skicka e-post
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full h-64 md:h-full md:w-1/2 shadow">
        <div id="map"></div>
        <!-- <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130265.72825472063!2d17.84197085843541!3d59.326241967042534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1ssv!2sse!4v1592803653234!5m2!1ssv!2sse"
          class="w-full h-full"
        ></iframe> -->
        <!-- <gmap-map :center="center" :zoom="12" :options="options" class="h-full">
          <gmap-marker
            v-for="(item, index) in markers"
            :key="index"
            :position="item.position"
            @click="center = item.position"
          />
        </gmap-map> -->
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es'

export default {
  data() {
    return {
      textWrapper: null
      // center: { lat: 59.334591, lng: 18.06324 },
      // markers: [
      //   { position: { lat: -0.48585, lng: 117.1466 } },
      //   { position: { lat: -6.9127778, lng: 107.6205556 } }
      // ],
      // options: {
      //   styles: [
      //     {
      //       elementType: 'geometry',
      //       stylers: [
      //         {
      //           color: '#f5f5f5'
      //         }
      //       ]
      //     },
      //     {
      //       elementType: 'labels.icon',
      //       stylers: [
      //         {
      //           visibility: 'off'
      //         }
      //       ]
      //     },
      //     {
      //       elementType: 'labels.text.fill',
      //       stylers: [
      //         {
      //           color: '#616161'
      //         }
      //       ]
      //     },
      //     {
      //       elementType: 'labels.text.stroke',
      //       stylers: [
      //         {
      //           color: '#f5f5f5'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'administrative.land_parcel',
      //       elementType: 'labels.text.fill',
      //       stylers: [
      //         {
      //           color: '#bdbdbd'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'poi',
      //       elementType: 'geometry',
      //       stylers: [
      //         {
      //           color: '#eeeeee'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'poi',
      //       elementType: 'labels.text.fill',
      //       stylers: [
      //         {
      //           color: '#757575'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'poi.park',
      //       elementType: 'geometry',
      //       stylers: [
      //         {
      //           color: '#e5e5e5'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'poi.park',
      //       elementType: 'labels.text.fill',
      //       stylers: [
      //         {
      //           color: '#9e9e9e'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'road',
      //       elementType: 'geometry',
      //       stylers: [
      //         {
      //           color: '#ffffff'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'road.arterial',
      //       elementType: 'labels.text.fill',
      //       stylers: [
      //         {
      //           color: '#757575'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'road.highway',
      //       elementType: 'geometry',
      //       stylers: [
      //         {
      //           color: '#dadada'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'road.highway',
      //       elementType: 'labels.text.fill',
      //       stylers: [
      //         {
      //           color: '#616161'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'road.local',
      //       elementType: 'labels.text.fill',
      //       stylers: [
      //         {
      //           color: '#9e9e9e'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'transit.line',
      //       elementType: 'geometry',
      //       stylers: [
      //         {
      //           color: '#e5e5e5'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'transit.station',
      //       elementType: 'geometry',
      //       stylers: [
      //         {
      //           color: '#eeeeee'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'water',
      //       elementType: 'geometry',
      //       stylers: [
      //         {
      //           color: '#4c4c4c'
      //           // color: '#707070'
      //           // color: '#393939'
      //           // color: '#c9c9c9'
      //         }
      //       ]
      //     },
      //     {
      //       featureType: 'water',
      //       elementType: 'labels.text.fill',
      //       stylers: [
      //         {
      //           color: '#9e9e9e'
      //         }
      //       ]
      //     }
      //   ]
      // }
    }
  },
  mounted() {
    // Wrap every letter in a span
    this.textWrapper = document.querySelector('.ml6 .letters')
    this.textWrapper.innerHTML = this.textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )

    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml6 .letter',
        translateY: ['1.1em', 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      })
      .add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 4000
      })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/styles.css';

.contact-box {
  height: 30rem;
}

.ml6 {
  font-size: 2.5em;
}

.ml6 .text-wrapper {
  overflow: hidden;
}

.ml6 .letter {
  display: inline-block;
  line-height: 1em;
}

#map {
  height: 100%;
}

.letter {
  font-family: 'Nothing You Could Do', cursive;
}

.contact-info {
  margin-top: 30px;
  i {
    font-size: 1.5em;
    width: 50px;
  }
}

button {
  background-color: #4c4c4c;
}
</style>
