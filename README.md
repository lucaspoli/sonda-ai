# SONDA AI - Personal Finance Management Powered by Artificial Intelligence

![SONDA AI Cover](https://raw.githubusercontent.com/lucaspoli/sonda-ai/refs/heads/master/public/cover.jpg)

**SONDA AI** revolutionizes personal finance management with artificial intelligence, offering personalized insights, real-time monitoring, and tools to optimize your finances. The platform simplifies financial tracking and decision-making by combining powerful analytics with user-friendly features.

---

## 🏆 Key Features

- **Expense Tracking**: Add transactions like expenses, deposits, or investments, categorized and date-tagged.
- **AI-Powered Insights**: Generate reports with OpenAI's technology, providing actionable insights to improve financial health.
- **Real-Time Monitoring**: Dashboard visualizations for monthly summaries, highlighting critical financial patterns.
- **Premium Plan**: Unlock unlimited transactions and detailed insights by subscribing through Stripe.
- **Secure Authentication**: Clerk integration ensures safe user access and management.

---

## 🌟 Technologies Used

- **Frontend**: Next.js, TypeScript, Tailwind CSS, ShadCN
- **Backend**: Prisma (ORM), PostgreSQL (Database)
- **Authentication**: Clerk
- **Payments**: Stripe
- **AI Reports**: OpenAI integration for intelligent insights

---

## 🔧 Environment Configuration

The application requires the following environment variables, as detailed in the `.env.example` file:

```plaintext
# DATABASE URL
DATABASE_URL="postgresql://<user-psql>:<pass-psql>@localhost:5432/<db-name>?schema=public"

# BASE URL
NEXT_BASE_URL="https://your-domain.com"

# CONFIGURATION CLERK https://clerk.com/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<publishable-key-clerk>
CLERK_SECRET_KEY=<secret-key-clerk>

# STRIPE PRICE ID
STRIPE_PREMIUM_PLAN_PRICE_ID="<product-id-stripe>"

# STRIPE (DEVELOPER = "*_test_*") OR (PRODUCTION = "*_live_*")
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="<publishable-key-stripe>"
STRIPE_SECRET_KEY="<secret-key-stripe>"

# STRIPE WEBHOOK SECRET
STRIPE_WEBHOOK_SECRET="<stripe-webhook-secret>"

# STRIPE CUSTOMER PORTAL
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL="https://billing.stripe.com/p/login/<HASH_ID_CUSTOMER_PORTAL>"

# OPENAI API KEY
OPENAI_API_KEY="<openai-api-key>"
```

---

## 🚀 How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-user/sonda-ai.git
   cd sonda-ai
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Configure the `.env` file based on the provided example.

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Access the application locally at [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deployment

The project is deployed and accessible at: [https://sonda-ai.vercel.app](https://sonda-ai.vercel.app).

---

## 📧 Contact

Lucas Ditchun  
Email: [lucas@escala.dev](mailto:lucas@escala.dev)  
LinkedIn: [https://www.linkedin.com/in/lucas-ditchun-a83a61329/](https://www.linkedin.com/in/lucas-ditchun-a83a61329/)

---

**SONDA AI** — Redefining personal finance management with the power of AI.
