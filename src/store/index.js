

const createStore = (reducer) => {
    let list = []
    let state = reducer()

    const subscribe = (cb) => {
        list.push(cb)
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        list.forEach(cb => {
            cb && cb()
        });
    }

    const getState = () => {
        return state
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}


const connect = (cb, obj) => {
    const value = cb()

    return (Component) => {
        return (props) => {
            return <div>
                <Component {...value} {...obj} />
            </div>
        }
    }
}

// connect(() => {
//     return {
//         a: 1
//     }
// }, {
//     b() { }
// })()