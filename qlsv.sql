-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2023 at 04:09 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!40101 SET NAMES utf8mb4 */
;

--
-- Database: `qlsv`
--
-- --------------------------------------------------------
--
-- Table structure for table `posts`
--
CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

--
-- Dumping data for table `posts`
--
INSERT INTO
  `posts` (`id`, `title`, `content`)
VALUES
  (1, 'Title 1', 'Content 1'),
  (3, 'Title 3', 'Content 3');

/* -- --------------------------------------------------------
--
-- Table structure for table `projects`
--
CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  background TEXT,
  tags VARCHAR(255),
  link VARCHAR(255),
  codeLink VARCHAR(255),
  img_hero LONGBLOB,
  img_portfolio LONGBLOB,
  img_preview_1 LONGBLOB,
  img_preview_2 LONGBLOB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into
  projects (
    title,
    description,
    background,
    tags,
    link,
    codeLink,
    img_hero,
    img_portfolio,
    img_preview_1,
    img_preview_2
  )
values
  (
    'Entertainment',
    'This project required me to build a fully responsive landing page to the designs provided. I used Angular, along with Tailwind Css.Json-Server to be able to use the request like get and put. To enter this project you need to use the following credentials: email: test@tes.com password: password. You can register but take care of the data u put its not safe. You just need an valid email format and a simple password.',
    'This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    'Tailwind / Angular / Typescript / Json-Server',
    'https://frontendmentor-entertainment-challeng.netlify.app/trending',
    'https://github.com/GendPh/entertainment-web-app',
    "https://photos.fife.usercontent.google.com/pw/AP1GczNI3yv4NEL72y-sK2W5W6tfHi4V-j1mxrTVVvFy_s21UjDaNeSher4=w1893-h641-s-no-gm?authuser=1",
    "https://photos.fife.usercontent.google.com/pw/AP1GczNYrdZccPo0L0g-qulQ_TfgvmVgy9IFkGqpw7X0h-GePlzmsA7QfWs=w1440-h1056-s-no-gm?authuser=1",
    "https://photos.fife.usercontent.google.com/pw/AP1GczMINMee_hwBs5-fCFIFPVO8T7eooEimBLGsH7GH2hMTLSTVS40Sp_8=w700-h513-s-no-gm?authuser=1",
    "https://photos.fife.usercontent.google.com/pw/AP1GczM9DBZXRgLkozJ_S7Gi9jhdJQ1wyyU8MiFmsRJMIRr269ALMAb7j5E=w700-h513-s-no-gm?authuser=1"
  );
 */
-- --------------------------------------------------------
--
-- Table structure for table `users`
--
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

--
-- Dumping data for table `users`
--
INSERT INTO
  `users` (`id`, `email`, `password`, `name`)
VALUES
  (
    3,
    'test2@gmail.com',
    '$2b$10$g4lLJqz4GZFX0roLe8RhbOifL9C251qbFDmn8yb240NixhnxnxhPK',
    'NHN2'
  ),
  (
    4,
    'test3@gmail.com',
    '$2b$10$W13dOOFtSX.l5lg05wfk2.Puqyu1WKZ5Ynr1BspmWC6/3yJ3Bg.1.',
    'NHN3'
  );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `posts`
--
ALTER TABLE
  `posts`
ADD
  PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE
  `users`
ADD
  PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE
  `posts`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE
  `users`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 5;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;