/*
Controller for generating a character illustration
 */
import asyncHandler from "express-async-handler";
import aiAssistant from "../aiAssistants.js";
import {generateV4ReadSignedUrl} from "../helpers/cloudStoreOperations.js";

/**
 * Generate a new character illustration and return a signed URL.
 */
export const newCharacterIllustration = asyncHandler(async (req, res) => {
    try {
        const prompt = await aiAssistant.getCharacterIllustrationDetails(req.body);
        const imageURL = await aiAssistant.getCharacterIllustration(prompt.details);

        res.status(201).json({
            url: imageURL
        });
    } catch (err) {
        if (err.statusCode === 429) {
            console.log('Too many requests to ChatGPT');
        }
        throw err;
    }
})

/**
 * Get an existing character illustration and return a signed URL.
 */
export const getCharacterIllustration = asyncHandler(async (req, res) => {
    const illustrationID = req.params["character_illustration_id"];
    const signedURL = await generateV4ReadSignedUrl(`character-illustrations/${illustrationID}.png`);
    res.status(200).json({
        url: signedURL
    });
})