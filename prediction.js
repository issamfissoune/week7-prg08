const nn = ml5.neuralNetwork({task: 'regression'})
nn.load('./model/model.json', modelLoaded)

async function modelLoaded() {
    console.log("the model was loaded!")

}


let button = document.getElementById('predict')
button.addEventListener('click', ev => predict(ev))

async function predict(ev) {
    let skillsFilled= document.getElementById('skills').value;
    let paceFilled = document.getElementById('pace').value;
    let shootingFilled = document.getElementById('shooting').value;
    let passingFilled = document.getElementById('passing').value;
    let dribblingFilled = document.getElementById('dribbling').value;
    let defendingFilled = document.getElementById('defending').value;
    let physicalityFilled = document.getElementById('physicality').value;
    let InGameStatsFilled = document.getElementById('in_game_Stats').value;


    const result = await nn.predict({
        skills: parseInt(skillsFilled),
        pace:parseInt(paceFilled),
        shooting: parseInt(shootingFilled),
        passing: parseInt(passingFilled),
        dribbling: parseInt(dribblingFilled),
        defending: parseInt(defendingFilled),
        physicality: parseInt(physicalityFilled),
        in_game_stats:parseInt(InGameStatsFilled)
    })
    console.log(result)

    let endResult = document.getElementById('result')
    endResult.innerHTML = `De rating is: ${result[0].rating}`;
}