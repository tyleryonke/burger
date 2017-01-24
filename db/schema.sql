CREATE database burgers_db;

USE burgers_db;

CREATE table burgers (
	id INT AUTO_INCREMENT,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;