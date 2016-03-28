(function() {
  module.exports = function(grunt) {
	
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		nodemon: {
		  dev: {
		    script: 'server.js'
		  }
		}
		
	});
	
	grunt.registerTask('default', ['nodemon:dev']);	
 }
}());