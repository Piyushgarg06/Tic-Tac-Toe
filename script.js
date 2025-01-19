let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
turnO = true
let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked button")
        if(turnO==true){
            box.innerText = "O"
            turnO = false
        }else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        winner()
        })
    })
const winner = ()=>{
    let isDraw=true
    for(let i of win){
        let pos1 = boxes[i[0]].innerText
        let pos2 = boxes[i[1]].innerText
        let pos3 = boxes[i[2]].innerText
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1!=="" && pos1===pos2 && pos2===pos3){
                alert(`the winner is ${pos1}`)
                location.reload()
                
                }
                

            }
        }
        boxes.forEach((box)=>{
            if(box.innerText==""){
                isDraw=false
            }
        })
        if(isDraw==true){
            alert("it was a draw")
            location.reload()
        }

    }


reset.addEventListener("click",()=>{
    location.reload(true)
})


