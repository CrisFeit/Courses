/**
 * @param {*} request
 * @param {*} response
 */
export function handler (request, response) {
  const helloYou = (name) => {
    name = 'you' || name
    console.log('hello' + name + '!')
  }

  console.log(helloYou)
  return response.end('hello')
}
