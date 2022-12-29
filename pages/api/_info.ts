// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    info: {
        post: { // CREATE
            tally: number;
            endpoints: string[];
        };
        get: { // READ
            tally: number;
            endpoints: string[];
        };
        put: { // UPDATE
            tally: number;
            endpoints: string[];
        };
        delete: { // DELETE
            tally: number;
            endpoints: string[];
        };
    };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({
        info: {
            post: {
                tally: 0,
                endpoints: []
            },
            get: {
                tally: 3,
                endpoints: [
                    "/api/quotes/random",
                    "/api/quotes/all",
                    "/api/_info",
                ]
            },
            put: {
                tally: 0,
                endpoints: []
            },
            delete: {
                tally: 0,
                endpoints: []
            }
        }
    });
}