function Subject(name, code) {
    this.name = name;
    this.code = code;
}

function Exam(name, date, subject) {
    this.name = name;
    this.date = date;
    this.subject = subject;
}

// Alternatives
const A = 0;
const B = 1;
const C = 2;
const D = 3;
const E = 4;

const alternatives = ["A", "B", "C", "D", "E"];

// Subjects
const mekfys = new Subject("Mekanisk fysikk", "FY1001");
const tfy4115 = new Subject("Fysikk", "TFY4115");

const subjects = [mekfys, tfy4115];

// Exams
const MEKFYS_FALL_2006 = new Exam("Høst 2006", new Date("2006-12-08"), mekfys);

const exams = [MEKFYS_FALL_2006];

// Categories
const mekanikk = "Mekanikk";
const termo = "Termisk fysikk";

var problems = [
    {
        problemFileName: "mekfys_2006_1.png",
        answerFileName: "mekfys_2006_1_LF.png",
        originExam: MEKFYS_FALL_2006,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2006_2.png",
        answerFileName: "mekfys_2006_2_LF.png",
        originExam: MEKFYS_FALL_2006,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2006_3.png",
        answerFileName: "mekfys_2006_3_LF.png",
        originExam: MEKFYS_FALL_2006,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2006_4.png",
        answerFileName: "mekfys_2006_4_LF.png",
        originExam: MEKFYS_FALL_2006,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2006_5.png",
        answerFileName: "mekfys_2006_5_LF.png",
        originExam: MEKFYS_FALL_2006,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2006_6.png",
        answerFileName: "mekfys_2006_6_LF.png",
        originExam: MEKFYS_FALL_2006,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2006_7.png",
        answerFileName: "mekfys_2006_7_LF.png",
        originExam: MEKFYS_FALL_2006,
        answer: E,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2006_8.png",
        answerFileName: "mekfys_2006_8_LF.png",
        originExam: MEKFYS_FALL_2006,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2006_9.png",
        answerFileName: "mekfys_2006_9_LF.png",
        originExam: MEKFYS_FALL_2006,
        answer: E,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
];
