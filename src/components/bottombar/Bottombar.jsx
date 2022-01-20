import "./bottombar.scss";

export default function Bottombar() {
  return (
    <div className='bottombar'>
        <div class="nav-container">
            <ul class="nav-items">
                <li class="nav-item"><a href="/">HOME</a></li>
                <li class="nav-item"><a href="/">ABOUT</a></li>
                <li class="nav-item"><a href="/">PORTFOLIO</a></li>
                <li class="nav-item"><a href="/">CONTACT</a></li>
                <li class="nav-item"><a href="/">TESTIMONIALS</a></li>
            </ul>

            <ul id="sm-nav" class="social-nav">
                <li class="social-item"><a href="https://www.facebook.com/josephnomo.0/" target="blank" title="This is my private facebook profile"> <img class="social-icon" src="./img/facebook.png" border="0" alt="fb"/></a></li>
                <li class="social-item"><a href="https://twitter.com/CodeHacker237" target="blank" title="This is my private twitter profile"> <img class="social-icon" src="./img/twitter.png" border="0" alt="tt" /></a></li>
                <li class="social-item"><a href="https://www.linkedin.com/in/nomojoseph/" target="blank" title="This is the link to my linkedin profile"> <img class="social-icon" src="./img/linkedin.png" border="0" alt="fb" /></a></li>
                <li class="social-item"><a href="https://github.com/Jspascal" target="blank" title="This is the link my github profile"> <img class="social-icon" src="./img/github.png" border="0" alt="fb" /></a></li>
            </ul>
        </div>
      </div>
  );
}
