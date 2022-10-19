const resume=[{
    Personal_detail:{
            First_name: "john",
            Last_name:"kennady",
            Date_of_birth:"29/10/1999",
            age:23,
            Language_known:"Tamil and English",
            Gender: "Male",
            email:"johnkennady220@gmail.com",
            phone:"7418659668",
            location:{
                Door_no: 3_20,
                street: "semathamam kovil street",
                District:"chennai",
                State:"Tamilnadu",
                Country:"India"
            }
    },education:{
        university:{
            Name:"Government Arts College for Men (Autonomous)",
            Location:"Nandanam",
            District:"chennai",
            Year_of_passedout: 2022,
            percentage: "56%"
        },Highersecondaryschool:{
            Name:"St. Matthias Anglo Indian Higher Secondary School",
            Location:"vepery",
            District:"chennai",
            Year_of_passedout: 2018,
        }
    },area_of_interest:["Travelling",],
    soft_skills:[,"Python(basics)","Excel",],
    Experience:["fresher"]
    }]
    console.log(resume)
    
    for(let data of resume){
        console.log(`
    Personal Data:
             Name:              ${data.Personal_detail.First_name}
             Date of birth:     ${data.Personal_detail.Date_of_birth}
             Age:               ${data.Personal_detail.age}
             Gender:            ${data.Personal_detail.Gender}
             Email id:          ${data.Personal_detail.email}
             Phone number:      ${data.Personal_detail.phone}
    Educational Detials:
             
        Higher Secondary school:
             Name :             ${data.education.Highersecondaryschool.Name}
             Location :         ${data.education.Highersecondaryschool.Location}
             District :         ${data.education.Highersecondaryschool.District}
             Year of passedout :${data.education.Highersecondaryschool.Year_of_passedout}    
        university:
             Name :             ${data.education.Technical_Education.Name_of_the_course}
             College name:      ${data.education.Technical_Education.College}
             Year of passed :   ${data.education.Technical_Education.Year_of_passedout}
             percentage :       ${data.education.Technical_Education.percentage} 
    Experience:
        
    Area of interest:
             *                  ${data.area_of_interest}
   
    Soft skills:
             *                  ${data.soft_skills[0]}
             *                  ${data.soft_skills[1]}
    `)}