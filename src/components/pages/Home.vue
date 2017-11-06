<template>
 <section>
    <md-toolbar class="md-transparent">
      <md-button class="md-icon-button">
        <md-icon>save</md-icon>
      </md-button>
    </md-toolbar>
    <md-layout md-gutter class="play-ground-container">
      <md-layout
        class="editor-container"
        md-flex-xsmall="100"
        md-flex-small="50">
          <editor v-bind:code="defaultCode" />
      </md-layout>

      <md-layout
          class="editor-container"
          md-flex-xsmall="100"
          md-flex-small="50">

          <editor/>
      </md-layout>
    </md-layout>
  </section>
</template>

<script>
import Editor from '@/components/Editor';
import { ANNOTATIONS } from '../../constanst';
export default {
  name: 'Home',
  components: {
    Editor
  },
  data () {
    return {
      defaultCode: ANNOTATIONS
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .play-ground-container {
    position: absolute;
    top: 128px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .editor-container {
    min-height: 800px;
    position: relative;
  }
</style>
