let scoreMath = 100;
let scoreEnglish = 15;
let scoreComputer = 60;

if (
    (maths > 50 && english > 50 && computerSkills > 50) || 
    (maths === 100 || english === 100 || computerSkills === 100)
) {
    console.log('Congratulations! You have passed the TechKaro Admission Test!');
} else if ((maths > 50 && english > 50) || computerSkills > 80) {
    console.log("You have also qualified!");
} else {
    console.log("Sorry! Please try again next year!");    
}