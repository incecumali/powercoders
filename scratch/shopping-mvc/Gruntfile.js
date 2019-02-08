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

            }
        }

    });
    // load plugging that provides uglify
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    //default tasks
    grunt.registerTask('default', ['uglify']);
};