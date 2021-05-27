-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2019 at 05:55 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rental`
--

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `locality` varchar(100) NOT NULL,
  `city` varchar(20) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`locality`, `city`, `id`) VALUES
('Nagwara', 'Bangalore', 1),
('Koramangala', 'Bangalore', 3),
('Kalyan Nagar', 'Bangalore', 4),
('Whitefield', 'Bangalore', 5),
('Indira Nagar', 'Bangalore', 6),
('Vasant Kunj', 'Delhi', 11),
('Mayur Vihar', 'Delhi', 12),
('Karol Bagh', 'Delhi', 13),
('Hauz Khas', 'Delhi', 14),
('Dwaraka', 'Delhi', 15),
('Chimbali', 'Pune', 21),
('Khadakwasla', 'Pune', 22),
('Wagholi', 'Pune', 23),
('Ganj Peth', 'Pune', 24),
('Hinjewadi', 'Pune', 25),
('Gachibowli', 'Hyderabad', 26),
('HITEC City', 'Hyderabad', 27),
('Nallagandla', 'Hyderabad', 28),
('Chandanagar', 'Hyderabad', 29),
('Manikonda', 'Hyderabad', 30),
('Bandra Bandstand', 'Mumbai', 31),
('Malabar Hill', 'Mumbai', 32),
('Altamount Road', 'Mumbai', 33),
('Hiranandani, Powai', 'Mumbai', 34),
('Pali Hill, Bandra', 'Mumbai', 35);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
