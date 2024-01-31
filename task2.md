OBJECTS
Objects in javascript is it’s most important data-type and forms the building for modern javascript. In javascript, an object is an collection of named values representing states and behaviour , known as properties and methods .objects can hold many values in the form of key vale pair, where the keys can be variables or functions .Object can be created using the keyword new or the object. create() method. Almost everything in javascript is objects like Booleans, numbers, strings, dates, maths, arrays and functions. Objects are more complex and each object may contain any combination of these primitive data types as well as reference data types.
For example: If your object is a student, it will have properties like name, age, address, id etc., and methods updateaddress, updatename etc.
Like all javascript variables, both the object name and property name are case sensitive. You can define a property by assigning it a value.
Sample program:
var		 mycar	 	=		 new 		object();

	(datatype)	(object name)			(keyword)
mycar.make=”ford”
mycar.model=”mustang”
mycar.year=”1967”

Unassigned properties of an object are (UNDEFINED)
mycar.color; // (undefined)
