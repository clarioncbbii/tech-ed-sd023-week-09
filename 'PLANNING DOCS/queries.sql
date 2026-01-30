--! This file is a reminder to submit:

--* Schema visualiser screenshot 
see './database-schema.jpg'

--* SQL queries from your editor on Supabase

-- create users table
CREATE TABLE IF NOT EXISTS clariville_users (
  id TEXT PRIMARY KEY ,
  username VARCHAR,
  location VARCHAR,
  bio TEXT,
  interests TEXT
);

-- create posts table
CREATE TABLE IF NOT EXISTS clariville_posts (
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
user_post TEXT,
user_id TEXT REFERENCES clariville_users(id) -- foreign key is not generated; you need to add it!
);

-- other queries: 
SELECT clariville_posts.*, clariville_users.* FROM clariville_posts JOIN clariville_users ON clariville_posts.user_id = clariville_users.id;
