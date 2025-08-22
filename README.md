# Yishak.et Portfolio Project

## Prerequisites

- PHP >= 8.1
- Composer
- MySQL or other supported database
- Node.js & npm (for frontend assets)

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yishakdev/yishak.et.git
    cd yishak.et
    ```

2. **Install PHP dependencies**
    ```bash
    composer install
    ```

3. **Copy `.env` file and configure**
    ```bash
    cp .env.example .env
    ```
    - Update database and other environment settings in `.env`.

4. **Generate application key**
    ```bash
    php artisan key:generate
    ```

5. **Run migrations**
    ```bash
    php artisan migrate
    ```

6. **Install frontend dependencies**
    ```bash
    npm install
    npm run dev
    ```

7. **Start the development server**
    ```bash
    php artisan serve
    ```

## Usage

Visit [http://localhost:8000](http://localhost:8000) in your browser.

## Troubleshooting

- Ensure all prerequisites are installed.
- Check `.env` configuration for database connection issues.

## License

This project is licensed under the MIT License.