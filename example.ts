import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, Transaction, sendAndConfirmTransaction,SystemProgram } from "@solana/web3.js";
import "dotenv/config"


const suppliedPublicKey = process.argv[2]
if (!suppliedPublicKey) {
    console.log('provide a publick key')
}


async function transfer (){
 try {
    const senderKeyPair = getKeypairFromEnvironment('SECRET_KEY')
    const connection = new Connection("https://api.devnet.solana.com")
    const receiverKeyPair = new PublicKey(suppliedPublicKey)

    const transaction = new Transaction()
    const LAMPORTS_TO_SEND = 5000
    
    const sendSolInstruction = SystemProgram.transfer({
        fromPubkey: senderKeyPair.publicKey,
        toPubkey: receiverKeyPair,
        lamports: LAMPORTS_TO_SEND
    })

    transaction.add(sendSolInstruction)

    const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeyPair])

    console.log(`Transfer from ${senderKeyPair} to ${receiverKeyPair} is successful. The transaction sigmature is ${signature}`);
    

 } catch (error) {
    console.error(error);
    
 }
}

transfer()