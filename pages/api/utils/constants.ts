import idl from "../idl/xano_write_dapp.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

/* Constants for RPC Connection the Solana Blockchain */
/*A Solana RPC(Remote Procedure Call) Endpoint is a specific URL that allows developer and user 
to connect to the Solana blockchain network and interact with it through the Solana RPC API. 
It serves as the entry point for all the commands and requests that are sent to the Solana network.*/
export const commitmentLevel = "processed";
export const endpoint =
  process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL || clusterApiUrl("devnet");
export const connection = new Connection(endpoint, commitmentLevel);

/* Constants for the Deployed Program */
export const helloWorldprogramId = new PublicKey(idl.metadata.address);
export const helloWorldprogramInterface = JSON.parse(JSON.stringify(idl));