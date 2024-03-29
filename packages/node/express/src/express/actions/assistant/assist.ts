import {RunAction} from '@nlbridge/core';
import {Request, Response} from 'express';

export const assist = async (run: RunAction, payload: any, req: Request, res: Response) => {
    const outcome = await run('assist', payload.message, {
        contextId: payload.contextId,
    });
    if (!outcome.success) {
        res.status(500).send({
            success: false,
            error: outcome.error,
        });
        return;
    }

    res.status(200).send({
        success: true,
        result: {
            response: outcome.message,
            task: outcome.task,
        },
    });
};
