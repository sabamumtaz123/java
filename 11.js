let totalMarks = 100;
let studentMarks = 39;

if (studentMarks >= 91 && studentMarks <= totalMarks) {
    console.log ("Grade A+");
} else if (studentMarks >= 86 && studentMarks <= 90){
    console.log ("Grade A");
} else if (studentMarks >= 80 && studentMarks <= 85){
    console.log ("Grade A-"); 
} else if (studentMarks >= 70 && studentMarks <= 79){
    console.log ("Grade B");     
} else if (studentMarks >= 60 && studentMarks <= 69){
    console.log ("GRADE C");
} else if (studentMarks >= 50 && studentMarks <= 59){
    console.log ("GRADE D");
} else if (studentMarks >= 40 && studentMarks <= 49){
    console.log ("GRADE E");
} else {
    console.log ("GRADE F");
}