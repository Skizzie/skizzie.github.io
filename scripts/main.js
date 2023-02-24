const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
    removeInput();
    await delay(150);
    new_line();
  }
})

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("Type 'help' to see more!");
  await delay(500);
  new_line();
}

 function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span1");
  const span2 = document.createElement("span2");
  const span3 = document.createElement("span3");
  p.setAttribute("class", "path")
  p.textContent = "user-PC";
  span2.textContent = "-skz.dev";
  span3.textContent = "$";
  p.appendChild(span1);
  p.appendChild(span2);
  p.appendChild(span3);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    createCode("projects", "My github page with my projects.");
    createCode("whoami", "Who am i and what do i do.");
    createCode("socials", "All my social networks.");
    createCode("clear", "Clears the terminal.");
  }

  else if(value === "sudo"){
    falseValue(value);
    createText(`command not found: ${value}`)
    createText("Type 'help' to see more!")
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  else if(value === "quit"){
    falseValue(value);
    createText(`command not found: ${value}`)
    createText("Type 'help' to see more!")
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  else if(value === "exit"){
    falseValue(value);
    createText(`command not found: ${value}`)
    createText("Type 'help' to see more!")
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/skizzie' target='_blank'><i class='fab fa-github white'></i> github.com/skizzie</a>")
  }
  else if(value === "whoami"){
    trueValue(value);
    createText("Hello, my name is Kamil H.")
    createText("I am a 22 years old life enjoyer, I speedrun videogames and I like coding. I discovered coding when I was 14 years old, and since then, I began my coding journey. Even though I learned the basics, I put this skill aside for a long time. I now try to develop my skill and become a better coder. I mainly code in <span class='blue'>Javascript, CSS<span class='white'> and I do<span class='blue'> HTML </span>")
  }
  else if(value === "socials"){
    trueValue(value);
    createText("<a href='https://reddit.com/user/Skizzie_/' target='_blank'><i class='fab fa-reddit white'></i> reddit.com/skizzie</a>")
    createText("<a href='https://www.speedrun.com/Skizzie/' target='_blank'><i class='fab fa-reddit white'></i> speedrun.com/skizzie</a>")
    createText("<a href='https://www.twitch.tv/Skizziespeedruns/' target='_blank'><i class='fab fa-reddit white'></i> twitch.tv/skizziespeedruns</a>")
    createText("<a href='https://www.twitter.com/skizziexd' target='_blank'><i class='fab fa-reddit white'></i> twitter.com/skizziexd</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
    createText("Type 'help' to see more!")
  }
}
function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const message = document.createElement("h2");
  message.setAttribute("class", "sucess")
  message.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(message);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const message = document.createElement("h2");
  message.setAttribute("class", "error")
  message.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(message);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();