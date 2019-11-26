const state = {
  componentsStates: {
    info: false,
    profile: false,
    experience: false,
    proyects: true,
    skills: false
  }
}

// getters
const getters = {
  components: state => {
    return state.componentsStates
  }
}


// actions  api data
const actions = {

}

// mutations
const mutations = {
  change(state, component) {
    switch (component) {
      case 'profile':
        state.componentsStates.profile = true
        state.componentsStates.skills = false
        state.componentsStates.info = false
        state.componentsStates.proyects = false
        state.componentsStates.experience = false
        break;
      case 'info':
        state.componentsStates.profile = false
        state.componentsStates.skills = false
        state.componentsStates.info = true
        state.componentsStates.proyects = false
        state.componentsStates.experience = false
        break
      case 'experience':
        state.componentsStates.profile = false
        state.componentsStates.skills = false
        state.componentsStates.info = false
        state.componentsStates.proyects = false
        state.componentsStates.experience = true
        break
      case 'skills':
        state.componentsStates.profile = false
        state.componentsStates.skills = true
        state.componentsStates.info = false
        state.componentsStates.proyects = false
        state.componentsStates.experience = false
        break
      case 'proyects':
        state.componentsStates.profile = false
        state.componentsStates.skills = false
        state.componentsStates.info = false
        state.componentsStates.proyects = true
        state.componentsStates.experience = false
        break
      default:
        state.componentsStates.profile = true
        state.componentsStates.skills = false
        state.componentsStates.info = false
        state.componentsStates.proyects = false
        state.componentsStates.experience = false
    }
  }


}


export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
}