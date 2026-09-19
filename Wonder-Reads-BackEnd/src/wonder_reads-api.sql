CREATE DATABASE IF NOT EXISTS `wonder_reads-api`;

USE `wonder_reads-api`;

SET FOREIGN_KEY_CHECKS = 0;

-- =========================
-- Table 1: students
-- =========================

CREATE TABLE `students` (
    id BIGINT NOT NULL AUTO_INCREMENT,
    contact_no VARCHAR(255),
    email VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR(255),
    username VARCHAR(255),
    role VARCHAR(255),
    PRIMARY KEY (id)
);

-- =========================
-- Table 2: readinglevel
-- =========================

CREATE TABLE `readinglevel` (
    id BIGINT NOT NULL AUTO_INCREMENT,
    grade VARCHAR(255),
    image VARCHAR(255),
    lexile VARCHAR(255),
    link VARCHAR(255),
    title VARCHAR(255),
    PRIMARY KEY (id)
);

-- =========================
-- Table 3: stories
-- =========================

CREATE TABLE `stories` (
    id BIGINT NOT NULL AUTO_INCREMENT,
    grade VARCHAR(255),
    text TEXT,
    image TEXT,
    title VARCHAR(255),
    PRIMARY KEY (id)
);

-- =========================
-- Table 4: quiz-qus
-- =========================

CREATE TABLE `quiz-qus` (
    id BIGINT NOT NULL AUTO_INCREMENT,
    correct_answer VARCHAR(255),
    question VARCHAR(255),
    story_id BIGINT,
    PRIMARY KEY (id),
    CONSTRAINT fk_quiz_question_story
        FOREIGN KEY (story_id)
        REFERENCES `stories`(id)
);

-- =========================
-- Table 5: quiz-ans
-- =========================

CREATE TABLE `quiz-ans` (
    id BIGINT NOT NULL AUTO_INCREMENT,
    answer VARCHAR(255),
    question_id BIGINT,
    PRIMARY KEY (id),
    CONSTRAINT fk_quiz_answer_question
        FOREIGN KEY (question_id)
        REFERENCES `quiz-qus`(id)
);

-- =========================
-- Table 6: own-story
-- =========================

CREATE TABLE `own-story` (
    story VARCHAR(700),
    story_id BIGINT NOT NULL AUTO_INCREMENT,
    student_id BIGINT,
    PRIMARY KEY (story_id),
    CONSTRAINT fk_own_story_student
        FOREIGN KEY (student_id)
        REFERENCES `students`(id)
);

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `own-story`
    (story_id, story, student_id)
VALUES
    (4,
     'The Little Garden-Part 1 - Maya discovered a beautiful garden behind her house. She cared for the flowers every morning and helped an injured bird until it could fly again. Moral: Kindness makes the world a better place.',
     2),

    (6,
     'Title: The Ant and the Leaf One day, a little ant fell into a puddle. It tried hard to climb out but kept slipping. A kind bird saw the ant and dropped a leaf into the water. The ant climbed onto the leaf and safely reached the shore. A few days later...',
     4),

    (7,
     'Title: The Little Seed Maya planted a tiny seed in her garden. Every day, she watered it, even though nothing appeared. After many days, Maya became impatient. She wanted to give up. But her mother said, "Keep caring for it. Good things take time."...',
     3),

    (8,
     'Title: The Little Butterfly A boy named Arjun loved butterflies. One day, he bought some butterfly larvae and placed them in a safe little garden. Every day, he gave them fresh leaves and watched them carefully. The tiny larvae grew bigger and bigger. ...',
     5),

    (9,
     'Title: The Broken Toy Maya saw a beautiful toy at her friend''s house. She wanted to play with it, but when she picked it up, it accidentally fell and broke. Maya was scared that her friend would be angry. Instead of hiding the broken toy, she told the truth and apologized. Her friend was upset, but she appreciated Maya''s honesty. Together, they tried to fix the toy. Moral: Telling the truth is always better than hiding a mistake.',
     6),

    (10,
     'Title: The Rabbit and the Lost Carrot One morning, a little rabbit found a big carrot near the forest. He was very happy and carried it home. On the way, he saw a small bird looking for food. The rabbit shared some of his carrot with the bird. A littl...',
     7),

    (11,
     'The Honest Boy Alex found a wallet on the road. It had money and an ID inside. He wanted to keep it, but he decided to return it to the owner. The owner was very happy and thanked Tom for being honest. Moral: Always be honest, even when no one was wat...',
     2);
     
     INSERT INTO `quiz-ans`
    (id, answer, question_id)
