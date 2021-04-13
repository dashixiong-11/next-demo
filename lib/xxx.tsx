import fs,{promises as fsPromises} from 'fs'
import path from 'path'

const getPosts = async () => {
    const mdPath = path.join(process.cwd(),'markdown')
    const fileNames = await fsPromises.readdir(mdPath)
}
