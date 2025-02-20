# My Portfolio

This is a personal portfolio website built using React and Firebase.

## Features
- Responsive design
- About, Contact, Home, Portfolio, and Resume pages
- Firebase configuration for deployment
- Styled using GlobalStyles
- Context API for state management

## Folder Structure
```
my-portfolio/
├── public/          # Static files
├── src/             # Source code
│   ├── Components/  # Reusable components
│   ├── Config/      # Configuration files
│   ├── Firebase/    # Firebase setup
│   ├── GlobalStyle/ # Global styles
│   ├── Pages/       # Page components
│   ├── App.js       # Main app component
│   ├── index.js     # Entry point
├── .gitignore       # Ignored files for Git
├── firebase.json    # Firebase config
├── package.json     # Project dependencies
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites
- Node.js installed
- Firebase CLI installed

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/narendercoder/my-portfolio.git
   cd my-portfolio
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up Firebase:
   - Create a Firebase project
   - Add Firebase configuration in `src/Firebase/Config.js`

### Running Locally
```sh
npm start
```

### Deploying to Firebase
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to Firebase:
   ```sh
   firebase deploy
   ```

## License
This project is open-source and available under the MIT License.

