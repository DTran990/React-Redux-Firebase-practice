const initState ={
    projects: [
        {id: '1', title: 'dasdasdas', content:'asdkasdasdasdasdasd'},
        {id: '2', title: 'dasdasdas', content:'asdkasdasdasdasdasd'},
        {id: '3', title: 'dasdasdas', content:'asdkasdasdasdasdasd'}
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer