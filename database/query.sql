# database precily
# ------------------------------------------------------------

CREATE DATABASE precily;


# table components
# ------------------------------------------------------------

CREATE TABLE precily.components (
    `id` bigint(20) NOT NULL, 
    `name` varchar(20) NOT NULL DEFAULT '', 
    `data` varchar(255), 
    `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

# table addUpdateCount
# ------------------------------------------------------------

CREATE TABLE precily.addUpdateCount (
    `add` bigint(20)  DEFAULT 0, 
    `update` bigint(20) DEFAULT 0, 
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`)
);


# initial record in addUpdateCount table
# ----------------------------------------------------------
insert into precily.addUpdateCount values(0,0, 1)