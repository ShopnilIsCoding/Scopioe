# Scopioe

Welcome to Scopioe, your go-to platform for Massage and therapy.

## Live Site 
Visit the live site [here](https://scopioetask.netlify.app).

## Credits
Developed by Rahomotul Islam.

## License
This project is licensed under the [MIT License](LICENSE).

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShopnilIsCoding/Scopioe.git
   cd Scopioe
2. Install dependencies:
   ```bash
   npm install
3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.
   - Copy your Firebase configuration details and create a `.env` file in the root directory with the following content:
     ```plaintext
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```
4. Run the development server:
   ```bash
   npm run dev
5. Build for production:
   ```bash
   npm run build
