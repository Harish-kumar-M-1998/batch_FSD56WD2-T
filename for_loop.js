let harish_resume = {
    name: "Harish kumar M",
    age: 25,
    degree: 'mechanical engineering',
    year: 2019,
    college_name : 'Dr.NGPIT',
    course: " MERN FSD",
    skills : {
        technical :['c','c++','java'],
        soft : ['communication','behaviour']}
}
let entries =Object.entries(harish_resume)


for (let i=0;i<entries.length;i++){
    let entry = (entries[i]);
    console.log(entry[0].toUpperCase(),':',entry[1]);

}

