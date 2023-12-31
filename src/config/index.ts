let local_debug = process.env.REACT_APP_DEBUG_SERVER === 'true' ? true : false
let prodEndpoint = process.env.REACT_APP_ENDPOINT_PRODUCTION || 'https://6521c5dfa4199548356d90b2.mockapi.io'
let localEndpoint = process.env.REACT_APP_ENDPOINT_LOCAL

const settings = {
  local_debug,
  endPointServerURL: local_debug ? localEndpoint : prodEndpoint,
};

export default settings;