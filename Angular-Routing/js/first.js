// var test123 = 
// 				{
// 					"name" : "Geetha", 
// 					"details" : 
// 					{
// 						"age" : 29,
// 					 	"gender" : 
// 						{
// 							"first" : "male", 
// 							 "second" : "female"
// 						}
// 					}
// 				};
// console.log(test123.details.gender.second);
// alert("hi");

//**example for addition and subtraction starts here**//

// function add(){
// 	var a = 10;
// 	var b = 20;
// 	var c = 30;
// 	var d = 40;
// 	var e = (a+b+c+d);
// 	console.log(e);
// };
// function sub(){
// 	var a = 40;
// 	var b = 30;
// 	var c = 20;
// 	var d = 10;
// 	var e = (a-b-c-d);
// 	console.log(e);
// }
// add();
// sub();
//**example for array starts here**//


//**example for an array starts here**//
// var students = ["Geetha", "Rekha", "swetha", "Raju"];
// console.log(students[2]);
// var student_details = [
// 					{"name" : "Geetha", "marks" : 88},
// 					{"name" : "Rekha", "marks" : 98},
// 					{"name" : "Raju", "marks" : 77}
// 				];
// console.log(student_details[1].name);
//**example for an array ends here**//

//**example for an object starts here**//
// var courses = {
// 	"types" :
// 	{
// 		"webdesigning" : 
// 			{"first" : "html", "second" : "css", "third" : "javascript"},

// 	} 
// };
// console.log(courses);
//**example for an object ends here**//

//**example for function starts here**//
// function multiply(){
// 	var a = 10;
// 	var b = 20;
// 	var c = a * b;
// 	console.log(c);
// }
// multiply();
// function divide(){
// 	var a = 20;
// 	var b = 10;
// 	var c = a / b;
// 	console.log(c);
// }
// divide();
//**example for function ends here**//

//**example for onlick event starts here**//
// function demo(){
// 	document.getElementById("hidediv").style.display="none";
// }
// function demo(){
// 	document.getElementById("hidediv").style.background="red";
// }


//**set attribute**//
// function demo(){
// 	document.getElementById("hidediv").setAttribute("style", "background-color:red; width:300px; height:100px; text-align:center; padding-top:40px; text-transform:uppercase; text-decoration:underline");
// }


//**innerHTML**//
// function demo(){
// 	document.getElementById("hidediv").innerHTML = "content changed";
// }



//**typeof method**//

//**number**//
// var a = 10;
// console.log(typeof(a));

//**string**//
// var a = "Hai";
// console.log(typeof(a));

//**array**//
// var num = [1,2,"a","b"];
// console.log(typeof(num[2]));

//**object**//
// var details = {"name" : "Geetha", "age" : 26};
// console.log(typeof(details.age));

//**typeof(typeof)**//
// var a = "typeof";
// console.log(typeof(typeof(a)));
// var a = 5;
// console.log(typeof(typeof(a)));
// var a =[1,2,"hai"];
// console.log(typeof(typeof(a[1])));





/*multiple objects*/
// var students = [
// 					{"name" : "Geetha", "marks" : 78},
// 					{"name" : "Gowthami", "marks" : 88},
// 					{"name" : "Rekha", "marks" : 98},
// 					{"name" : "Roja", "marks" : 87}
// 			];
// for(var i=0; i<students.length; i++)
// 	{
// 		var add = "<tr> <td>" + students[i].name + "</td> <td>" + students[i].marks + "</td> </tr>";
// 		document.getElementById("stu_details").innerHTML += add;
// }


/**how to add a row to the table**/
// function addFirst(){
// 	var table = document.getElementById("table-data");
// 	var tr = table.insertRow(2);
// 	var col1 = tr.insertCell(0);
// 	var col2 = tr.insertCell(0);
// 	col1.innerHTML = "Seven";
// 	col2.innerHTML = "Eight";
// };

// function test(){
// 	var a = 6;
// 	function testChild(){
// 		console.log(a);
// 	};
// };
// test();


/**function**/
// var a = 3;
// function demo(){
// 	var b = 2;
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// var c = 12;
// demo();
// console.log(c);

/**string**/
// var a = "hai";
// var b = "hello";
// var c = (a + b);
// console.log(c);

/**join()**/
// var a = "hai";
// var b = "hello";
// var c = a.join(b);
// var c = join(a,b);
// var c = join(a + " " + b);
// console.log(c);


/**length**/
// var a = "hai h";
// var a = " hai h";
// var b = a.length;
// console.log(b);

/**concat**/
// var a = "hai";
// var b = "hello";
// var c = a.concat(b);
// console.log(c);
// var c ="happy morning";
// var d = a.concat(b,c);
// console.log(d);
// var e = a.concat(b + "    " + c);
// console.log(e);
// var f = e.length;
// console.log(f);
// var g = a.concat( " " + b + " " + c );
// console.log(g);
// var h = g.length;
// console.log(h);

/**NAN**/
// var a = "hai";
// var b = 2;
// var c = 3;
// var d = (b + c + a);
// var e = (a + b + c);
// console.log(d);
// console.log(e);
// var d = (b + a);
// console.log(d);


/**toUpperCase**/
// var a = "hi how world";
// var b = a.toUpperCase();
// console.log(b);
// var c ="GEETHAnjali";
// var d = c.toLowerCase();
// console.log(d);


