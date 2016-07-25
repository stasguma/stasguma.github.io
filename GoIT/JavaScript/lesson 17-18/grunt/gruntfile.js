module.exports = function(grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      jshint: {
         files: ['Gruntfile.js', 'js/src/*.js'],
         options: {
           globals: {
             jQuery: true
           }
         },
         '<%= pkg.name %>': {
            src: ['src/js/src/*.js'],
         },
      },

      concat: {
         options: {
            separator: ';'
         },
         basic: {
            src: ['js/src/*.js'],
            dest: 'js/dist/script.main.js',
         },
         // extras: {
         //    src: ['css/*.css'],
         //    dest: 'css/dist/style.main.css',
         // },
         // dist: {
         // }
      },

      uglify: {
         options: {
            stripBanners: true,
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
           '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
         },
         my_target: {
            files: {
               'js/dist/script.main.min.js': ['js/dist/script.main.js']
            }
         }
      },

      cssmin: {
         with_banner: {
            options: {
               banner: '/* My minified CSS */'
            },
            files: {
               'css/dist/style.main.min.css': ['css/*.css']
            }
         }
      },

      watch: {
         scripts: {
            files: ['js/src/*.js'],
            tasks: ['jshint concat uglify']
         }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'watch']);

};
