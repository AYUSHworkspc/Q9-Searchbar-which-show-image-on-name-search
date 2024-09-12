var arr=[
{name:"AYUSH GUPTA", src:"https://plus.unsplash.com/premium_vector-1712565192679-b8c52b19b8e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww"},
{name:"YASH GUPTA",src:"https://plus.unsplash.com/premium_vector-1715786847746-3a0691d400b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww"},
{name:"RAM",src:"https://plus.unsplash.com/premium_vector-1712565623719-7472daa97e86?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name:"HIMANSHU",src:"https://plus.unsplash.com/premium_vector-1713201017807-1bba3b824668?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];
var pers="";
arr.forEach(function(element){

pers+=` <div class="person">
            <div class="img">
                <img src="${element.src}" alt="">
            </div>
            <h4>${element.name}</h4>
        </div>`;
});
document.querySelector(".people").innerHTML=pers;   //PEOPLE DIV MAIN PERS ka code daal do.pers 4 baar chala to 4 naye person wala div ban jayega



var abc=document.querySelector("input");
abc.addEventListener("input",function(){
    var matching=arr.filter(function(e){
        return e.name.startsWith(abc.value);//filter ek array deta hain to hume us naye array ko matching main store kara hain jiska name input ke name se match kar raha tha.
    })
    var newuser="";
    matching.forEach(function(element){   //us naye wale array par foreach ka loop lagaya hain humne ki naya div people main add ho jaye
                                                                       //newuser+= matlab pahle se jo hain newuser main usme add kar do
        newuser+=` <div class="person">           
                    <div class="img">
                        <img src="${element.src}" alt="">
                    </div>
                    <h4>${element.name}</h4>
                </div>`;
        });
        document.querySelector(".people").innerHTML=newuser;
});

//MUJHE YE HARD LAGA KAAFI REPEAT IT..



//code of word counter in a text area
var textarea=document.querySelector("textarea");
var counter=document.querySelector("#counter");
textarea.addEventListener("input",function(){
    counter.textContent=textarea.value.length;

})