/**Slice**/
// var a = "hai brahmam";
// var b = a.slice(4,11);
// console.log(b);
// var c = a.substring(2,9);
// console.log(c);
// var d = a.substr(4,4);
// console.log(d);

/**Replace**/
// var a = "hai hello";
// var b = a.replace("hello", "world");
// console.log(b);
// var c = "hai hello hello";
// var d = c.replace("hello","welcome");
// console.log(d);


/**JSON**/
// var students = [
// 	{"name" : "Geetha", "age" : 26, "class" : "tenth", "section" : "A", "cell" : 8095756586},
// 	{"name" : "Rekha", "age" : 22, "class" : "seventh", "section" : "B", "cell" : 9999922222},
// 	{"name" : {"first" : "sweetha", "second" : "sathish"},
// 	 "age" : 29, "class" : "tenth", "section" : "A", "cell" : 8099997777},
// 	{"name" : "Rajini", "age" : 28, "class" : "tenth", "section" : "A", "cell" : 8095756586},
// 	{"name" : "Gowthami", "age" : 26, "class" : "tenth", "section" : "A", "cell" : 8095756586}
// 	];
// // console.log(students);
// // document.write("students");
// console.log(students[2].name.second);


// var a =[1,2,3];
// console.log(a[2]);


/**How to create an element**/
// function regForm(){
//  var a = document.getElementById("data1");
//  // var result = a.classList.add("dynamic");
//  var result = a.classList.remove("dynamic");
//  // console.log(a);
//  // alert();
// }

// function regform(){
// 	var a = document.getElementById("data1");
// 	var result = a.classList.remove("d1");
// }


// function removeClass(){
// 	var a =document.getElementById("hide_color");
// 	var result = a.classList.remove("remove_color");
// }
// function addClass(){
// 	var b = document.getElementById("green_color");
// 	var result1 = b.classList.add("add_color");
// }
// function addRow(){
// 	var table = document.getElementById("table1");
// 	var tr = table.insertRow(5);
// 	var col1 = tr.insertCell(0);
// 	var col2 = tr.insertCell(1);
// 	col1.innerHTML = "Sweetha";
// 	col2.innerHTML = "aaa@gmail.com";
// };


/**number method**/
// var a = 10;
// console.log(typeof(a));
// var a = 15.2;
// var b = 16.7;
// var c = 0.2;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// var d = (a + b);
// console.log(d);
// console.log(typeof(d));
// var a = "2";
// var b = "3";
// var c = (a + b);
// console.log(c);
// console.log(typeof(c));

// var a = 2;
// var b = "2";
// var c = 3;
// var d = (a + c + b);
// console.log(d);
// console.log(typeof(d));
// var e = (b + a + c);
// console.log(e);
// console.log(typeof(e));
// var a = "9";
// var b = "3";
// var c = a/b;
// console.log(c);
// console.log(typeof(c));

// var a = "3";
// var b = "apple";
// var c = a/b;
// console.log(c);
// console.log(typeof(c));
// var a = NaN;
// var b = 5;
// var c = (a + b);
// console.log(c);
// console.log(typeof(c));

// var a = 10;
// var b = new Number();
// console.log(b);
// console.log(typeof(b));

// var a = 143;
// var b = a.valueOf();

// var a = Number;
// var b = a.MAX_VALUE;
// console.log(b);
// var c = a.MIN_VALUE;
// console.log(c);
// var d = a.NEGATIVE_INFINITY;
// console.log(d);
// var e = a.POSITIVE_INFINITY;
// console.log(e);
// var f = a.NaN;
// console.log(f);

/**Creating elements dynamically**/
	// var a = document.getElementById("demo");
	// console.log(a);
	// var para = document.createElement("p");
	// // var result = a.appendChild("para");
	// console.log(para);
 //   var data = document.createElement("table");
 //   console.log(data);
 //   var innerdata = document.createElement("tr");
 //   // console.log(innerdata);
 //   var result = data.appendChild(innerdata);
 //   var aa = document.createElement("td");
 //   // console.log(aa);
 //   var innerresult = innerdata.appendChild(aa);
 //   var insert = document.

// var sample = document.getElementById("demo");
// var bb = sample.appendChild(headingDynamic);


//  var headingDynamic = document.createElement("h1");
//  console.log(headingDynamic);
//  var textHeading = document.createTextNode("my first heading");
//  // console.log(textHeading);
//  var result = headingDynamic.appendChild(textHeading);
//  // headingDynamic.setAttribute("id", "text1");
//  // console.log(result);
//  headingDynamic.id = "aa";
//  // headingDynamic.class ="bb";

//  var tableTask = document.createElement("table");
//  console.log(tableTask);
//  var tableRow = document.createElement("tr")
//  //console.log(tableRow);
//  var appeding = tableTask.appendChild(tableRow);
//  var heading1= document.createElement("th");
//  var heading2=document.createElement("th");
//  var append2=tableRow.appendChild(heading1);
//  var append2=tableRow.appendChild(heading2);
//  var text1=document.createTextNode("Name");
//  var text2=document.createTextNode("Class");
//  var R1=heading1.appendChild(text1);
//  var R2=heading2.appendChild(text2);


// function changeStatus()
// {
// 	// document.getElementById("n1").style.display= "block";
// 	// document.getElementById("p1").style.display= "block";
// 	// document.getElementById("e1").style.display= "block";
// 	//document.getElementById("A1").
// }


// var a=10;
// if (a>5){
// 	console.log("true");
// }
// console.log("false");

var a ="abcd";
var result=a.test("a");
console.log(result);