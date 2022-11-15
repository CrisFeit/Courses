import { parse } from 'node:url'

function handler(request, response) {
    const { url, method } = request

    const { pathname } = parse(url, true)

    console.log('pathname', pathname)
    console.log({ url, method })
    response.end('Hello World')
}

export default handler