{
  type NetworkErrorState = {
    result: 'fail',
    reason : 'offline' | 'down' | 'timeout'
  }

  type SuccessState = {
    result: 'success'
  }

  type ResultState = SuccessState | NetworkErrorState

  class NetworkClient {
    tryConnect(): ResultState {
      console.log('qwe')
    }
  }
}