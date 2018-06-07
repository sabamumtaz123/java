let customerAsk1 = "hi";
let customerAsk2 =  "hello";
let customerAsk3 = "hey";
let customerAsk4 = "salam";
let customerAsk5 = "Is Uit Open Today";
let customerAsk6 = "What are the timings of today's class";
let customerAsk7 = "Where will be the class conducted";
let AnythingElse;

let customerAsk = AnythingElse;

if (customerAsk == customerAsk1 || customerAsk == customerAsk2 || customerAsk == customerAsk3 || customerAsk == customerAsk4){
    console.log ("Thank you for calling TechKaro Customer Service. How may I help you?");
} else if (customerAsk == customerAsk5) {
    console.log ("Yes");
} else if (customerAsk == customerAsk6) {
    console.log ("1:30-5:30");
} else if (customerAsk == customerAsk7) {
    console.log ("At CL-1, Usman Institute");
} else {
     console.log ("Sorry, I do not understand your question");
}
