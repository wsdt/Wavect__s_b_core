import * as mongoose from "mongoose";
export declare enum SettingsFields {
    userId = "userId",
    email = "email",
    hasAcceptedDataPrivacy = "hasAcceptedDataPrivacy"
}
export declare const Settings: mongoose.Model<mongoose.Document, {}>;
