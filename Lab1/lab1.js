//db.student.find({})

//1- use FacultySystemDB

//2- db.createCollection("student")

//3.1 - db.student.insertOne({"FirstName":"Omnia", "LastName":"Gad", age:23,"Faculty":["Computer Science","Helwan"], "Grades":[{CourseName:"mongo", Grade:90, Pass:true},{CourseName:"angular", Grade:85, Pass:true}]})

/* 3.2 - db.student.insertMany([
{
    "FirstName":"Alaa", "LastName":"Sherief", age:22,"Faculty":["Computer Science","Helwan"], "Grades":[{CourseName:"mongo", Grade:95, Pass:true},{CourseName:"angular", Grade:90, Pass:true}],Is_Fired: true
    },
    {
    "FirstName":"Omnia", "LastName":"Mohamed", age:22,"Faculty":["Computer Science","Cairo"], "Grades":[{CourseName:"mongo", Grade:93, Pass:true},{CourseName:"angular", Grade:92, Pass:true}], Is_Fired: false
    },
    {
    "FirstName":"Kareem", "LastName":"Mohamed", age:23,"Faculty":["Engineering","Cairo"], "Grades":[{CourseName:"mongo", Grade:40, Pass:false},{CourseName:"angular", Grade:75, Pass:true}] , Is_Fired: false
    }]
    )*/
    
//4.1 db.student.find({}) 
    // 4.2 db.student.find({"FirstName":"Alaa"})
    // 4.3  db.student.find({$or:[{FirstName:"Ahmed"},{LastName:"Ahmed"}]})
    //4.4 db.student.find({FirstName:{$nin:["Ahmed"]}})

    //4.5 db.student.find({age:{$gte:21},Faculty:{$ne:null}})
    //4.6 db.student.find({FirstName:"Omnia"},{FirstName:1,LastName:1,IsFired:1,_id:0})

//5 db.student.updateOne({FirstName:"Kareem"},{$set:{LastName:"Kareem"}})            

// 6- db.student.deleteMany({IsFired:true})

// 7- db.students.drop()
// 8- db.dropDatabase() 




