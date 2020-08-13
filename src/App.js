import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import SlideShow from "./components/SlideShow/SlideShow";
// import SimpleSlider from "./components/Slide.";
function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <section>
        <div className="flex ">
          <SlideShow/>
            {/* <SimpleSlider/> */}
          <div>
            <div>Nav Bar</div>
            <div>Hamburger</div>
            <div>Logo</div>
          </div>
          <div>
            <Button variant="contained" color="secondary">
              ĐĂNG KÍ TƯ VẪN MIỄN PHÍ
            </Button>
            <div>Click to Call</div>
          </div>
        </div>
      </section>

      <section>
        <image></image>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </section>

      <section>
        <div class="projects container">
          <div class="projects-header">
            <h1 class="section-title">
              Recent <span>Projects</span>
            </h1>
          </div>
          <div class="all-projects">
            <div class="project-item">
              <div class="project-info">
                <h1>Project 1</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                  illum quae mollitia ut, accusantium eius odio ducimus illo
                  neque atque libero non sunt harum? Ipsum repellat animi, fugit
                  architecto voluptatum odit et!
                </p>
              </div>
              <div class="project-img">
                <img src="/public/images/ban 2.jpg" alt="img" />
              </div>
            </div>
            <div class="project-item">
              <div class="project-info">
                <h1>Project 2</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                  illum quae mollitia ut, accusantium eius odio ducimus illo
                  neque atque libero non sunt harum? Ipsum repellat animi, fugit
                  architecto voluptatum odit et!
                </p>
              </div>
              <div class="project-img">
                <img src="/public/images/ban 2.jpg" alt="img" />
              </div>
            </div>
            <div class="project-item">
              <div class="project-info">
                <h1>Project 3</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                  illum quae mollitia ut, accusantium eius odio ducimus illo
                  neque atque libero non sunt harum? Ipsum repellat animi, fugit
                  architecto voluptatum odit et!
                </p>
              </div>
              <div class="project-img">
                <img src="/public/images/ban 2.jpg" alt="img" />
              </div>
            </div>
            <div class="project-item">
              <div class="project-info">
                <h1>Project 4</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                  illum quae mollitia ut, accusantium eius odio ducimus illo
                  neque atque libero non sunt harum? Ipsum repellat animi, fugit
                  architecto voluptatum odit et!
                </p>
              </div>
              <div class="project-img">
                <img src="/public/images/ban 2.jpg" alt="img" />
              </div>
            </div>
            <div class="project-item">
              <div class="project-info">
                <h1>Project 5</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                  illum quae mollitia ut, accusantium eius odio ducimus illo
                  neque atque libero non sunt harum? Ipsum repellat animi, fugit
                  architecto voluptatum odit et!
                </p>
              </div>
              <div class="project-img">
                <img src="/public/images/ban 2.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Paper square>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab label="RECENTS" />
            <Tab label="FAVORITES" />
            <Tab label="NEARBY" />
            <Tab label="NEARBY" />
            <Tab label="NEARBY" />
            <Tab label="NEARBY" />
          </Tabs>
        </Paper>
      </section>

      <section>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corrupti
          recusandae dolor quasi adipisci,
        </h2>
        <div>List of Certificate</div>
      </section>

      <section>
        <div>Form</div>
        <div>
          <div>Logo</div>
          <div>Info</div>
        </div>
        <div>Contacts</div>

        <div>Hotline</div>
      </section>
    </div>
  );
}

export default App;
