/*

Exercise 1:
Looping a triangle
Write a loop that makes seven calls to `console.log` to output the following triangle:

#
##
###
####
#####
######
#######

*/

for (let triangle_line = "#"; triangle_line.length < 8; triangle_line += "#") {
    console.log(triangle_line);
}