let projectContainer = document.querySelector("#projectContainer")

projects.forEach(project => {
  console.log(project);

  let figure = document.createElement("figure");
  let figcaption = document.createElement("figcaption");
  let heroku = document.createElement("a");
  let github = document.createElement("a");
  let image = document.createElement("img");
  let projectName = document.createElement("h5");
  let technologies = project.technologies;

  projectName.textContent = project.name;
  github.setAttribute("href", project.github);
  github.setAttribute("target", "_blank");
  github.className = "fa fa-github"
  heroku.setAttribute("href", project.heroku)
  heroku.setAttribute("target", "_blank");
  image.setAttribute("src", project.img);
  image.className = "projectImg";


  technologies.forEach(technology => {
    let techs = document.createElement("button");
    techs.textContent = technology;

    figcaption.prepend(projectName, github);
    figcaption.append(techs);
    heroku.append(image);
    figure.append(heroku, figcaption);
    projectContainer.append(figure);
  });
}

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