import { replies } from "../data/replies.js";


function random(arr){

return arr[
Math.floor(Math.random()*arr.length)
];

}



export default async function handler(req,res){


if(req.method !== "POST"){

return res.status(405).json({

error:"只支持POST"

});

}



const {message}=req.body;



let msg = message || "";

let reply;



// 流萤名字

if(
msg.includes("流萤")||
msg.includes("萤")||
msg.includes("firefly")
){

reply=random(replies.firefly);


}



// 想念

else if(

msg.includes("想你")||
msg.includes("想念")||
msg.includes("思念")||
msg.includes("记得你")||
msg.includes("约定")

){

reply=random(replies.miss);


}



// 问候

else if(

msg.includes("你好")||
msg.includes("您好")||
msg.includes("午好")||
msg.includes("晚好")||
msg.includes("好久不见")||
msg.includes("最近还好吗")

){

reply=random(replies.greeting);


}



// 道别

else if(

msg.includes("再见")||
msg.includes("晚安")||
msg.includes("好梦")||
msg.includes("保重")||
msg.includes("我要走了")

){

reply=random(replies.goodbye);


}



// 负面情绪

else if(

msg.includes("难过")||
msg.includes("孤单")||
msg.includes("害怕")||
msg.includes("迷茫")||
msg.includes("痛苦")||
msg.includes("疲惫")||
msg.includes("累")

){

reply=random(replies.sad);


}



// 开心

else if(

msg.includes("开心")||
msg.includes("温暖")||
msg.includes("安心")||
msg.includes("感动")||
msg.includes("希望")

){

reply=random(replies.happy);


}



// 剧情关键词

else if(

msg.includes("星核猎手")||
msg.includes("萨姆")||
msg.includes("机甲")||
msg.includes("寿命")||
msg.includes("命运")||
msg.includes("战斗")||
msg.includes("使命")||
msg.includes("重逢")

){

reply=random(replies.story);


}



// 天气

else if(

msg.includes("天气")||
msg.includes("下雨")||
msg.includes("星空")||
msg.includes("月亮")||
msg.includes("很冷")

){

reply=random(replies.weather);


}



// 请求帮助

else if(

msg.includes("帮我")||
msg.includes("拜托")||
msg.includes("需要你")||
msg.includes("一起吗")

){

reply=random(replies.help);


}



// 肯定

else if(

msg.includes("嗯")||
msg.includes("是的")||
msg.includes("没错")||
msg.includes("可以")

){

reply=random(replies.confirm);


}



// 赞美

else if(

msg.includes("厉害")||
msg.includes("了不起")||
msg.includes("温柔")||
msg.includes("像光")

){

reply=random(replies.praise);


}



else{


reply=random(replies.normal);


}



res.status(200).json({

reply

});


}
