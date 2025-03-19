<h1>Express.js + TypeScript + PostgreSQL + Prisma</h1>
This project sets up a Node.js backend with Express.js and TypeScript, using PostgreSQL inside Docker, connected via Prisma ORM. It includes two APIs:

Write API: Stores data in PostgreSQL.

Read API: Retrieves data from PostgreSQL.

🚀 Installation & Setup

1️⃣ Clone the Repository

```
git clone <your-repo-url>
cd <your-repo-folder>
```

2️⃣ Install Dependencies

```
npm install
```

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add the following:
```
DATABASE_URL="postgresql://admin:password@localhost:5432/mydatabase"
PORT=3000
```
4️⃣ Run PostgreSQL with Docker

Ensure Docker is installed, then start the database:
```
docker-compose up -d
```
5️⃣ Run Prisma Migrations
```
npx prisma migrate dev --name init
```
6️⃣ Start the Server
```
npx ts-node src/server.ts
```
📡 API Endpoints

✅ Write API (Store Data)

POST /items
```
{
  "name": "Laptop",
  "price": 1200.50
}
```
🔍 Read API (Retrieve Data)

GET /items
Response:
```
[
  { "id": 1, "name": "Laptop", "price": 1200.50 }
]
```
🛠 Troubleshooting
<ul>
<li>Database connection error? Ensure your .env file matches the docker-compose.yml credentials.</li>

<li>Port conflicts? Change the PORT variable in .env.</li>

<li>Missing TypeScript types? Run: npm install --save-dev @types/cors</li>
</ul>

