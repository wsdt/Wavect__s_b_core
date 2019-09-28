import { ApiResult } from '../../../routes/api/mobile/v1/ApiResult'
import * as mongoose from 'mongoose'
import { COLLECTION_CHALLENGEINFORMATION_NAME } from '../../controllers/db/db.constants'

export enum ChallengeInformationFields {
    id = 'id',
    instruction = 'instruction',
    privacy = 'privacy',
    intention = 'intention',
    misc = 'misc',
    reward = 'reward'
}

const ChallengeInformationModel = new mongoose.Schema({
    [ChallengeInformationFields.id]: { type: String, unique: true, required: true },
    [ChallengeInformationFields.instruction]: { type: String, required: true },
    [ChallengeInformationFields.privacy]: { type: String, required: true },
    [ChallengeInformationFields.intention]: { type: String, required: true },
    [ChallengeInformationFields.misc]: { type: String, required: false },
    [ChallengeInformationFields.reward]: { type: String, required: true}
})

export const challengeInformationResponse = (err: any, info: any): ApiResult => {
    return new ApiResult(err, {
        [ChallengeInformationFields.id]: info.id,
        [ChallengeInformationFields.instruction]: info.instruction,
        [ChallengeInformationFields.privacy]: info.privacy,
        [ChallengeInformationFields.intention]: info.intention,
        [ChallengeInformationFields.misc]: info.misc,
        [ChallengeInformationFields.reward]: info.reward,

    })
}

export const ChallengeInformation = mongoose.model(COLLECTION_CHALLENGEINFORMATION_NAME, ChallengeInformationModel)
