<template>
  <div>
    <Sidebar />
    <div>
      <nuxt />
    </div>
    <Social />
  </div>
</template>

<script>
import anime from 'animejs'

import Sidebar from '../components/sidebar'
import Social from '../components/social'

export default {
  components: {
    Sidebar,
    Social
  },
  mounted() {
    // google maps
    // const mapApi = process.env.NUXT_GOOGLE_MAPS_API_KEY
    const script = document.createElement('script')
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDpK6o7ZoQfNA4vjxx1kwEsYJ0j9JUJwK0&callback=initMap'
    script.defer = true
    script.async = true
    // eslint-disable-next-line no-unused-vars
    let map
    window.initMap = function() {
      // eslint-disable-next-line no-undef
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 59.334591, lng: 18.06324 },
        zoom: 12,
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5'
              }
            ]
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#f5f5f5'
              }
            ]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dadada'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5'
              }
            ]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#4c4c4c'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          }
        ]
      })
    }
    document.head.appendChild(script)

    // on scroll parallax
    const visibility = document.getElementById('content-wrapper')
    if (visibility.addEventListener) {
      visibility.addEventListener(
        'DOMContentLoaded',
        this.checkForVisibility,
        false
      )
      visibility.addEventListener('load', this.checkForVisibility, false)
      visibility.addEventListener('scroll', this.checkForVisibility, false)
    }
  },
  methods: {
    // isElementInViewport and checkForVisibility used in about parallax animation
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect()

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    checkForVisibility() {
      const headers = document.querySelectorAll('.header')
      const screenWidth = screen.width

      headers.forEach((header) => {
        if (screenWidth >= 768) {
          if (this.isElementInViewport(header)) {
            if (header.dataset.hasAppeared === 'true') {
            } else {
              header.classList.add('headerVisible')
              const svgPath = document.querySelectorAll('.path')
              anime({
                targets: svgPath,
                loop: false,
                opacity: 1,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 350,
                delay: (el, i) => {
                  return i * 100
                }
              })
              header.dataset.hasAppeared = 'true'
            }
          } else {
            header.classList.remove('headerVisible')
            header.dataset.hasAppeared = 'false'
          }
        } else {
          header.classList.remove('header')
        }
      })
    }
  }
}
</script>

<style lang="css">
@import '@/assets/css/styles.css';
</style>
