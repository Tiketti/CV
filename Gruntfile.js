// Wrapper function
module.exports = function(grunt) {
  // Read package.json
  grunt.file.readJSON('package.json');

  //Initialize grunt
  grunt.initConfig({

    // Sass task
    sass: {

      // Sass development options
      dev: {
        options: {
          style: 'expanded',
        },
        files: {
          'css/main.css': 'css/scss/main.scss'
        }
      },

      // Sass distribution options
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css': 'css/scss/main.scss'
        }
      }
    },

    // Watch files
    watch: {

      // Watch .scss files
      sass: {
        files: ['css/scss/**/*.scss'],
        tasks: ['sass:dev'],
      },

      // Live reload files
      livereload: {
        options: { livereload: true },
        files: [
          'css/**/*.css',
          '**/*.html',
        ]
      }
    },

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Create Default Task
  grunt.registerTask('default', [
    'sass:dev' // Compile Sass with dev settings
  ]);

  // Create Distribution Task
  grunt.registerTask('dist', [
    'sass:dist' // Compile Sass with distribution settings
  ]);
}
