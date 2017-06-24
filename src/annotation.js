var AnnotationReader = require('./Reader/Annotation.js');
var AnnotationParser = require('./Parser/Annotation.js');

var annotationParser = new AnnotationParser();

var annotation = function(classString, callback) {
        annotationParser.parse(classString, function(comments) {
            callback(new AnnotationReader(comments));
        });
}

module.exports = annotation;