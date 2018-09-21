import {withRouter} from 'next/router'
import Header from '../components/header'
import Footer from '../components/footer'

export default withRouter((props) => (
  <div>
    <Header />
    <div className="container">
      <h1>"The Nodebotanist"</h1>
      <h4 className="text-success">(a.k.a. Mx. Kas Perch)</h4>
      <p>Hi! You sent the color {props.router.query.color} to the bot!.</p>

        <script dangerouslySetInnerHTML={{__html: `
        let params = new URLSearchParams(document.location.search.substring(1));
        let color = params.get("color");
            var oReq = new XMLHttpRequest();
            oReq.open("GET", "https://frbo73bbwg.execute-api.us-east-1.amazonaws.com/default/aws-nodejs-dev-empire2018?color=${color}");
            oReq.send();`}}>
        </script>
    </div>
    <Footer />
  </div>
))
