import React from "react"
import Layout from '../components/layout'

const Page = ({serverData}) => { 
    return <Layout pageTitle="Homepage">
        <p>Hello from the server!</p>
    </Layout> }
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