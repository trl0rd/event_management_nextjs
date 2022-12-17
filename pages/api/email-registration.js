import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

const handler = async (req, res) => {
  const { method } = req;

  const filePath = buildPath();
  const {events_categories,allEvents} = extractData(filePath);
  if(!allEvents){
    return res.status(404).json({
      status: 404,
      Message: 'Events data not found'
    })
  }


  if (method === "POST") {
    //we add our code here
    const { email, eventId } = req.body;

    if(!email || !email.includes('@')){
      res.status(422).json({
        message:'Email is not valid'
        
      })
      return;
    }

    const newAllEvents = allEvents.map(ev => {
      if(ev.id===eventId){
        if(ev.emails_registered.includes(email)){
          res.status(409).json({message: 'this email has already been registered'})
          return ev
        }
        return {
          ...ev,emails_registered: [...ev.emails_registered,email]
        }
      }
      return ev;
    })
    fs.writeFileSync(filePath,JSON.stringify({events_categories,allEvents: newAllEvents}))
    res.status(201).json({ Message: `You has been registered succesfully with the email: ${email} for ${eventId}` });
  }
};
export default handler;
