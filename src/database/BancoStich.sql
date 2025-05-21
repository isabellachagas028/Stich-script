create database stitch;
use stitch;
create table usuario(
id int auto_increment primary key,
nome varchar(40),
email varchar(100),
senha varchar(20));
select* from usuario;

create table projetos(
id int auto_increment primary key,
nome varchar(50),
descricao varchar(200),
dt_inicio date default(current_timestamp()),
fio varchar (40),
agulha varchar(40),
estado varchar(20),
dt_final date,
fkUsuario int,
imagem varchar(255),
foreign key (fkUsuario) references usuario(id));
INSERT INTO usuario (nome, email, senha) VALUES
('Ana Silva', 'ana.silva@example.com', 'senha123'),
('Bruno Mendes', 'bruno.mendes@example.com', 'bruno456'),
('Carla Souza', 'carla.souza@example.com', 'carlinha789');

-- Inserting data into the 'projeto' table
INSERT INTO projetos (nome, descricaco, dt_inicio, fio, agulha, estado, dt_final, fkUsuario, imagem) VALUES
('Cachecol de Inverno', 'Um cachecol longo e quente para os dias frios.', '2023-01-15', 'Lã Merino', 'Agulha 5mm', 'Em Andamento', NULL, 4, 'cachecol_inverno.jpg'),
('Amigurumi Polvo', 'Um polvo de crochê fofo para decoração.', '2023-02-01', 'Fio Amigurumi', 'Agulha Crochê 3mm', 'Concluído', '2023-02-20', 4, 'polvo_amigurumi.jpg');

select* from projetos where fkusuario=1


