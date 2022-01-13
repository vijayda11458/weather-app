
console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const MessageOne = document.querySelector('#MessageOne')
const MessageTwo = document.querySelector('#MessageTwo')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    MessageOne.textContent ="Loading........."
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                //console.log(data.error)
                MessageOne.textContent = (data.error)
                console.log(data.error)
                
            } else {
                // console.log(data.Location)
                // console.log(data.Climate)
                MessageOne.textContent = data.Location
                MessageTwo.textContent = data.Climate
            }
        })
    })
})