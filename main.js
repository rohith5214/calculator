//display btn content in the screen//

function display(content){
    result.value+= content
}
function allclear(){
    result.value= ""
}
function exprval(){
    try{
        result.value= eval(result.value)
    }catch{
        result.value="invalid expression!!!"
    }
}
function removelast(){
    result.value=result.value.slice(0,-1)
}