VALUES
    (101, 'Water', 1),
    (102, 'Milk', 1),
    (103, 'Bread', 1),
    (104, 'Toy', 1),
    (105, 'Dog', 2),
    (106, 'Cat', 2),
    (107, 'Bird', 2),
    (108, 'Rabbit', 2),
    (109, 'Sad', 3),
    (110, 'Angry', 3),
    (111, 'Happy', 3),
    (112, 'Scared', 3),
    (113, 'Mia', 4),
    (114, 'Lila', 4),
    (115, 'Emma', 4),
    (116, 'Sara', 4),
    (117, 'A bird', 5),
    (118, 'A deer', 5),
    (119, 'A golden butterfly', 5),
    (120, 'A rabbit', 5),
    (121, 'A deer', 6),
    (122, 'A fox', 6),
    (123, 'A cat', 6),
    (124, 'A squirrel', 6),
    (125, 'A forest spirit', 7),
    (126, 'A fairy', 7),
    (127, 'A wizard', 7),
    (128, 'A butterfly', 7),
    (129, 'The village leader', 8),
    (130, 'The forest little guardian', 8),
    (131, 'A butterfly keeper', 8),
    (132, 'A forest fairy', 8),
    (133, 'Luna', 9),
    (134, 'Lumo', 9),
    (135, 'Leo', 9),
    (136, 'Lumi', 9),
    (137, 'He could not swim', 10),
    (138, 'His glow was very faint', 10),
    (139, 'He was afraid of water', 10),
    (140, 'He followed the fish', 10),
    (141, 'A giant whale', 11),
    (142, 'A strong underwater storm', 11),
    (143, 'A big wave', 11),
    (144, 'A sea turtle', 11),
    (145, 'An old sea turtle', 12),
    (146, 'A dolphin', 12),
    (147, 'A whale', 12),
    (148, 'A starfish', 12),
    (149, 'Swimming faster', 13),
    (150, 'Finding his family', 13),
    (151, 'Helping small sea creatures', 13),
    (152, 'Reaching the ocean floor', 13),
    (153, 'Monday', 14),
    (154, 'Friday', 14),
    (155, 'Saturday', 14),
    (156, 'Sunday', 14),
    (157, 'A raincoat', 15),
    (158, 'An umbrella', 15),
    (159, 'Boots', 15),
    (160, 'A hat', 15),
    (161, 'Mia', 16),
    (162, 'Leo', 16),
    (163, 'Lumo', 16),
    (164, 'Jack', 16),
    (165, 'Gave him a coat', 17),
    (166, 'Walked home with him', 17),
    (167, 'Shared her umbrella', 17),
    (168, 'Gave him her shoes', 17),
    (169, 'Sad', 18),
    (170, 'Angry', 18),
    (171, 'Scared', 18),
    (172, 'Happy', 18),
    (173, 'His mother', 19),
    (174, 'His grandmother', 19),
    (175, 'His teacher', 19),
    (176, 'His sister', 19),
    (177, 'Rose seeds', 20),
    (178, 'Tulip seeds', 20),
    (179, 'Sunflower seeds', 20),
    (180, 'Apple seeds', 20),
    (181, 'Every morning', 21),
    (182, 'Every night', 21),
    (183, 'Once a week', 21),
    (184, 'At lunchtime', 21),
    (185, 'Red', 22),
    (186, 'Blue', 22),
    (187, 'Pink', 22),
    (188, 'Bright yellow', 22),
    (189, 'Proud', 23),
    (190, 'Sad', 23),
    (191, 'Angry', 23),
    (192, 'Afraid', 23),
    (193, 'Red', 24),
    (194, 'White', 24),
    (195, 'Blue', 24),
    (196, 'Green', 24),
    (197, 'Mud', 25),
    (198, 'Strawberries', 25),
    (199, 'Grass', 25),
    (200, 'Water', 25),
    (201, 'He cried', 26),
    (202, 'He went home', 26),
    (203, 'He kept walking', 26),
    (204, 'He took them off', 26),
    (205, 'Oak seed', 27),
    (206, 'Maple seed', 27),
    (207, 'Sunflower seed', 27),
    (208, 'Pine seed', 27),
    (209, 'Under the ground', 28),
    (210, 'In a river', 28),
    (211, 'On a branch high in the air', 28),
    (212, 'In a meadow', 28),
    (213, 'Butterflies', 29),
    (214, 'Rabbits', 29),
    (215, 'Ants', 29),
    (216, 'Squirrels', 29),
    (217, 'He was hungry', 30),
    (218, 'He liked his safe, warm home', 30),
    (219, 'He wanted to fly', 30),
    (220, 'He was looking for water', 30),
    (221, 'Growth is easy', 31),
    (222, 'Growth is boring', 31),
    (223, 'Growth always feels a bit scary at first', 31),
    (224, 'Growth should be avoided', 31),
    (225, 'Pip flew back home', 32),
    (226, 'Pip lost his grip and fell', 32),
    (227, 'Pip climbed higher', 32),
    (228, 'Pip hid under a leaf', 32),
    (229, 'His small wings', 33),
    (230, 'A bird', 33),
    (231, 'A leaf', 33),
    (232, 'The butterfly', 33),
    (233, 'In a pond', 34),
    (234, 'On a rock', 34),
    (235, 'In rich, warm soil', 34),
    (236, 'On a tree branch', 34),
    (237, 'He discovered it was thrilling', 35),
    (238, 'He became very angry', 35),
    (239, 'He fell asleep', 35),
    (240, 'He wanted to go back immediately', 35),
    (241, 'A giant oak tree', 36),
    (242, 'A grand maple tree', 36),
    (243, 'A colorful butterfly', 36),
    (244, 'A tall sunflower', 36);
    
    INSERT INTO `quiz-qus`
    (id, correct_answer, question, story_id)
