FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
        libpng-dev \
    && docker-php-ext-install gd pdo pdo_mysql mysqli

RUN a2enmod deflate
RUN a2enmod expires
RUN a2enmod rewrite
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80