module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //connect
        connect: {
            options: {
                port: 8080,
                hostname: "localhost",
                livereload: 35729
            },

            server: {
                options: {
                    open: true,
                    base: ["app"]
                }
            }
        },

        watch: {
            options: {
                livereload: 35729
            },
            scripts: {
                options: {
                    livereload: true
                },
                files:[
                    'app/**/*.html',
                    'app/**/*.js', '!app/**/*_test.js',
                    'app/**/*.css',
                    'app/**/*.{png,jpg,jpeg,gif,svg}'
                ]
            }
        }
    });

    // Creates the `server` task
    grunt.registerTask('server',["connect","watch"]);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

};
