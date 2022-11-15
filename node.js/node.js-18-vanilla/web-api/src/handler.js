function handler(request, response) {
    const {
        url, method
    } = request
    console.log({ url, method })
    response.end('Hello World')
}

export default handler