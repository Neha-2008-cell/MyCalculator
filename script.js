let firstnum=""
  let secondnum=""
  let operator=""
  let input = document.getElementById("input")
  
  
function give(values){
  input.value += values
  if(operator===""){
     firstnum+=values
    }else{
     secondnum+=values
   }
}

function giveresult (){
  input.value=""
let num1=parseFloat(firstnum)
let num2=parseFloat(secondnum)
  if(operator==='+'){
      input.value=num1 + num2
    }
    else if(operator==='-'){
      input.value=num1 - num2
    }
    else if(operator==='*'){
      input.value=num1 * num2
    }
    else if(operator==='/'){
     if(num2!==0) {input.value=num1 / num2}
     else{input.value="Error"}
    }
    else{
     input.value= "Invalid operator "
    }
  }
  function setOperator(operators){
  operator = operators
  input.value+=operator
}
 
 function reset(){
  firstnum=""
  secondnum=""
  operator=""
  input.value=''
}



















































let character=""
function del (){
  let mystring=""
  let inputs=input.value
  for(let i=0;i < inputs.length-1;i++){
    mystring+=inputs[i]
  }
  input.value=mystring
  if(operator===""){
    character=""
    for(let i=0;i < firstnum.length-1;i++){
    character+=inputs[i]
    firstnum=character
  }
  }
  else if(operator==='+' || operator==='-' || operator==='*' || operator==='/' ){
    character=""
    for(let i=0;i < operator.length-1;i++){
    character+=inputs[i]
    operator=character
  }
}
else{
  character=""
  for(let i=0;i < secondnum.length-1;i++){
    character+=inputs[i]
    secondnum=character
  }
}
}