let current = 0

let xp = Number(localStorage.getItem("xp") || 0)
let streak = Number(localStorage.getItem("streak") || 1)

document.getElementById("xp").innerText = xp
document.getElementById("streak").innerText = streak

function loadQuestion(){

let q = exercises[current]

document.getElementById("question").innerText = q.question

let optionsHTML = ""

q.options.forEach((option,index)=>{

optionsHTML += `
<div class="option" onclick="checkAnswer(${index})">
${option}
</div>
`

})

document.getElementById("options").innerHTML = optionsHTML

}

function checkAnswer(choice){

let q = exercises[current]

if(choice === q.answer){

xp += 10

localStorage.setItem("xp",xp)

document.getElementById("result").innerText =
"Correct! +10 XP"

document.getElementById("xp").innerText = xp

}

else{

document.getElementById("result").innerText =
"Try again"

}

}

function nextQuestion(){

current = (current + 1) % exercises.length

document.getElementById("result").innerText = ""

loadQuestion()

}

loadQuestion()
