(function() {
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

    let stopDefault = function(e) {
        if (e && e.preventDefault) {
            e.preventDefault()
        } else {
            window.event.returnValue = false;
        }
        return false;
    }

    let findTouchNode = function(path) {
        let result = path.find(i => {
            if (i.nodeName === 'SECTION') {
                return true
            }
        })
        return result
    }

    let findAfterEl = function(el, num = 4) {
        let result = el
        for (let i = 0; i < num; i++) {
            result = result.nextSibling
        }
        return result
    }

    let createSectionEl = function() {
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

    let createWraperEl = function() {
        let wraper = document.createElement('div')
        Object.assign(wraper.style, {
            height: '100%',
            width: '400%',
        })
        return wraper
    }

    let createCardEl = function() {
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

    let createImg = function(src){
        let img = document.createElement('img')
        img.src = src
        img.width = '300px'
        return img
    }

    document.addEventListener('touchstart', (e) => {
        let s = createSectionEl()
        let wraper = createWraperEl()

        let terms = window.localStorage.getItem('terms')
        if (terms) {
            let card = JSON.parse(terms)
            let cardCount = card.length
            wraper.style.width = `calc(${cardCount*70}vw + ${cardCount * 20}px)`
            card.forEach(i => {
                let img = createImg(i.pic)
                let card = createCardEl()
                card.appendChild(img)
                wraper.appendChild(card)
            })
            s.appendChild(wraper)
            let touchNode = findTouchNode(e.path)
            if (touchNode) {
                let targetNode = findAfterEl(touchNode)
                let parentNode = targetNode.parentNode
                parentNode.insertBefore(s, targetNode)
            }
            window.localStorage.removeItem('terms')
        }
    })


}())
