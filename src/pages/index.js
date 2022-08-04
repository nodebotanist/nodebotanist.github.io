import React from "react"
const Page = ({serverData}) => { return <main class="bg-slate-800"><pre>{JSON.stringify(serverData, null, 2)}</pre><h1>Hello from the server!</h1></main> }
export default Page

export async function getServerData() {
    // using fetch
    let tweets = await(await fetch('https://paulieapi.gatsbyjs.io/api/get-latest-tweets', {
        method: 'POST',
        body: JSON.stringify({ id: 470012453 }),
    })).json() 
    return { props: {
        tweets
    }} 
}