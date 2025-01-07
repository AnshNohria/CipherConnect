# Cipher Connect

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.0.1-informational)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contracts](#smart-contracts)
  - [Content Escrow](#content-escrow)
  - [Schema Creator](#schema-creator)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Cipher Connect is a decentralized platform that facilitates secure transactions between content creators and their subscribers using blockchain-based escrow mechanisms. Leveraging Ethereum smart contracts, Cipher Connect ensures transparency, security, and trust in content-related financial interactions.

## Features

- **Secure Escrow System:** Protects funds during content transactions.
- **Content Attestation:** Validates and records content delivery via attestations.
- **Schema Management:** Allows creation and management of custom schemas for attestation data.
- **Comprehensive Testing:** Ensures reliability through extensive smart contract tests.

## Technologies

- **Frontend:**
  - React
  - Vite
  - TypeScript
  - TailwindCSS
  - Framer Motion
  - React Router DOM
  - Lucide React Icons

- **Backend & Smart Contracts:**
  - Solidity
  - Forge (for smart contract testing and deployment)
  - Sign Protocol for attestations
  - OpenZeppelin Contracts

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Solidity Compiler** (v0.8.25)
- **Forge** (for smart contract testing)
- **Vite** (for frontend bundling)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/cipher-connect.git
   cd cipher-connect/project
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the `project/solidity/script` directory:

   ```env
   SIGN_PROTOCOL_ADDRESS=your_sign_protocol_contract_address
   ```

4. **Compile Smart Contracts:**

   ```bash
   forge build
   ```

5. **Run Tests:**

   ```bash
   forge test
   ```

6. **Deploy Smart Contracts:**

   ```bash
   forge script solidity/script/ContentEscrow.s.sol --broadcast --rpc-url your_rpc_url
   ```

7. **Start the Frontend:**

   ```bash
   npm run dev
   ```

## Usage

1. **Content Creator:**
   - Deploy the `ContentEscrow` smart contract.
   - Create schemas using the `SchemaCreator` contract.
   - List content and set terms for subscribers.

2. **Subscriber:**
   - Browse available content.
   - Deposit funds into escrow for desired content.
   - Release funds upon satisfactory content delivery.

## Smart Contracts

### Content Escrow

Handles secure deposits and releases between content creators and subscribers.

- **Functions:**
  - `depositEscrow`: Allows subscribers to deposit funds.
  - `releaseEscrow`: Allows content creators to release funds.
  - `getEscrowDetails`: Retrieves escrow information.

- **Events:**
  - `EscrowDeposited`
  - `EscrowReleased`
  - `EscrowRevoked`
  - `AttestationReceived`

### Schema Creator

Manages schemas for content attestations.

- **Functions:**
  - `createSchemaWithHook`: Creates a new schema with a registered hook.
  - `updateHookAddress`: Updates the hook address for an existing schema.

- **Events:**
  - `SchemaCreated`

## Testing

Smart contracts are tested using Forge. To run the tests:

```bash
forge test
```

Tests cover:

- Escrow deposits and releases.
- Access control for releasing funds.
- Event emissions.
- Edge cases like invalid inputs.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or feature additions.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [ansh@gmail.com](mailto:your.email@example.com).
