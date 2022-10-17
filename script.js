// import data from 'data.js';



// Класс Student
class Student {
    constructor(fullName, point){
        this.point= point;
        this.fullName =fullName;
    }
    renderHeader(){
      const tr = document.createElement('tr');
      tr.innerHTML =`
    <th>ФИО/Дата</th>
    <th>29.04</th>
    <th>30.04</th>
    <th>01.05</th>
    <th>02.05</th>
    <th>03.04</th>
    <th>04.04</th>
    <th>05.05</th>
    <th>06.05</th>
    <th>07.05</th>
    <th>08.05</th>
    <th>09.05</th>
      `  
      document.querySelector('table').appendChild(tr)
    }
   
    renderTable(){
        const tr = document.createElement('tr');
        tr.innerHTML =`
      <td>${this.fullName}</td>
      <td>${this.point[0]}</td>
      <td>${this.point[1]}</td>
      <td>${this.point[2]}</td>
      <td>${this.point[3]}</td>
      <td>${this.point[4]}</td>
      <td>${this.point[5]}</td>
      <td>${this.point[6]}</td>
      <td>${this.point[7]}</td>
      <td>${this.point[8]}</td>
      <td>${this.point[9]}</td>
      <td>${this.point[10]}</dh>
        `  
        document.querySelector('table').appendChild(tr)
    }
    clearTable(){
        document.querySelector('table').innerHTML =''  
    }
} 


function showGroupOne(){
new Student().clearTable();
new Student().renderHeader();
new Student(data[0].fullName, data[0].object_1).renderTable();
new Student(data[1].fullName, data[1].object_1).renderTable(); 
new Student(data[2].fullName, data[2].object_1).renderTable(); 
}

function showGroupTwo(){
    new Student().clearTable();
    new Student().renderHeader();
    new Student(data[3].fullName, data[3].object_1).renderTable();
    new Student(data[4].fullName, data[4].object_1).renderTable(); 
    new Student(data[5].fullName, data[5].object_1).renderTable(); 
    }
function showGroupThree(){
        new Student().clearTable();
        new Student().renderHeader();
        new Student(data[6].fullName, data[6].object_1).renderTable();
        new Student(data[7].fullName, data[7].object_1).renderTable(); 
        new Student(data[8].fullName, data[8].object_1).renderTable(); 
        }
    
        
function showObjectOne(){
    new Student().clearTable();
    new Student().renderHeader();
    new Student(data[0].fullName, data[0].object_1).renderTable();
    new Student(data[1].fullName, data[1].object_1).renderTable(); 
    new Student(data[2].fullName, data[2].object_1).renderTable();
    new Student(data[3].fullName, data[3].object_1).renderTable();
    new Student(data[4].fullName, data[4].object_1).renderTable(); 
    new Student(data[5].fullName, data[5].object_1).renderTable();
    new Student(data[6].fullName, data[6].object_1).renderTable();
    new Student(data[7].fullName, data[7].object_1).renderTable(); 
    new Student(data[8].fullName, data[8].object_1).renderTable();  
}
function showObjectTwo(){
    new Student().clearTable();
    new Student().renderHeader();
    new Student(data[0].fullName, data[0].object_2).renderTable();
    new Student(data[1].fullName, data[1].object_2).renderTable(); 
    new Student(data[2].fullName, data[2].object_2).renderTable();
    new Student(data[3].fullName, data[3].object_2).renderTable();
    new Student(data[4].fullName, data[4].object_2).renderTable(); 
    new Student(data[5].fullName, data[5].object_2).renderTable();
    new Student(data[6].fullName, data[6].object_2).renderTable();
    new Student(data[7].fullName, data[7].object_2).renderTable(); 
    new Student(data[8].fullName, data[8].object_2).renderTable();  
}
function showObjectThree(){
    new Student().clearTable();
    new Student().renderHeader();
    new Student(data[0].fullName, data[0].object_3).renderTable();
    new Student(data[1].fullName, data[1].object_3).renderTable(); 
    new Student(data[2].fullName, data[2].object_3).renderTable();
    new Student(data[3].fullName, data[3].object_3).renderTable();
    new Student(data[4].fullName, data[4].object_3).renderTable(); 
    new Student(data[5].fullName, data[5].object_3).renderTable();
    new Student(data[6].fullName, data[6].object_3).renderTable();
    new Student(data[7].fullName, data[7].object_3).renderTable(); 
    new Student(data[8].fullName, data[8].object_3).renderTable();  
}
    showGroupOne()