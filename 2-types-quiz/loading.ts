type Success = {
  state: 'success'
  response: {
    body : string
  }
}

type Fail = {
  state: 'fail'
  reason : string
}

type Loading = {
  state : 'loading'
}

type ResourcesLoadState = Success | Fail | Loading

function printLoginState(loadState : ResourcesLoadState) {
  switch (loadState.state) {
    case 'success':
      return loadState.response.body
      break;
    case 'loading':
      return `👀 ${loadState.state}`
      break;
    case 'fail':
      return loadState.reason
      break;
    default:
      throw new Error('이건 뭐지?')
  }
}
console.log(printLoginState({ state: 'success', response: { body: 'login-success 🤪' } }))
console.log(printLoginState({state : 'loading'}))
console.log(printLoginState({state : 'fail', reason : 'login-fail😫'}))
