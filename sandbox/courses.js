// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    catalogYear: "2018",
    toFind: 1,
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    findSection: function findSection(toFind) {
        return this.sections.find(function(section) {
            section.sectionNum == toFind;
        })
    },
    enrollStudent: function(sectionNum) {
        // find the right section in this.sections
        const theSection = this.findSection(sectionNum);
        // add 1 to the enrollment
        theSection.enrolled++;
    }
  };

function setCourseName(course) {
    document.querySelector('#courseName').textContent = course.name;
    document.querySelector('#courseCode').textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>`;
}

function renderSections(sections) {
const sectionsElement = document.querySelector('#sections');
const sectionsHtml = sections.map(sectionTemplate);
sectionsElement.innerHTML = sectionsHtml.join('');
}


document.querySelector('#enrollStudent').addEventListener('click', function(e){
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.enrollStudent(sectionNum);
    renderSections(aCourse.sections);
});

setCourseName(aCourse.name);
renderSections(aCourse.sections);