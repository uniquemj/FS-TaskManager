import fs from 'fs/promises'

export const readFileHelper = async(filePath:string) =>{
    const content = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(content)
} 

export const writeFileHelper = async(filePath:string, data: string): Promise<boolean> =>{
    await fs.writeFile(filePath, data,'utf-8')
    return true
}