module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);

  grunt.initConfig({
    uglify: {
      dist: {
        src: ['!scripts/lib/*.js', 'blocks/*/*.js', 'scripts/vendor/*.js', '!scripts/vendor.min.js'],
        dest: "scripts/vendor.min.js"
      },
      dev: {
        src: ['!scripts/lib/*.js', 'blocks/*/*.js', 'scripts/vendor/*.js', '!scripts/vendor.min.js'],
        dest: "scripts/vendor.min.js",
        options: {
          beautify: true,
          compress: false,
          mangle: false
        }
      }
    },
    sass: {
      dist: {
        options: {
          outputStyle: "compressed",
          lineNumbers: false
        },
        files: [{
          expand: true,
          cwd: 'blocks',
          src: ['*.scss', '*.sass'],
          dest: 'css',
          ext: '.css'
        }]
      },
      dev: {
        options: {
          outputStyle: "expanded",
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: 'blocks',
          src: ['*.scss', '*.sass'],
          dest: 'css',
          ext: '.css'
        }]
      },
      tasks: ['autoprefixer']
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    },
    pug: {
      dev: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          cwd: 'pug',
          src: ['*.pug', '!_*.pug'],
          dest: '',
          ext: '.html'
        }]
      },
      dist: {
        options: {
          data: {
            debug: false
          },
          pretty: false
        },
        files: [{
          expand: true,
          cwd: 'pug',
          src: ['*.pug', '!_*.pug'],
          dest: '',
          ext: '.html'
        }]
      }
    },
    wiredep: {
      target: {
        src: '*.html',
        options: {
        },
        exclude: ['bower_components/slick.js/slick/slick.css', 'bower_components/slick.js/slick/slick-theme.css']
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          svgoPlugins: [{ removeViewBox: false }]
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['*.{png,jpg,gif}'],
          dest: 'images/min/'
        }]
      }
    },
    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
          keepalive: true,
          livereload: true
        }
      }
    },
    shell: {
      bowerInstall: {
        command: 'bower install'
      }
    },
    copy: {
    },
    watch: {
      scripts: {
        files: ['!scripts/vendor.min.js', 'blocks/*.js', 'blocks/*/*.js'],
        tasks: ['uglify:dev'],
        options: {
          spawn: false
        }
      },
      sass: {
        files: ['blocks/*.scss', 'blocks/*.sass', 'blocks/*/*.scss', 'blocks/*/*.sass'],
        tasks: ['sass:dev', 'autoprefixer'],
        options: {
          spawn: false
        }
      },
      pug: {
        files: ['pug/*.pug'],
        tasks: ['pug:dev', 'wiredep'],
        options: {
          spawn: false,
          pretty: true
        }
      },
      reload: {
        files: ['blocks/*.png', 'blocks/*/*.png', 'blocks/*/*/*.png', 'blocks/*.jpg', 'blocks/*/*.jpg', 'blocks/*/*/*.jpg', '*.html', 'scripts/*', 'css/*'],
        options: {
          livereload: true
        }
      },
      bower: {
        files: ['bower.json'],
        tasks: ['shell:bowerInstall', 'wiredep']
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      dev: {
        tasks: ['watch:scripts', 'watch:sass', 'watch:pug', 'watch:bower', 'watch:reload', 'connect']
      }
    }
  });

  grunt.registerTask('default', ['']);
  grunt.registerTask('build', ['uglify:dist', 'sass:dist']);
  grunt.registerTask('server', ['concurrent:dev']);
};