VALUES
    (1, 'Milk', 'What did Mia give to the cat?', 1),
    (2, 'Cat', 'What animal does Mia see in her yard?', 1),
    (3, 'Happy', 'How do Mia and the cat feel at the end?', 1),

    (4, 'Lila', 'What was the girl name?', 2),
    (5, 'A golden butterfly', 'What did Lila follow into the forest?', 2),
    (6, 'A deer', 'What animal did Lila find trapped in thorny vines?', 2),
    (7, 'A forest spirit', 'What did the deer turn into?', 2),
    (8, 'The forest little guardian', 'What did Lila become after helping the deer?', 2),

    (9, 'Lumo', 'What was the name of the tiny jellyfish?', 3),
    (10, 'His glow was very faint', 'Why did Lumo often get lost?', 3),
    (11, 'A strong underwater storm', 'What separated Lumo from his family?', 3),
    (12, 'An old sea turtle', 'Who told Lumo to believe in his light?', 3),
    (13, 'Helping small sea creatures', 'What made Lumo''s glow become brighter?', 3),

    (14, 'Monday', 'What day was it in the story?', 4),
    (15, 'An umbrella', 'What did Sara take when it started raining?', 4),
    (16, 'Leo', 'Who did Sara see on the way to school?', 4),
    (17, 'Shared her umbrella', 'What did Sara do for Leo?', 4),
    (18, 'Happy', 'How did Sara feel at the end?', 4),

    (19, 'His grandmother', 'Who does Tom help in the garden?', 5),
    (20, 'Sunflower seeds', 'What seeds did Tom and his grandmother plant?', 5),
    (21, 'Every morning', 'When did Tom water the plants?', 5),
    (22, 'Bright yellow', 'What color was the sunflower?', 5),
    (23, 'Proud', 'How did Tom feel about his garden?', 5),

    (24, 'White', 'What color were Pete''s shoes at the beginning?', 6),
    (25, 'Strawberries', 'What did Pete step into that made his shoes red?', 6),
    (26, 'He kept walking', 'What did Pete do when his shoes changed color?', 6),

    (27, 'Maple seed', 'What kind of seed was Pip?', 7),
    (28, 'On a branch high in the air', 'Where did Pip live at the beginning of the story?', 7),
    (29, 'Ants', 'What animals did Pip watch marching across the grass?', 7),
    (30, 'He liked his safe, warm home', 'Why was Pip afraid of leaving his shell?', 7),
    (31, 'Growth always feels a bit scary at first', 'What did the butterfly tell Pip about growth?', 7),
    (32, 'Pip lost his grip and fell', 'What happened when the autumn wind became too strong?', 7),
    (33, 'His small wings', 'What helped Pip stay in the air?', 7),
    (34, 'In rich, warm soil', 'Where did Pip land?', 7),
    (35, 'He discovered it was thrilling', 'How did Pip feel during his journey through the air?', 7),
    (36, 'A grand maple tree', 'What was Pip ready to become?', 7);
    
    INSERT INTO `readinglevel`
    (id, grade, image, lexile, link, title)
