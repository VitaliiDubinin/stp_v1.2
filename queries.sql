CREATE TABLE `farmDB`.`product2` 
(
    `id` INT NOT NULL AUTO_INCREMENT ,
    `product_name` VARCHAR(100) NOT NULL ,
    `price` FLOAT NOT NULL , `user_id` INT NOT NULL ,
    `description` TEXT NOT NULL ,
    `image` VARCHAR(255) NULL DEFAULT NULL , 
    `quantity` INT NOT NULL , 
    `unit` VARCHAR(50) NOT NULL , 
    PRIMARY KEY (`id`)
    
) ENGINE = InnoDB;
/*nahom products*/


INSERT INTO `product2` (`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES (NULL, 'rice', '1.55', '1', 'straight from asia', NULL, 50, 'kg');


INSERT INTO `product2` 
(`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES 
(NULL, '', '', '', '', NULL, , '');




/* victor */
INSERT INTO `product2` (`id`, `product_name`, `price`, `user_id`, `description`, `image`, `quantity`, `unit`) 
VALUES (NULL, 'bananas', '0.50', '4', 'bananas from the jungle ', NULL, '200', 'kg');