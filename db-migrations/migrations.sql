CREATE DATABASE payment_system_dev
WITH
OWNER = postgres
ENCODING = 'UTF8'
LC_COLLATE = 'Polish_Poland.1250'
LC_CTYPE = 'Polish_Poland.1250'
TABLESPACE = pg_default
CONNECTION LIMIT = -1;

CREATE TABLE shoes
(
    "id" SERIAL,
    "productName" VARCHAR,
    "productColor" VARCHAR,
    "productSize" VARCHAR,
    "productPrice" INTEGER,
    CONSTRAINT tshirts_pkey PRIMARY KEY (id)
);

INSERT INTO shoes ("productName","productColor","productSize","productPrice")
VALUES ('Air Jordan IV','Black', '42.5', 1234);
INSERT INTO shoes ("productName","productColor","productSize","productPrice")
VALUES ('Asics Saga','White', '48.5', 560);
INSERT INTO shoes ("productName","productColor","productSize","productPrice")
VALUES ('Reebok Classic','Green', '41', 360);


CREATE TABLE credit_card
  (
    "id" SERIAL,
  	"cardNumber" VARCHAR,
  	"cardHolder" VARCHAR,
  	"expirationMonth" INTEGER,
	"expirationYear" INTEGER,
  	"ccvCode" VARCHAR,
  	CONSTRAINT cards_pkey PRIMARY KEY (id)
  );

  INSERT INTO credit_card ("cardNumber","cardHolder","expirationMonth","expirationYear","ccvCode")
  VALUES ('5764 4321 6321 7543','John Doe', '20','12','356');

  INSERT INTO credit_card ("cardNumber","cardHolder","expirationMonth","expirationYear","ccvCode")
  VALUES ('5764 4321 6321 7543','John Doe', '20','12','123');

