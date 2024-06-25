import OpenAI from "openai";

export default class OpenaiAssistants {
    #model = 'gpt-4-turbo';
    #max_tokens = 600;
    #tools = [
        {
            "type": "function",
            "function": {
                "name": "create_character_sheet",
                "description": "Use this function to create a level 1 D&D 5E character sheet.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "The name of the character"
                        },
                        "race": {
                            "type": "string",
                            "enum": [
                                "Dragonborn",
                                "Hill Dwarf",
                                "High Elf",
                                "Rock Gnome",
                                "Half-Elf",
                                "Lightfoot Halfling",
                                "Half-Orc",
                                "Human",
                                "Tiefling"
                            ]
                        },
                        "class": {
                            "type": "string",
                            "enum": [
                                "Barbarian",
                                "Bard",
                                "Cleric",
                                "Druid",
                                "Fighter",
                                "Monk",
                                "Paladin",
                                "Ranger",
                                "Rogue",
                                "Sorcerer",
                                "Warlock",
                                "Wizard"
                            ]
                        },
                        "alignment": {
                            "type": "string",
                            "enum": [
                                "Lawful Good",
                                "Neutral Good",
                                "Chaotic Good",
                                "Lawful Neutral",
                                "Neutral",
                                "Chaotic Neutral",
                                "Lawful Evil",
                                "Neutral Evil",
                                "Chaotic Evil"
                            ]
                        },
                        "background": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "Background name."
                                },
                                "description": {
                                    "type": "string",
                                    "description": "A brief explanation of the background and its impact on the character."
                                },
                                "skills": {
                                    "type": "array",
                                    "description": "Two skills granted from background.",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "other": {
                                    "type": "array",
                                    "description": "Two items from the combined set of languages and tools.",
                                    "items": {
                                        "type": "string",
                                        "description": "A tool or language"
                                    }
                                },
                                "feature": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "description": "Name of the unique feature associated with the background."
                                        },
                                        "description": {
                                            "type": "string",
                                            "description": "Detailed description of the feature's effects and uses."
                                        }
                                    }
                                }
                            }
                        },
                        "abilityScores": {
                            "type": "object",
                            "description": "Character's ability scores selected using the point buy system. These are the base scores before racial stat bonuses. Select scores that align with the user input. See 'point_buy_system' for details.",
                            "properties": {
                                "strength": {
                                    "type": "integer",
                                    "description": "Measures physical power"
                                },
                                "dexterity": {
                                    "integer": "integer",
                                    "description": "Measures agility"
                                },
                                "constitution": {
                                    "type": "integer",
                                    "description": "Measures endurance"
                                },
                                "intelligence": {
                                    "type": "integer",
                                    "description": "Measures reasoning and memory"
                                },
                                "wisdom": {
                                    "type": "integer",
                                    "description": "Measures perception and insight"
                                },
                                "charisma": {
                                    "type": "integer",
                                    "description": "Measures force of personality"
                                }
                            }
                        },
                        "statBonus": {
                            "type": "array",
                            "description": "Ability score stat bonuses from race",
                            "items": {
                                "type": "string",
                                "description": "Format bonus as 'ability,bonus'"
                            }
                        },
                        "skills": {
                            "type": "array",
                            "description": "List of all skill proficiency selections from the character's race, class, and background",
                            "items": {
                                "type": "string"
                            }
                        },
                        "tools": {
                            "type": "array",
                            "description": "List of all tool proficiency selections from the character's race, class, and background",
                            "items": {
                                "type": "string"
                            }
                        },
                        "languages": {
                            "type": "array",
                            "description": "List of all language selections from the character's race, class, and background",
                            "items": {
                                "type": "string"
                            }
                        },
                        "personalityTraits": {
                            "type": "array",
                            "description": "Character's two personality traits.",
                            "items": {
                                "type": "string",
                                "description": "A sentence describing a personality trait. A personality trait helps set a character apart from others. It should be something interesting and fun about the character. Personality traits might describe the things the character likes, his or her past accomplishments, things the character dislikes or fears, the character’s self-attitude or mannerisms, or the influence of his or her ability scores."
                            }
                        },
                        "ideal": {
                            "type": "string",
                            "description": "A sentence describing a principle or belief that the character strives to uphold"
                        },
                        "bond": {
                            "type": "string",
                            "description": "A sentence describing a connection, duty, or obligation the character feels towards someone or something"
                        },
                        "flaw": {
                            "type": "string",
                            "description": "A sentence describing a weakness or failing in the character's personality or abilities"
                        },
                        "backstory": {
                            "type": "string",
                            "description": "A 50 to 100 words compelling backstory on the character's origin, motivations, and current situation."
                        },
                        "quote": {
                            "type": "string",
                            "description": "A short quote or catchphrase that the character says."
                        }
                    },
                    "required": [
                        "name",
                        "race",
                        "class",
                        "alignment",
                        "abilityScores",
                        "statBonus",
                        "skill",
                        "tools",
                        "languages",
                        "personalityTraits",
                        "ideal",
                        "bond",
                        "flaw",
                        "backstory",
                        "quote"
                    ]
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "create_illustration_prompt",
                "description": "Use this function to create a character illustration description to send to DALL-E.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "details": {
                            "description": "DALL-E prompt of 100-120 words",
                            "type": "string",
                        }
                    }
                }
            }
        }
    ];

    constructor(api_key) {
        this.openai = new OpenAI({apiKey: api_key});
    }

    async #getChatCompletion(messages, tool_choice) {
        console.time("Get Chat Completion");
        const response = await this.openai.chat.completions.create({
            model:  this.#model,
            messages: messages,
            max_tokens: this.#max_tokens,
            tools: this.#tools,
            tool_choice: {"type": "function", "function": {"name": tool_choice}} // auto is default, but we'll be explicit
        });
        console.timeEnd("Get Chat Completion");

        console.log(`
        Token Usage
        -----------
        Prompt Tokens: ${response.usage.prompt_tokens}
        Completion Tokens: ${response.usage.completion_tokens}
        Total Tokens: ${response.usage.total_tokens}
        `);
        return response;
    }

    async #getImage(prompt) {
        console.time("Get Image");
        const response = await this.openai.images.generate({
            model: "dall-e-3",
            style: "vivid",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
            user: "legend-mama-capstone",
            quality: 'standard'
        });
        console.timeEnd("Get Image");

        return response;
    }

    async getCharacterSheet(inputData) {
        const messages = [
            {
                "role": "system",
                "content": "You have comprehensive knowledge of the Dungeons and Dragons System Reference Document (SRD). " +
                    "You will be provided a JSON object for an idea of a character. You are very creative and able to create " +
                    "dynamic, original character sheets from the JSON object."
            },
            {
                "role": "user",
                "content": "```json"+inputData+"```"
            }
        ];

        const response = await this.#getChatCompletion(messages, "create_character_sheet");
        return JSON.parse(response.choices[0].message.tool_calls[0].function.arguments);
    }

    async getCharacterIllustrationDetails(inputData) {
        const messages = [
            {
                "role": "system",
                "content": "You will be provided a JSON object race, class, and backstory of a high fantasy character. " +
                    "Using this information, generate a DALL-E 3 image description that results in an illustration of the character " +
                    "posing or performing an activity in a detailed scene. It should include a description of " +
                    "the character's attire, appearance, and pose. It should also describe the background of the image " +
                    "in detail."
            },
            {
                "role": "user",
                "content": "```json"+inputData+"```"
            }
        ];

        const response = await this.#getChatCompletion(messages, "create_illustration_prompt");
        return JSON.parse(response.choices[0].message.tool_calls[0].function.arguments);
    }

    async getCharacterIllustration(imgDetails) {
        const prompt = "Create a fantasy realism illustration with rich, vibrant colors, detailed line work, " +
            "and traditional watercolor techniques. Here is the scene:  " + imgDetails;
        const response = await this.#getImage(prompt);
        console.log(response.data[0].url);
        return response.data[0].url;
    }
}