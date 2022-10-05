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

if (document.querySelectorAll('#messages li').length === undefined || document.querySelectorAll('#messages li').length == 0) {
  // DEBUG: 
  // Array of list items does not exist or is empty
  console.log("Hello sunshine!")
  // hide the section
  document.getElementById('messages').style.display = 'none';
}

// Get first element with name = `leave_message` and store it in a variable
let messageForm = document.querySelector('[name="leave_message"]');

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let message = e.target.message.value;
  console.log("name: " + e.target.name.value);
  console.log("email: " + e.target.email.value);
  console.log("message: " + e.target.message.value);

  // show the section
  document.getElementById('messages').style.display = 'block';

  let messageSection = document.querySelector('#messages');
  let messageList = messageSection.querySelector('ul');

  // Create a new list item (li) element and store it in a variable named newMessage
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message} </span>`;

  // Create a new <button> element and store it in a variable named removeButton
  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", (e) => {
    let entry = removeButton.parentNode;
    entry.remove();

    if (document.querySelectorAll('#messages li').length === undefined || document.querySelectorAll('#messages li').length == 0) {
      // DEBUG: 
      // array does not exist or is empty
      console.log("Hello moonlight!")
      // hide the section
      document.getElementById('messages').style.display = 'none';
    }

    // DEBUG: 
    console.log(entry);
    console.log(document.querySelectorAll('#messages li').length);
  });

  // Append the removeButton to the newMessage element
  newMessage.appendChild(removeButton);

  // Append the newMessage to the messageList element
  messageList.appendChild(newMessage);

  // DEBUG: If you do not expand it in the console in real-time, then it will show the current list
  console.log(messageList);

  // DEBUG: Display length of messages
  console.log(document.querySelectorAll('#messages li').length);

  // Clear the form
  messageForm.reset();
});