import * as mongoose from "mongoose";
import { ApiResult } from "../../../routes/api/mobile/v1/ApiResult";
export declare enum ChallengeFields {
    id = "id",
    headline = "headline",
    subline = "subline",
    bgImage = "bgImage",
    whyDoesOrganizationSponsor = "whyDoesOrganizationSponsor",
    majorCategory = "majorCategory",
    sponsor = "sponsor",
    expirationInMs = "expirationInMs"
}
export declare const challengeToResponse: (err: any, challenge: any) => Promise<ApiResult>;
export declare const Challenge: mongoose.Model<mongoose.Document, {}>;
