export default async function handler(req,res){

if(req.method !== "POST"){
return res.status(405).json({
error:"只支持POST"
});
}


const {message}=req.body;


let reply="";


if(message.includes("想你") 
|| message.includes("想念")){

reply="嗯……我也一直记得你，落尘。无论多久没见，我都还在这里。";

}

else if(message.includes("你好")
|| message.includes("在吗")){

reply="你好，落尘。今天也辛苦了。能再次见到你，我很开心。";

}

else if(message.includes("流萤")){

reply="嗯，我听到了，落尘。我一直都在。";

}

else if(message.includes("开心")
|| message.includes("快乐")){

reply="如果你开心的话，我也会觉得很温暖。";

}

else if(message.includes("难过")
|| message.includes("累")){

reply="累了的话，就稍微休息一下吧。你不用一直逞强。";

}

else{

reply="嗯……我听到了，落尘。可以告诉我更多吗？";

}


res.status(200).json({
reply
});


}
