const questionsArray = [
    {
        id: 1,
        question: 'What does CSS stand for?',
        answers: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
        correct: 2,
       
    },

    {
        id: 2,
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        answers: ['In the <head> section', 'In the <body> section', 'At the end of the document', 'You can\'t refer to an external style sheet'],
        correct: 0,
       
    },    
    {
        id: 3,
        question: 'Which HTML tag is used to define an internal style sheet?',
        answers: ['<style>', '<script>', '<headStyle>', '<css>'],
        correct: 0,
        
    },    
    {
        id: 4,
        question: 'Which HTML attribute is used to define inline styles?',
        answers: ['class', 'style', 'font', 'styles'],
        correct: 1,
        
    },
    {
        id: 5,
        question: 'Which is the correct CSS syntax?',
        answers: ['{body:color=black;}', '{body;color:black;}', 'body:color=black;', 'body {color: black;}'],
        correct: 3,
        
    },
    {
        id: 6,
        question: 'How do you insert a comment in a CSS file?',
        answers: ['\' this is a comment', '/* this is a comment */', '// this is a comment', '// this is a comment //'],
        correct: 1,
       
    },
    {
        id: 7,
        question: 'Which property is used to change the background color?',
        answers: ['color', 'bgcolor', 'background-color', 'bgColor'],
        correct: 2,
        
    },
    {
        id: 8,
        question: 'How do you add a background color for all <h1> elements?',
        answers: ['all.h1 {background-color:#FFFFFF;}', 'h1.setAll {background-color:#FFFFFF;}', 'h1.all {background-color:#FFFFFF;}', 'h1 {background-color:#FFFFFF;}'],
        correct: 3,
        
    }
]

export default questionsArray