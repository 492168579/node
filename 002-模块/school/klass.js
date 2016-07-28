/**
 * Created by yezhaoyi on 16/5/29.
 */

var student = require('./studnt');
var teacher = require('./teacher');
function add(teacherName,students){
    teacher.add(teacherName);
    students.forEach(function(item,index){
        student.add(item);
    })
}
exports.add = add ;