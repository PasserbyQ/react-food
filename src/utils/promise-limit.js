
const urls = [
    {
        info: 'link1',
        time: 300
    },
    {
        info: 'link2',
        time: 500
    },
    {
        info: 'link3',
        time: 100
    },
    {
        info: 'link4',
        time: 200
    },
    {
        info: 'link5',
        time: 1200
    },
    {
        info: 'link6',
        time: 800
    }
]

function load(url) {
    return new Promise((resolve, reject) => {
        console.log(url.info + 'start');
        setTimeout(() => {
            console.log(url.info + 'end');
            resolve()
        }, url.time);
    })
}


function limitLoad(urls, handler, limit) {
    const sequence = [].concat(urls)
    let promises = []

    promises = sequence.splice(0, limit).map((url, index) => {
        return handler(url).then(() => {
            return index
        })
    })
    let p = Promise.race(promises)
    for (let index = 0; index < sequence.length; index++) {
        p = p.then(res => {
            console.log('promises', index);
            promises[res] = handler(sequence[index]).then(() => {
                return res
            })
            return Promise.race(promises)
        })
    }
}


limitLoad(urls, load, 3)
