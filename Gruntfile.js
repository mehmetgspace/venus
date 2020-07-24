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
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default tasks
  grunt.registerTask('default', ['sass']);

}
