const initState = {
  projects: [
    {id: '1', title: 'Help me find Peach', content: 'blah blah blah'},
    {id: '2', title: 'Connect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'Egg hunt with Yoshi', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
  return state;
}

export default projectReducer;