(function() {
    let checkLocalStorage = function() {
        if (!window.localStorage) {
            return false
        }
        return true
    }

    let segment = function(query) {
        window.fetch(`https://bridge.sanjiaoshou.net/web/term/segment`, {
                body: JSON.stringify({query}), // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                referrer: 'no-referrer', // *client, no-referrer
            }).then(function(response) {
                response.json().then((data) => {
                    if (data.code) {
                        let terms = data.data
                        if (terms.length) {
                            // let nluTerms = []
                            // terms.forEach(i => {
                            //     if (i.token.length > 3 || i.ner != 'O') {
                            //         nluTerms.push({
                            //             word: i.token,
                            //             ner: i.ner,
                            //             offset: 0,
                            //         })
                            //     }
                            // })
                            // getCard(nluTerms)
                            terms.forEach((i, index) => {
                                if (index === 0) {
                                    getCard(i.token, i.ner, true)
                                } else {
                                    getCard(i.token, i.ner)
                                }
                            })
                        }
                    } else {
                        console.log('there is no segment');
                    }
                })
            })
            .then(function(myJson) {
                console.log(myJson);
            })
    }

    let getCard = function(word, ner, reset = false) {
        if (word.length > 3 || ['PERSON_NAME', 'BOOK', 'TV', 'FILM'].includes(ner)){
            window.fetch(`https://bridge.sanjiaoshou.net/web/term/getcardcommon?word=${word}&ner=${ner}`)
            .then(function(response) {
                response.json().then((res) => {
                    if (!res) {
                        // console.log(data.data);
                        return
                    }
                    console.log(res.data);
                    let item = {
                        title: res.data.result_list[0].custom_info_list[0].data.title.content,
                        url: res.data.result_list[0].custom_info_list[0].data.urls[0].h5Url,
                        pic: res.data.result_list[0].custom_info_list[0].data.pics[0].url,
                        ner: res.data.result_list[0].custom_info_list[0].ref.ner,
                    }
                    if (reset) {
                        let terms = [item]
                        window.localStorage.setItem('terms', JSON.stringify(terms))
                    } else {
                        let terms = window.localStorage.getItem('terms')
                        if (terms) {
                            terms = JSON.parse(terms)
                            exist = terms.some(i => i.title === item.title)
                            if (!exist) {
                                terms.push(item)
                                window.localStorage.setItem('terms', JSON.stringify(terms))
                            }
                        } else {
                            let terms = [item]
                            window.localStorage.setItem('terms', JSON.stringify(terms))
                        }
                    }
                })
            })
        }
    }
    // let getCard = function(nluTerms) {
    //     window.fetch(`https://bridge.sanjiaoshou.net/web/term/getcardcommon`, {
    //         body: JSON.stringify({nluTerms}), // must match 'Content-Type' header
    //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //         headers: {
    //             'user-agent': 'Mozilla/4.0 MDN Example',
    //             'content-type': 'application/json'
    //         },
    //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'cors', // no-cors, cors, *same-origin
    //         referrer: 'no-referrer', // *client, no-referrer
    //     }).then(function(response) {
    //             response.json().then((data) => {
    //                 console.log(data);
    //             })
    //         })
    //         .then(function(myJson) {
    //             console.log(myJson);
    //         })
    // }

    if (!checkLocalStorage()) {
        throw new Error('Your browser is not support localStorage')
    }

    let t = []
    window.localStorage.setItem('terms', JSON.stringify(t))

    // let content = document.querySelector('#article_content').innerText
    let content = document.querySelector('#imedia-article').innerText
    segment(content)
}())
