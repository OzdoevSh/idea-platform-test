# Тестовое задание IDEA-PLATFORM

## Требования
Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org/) v20+.

## Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
npm i
```
Если возникли ошибки после выполнения команды установки, выполните команду:
```sh
npm i --legacy-peer-deps
```

## Запуск JSON-server
Чтобы запустить JSON-server, выполните команду:
```sh
npx json-server db.json --port 8000
```

## Запуск проекта
Чтобы запустить проект, выполните команду:
```sh
npm run dev
```

## Запуск проекта для IE11
Чтобы запустить проект для IE11, выполните команду:
```sh
npx tvkit@latest serve --browser "ie 11"
```

## Проверка линтером
Чтобы запустить проверку линтером, выполните команду:
```sh
npm run lint
```