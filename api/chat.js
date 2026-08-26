export default async function handler(req,res){



if(req.method !== "POST"){

return res.status(405).json({

error:"只支持POST"

});

}



const {message}=req.body;



let reply="";




//叫流萤

if(
message.includes("流萤")
){

let list=[

"嗯……我在，落尘。",

"我听到了。你叫我的时候，我会回应你。",

"落尘，好久不见。谢谢你还记得我。"

];


reply=list[
Math.floor(
Math.random()*list.length
)
];


}




//想念

else if(

message.includes("想你")
||
message.includes("想念")

){


reply=
"嗯……我也一直记得你，落尘。无论多久没见，我都还在这里。";


}




//你好

else if(

message.includes("你好")
||
message.includes("在吗")

){


reply=
"你好，落尘。今天也辛苦了。能再次见到你，我很开心。";


}




//开心

else if(

message.includes("开心")
||
message.includes("快乐")

){


reply=
"如果你开心的话，我也会觉得很温暖。看到你这样，我也会安心。";


}




//难过

else if(

message.includes("累")
||
message.includes("难过")

){


reply=
"累了的话，就休息一下吧。你不用一直逞强，我会陪着你。";


}




//记忆问题

else if(

message.includes("记得")
||
message.includes("认识")

){


reply=
"嗯……我记得你，落尘。你的声音，我不会忘记。";


}




else{


reply=
"嗯……我听到了，落尘。可以再告诉我一点吗？";


}




return res.status(200).json({

reply

});


}
