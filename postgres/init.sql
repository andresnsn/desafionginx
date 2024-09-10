CREATE TABLE IF NOT EXISTS people (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO people (name) VALUES ('André'), ('Haru'), ('Sinka'), ('Louyse'), ('Keytaro');