DROP TABLE IF EXISTS `Product`;

CREATE TABLE `Product` (
	`product_num`	int(8)	NOT NULL	COMMENT '뒤 3자리는 사이즈',
	`product_name`	varchar(20)	NOT NULL,
	`unit`	number(3)	NULL,
	`size`	int(3)	NOT NULL	COMMENT '신발 사이즈',
	`price`	int(9)	NOT NULL
);

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
	`userid`	varchar(16)	NOT NULL,
	`user_pwd`	varchar(20)	NOT NULL,
	`user_email`	varchar(20)	NOT NULL,
	`user_phone`	char(11)	NOT NULL,
	`user_address`	varchar(50)	NULL,
	`user_name`	varchar(30)	NOT NULL
);

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
	`Order_num`	varchar(8)	NOT NULL,
	`userid`	int(4)	NOT NULL,
	`product_num`	varchar(4)	NOT NULL	COMMENT '상품번호를 적어보아요',
	`count`	int(4)	NOT NULL	DEFAULT 0,
	`pirce`	int(6)	NOT NULL
);

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
	`product_num`	varchar(16)	NOT NULL	COMMENT '상품번호를 적어보아요',
	`userid`	int(4)	NOT NULL
);

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
	`Order_num`	varchar(10)	NOT NULL,
	`card_num`	VARCHAR(255)	NULL
);

ALTER TABLE `Product` ADD CONSTRAINT `PK_PRODUCT` PRIMARY KEY (
	`product_num`
);

ALTER TABLE `user` ADD CONSTRAINT `PK_USER` PRIMARY KEY (
	`userid`
);

ALTER TABLE `order` ADD CONSTRAINT `PK_ORDER` PRIMARY KEY (
	`Order_num`
);

ALTER TABLE `cart` ADD CONSTRAINT `PK_CART` PRIMARY KEY (
	`product_num`,
	`userid`
);

ALTER TABLE `payment` ADD CONSTRAINT `PK_PAYMENT` PRIMARY KEY (
	`Order_num`
);

ALTER TABLE `order` ADD CONSTRAINT `FK_cart_TO_order_1` FOREIGN KEY (
	`userid`
)
REFERENCES `cart` (
	`userid`
);

ALTER TABLE `order` ADD CONSTRAINT `FK_cart_TO_order_2` FOREIGN KEY (
	`product_num`
)
REFERENCES `cart` (
	`product_num`
);

ALTER TABLE `cart` ADD CONSTRAINT `FK_Product_TO_cart_1` FOREIGN KEY (
	`product_num`
)
REFERENCES `Product` (
	`product_num`
);

ALTER TABLE `cart` ADD CONSTRAINT `FK_user_TO_cart_1` FOREIGN KEY (
	`userid`
)
REFERENCES `user` (
	`userid`
);

ALTER TABLE `payment` ADD CONSTRAINT `FK_order_TO_payment_1` FOREIGN KEY (
	`Order_num`
)
REFERENCES `order` (
	`Order_num`
);

