<template>
  <div class="editor">{{ code }}</div>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'editor',
    props: {
      code: String,
      language: {
        type: String,
        default: 'scss'
      },
      readOnly: Boolean
    },
    watch: {
      code: function(val) {
        console.log(val);
        this.editor.setValue(val);
      }
    },
    mounted() {
      let editor = window.ace.edit(this.$el);
      this.editor = editor;

      editor.setTheme("ace/theme/twilight");
      editor.getSession().setMode(`ace/mode/${this.language}`);
      editor.setReadOnly(this.readOnly);

      editor.$blockScrolling = Infinity;
      // this.editor.setValue(this.code);
      this.$emit('change', editor.getValue());

      editor.getSession().on('change', _.debounce((e) => {
        console.log(e);
        this.$emit('change', editor.getValue());
       }, 500));
    }
  }
</script>

<style>
  .editor {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
