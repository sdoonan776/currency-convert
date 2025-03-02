FROM php:8.3-apache

WORKDIR /srv/app

COPY --chown=www-data:www-data . /srv/app

COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf
COPY .docker/php/ini/conf.d/memory_limit.ini /usr/local/etc/php/conf.d/memory_limit.ini

RUN apt-get update && apt-get install -y \
    git \
    zip \
    curl \
    sudo \
    unzip \
    libicu-dev \
    libbz2-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libmcrypt-dev \
    libreadline-dev \
    libfreetype6-dev \
    g++ \
    wget

RUN docker-php-ext-configure gd --with-freetype --with-jpeg

RUN docker-php-ext-install \
    -j$(nproc) gd \
    bz2 \
    zip \
    intl \
    pcntl \
    iconv \
    bcmath \
    opcache \
    calendar \
    pdo_mysql

COPY --from=public.ecr.aws/composer/composer:latest /usr/bin/composer /usr/bin/composer
COPY . .

RUN composer update
RUN chmod -R 777 storage
RUN service apache2 restart

RUN docker-php-ext-install pdo pdo_mysql\
    && a2enmod rewrite
