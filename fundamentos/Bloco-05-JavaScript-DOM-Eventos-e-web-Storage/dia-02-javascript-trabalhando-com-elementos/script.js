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
const creatSectionleft = () =>{
  const sectionLeft = document.createElement('section')
    sectionLeft.classList.add('left-content')  
    main.appendChild(sectionLeft);
}
creatSectionleft()
    // 6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const creatSectionRight = () =>{
  const sectionRight = document.createElement('section')
  sectionRight.classList.add('right-content');
  main.appendChild(sectionRight);
}
creatSectionRight()
    //  7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const creatImg = () => {
  const sectionLeft = document.querySelector('.left-content')
  const imgCreat = document.createElement('img');
  imgCreat.classList.add('small-image');
  imgCreat.src = "https://picsum.photos/200"  
  sectionLeft.appendChild(imgCreat)
}
creatImg();
    //8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6; 
const unorderedList = () =>{
  const creatList = document.createElement("ul");
  const sectionRight = document.querySelector('.right-content');
  sectionRight.appendChild(creatList)
  const arrayNumber = ['um','dois','tres','quatro','cinco','seis','sete','oito','nove','dez'];
  for(let num in arrayNumber){
    const elementLi = document.createElement("li");
    elementLi.innerHTML = arrayNumber[num];
    creatList.appendChild(elementLi);
  }
}
unorderedList();
    // 9- Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
const creath3 = () =>{
  for(let i = 0; i < 3; i +=1){
    const elementh3 = document.createElement("h3");
    main.appendChild(elementh3)
    elementh3.classList.add("description")
  }
}
creath3();

        //PARTE DOIS

    // 1.Adicione a classe title na tag h1 criada;
let h1Main = document.querySelector('h1');
h1Main.classList.add('title');
    //  2.Adicione a classe description nas 3 tags h3 criadas;
let h3Main = document.querySelectorAll('h3');
for(let i = 0; i < 3; i+=1 ){
  h3Main[i].classList.add('description')
}
    // 3- Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let removeSction = document.querySelector('.left-content');
  main.removeChild(removeSction);
    //  4- Centralize a section criado no passo 6 (aquele que possui a classe right-content ). 
let elementSecRigth = document.querySelector('.right-content');
  elementSecRigth.style.marginRight = 'auto'; 
    //  5-Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde
let elementeSecCenter = document.querySelector('.center-content');
  elementeSecCenter.parentNode.style.backgroundColor = 'green';
    // 6- Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let ul = document.querySelector('ul')
  ul.lastChild.remove();
  ul.lastChild.remove();

