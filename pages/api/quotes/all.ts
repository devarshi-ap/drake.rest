// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from "path";
import { promises as fs } from "fs"

type Data = {
    quote: string[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const jsonDir = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDir + '/quotes.json', 'utf8')
    var quotes_obj: string[] = JSON.parse(fileContents.toString());

    res.status(200).json({ quote: quotes_obj });
}