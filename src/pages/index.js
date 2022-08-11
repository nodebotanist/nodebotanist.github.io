import React from "react"
import {
  Heading
} from '@chakra-ui/react'

const Page = ({serverData}) => { 
    return <main>
        <Heading as='h1' size='2xl'>Hello from the server!</Heading>
    </main> }
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