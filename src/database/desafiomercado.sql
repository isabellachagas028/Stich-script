CREATE DATABASE SUPERMERCADO;
USE SUPERMERCADO;
CREATE TABLE colonias (
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(50) ,
descricao VARCHAR(100),
fkcolonia_parceira INT ,
PRIMARY KEY (id),
foreign key(fkcolonia_parceira) references colonia(id));

CREATE TABLE armas (
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(50) ,
descricao VARCHAR(100) ,
qtd_dano INT ,
tipo VARCHAR(20) ,
PRIMARY KEY (id));
CREATE TABLE personagens (
id INT NOT NULL,
nome VARCHAR(100) ,
vida DATE ,
fkarma int,
fkpowerup int,
fkcolonia INT,
PRIMARY KEY (id),
foreign key(fkarma) references arma(id),
foreign key (fkpowerup) references powerup(id),
FOREIGN KEY (fkcolonia) REFERENCES colonia (id) );


CREATE TABLE batalha (
id INT NOT NULL,
descricao VARCHAR(100) ,
PRIMARY KEY (id)) ;

CREATE TABLE batalha_colonia (
fkcolonia INT NOT NULL,
fkbatalha INT NOT NULL, 
PRIMARY KEY (fkcolonias, fkbatalhas),
FOREIGN KEY (fkcolonias) REFERENCES colonias (id) ,
FOREIGN KEY (fkbatalhas) REFERENCES batalha (id) );
CREATE TABLE powerups (
id INT NOT NULL AUTO_INCREMENT,
descricao VARCHAR(100),
dano int ,
PRIMARY KEY (id)) ;
-- Table mydb.powerups_armas
nagens (id));
-- Insert da colonia
insert into colonia(id,nome,descricao)
values(1,"Frutas e vegetais","Reino das frutas, aliados do Papel Kraft");
('Mustaqueira', 'Tribo do setor da churrasqueira';
-- Inser personagens 
INSERT INTO personagens (id, nome, vida, poder, fkcolonias) VALUES
(201, 'Pepino', '2025-12-31', 'Sabedoria e Fatiamento Preciso', 5),
(202, 'Banana', '2025-10-30', 'Escorregadio, golpes rápidos', 5),
(203, 'Maçã', '2025-11-15', 'Casca dura, resistência alta', 5),
(204, 'Abacaxi', '2025-09-25', 'Defesa máxima com espinhos', 5),
(205, 'Cenoura', '2025-10-20', 'Investida perfurante', 5),
(206, 'Melancia', '2025-12-10', 'Ataque de esmagamento', 5),
(207, 'Uva', '2025-08-28', 'Multiplicação e confusão', 5),
(208, 'Limão', '2025-09-10', 'Jato de ácido cítrico', 5),
(209, 'Morango', '2025-11-01', 'Veneno adocicado', 5),
(210, 'Cebola', '2025-12-05', 'Ataque de choro aos inimigos', 5)
INSERT INTO personagens (id, nome, vida, poder, fkcolonias) VALUES
(1, 'Líder Flamejante', '2025-12-01', 'Queimadas', 1),
(2, 'Churrasquinhos', '2025-06-15', 'Fogo Veloz', 1),
(3, 'Lorde Espetokus', '2025-06-15', 'Fúria Grelhadora', 1), 
(4, 'General Braseira', '2025-06-20', 'Comando Ardente', 1), 
(5, 'Droide 7-TEMP', '2025-06-18', 'Controle de Temperatura', 1), 
(6, 'Mestre Alhobi', '2025-08-01', 'Aura Defumada', 1), 
(7, 'Padawan Picanha', '2025-12-25', 'Fatiamento Preciso', 1), 
(8, 'Caçador de Linguiça', '2025-11-15', 'Golpe Enrolado', 1), 
(9, 'Sabrelasco', '2025-09-09', 'Corte Queimante', 1),
(10, 'Molhossauro', '2024-12-01', 'Rajada Barbecue', 1);

