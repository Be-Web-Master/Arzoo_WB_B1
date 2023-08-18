const studentsMarks = [
    [80, 70, 55],
    [45, 90, 75],
    [70, 60, 65]
];

function calculateQuizResults(studentsMarks){
    // let seperatemarks = studentsMarks.map((num)=>[num]);
    let total =0;
    for(let i=0;i<=studentsMarks.length;i++){
        for(let j=0;j<=studentsMarks[i].length;j++){
            total+=studentsMarks[j]
        }
    }
}
calculateQuizResults(studentsMarks)