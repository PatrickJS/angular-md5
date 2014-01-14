'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bwr: grunt.file.readJSON('bower.json'),
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['<%= bwr.name %>']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    concat: {
      dist:{}
    },
    ngmin: {
      dist: {}
    },
    uglify: {
      options: {
        report: 'min',
        enclose: {
          'this': 'window',
          'this.angular': 'angular',
          'void 0': 'undefined'
        },
        banner: '/*\n  <%= pkg.name %> - v<%= pkg.version %> \n  ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'+
        '',
      },
      dist: {
        options: {
          beautify: false,
          mangle: true,
          compress: {
            global_defs: {
              'DEBUG': false
            },
            dead_code: true
          },
          sourceMap: '<%= bwr.name %>.min.js.map'
        },
        files: {
          '<%= bwr.name %>.min.js': ['./lib/index.js', './lib/*/*.js']
        }
      },
      src: {
        options: {
          beautify: true,
          mangle: false,
          compress: false
        },
        files: {
          '<%= bwr.name %>.js': ['./lib/index.js', './lib/*/*.js']
        }
      }
    }
  });

  // Testing task
  grunt.registerTask('test', [
  ]);

  // Build task
  grunt.registerTask('build', [
    'concat',
    'ngmin',
    'uglify'
  ]);

  // Default task
  grunt.registerTask('default', [
    'build'
  ]);

};
