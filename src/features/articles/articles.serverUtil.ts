'use server'

import fs from 'fs'
import path from 'path'


export async function fielUpload(file: File, dir?: string) {

    if (!fs.existsSync(path.join(process.cwd(), '/public/', dir as string))) {
        await fs.promises.mkdir(path.join(process.cwd(), '/public/', dir as string));
    };

    const fileName = `${crypto.randomUUID()}-${file.name}`
    const filePath = path.join(dir as string, fileName);

    const bufferFile = Buffer.from(await file.arrayBuffer());

    if (bufferFile) {
        await fs.promises.writeFile(path.join(process.cwd(), 'public', filePath), bufferFile)
    }
    return filePath;
}