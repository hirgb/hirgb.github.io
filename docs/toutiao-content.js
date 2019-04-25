(function() {

    let href = window.location.href
    if (href.indexOf(`https://m.toutiao.com/i`) !== 0) {
        return
    }

    let checkLocalStorage = function() {
        if (!window.localStorage) {
            return false
        }
        return true
    }

    let getCard = function(query) {
        window.fetch(`https://bridge.sanjiaoshou.net/web/term/getcardcommon`,
            {
                body: JSON.stringify({query}), // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                referrer: 'no-referrer', // *client, no-referrer
            }
        ).then(function(response) {
            response.json().then((res) => {
                if (!res || !res.data.rtnCode) {
                    window.localStorage.removeItem('terms')
                    return
                }
                terms = res.data.data.result_list[0].term_list
                customInfoList = res.data.data.result_list[0].custom_info_list
                terms = [...terms, ...customInfoList]
                terms.forEach((i, index) => {
                    let term
                    if (i.ner === 'FILM' && i.film_list) {
                        term = {
                            title: i.film_list[0].name,
                            url: i.film_list[0].url,
                            pic: i.film_list[0].posturl,
                            ner: i.ner,
                            summary: i.film_list[0].summary,
                        }
                    } else if (i.ner === 'PERSON_NAME' && i.person_list) {
                        term = {
                            title: i.person_list[0].name,
                            url: i.person_list[0].url,
                            pic: i.person_list[0].display_img,
                            ner: i.ner,
                            summary: i.person_list[0].summary,
                        }
                    } else if (i.source = 'TRIO_SEARCH') {
                        term = {
                            title: i.title,
                            url: i.url,
                            pic: i.img_url || i.thumbUrl,
                            ner: 'TRIO_SEARCH',
                            summary: '',
                        }
                    }

                    if (term) {
                        if (index === 0) {
                            let terms = [term]
                            window.localStorage.setItem('terms', JSON.stringify(terms))
                        } else {
                            let terms = window.localStorage.getItem('terms')
                            if (terms) {
                                terms = JSON.parse(terms)
                                exist = terms.some(i => i.title === term.title)
                                if (!exist) {
                                    terms.push(term)
                                    window.localStorage.setItem('terms', JSON.stringify(terms))
                                }
                            } else {
                                let terms = [term]
                                window.localStorage.setItem('terms', JSON.stringify(terms))
                            }
                        }
                    }
                })
            })
        })
    }

    if (!checkLocalStorage()) {
        throw new Error('Your browser is not support localStorage')
    }

    let t = []
    window.localStorage.setItem('terms', JSON.stringify(t))

    let content = document.querySelector('#article_content').innerText
    // let content = document.querySelector('#imedia-article').innerText
    getCard(content.replace(/\n/g, ''))
}())
