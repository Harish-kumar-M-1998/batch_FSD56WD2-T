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

for(let x in harish_resume){
    console.log(x.toUpperCase(),':',harish_resume[x])
}



