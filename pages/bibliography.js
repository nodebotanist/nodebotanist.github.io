import Header from '../components/header'
import Footer from '../components/footer'

export default () => (
  <div>
    <Header />
    <div className="container">
      <h1>Bibliography</h1>
      <p>I've written a few things, and I keep records here</p>
      <h2 className="text-primary">Books</h2>
      <p>
        I am one of the contributing authors of <a href="http://shop.oreilly.com/product/0636920031390.do">Make: Javacript Robotics</a>,
        <span className="text-success"> ISBN: 1457186950</span>
      </p>
      <p>
        I am the author of <a href="https://www.amazon.com/Learning-JavaScript-Robotics-Kassandra-Perch/dp/1785883348">Learning Javascript Robotics</a>,
        <span className="text-success"> ISBN: 1785883348</span>
      </p>
      <h2 className="text-info">Video Content</h2>
      <p>I have a <a href="https://twitch.tv/nodebotanist">Twitch Stream</a> where I stream weekly open-source software and hardware work.</p>
      <p>I am an Egghead.io instructor with <a href="https://egghead.io/lessons/misc-creating-jwts-json-web-tokens-in-node">a course on creating JSON Web Tokens (JWTs) in Node</a></p>
      <p>I also have done several tutorial videos in my time at Auth0</p>
      <h2 className="text-warning">Personal Blogging</h2>
      <p>I write a ton about robots and other tech and social stuff <a href="https://medium.com/@nodebotanist">On my personal blog.</a></p>
      <h2 className="text-success">Product Writing</h2>
      <p>A list of links to product writing that I'm proud of:</p>
      <ul>
        <li><a href="https://auth0.com/blog/switching-from-social-logins-to-saml-in-minutes-with-auth0/">Switching from Social Authentication to SAML in Minutes with Auth0</a></li>
        <li><a href="https://auth0.com/blog/setting-up-passwordless-authentication-with-the-auth0-dashboard/">New Tutorial: Setting up Passwordless Authentication</a></li>
        <li><a href="https://read.iopipe.com/x-ray-and-iopipe-better-together-d638be86356f">X-Ray and IOpipe: Better Together</a></li>
        <li><a href="https://read.iopipe.com/servers-lol-could-your-aws-ec2-application-benefit-from-a-lambda-makeover-f8cf092e3c7">Servers.lol — Could Your AWS EC2 Application Benefit From a Lambda Makeover?</a></li>
      </ul>
    </div>
    <Footer />
  </div>
)
