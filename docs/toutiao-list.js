(function(){
    // let e = document.createElement('div')
    // e.style.height = '100px'
    //
    // let btn = document.createElement('span')
    // btn.style.textAlign = 'center'
    // btn.style.color = 'white'
    // btn.style.backgroundColor = 'blue'
    // btn.style.display = 'inline-block'
    // btn.style.height = '80px'
    // btn.style.borderRadius = '40px'
    // btn.style.fontSize = '40px'
    // btn.style.lineHeight = '80px'
    // btn.style.padding = '0 40px'
    // btn.innerText = '三角兽'
    //
    // e.append(btn)
    //
    // document.querySelector('#pageletListContent > div.list_content > section:nth-child(1)').append(e)

    let findAfterEl = function(el, num = 4){
        let result = el
        for(let i = 0; i<num; i++){
            result = result.nextSibling
        }
        return result
    }

    let createSectionEl = function(){
        let s = document.createElement('section')
        let ss = {
            height: '279px',
            width: '100%',
            padding: '10px 0',
            overflowX: 'auto',
            overflowY: 'hidden',
        }
        Object.assign(s.style, ss)
        return s
    }

    let createWraperEl = function(){
        let wraper = document.createElement('div')
        Object.assign(wraper.style, {
            height: '100%',
            width: '400%',
        })
        return wraper
    }

    let createCardEl = function(){
        let card = document.createElement('div')
        Object.assign(card.style, {
            height: '100%',
            width: '70vw',
            borderRadius: '12px',
            background: 'linear-gradient(45deg, #0288d1 0%, #26c6da 100%)',
            float: 'left',
            marginRight: '20px'
        })
        return card
    }

    let s = createSectionEl()
    let wraper = createWraperEl()
    let card = createCardEl()

    s.appendChild(wraper)

    wraper.appendChild(card)
    wraper.appendChild(card.cloneNode(true))



    let touchNode = document.querySelector('#pageletListContent > div.list_content > section:nth-child(1)')
    let targetNode = findAfterEl(touchNode)
    let parentNode = targetNode.parentNode
    parentNode.insertBefore(s, targetNode)
}())
