### RealityFlix watched content extractor

# To run:

    - Copy main into browser's console
    - Returns JSON with following schema:
        ```{
            "items": [
                {
                    "id": { "type": "string", "required": true },
                    "date_watched": { "type": "string", "description": "Last watched time, ISO8601 format" },
                    "watch_secs": { "type": "integer",
                    "description": "How much has been watched, in seconds" },
                    "total_secs": { "type": "integer", "description": "Total length of content, in seconds" },
                    "title": { "type": "string", "description": "Title of show, NOT episode" },
                    "episode_title": { "type": "string", "description": "Title of episode" },
                    "episode_number": { "type": "integer" },
                    "season_number": { "type": "integer" }
                }
            ]
        }```
