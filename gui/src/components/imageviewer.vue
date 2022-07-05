<template>
  <div class="component image-viewer"
       v-bind:class="[{ 'animate-out': animateOut }, componentDesign]"
       v-bind:style="styles"
       v-if="module.settings.show">
    <header>
      <h4 v-show="module.settings.header">
        <i v-show="showHeaderIcon" class="header-icon" v-bind:class="module.icon"></i>{{ module.settings.header }}</h4>
    </header>
    <section v-if="module.settings.showCountDown">
      <div class="countdown">{{ countDownText }}</div>
    </section>

    <section>
      <div>
        <img v-bind:src="url" v-bind:style="imageStyle">
      </div>
    </section>

  </div>
</template>
<script>
import formatDistance from 'date-fns/formatDistance'
import parse from 'date-fns/parse';
import nl from 'date-fns/locale/nl'

export default {
  name: "image-viewer",

  /*
   * Prop: `module` access the widget settings data
   */
  props: ["module"],

  data() {
    return {
      url: "",
      maxWidthConfig: "100%",
      showCountDown: false,
      countDownText: "",
      showAsCircle: false,
      circleSize: "200px"
    };
  },

  created() {
    this.formatCountDownText();
  },

  mounted() {
    this.$options.interval = setInterval(this.formatCountDownText, 60000);
  },

  beforeDestroy() {
    clearInterval(this.$options.interval);
  },

  watch: {
    module: {
      immediate: true,
      handler() {
        // after receiving new configuration, update this module.
        this.url = this.module.settings.url
        this.maxWidthConfig = this.module.settings.maxWidth
        this.showCountDown = this.module.settings.showCountDown
        this.countDownDate = this.module.settings.countDownDate
        this.showAsCircle = this.module.settings.showAsCircle
        this.circleSize = this.module.settings.circleSize

        this.formatCountDownText();
      },
    },
  },

  computed: {
    styles() {
      return {
        width: this.module.settings.widget_width + "px",
      };
    },

    imageStyle() {
      if (this.showAsCircle) {
        return {
          width: this.circleSize,
          height: this.circleSize,
          'object-fit': 'cover',
          'border-radius': '50%'
        }
      }

      return {
        'max-width': this.maxWidthConfig,
      };
    }
  },

  methods: {
    formatCountDownText() {
      if (this.showCountDown && this.countDownDate) {
        let date = parse(this.countDownDate, 'dd-MM-yyyy', new Date());
        this.countDownText = formatDistance(Date.now(), date, {locale: nl});
      }
    },
  },

};
</script>

<style lang="scss" scoped>

.last .image-viewer {
  text-align: right;
}

.countdown {
  font-size: 2rem;
  padding-bottom: 20px;
}

</style>
