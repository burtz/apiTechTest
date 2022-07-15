CREATE TABLE familyTree (
    id int,
    forename VARCHAR(255),
    surname VARCHAR(255),
    gender VARCHAR(6),
    fatherId int,
    motherId int
);

INSERT INTO familyTree(id, forename,surname,gender,fatherId,motherId) VALUES
    (1,'Philip','Burton','Male',NULL,NULL),
    (2,'Susan','Burton','Female',NULL,NULL),
    (3,'Simon','Burton','Male',1,2),
    (4,'Joanne','Satariano','Female',NULL,NULL),
    (5,'Ralph','Burton','Male',3,4),
    (6,'Mabel','Burton','Female',3,4);

