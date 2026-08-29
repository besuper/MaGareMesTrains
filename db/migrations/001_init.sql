CREATE DATABASE IF NOT EXISTS `magaremestrains`
  DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `magaremestrains`;

CREATE TABLE IF NOT EXISTS `util` (
  `id`     INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom`    VARCHAR(64)  NOT NULL DEFAULT '',
  `train`  INT          NOT NULL DEFAULT 0,
  `retard` INT          NOT NULL DEFAULT 0,
  `heure`  INT          NOT NULL DEFAULT 0,
  `date`   VARCHAR(20)  NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_util_nom` (`nom`),
  KEY `idx_util_train` (`train` DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `stat2` (
  `id`      INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `no`      VARCHAR(64)  NOT NULL DEFAULT '',
  `nom`     VARCHAR(64)  NOT NULL DEFAULT '',
  `date1`   VARCHAR(20)  NOT NULL DEFAULT '',
  `reserve` INT          NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_stat2_nom` (`nom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `stat3` (
  `id`     INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom`    VARCHAR(64)  NOT NULL DEFAULT '',
  `train`  INT          NOT NULL DEFAULT 0,
  `retard` INT          NOT NULL DEFAULT 0,
  `date`   VARCHAR(20)  NOT NULL DEFAULT '',
  `util`   VARCHAR(64)  NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `idx_stat3_nom` (`nom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `util` (`nom`) VALUES ('Visiteur');
