<template>
   <section>
      <md-layout md-gutter class="play-ground-container">
        <md-layout
          class="editor-container"
          md-flex-xsmall="100"
          md-flex-small="50">
            <editor
              :code="defaultCode"
              language="scss"
              @change="onEditorChanged"
              />
      </md-layout>

      <md-layout
          class="editor-container"
          md-flex-xsmall="100"
          md-flex-small="50">

          <editor
            language="json"
            :code="resultCode"
            v-bind:read-only="true"
            />
      </md-layout>
      </md-layout>
  </section>
</template>

<script>
  import Editor from '@/components/Editor';
  import { ANNOTATIONS } from '../../constanst';
  import { GetSassExportResult } from '../../services';

  export default {
    name: 'Home',
    components: {
      Editor
    },
    methods: {
      onEditorChanged: async function(val) {
       let jsonString = await GetSassExportResult(val);
       this.resultCode = JSON.stringify(jsonString, null, 2);
     }
   },
    data () {
      return {
        defaultCode: ANNOTATIONS,
        resultCode: '{}'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .play-ground-container {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .editor-container {
    min-height: 300px;
    position: relative !important;
  }
</style>
