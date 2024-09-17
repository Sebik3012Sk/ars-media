-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Ned 15. zář 2024, 15:17
-- Verze serveru: 10.4.32-MariaDB
-- Verze PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `ars-media`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `posts`
--

CREATE TABLE `posts` (
  `post_name` text NOT NULL,
  `likes` int(11) NOT NULL,
  `description` text NOT NULL,
  `id` int(11) NOT NULL,
  `post_content` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `posts`
--

INSERT INTO `posts` (`post_name`, `likes`, `description`, `id`, `post_content`, `image`) VALUES
('Kurva Raketa', 28000, 'Kurva Suka Bliat Pojebala Ma tiktoka', 1, 'How do you live in this fucking world where do you destroyeed everything fucking president', 'https://th.bing.com/th/id/OIP.eHVem3Phk0BQjfbZ90VA6QHaJ5?w=128&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'),
('Kit Song Tutorial', 20000, 'Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , Meow , You are dead bro', 2, 'No stres do přírody ', '');

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
