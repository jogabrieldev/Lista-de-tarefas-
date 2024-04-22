
// arvore DOM
const camp = document.querySelector('.texto')
const btnAtv= document.querySelector('.add_atv')
const res = document.querySelector('.tasks')
// essa função esta criando um elemento no HTML  no caso e uma Li = list e essa função esta retornando esse elemento 
function criaLi() {
    const li = document.createElement('li')
    return li
}
camp.addEventListener('keypress' , function(event){
    if(event.keyCode === 13){
        if(!camp.value) return
        criaTarefa(camp.value)
    }
})

function clear(){
    camp.value = ''
}
function createButtom(li){
    li.innerText +=  ''
const clearButtom = document.createElement('button')
clearButtom.innerText = 'Apagar'
clearButtom.setAttribute('class' , 'apagar')
li.appendChild(clearButtom)
}

function saveTask(){
const liTarefa = res.querySelectorAll('li')
const list = []
  for(let tarefa of liTarefa){
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar' , '')
    list.push(tarefaTexto)
  }
  console.log(list)
}

function criaTarefa(textoInput){
 const li = criaLi()
 li.innerText = textoInput
 res.appendChild(li)
 clear()
 createButtom(li)
 saveTask()
}

btnAtv.addEventListener('click' , function(event){
    if(!camp.value) return
    criaTarefa(camp.value)
})

document.addEventListener('click' , function(event) {
    const el = event.target
    if(el.classList.contains('apagar')){
el.parentElement.remove()
    }   
})



