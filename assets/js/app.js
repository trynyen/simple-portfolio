let projectContainer = document.querySelector("#projectContainer")

projects.forEach(project => {
  console.log(project);

  let figure = document.createElement("figure");
  let figcaption = document.createElement("figcaption");
  let heroku = document.createElement("a");
  let github = document.createElement("a");
  let image = document.createElement("img");
  let btn = document.createElement("button");
  let title = document.createElement("h5");

  heroku.setAttribute("href", project.heroku)
  heroku.setAttribute("target", "_blank")
  image.setAttribute("src", project.img);

  figcaption.appendChild(title,github,btn);
  heroku.appendChild(image);
  figure.appendChild(heroku,figcaption);
  projectContainer.appendChild(figure);
}
  
  // document.addC
)

{/* <div class="card" style="width: 18rem;">
  <a href="#" class="btn btn-primary">
    <img class="card-img-top" src="..." alt="Card image cap"> 
  </a>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="fa fa-github"></a>
    <button class="tech">html</button>
    <button class="tech">css</button>
    <button class="tech">javascript</button>
  </div>
</div> */}

{/* <figure class="projects">
<a href="" target="_blank">
  <img src="" alt="" class="projectImg">
</a>
  <figcaption>

    <a href="" target="_blank" class="fa fa-github" style ="color:black"></a>
    <h5 class="card-title">Card title</h5>

  </figcaption>
  <figcaption>
    <button class="tech">html</button>
    <button class="tech">css</button>
    <button class="tech">javascript</button>
  </figcaption>
</figure> */}