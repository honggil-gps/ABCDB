drop database if exists group5;
create database group5;
use group5;

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
    `product_num` int(8) NOT NULL COMMENT '앞 3자리는 브랜드, 중간 3자리는 사이즈',
    `product_name` varchar(20) NOT NULL,
    `product_unit` int(3) NULL,
    `product_size` int(3) NOT NULL COMMENT '신발 사이즈',
    `product_price` int(9) NOT NULL,
    PRIMARY KEY (`product_num`)
);

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
    `user_id` varchar(4) NOT NULL,
    `user_pwd` varchar(20) NOT NULL,
    `user_email` varchar(20) NOT NULL,
    `user_phone` char(11) NOT NULL,
    `user_address` varchar(50) NULL,
    `user_name` varchar(30) NOT NULL,
    PRIMARY KEY (`user_id`)
);

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
    `orders_num` varchar(8) NOT NULL,
    `orders_user_id` varchar(4) NOT NULL,
    `orders_product_num` int(8) NOT NULL COMMENT '상품번호를 적어보아요',
    `orders_count` int(4) NOT NULL DEFAULT 0,
    `orders_price` int(6) NOT NULL,
    PRIMARY KEY (`orders_num`),
    FOREIGN KEY (`orders_user_id`) REFERENCES `user` (`user_id`) on delete cascade,
    FOREIGN KEY (`orders_product_num`) REFERENCES `Product` (`product_num`) on delete cascade
);
DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
    `cart_product_num` int(16) NOT NULL COMMENT '상품번호를 적어보아요',
    `cart_user_id` varchar(4) NOT NULL,
    PRIMARY KEY (`cart_product_num`, `cart_user_id`),
    FOREIGN KEY (`cart_product_num`) REFERENCES `Product` (`product_num`)
    on delete cascade,
    FOREIGN KEY (`cart_user_id`) REFERENCES `user` (`user_id`)
    on delete cascade
);

DROP TABLE IF EXISTS `payment`; 

CREATE TABLE `payment` (
    `payment_orders_num` varchar(10) NOT NULL,
    `payment_card_num` CHAR(16) NULL,
    PRIMARY KEY (`payment_orders_num`),
    FOREIGN KEY (`payment_orders_num`) REFERENCES `orders` (`orders_num`)
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
