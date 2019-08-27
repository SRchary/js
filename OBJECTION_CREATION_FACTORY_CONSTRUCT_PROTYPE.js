//Object Creation using  Factory

var personFactory = function(name, age ,city){
	var temp = {};
	temp.name =name;
	temp.age =age;
	temp.city =city;
	temp.getPerson = function(){
	  return this.name+" "+this.age+" "+this.city;
	}
	return temp;
}

var person1 = personFactory("ravi" ,20 ,"hyd");
var person2 = personFactory("AMMU" ,30 ,"VIZ");

//object Creation using construction

var personConstruct = function(name, age ,city){
	
	this.name =name;
	this.age =age;
	this.city =city;
	this.getPerson = function(){
	  return this.name+" "+this.age+" "+this.city;
	}
}

var person1 = new personConstruct("ravi" ,20 ,"hyd");
var person2 = new personConstruct("AMMU" ,30 ,"VIZ");


//Objection creation using prototype

var personProto = function(){

}


personProto.prototype.age ='No Age'
personProto.prototype.name ='No Name'
personProto.prototype.city ='No City'
personProto.prototype.getPerson = function(){
   return this.name+" "_this.age+" "+this.city;

}

var person1 = new personProto();