VALUES
    (1,
     '1',
     'https://res.cloudinary.com/o7vbtffn/image/upload/v1783526740/r2_m7w30w.jpg',
     'BR-200L',
     '/Grade1Reading',
     'Reading Level 1'),

    (2,
     '2',
     'https://res.cloudinary.com/o7vbtffn/image/upload/v1783474816/r1_v51cl2.jpg',
     'BR-200L-400L',
     '/Grade2Reading',
     'Reading Level 2'),

    (3,
     '3',
     'https://res.cloudinary.com/o7vbtffn/image/upload/v1783526751/r3_c8bvtd.jpg',
     'BR-400L-600L',
     '/Grade3Reading',
     'Reading Level 3'),

    (4,
     '4',
     'https://res.cloudinary.com/o7vbtffn/image/upload/v1783526763/r4_ndvcsf.jpg',
     'BR-600L-700L',
     '/Grade4Reading',
     'Reading Level 4'),

    (5,
     '5',
     'https://res.cloudinary.com/o7vbtffn/image/upload/v1783526985/r6_o5oxpd.jpg',
     'BR-700L-800L',
     '/Grade5Reading',
     'Reading Level 5'),

    (6,
     'ALL',
     'https://res.cloudinary.com/o7vbtffn/image/upload/v1788540845/istockphoto-2246082356-612x612_enujcq.jpg',
     '-',
     '/OwnStories',
     'Kids OwnStory');
     
     INSERT INTO `story`
    (id, grade, text, image, title)
