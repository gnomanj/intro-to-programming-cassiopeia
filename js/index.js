const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `Luis Perez &#169;${thisYear}`;
footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', 'PowerShell']
const skillSection = document.querySelector('#skills');
const skillList = skillSection.querySelector('ul');
for (let i=0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillList.appendChild(skill);
}