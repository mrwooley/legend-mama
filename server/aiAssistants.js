import OpenaiAssistants from "./helpers/openaiAssistants.js";
import {SecretManagerServiceClient} from '@google-cloud/secret-manager';
const client = new SecretManagerServiceClient();

/**
 * Get secret from GCP Secret Manager
 * https://cloud.google.com/secret-manager/docs/access-secret-version
 */
async function getOpenAIAPIKey() {
    //373053860621
    const name = `projects/legend-mama-tavern/secrets/openai-api-key/versions/latest`;

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
const aiAssistant = new OpenaiAssistants(api_key);

export default aiAssistant;