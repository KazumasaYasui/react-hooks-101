// # POST
// action = {
//   type: 'CREATE_EVENT',
//   title: 'タイトルNew',
//   body: 'ボディNew'
// }
//
// # before
// state = []
// # after
// state = [
//     { id: 1, title: 'タイトルNew', body: 'ボディNew' }
// ]
//
// # before
// state = [
//     { id: 1, title: 'タイトル1', body: 'ボディ1' },
//     { id: 2, title: 'タイトル2', body: 'ボディ2' },
//     { id: 3, title: 'タイトル3', body: 'ボディ3' }
// ]
// # after
// state = [
//     { id: 1, title: 'タイトル1', body: 'ボディ1' },
//     { id: 2, title: 'タイトル2', body: 'ボディ2' },
//     { id: 3, title: 'タイトル3', body: 'ボディ3' },
//     { id: 4, title: 'タイトルNew', body: 'ボディNew' }
// ]


const events = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length
            let id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id, ...event }]
        case 'DELETE_EVENT':
            return state.filter(event => event.id !== action.id)
        case 'DELETE_ALL_EVENT':
            return []
        default:
            return state
    }
}

export default events
