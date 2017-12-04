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
const MEKFYS_FALL_2007 = new Exam("Høst 2007", new Date("2007-12-11"), mekfys);
const MEKFYS_FALL_2008 = new Exam("Høst 2008", new Date("2008-12-11"), mekfys);
const MEKFYS_FALL_2009 = new Exam("Høst 2009", new Date("2009-12-18"), mekfys);
const MEKFYS_FALL_2010 = new Exam("Høst 2009", new Date("2010-12-16"), mekfys);

const exams = [
    MEKFYS_FALL_2006,
    MEKFYS_FALL_2007,
    MEKFYS_FALL_2008,
    MEKFYS_FALL_2009,
    MEKFYS_FALL_2010,
];

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
    {
        problemFileName: "mekfys_2007_1.png",
        answerFileName: "mekfys_2007_1_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2007_2.png",
        answerFileName: "mekfys_2007_2_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: E,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2007_3.png",
        answerFileName: "mekfys_2007_3_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2007_4.png",
        answerFileName: "mekfys_2007_4_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2007_5.png",
        answerFileName: "mekfys_2007_5_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2007_6.png",
        answerFileName: "mekfys_2007_6_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2007_7.png",
        answerFileName: "mekfys_2007_7_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2007_8.png",
        answerFileName: "mekfys_2007_8_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2007_9.png",
        answerFileName: "mekfys_2007_9_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2007_10.png",
        answerFileName: "mekfys_2007_10_LF.png",
        originExam: MEKFYS_FALL_2007,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_1.png",
        answerFileName: "mekfys_2008_1_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_2.png",
        answerFileName: "mekfys_2008_2_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_3.png",
        answerFileName: "mekfys_2008_3_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_4.png",
        answerFileName: "mekfys_2008_4_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_5.png",
        answerFileName: "mekfys_2008_5_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_6.png",
        answerFileName: "mekfys_2008_6_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_7.png",
        answerFileName: "mekfys_2008_7_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_8.png",
        answerFileName: "mekfys_2008_8_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: E,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_9.png",
        answerFileName: "mekfys_2008_9_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_10.png",
        answerFileName: "mekfys_2008_10_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2008_11.png",
        answerFileName: "mekfys_2008_11_LF.png",
        originExam: MEKFYS_FALL_2008,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_1.png",
        answerFileName: "mekfys_2009_1_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_2.png",
        answerFileName: "mekfys_2009_2_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_3.png",
        answerFileName: "mekfys_2009_3_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_4.png",
        answerFileName: "mekfys_2009_4_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: E,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_5.png",
        answerFileName: "mekfys_2009_5_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_6.png",
        answerFileName: "mekfys_2009_6_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_7.png",
        answerFileName: "mekfys_2009_7_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_8.png",
        answerFileName: "mekfys_2009_8_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_9.png",
        answerFileName: "mekfys_2009_9_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_10.png",
        answerFileName: "mekfys_2009_10_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2009_11.png",
        answerFileName: "mekfys_2009_11_LF.png",
        originExam: MEKFYS_FALL_2009,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_1.png",
        answerFileName: "mekfys_2010_1_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_2.png",
        answerFileName: "mekfys_2010_2_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_3.png",
        answerFileName: "mekfys_2010_3_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_4.png",
        answerFileName: "mekfys_2010_4_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_5.png",
        answerFileName: "mekfys_2010_5_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: D,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_6.png",
        answerFileName: "mekfys_2010_6_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_7.png",
        answerFileName: "mekfys_2010_7_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: E,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_8.png",
        answerFileName: "mekfys_2010_8_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: B,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_9.png",
        answerFileName: "mekfys_2010_9_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: C,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_10.png",
        answerFileName: "mekfys_2010_10_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: E,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
    {
        problemFileName: "mekfys_2010_11.png",
        answerFileName: "mekfys_2010_11_LF.png",
        originExam: MEKFYS_FALL_2010,
        answer: A,
        numberOfAlternatives: 5,
        category: mekanikk,
    },
];
