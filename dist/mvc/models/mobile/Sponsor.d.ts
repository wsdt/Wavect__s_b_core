import * as mongoose from "mongoose";
import { ApiResult } from "../../../routes/api/mobile/v1/ApiResult";
export declare enum SponsorFields {
    id = "id",
    name = "name",
    logoUri = "logoUri",
    shortDescr = "shortDescr",
    website = "website",
    email = "email",
    linkedin = "linkedin",
    youtube = "youtube",
    instagram = "instagram",
    facebook = "facebook"
}
export declare const sponsorToResponse: (err: any, sponsor: any) => ApiResult;
export declare const Sponsor: mongoose.Model<mongoose.Document, {}>;
