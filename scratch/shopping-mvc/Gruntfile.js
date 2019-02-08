module.exports = function(grunt) {
    //project configuration

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                banner:'/*! <%=pkg.name%> <%=grunt.template.today("08-02-2019")%> */\n'

            },
            build:{
                src:['src/js/view.js', 'src/js/model.js', 'src/js/controller.js', 'src/js/shopping-list-item.js', 'src/js/ui.js'],
                dest:'build/<%=pkg.name %>.min.js'

            },


        },
        copy:{
            html:{
                src:'src/html/index.prod.html',
                dest:'build/index.html'
            },
            static:{
                files:[{
                    expand:true,
                    cwd:'src/static',
                    src:'*.*',
                    dest:'build/static',

                }]
            }
        }

    });
    // load plugging that provides uglify
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //default tasks
    grunt.registerTask('default', ['uglify', 'copy']);
};