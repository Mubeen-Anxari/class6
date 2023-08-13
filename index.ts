// var rollNo1: number = 1;
// var rollNo2: number = 2;
// var rollNo3: number = 3;
// var rollNo4: number = 4;

// var studentRollNo: number[] = [10, 20, 30, 40, 50, 60];
// var sum2: number = studentRollNo[3] + studentRollNo[2];
// console.log(sum2);

// var studentNames: string[] = ["mubeen", "usman", ".Ali", "zain"];
// var sum3: string = studentNames[0] + studentNames[2];
// console.log(sum3);

// var studentNames: string[] = ["mubeen", "usman", ".Ali", "zain"];
// // console.log(studentNames);
// studentNames.splice(3, 0, "Ahsan");
// function username(num:string){
//     studentNames[2]=num
// }

// studentNames.push("talha");
// console.log(studentNames);

//end sy del krdy ga
// studentNames.pop();

//start sy del kr dy ga
// studentNames.shift();
//start wala hata kr or lgana h to
// studentNames.unshift();

//darmyan mn kuch add krna ho to
// studentNames.splice(2,2,"Ahsan");

//

var todos: string[] = [
  "Mubeen",
  "USMAN",
  "AD",
  "ALI",
  "AMMAR",
  "MUDSR",
  "SOHNA",
];
if (todos.length % 2 == 0) {
  todos.splice(3, 1);
} else {
  todos.splice(3, 2);
}
console.log(todos);
