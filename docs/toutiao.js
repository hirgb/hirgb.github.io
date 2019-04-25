(function(){
    let e = document.createElement('div')
    e.style.height = '80px'
    e.style.backgroundColor = '#00000020'

    let btn = document.createElement('span')
    btn.style.textAlign = 'center'
    btn.style.color = 'white'
    btn.style.backgroundColor = 'blue'
    btn.style.display = 'inline-block'
    btn.style.height = '80px'
    btn.style.borderRadius = '40px'
    btn.innerText = '三角兽'

    e.append(btn)

    document.querySelector('#pageletListContent > div.list_content > section:nth-child(1)').append(e)
}())





// let startTime, endTime
// document.addEventListener('mousedown', ()=>{
//     startTime = new Date().getTime()
// })
//
// document.addEventListener('mouseup', ()=>{
//     endTime = new Date().getTime()
//     console.log(startTime, endTime)
// })
