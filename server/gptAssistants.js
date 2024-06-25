import { AICharGen } from './ai_char_generator/library/AICharGen.js'
import {SecretManagerServiceClient} from '@google-cloud/secret-manager';
import CharacterIllustrationGenerator from "./helpers/characterIllustrationGenerator.js";
import dotenv from 'dotenv';
dotenv.config();
const client = new SecretManagerServiceClient();

/**
 * Get secret from GCP Secret Manager
 * https://cloud.google.com/secret-manager/docs/access-secret-version
 */
async function getOpenAIAPIKey() {
    //373053860621
    const name = `projects/${process.env.GCLOUD_PROJECT}/secrets/openai-api-key/versions/latest`;

    try {
        // Access the secret version
        const [version] = await client.accessSecretVersion({ name });

        // Extract the payload as a string
        return version.payload.data.toString();
    } catch (error) {
        throw new Error(`Failed to retrieve OpenAI API Key: ${error.message}`);
    }
}

// Initialize generators
const api_key = await getOpenAIAPIKey()

const charGen = new AICharGen(api_key);
await charGen.initialize({
    vectorStoreId: 'vs_3WaLOhWlKHZtYUjygY88CoGH',
    assistantId: 'asst_kmM47YTEiaiQ7hLxx5aTuf9e'
})

const charIllustrationGen = new CharacterIllustrationGenerator(api_key);

export {charGen as default, charIllustrationGen};