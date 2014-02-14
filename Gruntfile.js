module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*']});

  grunt.initConfig({
    php: {
      test: {
        options: {
          keepalive: true,
          open: true,
          hostname: '0.0.0.0',
          port: 8000
        }
      }
    }
  });

  grunt.registerTask('default', ['php']);

};
