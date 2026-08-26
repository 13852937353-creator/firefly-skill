export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error:"只支持POST"
    });
  }


  const {message} = req.body;


  res.status(200).json({
    reply:"嗯……我收到了，落尘。"
  });

}
