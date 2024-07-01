# ChainStatus 🌐

ChainStatus is a decentralized social application built on the Linea blockchain. It allows users to share status updates on the chain and view statuses posted by others, ensuring data privacy, security, and decentralization.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Challenges](#challenges)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

ChainStatus leverages blockchain technology to create a secure and transparent social platform. By recording status updates on the blockchain, it eliminates the need for centralized control, ensuring that user data remains private and tamper-proof.

## Features

- **Decentralized Data Storage:** Status updates are stored on the blockchain, ensuring data integrity and privacy. 📦
- **Secure:** Smart contracts guarantee that data is protected from unauthorized access. 🔒
- **Transparent:** Users can see all statuses posted on the chain, fostering an open community. 🌍
- **User-Friendly Interface:** Designed to provide an intuitive experience for users interacting with blockchain technology. 👥

## Technologies Used

- Solidity
- Thirdweb
- React.js
- Node.js
- Web3.js
- MetaMask
- HTML
- CSS
- JavaScript

## Challenges

Building ChainStatus presented several challenges:

- **Smart Contract Development:** Writing and deploying the smart contract to accurately record and retrieve user statuses. 💻
- **Integration with Thirdweb:** Ensuring seamless communication between the front-end and the blockchain. 🔄
- **User Experience Design:** Creating an interface that is easy to use for those unfamiliar with blockchain technology. 🖥️
- **Blockchain Data Handling:** Managing and displaying blockchain data in real-time while maintaining performance. ⏱️
- **Testing and Debugging:** Ensuring the DApp's reliability and security through thorough testing. 🐞
- **Scalability:** Handling a growing number of users and transactions without compromising performance. 📈

## Installation

To install and run ChainStatus locally, follow these steps:

1. Clone the repository:

   ```bash
   https://github.com/rahulkhandait-sde/ChainStatus.git
   cd chainstatus
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile the smart contract:

   ```bash
   npx hardhat compile
   ```

4. Deploy the smart contract to your local blockchain:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Connect your MetaMask wallet to the application. 🔗
2. Post a status update on the blockchain. ✍️
3. View statuses posted by other users. 👀

## Contributing

We welcome contributions to ChainStatus! To contribute, follow these steps:

1. Fork the repository. 🍴
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes.
4. Commit your changes:

   ```bash
   git commit -m 'Add some feature'
   ```

5. Push to the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a pull request. 📬

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 📜

---

ChainStatus is part of the Web3 social track, showcasing the potential of decentralized applications to create secure, user-controlled social platforms. Join us in revolutionizing social media with blockchain technology! 🚀
