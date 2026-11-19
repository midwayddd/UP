# Laravel + Docker Compose

Готовая локальная среда разработки на Docker Compose: Laravel, PHP 8.3-FPM, Nginx, MySQL 8 и phpMyAdmin.

## Состав

| Сервис | Назначение | Адрес |
|---|---|---|
| Laravel | PHP-приложение | http://localhost:8080 |
| phpMyAdmin | Управление MySQL | http://localhost:8081 |
| MySQL | База данных | localhost:3306 |

Laravel-проект автоматически создаётся при первом запуске контейнера, если папка `src` ещё не содержит файл `artisan`. После создания приложение использует настройки подключения к MySQL из Docker Compose.

## Что понадобится

- Docker Desktop
- Включённый Docker Compose v2
- Свободные порты 8080, 8081 и 3306

## Запуск на Windows

1. Склонируйте репозиторий и откройте терминал в папке `Docker Compose — Laravel`.
2. Создайте локальный файл настроек:

   ```powershell
   Copy-Item .env.example .env
   ```

3. Соберите образы и запустите контейнеры:

   ```powershell
   docker compose up -d --build
   ```

4. При первом запуске Composer скачает Laravel в папку `src`. Это может занять несколько минут.
5. Откройте:
   - Laravel: http://localhost:8080
   - phpMyAdmin: http://localhost:8081

## Вход в phpMyAdmin

- Сервер: `mysql`
- Пользователь: `laravel`
- Пароль: `secret`

Для входа администратора MySQL:
- Пользователь: `root`
- Пароль: `root`

Пароли указаны для локальной учебной среды. Перед публикацией или развёртыванием проекта в интернете обязательно замените их.

## Полезные команды

Остановить контейнеры:

```bash
docker compose down
```

Остановить контейнеры и удалить данные MySQL:

```bash
docker compose down -v
```

Посмотреть логи:

```bash
docker compose logs -f
```

Открыть терминал Laravel-контейнера:

```bash
docker compose exec app bash
```

Выполнить миграции вручную:

```bash
docker compose exec app php artisan migrate
```

## Структура

```text
Docker Compose — Laravel/
├── docker/
│   ├── nginx/
│   │   └── default.conf
│   └── entrypoint.sh
├── src/
│   └── .gitkeep
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
└── README.md
```

Исходный код Laravel хранится в `src` и не перезаписывается при последующих запусках. Данные MySQL сохраняются в именованном Docker volume `mysql_data`.
