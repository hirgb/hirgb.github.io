(function() {
    window.setTimeout(function(){
        let href = window.location.href
        if (href.indexOf(`https://m.toutiao.com/i`) === 0) {
            return
        }

        let ratio = window.devicePixelRatio

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
                    // if (i.nodeName === 'A') {
                        return true
                    }
                })
                return result
            }

            let findAfterEl = function(el, num = 1) {
                let result = el
                for (let i = 0; i < num; i++) {
                    result = result.nextSibling
                }
                return result
            }

            let createSectionEl = function() {
                let s = document.createElement('section') //toutiao
                // let s = document.createElement('a') //yidian
                let ss = {
                    display: 'block',
                    height: 300 / ratio + 'px',
                    width: '100%',
                    padding: 10 / ratio + 'px 0',
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

            let createCardEl = function(imgSrc, title, url, intro) {
                let card = document.createElement('div')
                Object.assign(card.style, {
                    height: '100%',
                    width: '70vw',
                    borderRadius: 12/ratio + 'px',
                    background: 'linear-gradient(45deg, #0288d1 0%, #26c6da 100%)',
                    float: 'left',
                    marginRight: 20 / ratio + 'px',
                    overflow: 'hidden',
                })
                card.innerHTML = `
                <a style="display: block; width: 100%; height: 100%" href="${url}">
                <img src="${imgSrc}" style="display: block; float: left; width: 25%; height: 100%; border: none" />
                <div style="float: left; width: 75%; height: 100%">
                <div style="height: ${80/ratio}px; font-size: ${48/ratio}px; line-height: ${80/ratio}px; color: #fff; padding: 0 ${20/ratio}px; white-space: nowrap; text-overflow: ellipsis;">${title}</div>
                <p style="height: calc(100% - ${80/ratio}px); font-size: ${40/ratio}px; line-height: ${50/ratio}px; color: #ffffffbb; padding: 0 ${20/ratio}px; text-overflow: ellipsis; overflow: hidden">${intro}</p>
                </div>
                </a>
                `
                // <div style="height: 80px; font-size: 40px; line-height: 80px; color: #ffffffbb; padding: 0 20px; white-space: nowrap; text-align: right">查看详情>></div>
                return card
            }

            // document.addEventListener('touchstart', (e) => {
            //     let s = createSectionEl()
            //     let wraper = createWraperEl()
            //
            //     let terms = window.localStorage.getItem('terms')
            //     // if (terms && JSON.parse(terms).length) {
            //     if (true) {
            //         // let card = JSON.parse(terms)
            //         // let cardCount = card.length
            //         // wraper.style.width = `calc(${cardCount*70}vw + ${cardCount * 20}px)`
            //         // card.forEach(i => {
            //         //     let card = createCardEl(i.pic, i.title, i.url, i.summary)
            //         //     wraper.appendChild(card)
            //         // })
            //
            //         wraper.appendChild(createCardEl('http://hirgb.com', '1234567', '', 'this is a test card'))
            //
            //         s.appendChild(wraper)
            //         let touchNode = findTouchNode(e.path)
            //         if (touchNode) {
            //             let targetNode = findAfterEl(touchNode)
            //             let parentNode = targetNode.parentNode
            //             parentNode.insertBefore(s, targetNode)
            //         }
            //         // window.localStorage.removeItem('terms')
            //     }
            // })
            //
            let s = createSectionEl()
            let wraper = createWraperEl()
            wraper.appendChild(createCardEl('http://hirgb.com', '1234567', '#', 'this is a test card'))

            s.appendChild(wraper)
            let nodeY = window.localStorage.getItem('nodeY')
            if (nodeY) {
                let sections = document.querySelectorAll('#pageletListContent > div.list_content > section')
                nodeY = parseInt(nodeY)
                y = 0
                sections.forEach(i => {
                    let h = window.getComputedStyle(i).height
                    h = parseInt(h)
                    console.log(h);
                    y += h
                    if (y > nodeY) {
                        i.parentNode.insertBefore(s, i)
                    }
                })
                window.localStorage.removeItem('nodeY')
            }

            document.addEventListener('click', (e) => {
                // e.preventDefault()
                // console.log(e.pageY);
                // console.log(e.pageY);
                // let y = e.pageY
                // let touchNode = findTouchNode(e.path)
                // let parentNode = targetNode.parentNode
                // let index = 4
                // parentNode.children.forEach((i, idx) => {
                //     if (i === touchNode) {
                //         index = idx
                //     }
                // })
                window.localStorage.setItem('nodeY', e.pageY)
                // let terms = window.localStorage.getItem('terms')
                // if (terms && JSON.parse(terms).length) {
                    if (true) {
                        // let card = JSON.parse(terms)
                        // let cardCount = card.length
                        // wraper.style.width = `calc(${cardCount*70}vw + ${cardCount * 20}px)`
                        // card.forEach(i => {
                        //     let card = createCardEl(i.pic, i.title, i.url, i.summary)
                        //     wraper.appendChild(card)
                        // })

                        // wraper.appendChild(createCardEl('http://hirgb.com', '1234567', '', 'this is a test card'))
                        //
                        // s.appendChild(wraper)
                        // let parentNode = document.querySelector('#pageletListContent > div.list_content')
                        // parentNode.insertBefore(s, parentNode.children[4])
                        // window.localStorage.removeItem('terms')
                    }
            })
    }, 500)
}())
