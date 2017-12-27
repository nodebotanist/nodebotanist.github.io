import Header from '../components/header'
import Footer from '../components/footer'

export default () => (
  <div>
    <Header />
    <div className="container">
      <h1>About Me</h1>
      <h2>Professionally...</h2>
      <p>
        I've been a web developer for over a decade, and have been working with hardware for nearly five years. I am proficient in the following languages:
      </p>
      <ul className="text-success">
        <li>Javascript/Node.JS</li>
        <li>Python</li>
        <li>C</li>
        <li>HTML/CSS</li>
      </ul>
      <p>
        I'm also proficient at the following skills related to software engineering
      </p>
      <ul className="text-primary">
        <li>Unit testing</li>
        <li>Source Control</li>
        <li>Open Source project contribution/management</li>
        <li>Community Building and representation</li>
      </ul>
      <p>
        I'm also an accomplished educator and writer. You can read more about that in the bibliography tab. From the education standpoint, I have designed and taught dozens of professional trainings and webinars.
      </p>
      <h2>Personally...</h2>
      <p>
        I build things. I like to put myself out of my own comfort zone and learn something new every day. I play video games, stream programming from my lab once a week, and try to teach as many people as I can.
      </p>
    </div>
    <Footer />
  </div>
)
