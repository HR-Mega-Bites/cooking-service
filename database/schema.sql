DROP DATABASE IF EXISTS "instructions";
CREATE DATABASE "instructions";
\connect instructions;
CREATE TABLE recipes(
  id SERIAL PRIMARY KEY,
  info JSON NOT NULL
);

INSERT INTO recipes (info) VALUES
  (
    '{
      "recipe": {
        "step": 1,
        "title": "cheesesteak",
        "photo":  "https://cook.ba/2INgFln",
        "instruction": "Preheat the oven to 450°F. Wash and dry the fresh produce. Cut the potatoes lengthwise into 1/4-inch-thick sticks. Cut off and discard the bottom 1/2 inch of the broccoli stem; cut the broccoli into large florets. Combine in a large bowl."
      }
    }'
);
