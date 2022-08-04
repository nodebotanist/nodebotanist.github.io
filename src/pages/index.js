import React from "react"
const Page = ({serverData}) => { 
    return <main class="bg-slate-800">
        <pre>{JSON.stringify(serverData, null, 2)}</pre>
        <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
  <div class="card">
    <div class="card-header">Normal Card</div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
    <div class="justify-end card-footer">
      <a href="#" class="btn btn-link btn-sm">Cancel</a>
      <a href="#" class="btn btn-light-primary btn-sm">Sure</a>
    </div>
  </div>
  <a class="card" href="#">
    <div class="card-header">Card as Link</div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </a>
</div>
        <h1>Hello from the server!</h1>
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