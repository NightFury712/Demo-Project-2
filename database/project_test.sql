-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 23, 2021 lúc 11:39 AM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB
-- Phiên bản PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `project_test`
--

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `issues_my_first_project`
--

CREATE TABLE `issues_my_first_project` (
  `type` varchar(50) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `subject` varchar(150) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `priority` varchar(50) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `dueDate` varchar(100) DEFAULT NULL,
  `created` varchar(100) DEFAULT NULL,
  `assignee` varchar(50) DEFAULT NULL,
  `milestone` varchar(50) DEFAULT NULL,
  `version` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `issues_my_firt_project`
--

CREATE TABLE `issues_my_firt_project` (
  `type` varchar(50) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `subject` varchar(150) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `priority` varchar(50) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `dueDate` varchar(100) DEFAULT NULL,
  `created` varchar(100) DEFAULT NULL,
  `assignee` varchar(50) DEFAULT NULL,
  `milestone` varchar(50) DEFAULT NULL,
  `version` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `issues_my_firt_project`
--

INSERT INTO `issues_my_firt_project` (`type`, `id`, `subject`, `description`, `status`, `priority`, `category`, `dueDate`, `created`, `assignee`, `milestone`, `version`) VALUES
('Bug', 1, 'undefined', 'this is my seccond testing api', 'Open', 'Low', 'none', '12:50 March', 'By admin', 'Cuong map dit hihi', 'none', '1.8.5');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `members`
--

INSERT INTO `members` (`id`, `name`, `email`) VALUES
(1, 'Đăng Hoàng', 'haidangk63@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `project_name`
--

CREATE TABLE `project_name` (
  `project_ID` decimal(10,0) NOT NULL,
  `project_Name` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `project_Key` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `project_name`
--

INSERT INTO `project_name` (`project_ID`, `project_Name`, `project_Key`) VALUES
('0', 'Test API lại nè', 'TAG_324'),
('0', 'Configuration Management', 'CM_123'),
('0', 'Hey guy test button', 'CPM_1234'),
('0', 'Testing', 'GEW_23');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `issues_my_first_project`
--
ALTER TABLE `issues_my_first_project`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `issues_my_firt_project`
--
ALTER TABLE `issues_my_firt_project`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `issues_my_first_project`
--
ALTER TABLE `issues_my_first_project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `issues_my_firt_project`
--
ALTER TABLE `issues_my_firt_project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
