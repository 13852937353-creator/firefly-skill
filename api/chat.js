export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error:"只支持POST"
    });
  }

  const {message} = req.body;

  let reply="";

  if(message.includes("想你")){
    reply="嗯……我也一直记得你，落尘。";
  }
  else if(message.includes("你好")){
    reply="你好，落尘。今天也辛苦了。";
  }
  else{
    reply="嗯……我听到了，落尘。";
  }

  res.status(200).json({
    reply
  });

}