VALUES
    (
        1,
        '1',
        'Mia is a small girl. She sees a cat in her yard. The cat is black. It is tiny. “Hello, cat,” Mia says. The cat walks to Mia. It says, “Meow!” Mia smiles. She gives the cat milk. The cat drinks the milk. The cat is happy. Mia is happy too. Every d...',
        '["https://res.cloudinary.com/o7vbtffn/image/upload/v1783560914/s1-1_pypik8.png","https://res.cloudinary.com/o7vbtffn/image/upload/v1783560915/s1-2_hxpmaq.png","https://res.cloudinary.com/o7vbtffn/image/upload/v1783560915/s1-4_lg1lzn.png"]',
        'Mia and the Cat'
    ),

    (
        2,
        '2',
        'Once upon a time, in a quiet village near a glowing forest, lived a kind girl named Lila. Lila loved watching the butterflies that danced around the silver gate of the forest. The villagers said the forest was magical and dangerous, so no one was allowed...',
        '["https://res.cloudinary.com/o7vbtffn/image/upload/v1783611017/IMG_3918_oqu0ne.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1783611017/IMG_3920_n5rhgw.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1783611017/IMG_3921_kja2iw.jpg"]',
        'A Girl in the Magic Forest'
    ),

    (
        3,
        '3',
        'Deep under the ocean, in a world filled with glowing corals and dancing waves, there lived a tiny jellyfish named Lumo. Unlike other jellyfish, Lumo’s glow was very faint. Because of that, he often got lost in the dark sea currents and felt invisible. ...',
        '["https://res.cloudinary.com/o7vbtffn/image/upload/v1783611235/IMG_3923_n2qfyo.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1783611234/IMG_3924_g6rxgg.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1783611234/IMG_3925_ttxxh4.jpg"]',
        'The Little Jellyfish Who Lost Its Glow'
    ),

    (
        4,
        '4',
        'It is Monday morning. Sara gets ready for school. Suddenly, it starts raining very hard. Sara takes her umbrella and leaves. On the way, she sees her friend Leo. Leo does not have an umbrella. Sara shares her umbrella with him. They walk carefully to sch...',
        '["https://res.cloudinary.com/o7vbtffn/image/upload/v1783612211/RD1_k0qyoj.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1783612264/RD2_groyys.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1783612294/RD3_gobz5p.jpg"]',
        'The Rainy School Day'
    ),

    (
        5,
        '4',
        'Tom helps his grandmother in the garden. They plant flowers every weekend. One day, they plant sunflower seeds. Tom waters them every morning. After many days, small green plants grow. Tom is excited to see them. One morning, a tall sunflower blooms! It ...',
        '["https://res.cloudinary.com/o7vbtffn/image/upload/v1783613110/GP1_nibqf1_bkcejv.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1783612912/GP2_yh0qs5.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1783612912/GP3_ww6db4.jpg"]',
        'The Garden Surprise -Part 1'
    ),

    (
        6,
        '1',
        'Pete walks down the street in his new white shoes, singing a happy song. As he goes, he steps in strawberries, blueberries, and mud, changing his shoes from red to blue and brown, yet he never cries and simply changes the lyrics to match his shoes’ new...',
        '["https://res.cloudinary.com/o7vbtffn/image/upload/v1788546776/p1_k5c6es.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1788546776/p_oiwxmt.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1788546776/p2_sdu7cw.jpg"]',
        'Pete The Cat'
    ),

    (
        7,
        '5',
        'Deep in the shadow of a giant oak tree lived a tiny maple seed named Pip. Pip spent his days tucked inside a cozy brown shell. He loved his branch high up in the air. From his perch, he could watch the busy ants march across the grass below. He could hea...',
        '["https://res.cloudinary.com/o7vbtffn/image/upload/v1788547616/G5.1_vdyc7g.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1788547617/G5.3_ipjurb.jpg","https://res.cloudinary.com/o7vbtffn/image/upload/v1788547777/g5_dc81l9.jpg"]',
        'The Tiny Seed’s Big Leap'
    );
    
    INSERT INTO `students`
    (id, contact_no, email, name, password, username, role)
VALUES
    (1, '903-878-5875', 'jlakshmipriya@gmail.com', 'Lakshmi Priya', '12345678', 'priya', 'ADMIN'),
    (2, '903-878-7775', 'meena@gmail.com', 'Meena', '2222', 'meena', 'STUDENT'),
    (3, '903-878-5145', 'dharsh@gmail.com', 'Dharsh', '3333', 'dharsh', 'STUDENT'),
    (4, '3147589632', 'amy@gmail.com', 'Amy', '4444', 'amy', 'STUDENT'),
    (5, '3148569874', 'wayne@gmail.com', 'Wayne', '5555', 'wayne', 'STUDENT'),
    (6, '9036587452', 'hope@gmail.com', 'Hope', NULL, NULL, NULL),
    (7, '3149875642', 'raj@gmail.com', 'Raj', NULL, NULL, NULL),
    (8, '7896542123', 'dhars@gmail.com', 'dharsh', NULL, NULL, NULL),
    (9, '7896541236', 'lll@gmail.com', 'lll', NULL, NULL, NULL);