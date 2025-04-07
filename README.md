# Oak Tree Cemetery - Process Manager

A comprehensive Funeral Services Management System built with Next.js.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15.2)
- **UI**:
  - [React](https://reactjs.org/) (v19.1)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [shadcn/ui](https://ui.shadcn.com/) components
  - [Radix UI](https://www.radix-ui.com/) primitives
- **Data Validation**: [Zod](https://zod.dev/)
- **HTTP Client**: [ky](https://github.com/sindresorhus/ky)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## Project Structure

```
src/
├── app/              # Next.js app router files
├── components/       # Reusable UI components
├── config/           # Configuration files
├── entities/         # Entity type definitions
├── env/              # Environment variables config
├── features/         # Feature-based business logic
├── fetchers/         # API client functions
├── HOCs/             # Higher-Order Components
├── lib/              # Utility libraries
├── middlewares/      # Next.js middleware functions
├── modules/          # UI modules/feature components
└── utils/            # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

### Development

```bash
bun run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
bun run build
bun run start
```

## Features

- **Organization Management**: Manage funeral homes and service providers
- **Client Management**: Track client information and requests
- **Contractor Management**: Coordinate with burial care contractors and logistics services
- **Process Tracking**: Monitor the progress of funeral service preparations
