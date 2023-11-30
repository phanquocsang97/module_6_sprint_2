create database s_factory_coffee;
use s_factory_coffee;

create table `app_role`(
id bigint primary key auto_increment,
name varchar(255),
`type` varchar(255));

create table `app_user`(
id bigint primary key auto_increment,
email varchar(255),
`password` varchar(255),
user_name varchar(255)
);

create table `user_role`(
id bigint primary key auto_increment,
id_app_user bigint not null,
id_app_role bigint not null,
foreign key(id_app_user) references app_user(id),
foreign key(id_app_role) references app_role(id)
);

create table `customer`(
id bigint primary key auto_increment,
address varchar(255),
birthday date,
email varchar(255),
gender int,
`name` varchar(255),
phone_number varchar(255),
id_app_user bigint,
foreign key(id_app_user) references app_user(id)
);

create table `category`(
id bigint primary key auto_increment,
`name` varchar(255)
);

create table `product`(
id bigint primary key auto_increment,
`description` varchar(255),
how_to_use varchar(255),
ingredient varchar(255),
intended_user varchar(255),
manufactured_by varchar(255),
`name` varchar(255),
packaging varchar(255),
price varchar(255),
price_sale varchar(255),
quantity int,
`storage` varchar(255),
id_category bigint,
foreign key(id_category) references category(id)
);

create table `image` (
id bigint primary key auto_increment,
`name` varchar(255),
id_product bigint,
foreign key(id_product) references product(id)
);

create table `order`(
id bigint primary key auto_increment,
date_of_order date,
payment_status int,
time_of_order time,
total_money double,
id_app_user bigint,
foreign key(id_app_user) references app_user(id)
);



create table cart (
id bigint primary key auto_increment,
quantity_order int,
id_app_user bigint,
id_product bigint,
foreign key(id_app_user) references app_user(id),
foreign key(id_product) references product(id)
);

create table order_detail(
id bigint primary key auto_increment,
price_order double,
quantity int,
id_order bigint,
id_product bigint,
foreign key(id_product) references product(id),
foreign key(id_order) references `order`(id)
);

