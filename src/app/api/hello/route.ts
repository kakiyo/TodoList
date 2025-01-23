export async function GET(request: Request) {

    return new  Promise(resolve => {  setTimeout(() => {
        resolve(new Response('Hello, Next.js!'))
    }, 3000)  })

}
