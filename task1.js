const person = {

    city: "Moscow"
   
   }
   
   // создаем объект с прототипом
   
   const student = Object.create(person);
   
   // добавляем собственное свойство объекту student
   
   student.ownCity = "Piter";
   
   // обращаемся к свойству, которого нет в объекте student, но есть в его прототипе person 
   
   console.log(student.city); // Moscow