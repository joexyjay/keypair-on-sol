// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

//HARD CODED PUBLIC KEY
// const publicKey = new PublicKey("EdJUmuSJh8FWFSSTaukkuYMHd8iFMNugUpDwtSPC1ZL6")

// const connection = new Connection("https://api.devnet.solana.com", "confirmed")

// const balanceInLamports = await connection.getBalance(publicKey)

// const balanceInSOL = balanceInLamports/LAMPORTS_PER_SOL

// console.log(
//     `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
//   );

// //DYNAMIC PUBLIC KEY
// const suppliedPublicKey = process.argv[2]

// if (!suppliedPublicKey) {
//     throw new Error("Provide a public key to check the balance of!")
// }
// const connection = new Connection("https://api.devnet.solana.com", "confirmed")

// const publicKey = new PublicKey(suppliedPublicKey)

// const balanceInLamports = await connection.getBalance(publicKey)

// const balanceInSOL = balanceInLamports/LAMPORTS_PER_SOL

// console.log(
//     `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
//   );


//ERROR HANDLING

import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

const suppliedPublicKey = process.argv[2];

if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
}

async function checkBalance() {
    try {
        const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
        const publicKey = new PublicKey(suppliedPublicKey);
        const balanceInLamports = await connection.getBalance(publicKey);
        const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

        console.log(
            `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
        );
    } catch (error) {
        console.error("Error checking balance:", error.message);
    }
}

checkBalance();