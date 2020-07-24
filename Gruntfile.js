module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          './app/assets/styles/styles.css': './app/assets/styles/styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['./app/assets/styles/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks
  grunt.registerTask('default', ['watch']);

}
