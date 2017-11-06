<template>
  <div id="editor">{{ code }}</div>
</template>

<script>
  export default {
    name: 'editor',
    props: ['code'],
    mounted() {
      let editor = window.ace.edit(this.$el);

      editor.setTheme("ace/theme/twilight");
      editor.getSession().setMode("ace/mode/scss");
      editor.getSession().on('change', function(e) {
          console.log(e);
       });
    }
  }
</script>

<style>
  #editor {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
