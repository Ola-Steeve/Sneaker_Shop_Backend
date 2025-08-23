# 🏃‍♂️ Sneaker Shop Backend API

A RESTful backend API for a sneaker e-commerce platform built with Node.js, Express.js, and MongoDB.

## 🚀 Live Documentation

Visit our **[API Documentation](https://ola-steeve.github.io/Sneaker_Shop_Backend/)** deployed on GitHub Pages for detailed endpoint information and usage examples.

## ✨ Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Product Management**: CRUD operations for sneaker products with image upload
- **Order Management**: Complete order processing system
- **User Management**: User profiles and account management
- **Security**: Helmet, XSS protection, CORS configuration
- **File Uploads**: Image handling with Multer
- **Database**: MongoDB with Mongoose ODM

## 📋 CI/CD Pipeline

This project includes a comprehensive CI/CD pipeline with GitHub Actions:

- ✅ **Continuous Integration**: Automated testing on Node.js 18.x and 20.x
- ✅ **Dependency Management**: Automated installation with conflict resolution
- ✅ **Application Testing**: Startup verification and health checks
- ✅ **Documentation Deployment**: Auto-deployment to GitHub Pages
- ✅ **Security Scanning**: Dependency vulnerability checks

## 🛠️ Quick Start

### Prerequisites
- Node.js (18.x or 20.x)
- MongoDB
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ola-Steeve/Sneaker_Shop_Backend.git
cd Sneaker_Shop_Backend

# Install dependencies
npm install --legacy-peer-deps

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev

# Or start production server
npm start
```

### Environment Variables

Create a `.env` file with the following variables:

```env
MONGO_URL=mongodb://localhost:27017/sneaker_shop
JWT_SECRET=your_super_secret_jwt_key_here
PORT=4500
ALLOWED_URL=http://localhost:3000
NODE_ENV=development
```

## 📚 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/auth/logout` - User logout

### Products
- `GET /api/v1/product` - Get all products
- `GET /api/v1/product/:id` - Get product by ID
- `POST /api/v1/product` - Create product (Admin)
- `PATCH /api/v1/product` - Update product (Admin)
- `DELETE /api/v1/product/:id` - Delete product (Admin)

### Orders
- `POST /api/v1/order` - Create new order
- `GET /api/v1/order` - Get all orders

### Users
- `GET /api/v1/user` - Get user profile

## 🔧 Development

```bash
# Development with auto-reload
npm run dev

# Run basic tests
npm test

# View documentation locally
npm run docs
```

## 🏗️ Project Structure

```
├── .github/workflows/     # GitHub Actions CI/CD
├── config/               # Configuration files
├── controllers/          # Route controllers
├── db/                  # Database connection
├── docs/                # API documentation
├── errors/              # Custom error handlers
├── middleware/          # Express middleware
├── models/              # Mongoose models
├── public/              # Static assets
├── routers/             # Route definitions
├── utils/               # Utility functions
├── app.js               # Main application file
└── package.json         # Project configuration
```

## 🚀 Deployment

The application is automatically deployed using GitHub Actions:

1. **CI Pipeline** (`node.js.yml`): Tests the application on multiple Node.js versions
2. **CD Pipeline** (`deploy.yml`): Deploys documentation to GitHub Pages

### Manual Deployment

For production deployment, consider platforms like:
- Heroku
- Railway
- DigitalOcean App Platform
- AWS EC2/Elastic Beanstalk

## 🔒 Security

- JWT token authentication
- Password hashing with bcrypt
- XSS protection
- CORS configuration
- Helmet security headers
- Input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🔗 Links

- **[Live Documentation](https://ola-steeve.github.io/Sneaker_Shop_Backend/)**
- **[GitHub Repository](https://github.com/Ola-Steeve/Sneaker_Shop_Backend)**
- **[Issues & Bug Reports](https://github.com/Ola-Steeve/Sneaker_Shop_Backend/issues)**
