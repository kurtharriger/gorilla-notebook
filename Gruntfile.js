module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "download-atom-shell": {
      version: "0.15.9",
      outputDir: 'binaries'
    }
  });

  grunt.loadNpmTasks('grunt-download-atom-shell');

};
