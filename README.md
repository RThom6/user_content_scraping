### RealityFlix watched content extractor

# To run:

    - Copy main into browser's console
    - Returns JSON with following schema:
        {
            "items": [
                {
                    "id": { "type": "string", "required": true },
                    "date_watched": { "type": "string", "description": "Last watched time, ISO8601 format" },
                    "watch_secs": { "type": "integer",
                    "total_secs": { "type": "integer", "description": "Total length of content, in seconds" },
                    "title": { "type": "string", "description": "Title of show, NOT episode" },
                    "episode_title": { "type": "string", "description": "Title of episode" },
                    "episode_number": { "type": "integer" },
                    "season_number": { "type": "integer" }
                }
            ]
        }

# Additional tasks

    - How would you make the code testable? Split the solution into multiple functions. This would allow for unit testing on each function to check for edge cases and functionality. Function that gets data and one that processes it.
    - What could you do to make the code bandwidth efficient? Not sure about this, with access to the server I could look into making an API for getting just the information needed and not have to load the whole page.
    - How would you account for regional content blocks? Could use a proxy in a different region.
