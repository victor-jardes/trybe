const myBody = document.getElementsByTagName('body')[0];

// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; 
function titleBodyH1(){
const myBody = document.getElementsByTagName('body')[0];
  for(let i = 0; i< 1; i += 1){
    let h1Create = document.createElement("h1");
    h1Create.innerHTML = 'Exercício 5.2 - JavaScript DOM';
    myBody.appendChild(h1Create);
  }
}
titleBodyH1()
    // 2- Adicione a tag main com a classe main-content como filho da tag body;
function creatTagMain(){
  const creatMain = document.createElement('main');
    myBody.appendChild(creatMain);
    creatMain.classList.add('main-content');  
} 
creatTagMain()
const main = document.querySelector('.main-content')
    //3-Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const creatSection = () =>{ 
  const section = document.createElement('section');
  let creatMain = document.getElementsByTagName("main")[0]
  creatMain.appendChild(section)
  section.classList.add("center-content")
}
creatSection();    
    // 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const creatP = () =>{
  const section = document.querySelector(".center-content");
    let p = document.createElement("p");
    p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    section.appendChild(p)
}
creatP()
    // 5-Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const creatSection2 = () =>{
  const section2 = document.createElement('section')
    section2.classList.add('left-content')  
    main.appendChild(section2);
}
creatSection2();
