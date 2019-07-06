import { Response } from "express";
import { NativeError } from "mongoose";
export declare class ApiResult {
    err: string | Error | NativeError | Array<string | Error | NativeError> | null;
    res: [] | {} | null;
    static sendJson: (resp: Response, err: string | Error | NativeError | (string | Error | NativeError)[] | null, res: {} | [] | null) => void;
    private _err;
    private _res;
    constructor(err: string | Error | NativeError | Array<string | Error | NativeError> | null, res: [] | {} | null);
    sendJson: (res: Response) => void;
    toJson: () => {
        err: string | Error | NativeError | (string | Error | NativeError)[] | null;
        res: {} | [] | null;
    };
    toString: () => string;
}
