drop database if exists group5;
create database group5;
use group5;

DROP TABLE IF EXISTS `Product`;

CREATE TABLE `Product` (
    `product_num` int(8) NOT NULL COMMENT '뒤 3자리는 사이즈',
    `product_name` varchar(20) NOT NULL,
    `unit` int(3) NULL,
    `size` int(3) NOT NULL COMMENT '신발 사이즈',
    `price` int(9) NOT NULL,
    PRIMARY KEY (`product_num`)
);

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
    `userid` varchar(4) NOT NULL,
    `user_pwd` varchar(20) NOT NULL,
    `user_email` varchar(20) NOT NULL,
    `user_phone` char(11) NOT NULL,
    `user_address` varchar(50) NULL,
    `user_name` varchar(30) NOT NULL,
    PRIMARY KEY (`userid`)
);

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
    `Order_num` varchar(8) NOT NULL,
    `userid` varchar(4) NOT NULL,
    `product_num` int(8) NOT NULL COMMENT '상품번호를 적어보아요',
    `count` int(4) NOT NULL DEFAULT 0,
    `price` int(6) NOT NULL,
    PRIMARY KEY (`Order_num`),
    FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) on delete cascade,
    FOREIGN KEY (`product_num`) REFERENCES `Product` (`product_num`) on delete cascade
);
DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
    `product_num` int(16) NOT NULL COMMENT '상품번호를 적어보아요',
    `userid` varchar(4) NOT NULL,
    PRIMARY KEY (`product_num`, `userid`),
    FOREIGN KEY (`product_num`) REFERENCES `Product` (`product_num`)
    on delete cascade,
    FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
    on delete cascade
);

DROP TABLE IF EXISTS `payment`; 

CREATE TABLE `payment` (
    `Order_num` varchar(10) NOT NULL,
    `card_num` CHAR(16) NULL,
    PRIMARY KEY (`Order_num`),
    FOREIGN KEY (`Order_num`) REFERENCES `orders` (`Order_num`)
    on delete cascade
);

select * from product;
select * from user;
select * from cart;
select * from orders;
select * from payment;

delete from product;
delete from user;
delete from orders;
delete from cart;
delete from payment;