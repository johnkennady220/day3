let employes=[{person:"john",age:"22",company:"Guvi"},
              {person:"alex",age:"24",company:"Guvi Geek"},
              {person:"jaya",age:"44",company:"Guvi Geek Networks"}]
//for loop:
for (let i=0;i<employes.length;i++){
    console.log(`
Name:${employes[i].person}
age:${employes[i].age}
company:${employes[i].company}`)
}

//for in loop:
for(let index in employes){
    console.log(`
Name:${employes[index].person}
age:${employes[index].age}
company:${employes[index].company}`)
}

//for of loop:
for(let emp of employes){
    console.log(`
Name:${emp.person}
age:${emp.age}
company:${emp.company}`)

//forEach
employes.forEach((emp)=>{
    console.log(`
Name:${emp.person}
age:${emp.age}
company:${emp.company}`)
})

// Output for all(for, for in, for of, forEach) loops are same given below:
Name:john
age:22
company:Guvi

Name:alex
age:24
company: Guvi Geek

Name:jaya
age:44
company:Guvi Geek Networks