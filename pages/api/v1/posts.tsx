import {NextApiRequest, NextApiResponse} from "next";

const Posts = (req:NextApiRequest,res:NextApiResponse) => {
    res.statusCode = 200
    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify({name:'zzz'}))
    res.end()
}

export default Posts