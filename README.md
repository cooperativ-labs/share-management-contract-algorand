# Central / Manager Smart Contract

The goal of this contract is to allow a business to pay distributions in the simplest possible manner, without requiring any detailed personal information about the recipients of those distributions. The tokens are tied to a centralized legal contract that specifies the obligations of the business. This written contract can specify additional terms, such as the smart contract’s relationship to an underlying security and the rights of the token holder vis a vis the issuing entity.

## Disclaimer
This code has not been audited and Cooperativ Labs makes no guarentees about it's functionality or security. Comments and bug reports are most welcome.

## Acknowledgements
* Thanks to [Algorand Foundation](https://algorand.foundation/) for their grant supporting this project.
* Built with [Reach.sh](https://reach.sh/) 

## User Story

Alice whats to distribute shares of Syndication LLC shares as tokens, so she deploys a Distribution Capable smart contract to Algorand. This smart contract *must be tied to a legal contract* that describes the investment in legal terms. To create this linkage, Alice creates a hash of the legal text, and publishes it to the smart contract. Alice’s investors send her money, and she allocates to them the appropriate number of share tokens. 

Syndication LLC sometimes earns money (from rent, for example), and Alice wants to distribute a portion of these earnings to her investors. She does so by sending the total amount she wants to distribute (in USDCa*) to the Manager contract. Doing so automatically sends a proportional amount of this distribution to each of the tokens (the USDCa appears in the wallet of the token holder).


## Share Manager Contract Design Overview, Functions and Views

We are using Reach Programming Language to develop the smart contract and then compile to javascript file and/or TEAL or Solidity for eventual contract deployment. The following are the functions available via this smart contract:

### Functions

**Add Investor to Whitelist** [addWL(approvedInvestor)](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) – This is a restricted function that takes in one argument (approved investor's wallet address), and is used to update the list of verified and vetted investors eligible to receive share token and distribution or backing tokens from the Central Contract.  Only contract creator or contract manager can use this function. In the Future, we plan to allow Contract Creator to delegate access to this API.

**Remove Investor from Whitelist** [remWL(disapprovedInvestor)](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) – This is a restricted function that takes in one argument (disapproved investor's wallet address), and is used to update the list of verified and vetted investors eligible to receive share token and distribution or backing tokens from the Central Contract.  Only contract creator or contract manager can use this function. In the Future, we plan to allow Contract Creator to delegate access to this API.

**Claim Share Token** [cST()](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This is a restricted function (takes in no argument) for allowing verified investors to claim their share tokens that contract creator has allocated to them on the Central Contract. Only whitelisted addresses can use this API. Take note that for Algorand consensus network, no “claim share token” is needed, as investors automatically receive their share tokens viewable via a custom wallet / or via Cooperativ's front end.  

**Claim Backing Token** [cBT()](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This is a restricted function (takes in no argument) for allowing verified investors to claim their backing tokens that has been allocated to them via the distribution algorithm on the Central Contract. Only whitelisted addresses can use this API.

**Allocate Share Token** [aST(contractManager, approvedInvestor, tokenAmount)](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This is a restricted function for allocating specific amount of share tokens to each investor. This will typically happen after the investor has paid for (or earned) their shares. Only contract creator can use this API. This function takes in three arguments - (i) the contract manager's address (ii) the investor's address that share token is being allocated to (iii) the amount of share token to be allocated

**Distribute Backing Token** [dBT(tokenAmount)](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This is a restricted function for paying an amount of Backing Token into the Central Contract, and notifying the central contract to allocate distributions to investors on the whitelist (based on percentage determined by distribution algorithm on the Central Contract). Only contract creator/manager can use this API. This function takes in one argument - (i) amount of backing tokens to be distributed to all investors

**Allocate Backing Token** [aBT(investorAddress)](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This is a restricted function that contract creator/manager can use to allocate backing tokens (based on percentage determined by distribution algorithm on the Central Contract). These allocated tokens can later be claimed by the investor. This is only used when some investors are too lazy to come and claim their backing tokens. This function takes in one argument - (i) the address of the investor that backing tokens should be allocated to.

**Change Contract Manager** [cCM(managerAddress)](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This is a restricted function for changing the manager of the Central Contract. By default, the contract manager would be the contract creator. Only contract creator (or eventually a contract manager) can use this API. This function takes in one argument - (i) the address of the new manager of the contract.

**Opt In to Central Contract** [optIn()](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This is an unrestricted function for allowing any address to opt into the contract before contract manager can add such an address to the whitelist. This function takes in no argument.

**Update Legal Contract Hash** [docHash(hash)](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This is a restricted function for allowing chainging the legal document hash associated with share tokens on the manager contract. Only contract creator (or eventually a contract manager) can use this API This function takes in the document has as an argument.

### Views

**Total Share Token, Total Backing Token, Number of Distributions** [totSTBTD()](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This view shows the total amount of Share Token and Backing Token distributed, and the number of distributions conducted. It accepts no arguments and returns an Array. 

**Whether Sale is Locked** [saleLocked()](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This view shows whether share holders can transfer shares. It accepts no arguments and returns `true` or `false`.

**Show Unclaimed Tokens per Investor** [claimSTBT(walletAddress)]([https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D](https://github.com/cooperativ-labs/manager-contract-old/blob/e40e78796fe439afa80395e6df361b9d84cfad0c/Central/index.rsh#L72)) - This view shows the number of Share Token and Backing Token a given investor had _not yet_ claimed. It takes an investor's wallet address and returns `[shareToken, backingToken]`. (note: on Shares are claimed automatically on Algorand)

**Show Claimed Tokens Per Investor** [totSTBTDRec(walletAddress)](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This view shows the number of Share Tokens and Backing Tokens the investor has recieved (excluding those she has not yet claimed), and the number of distributions she has accepted. It takes the investor's wallet address and returns `[shareToken, backingToken, numDistributions]`. (note: on Shares are claimed automatically on Algorand)

**White List Member** [wlMember(walletAddress)](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This view shows whether a given wallet address is on the contract's whitelist. It takes an investor's wallet address and returnes `true` or `false`.

**Hash of linked Legal Contract** [vHash()](https://github.com/cooperativ-labs/Contracts/blob/main/Central/index.rsh#:~:text=const%20User%20%3D%20API,%7D) - This accepts no arguments and returns an array of hashes. 

### TEAL Smart Contracts

TEAL Smart contracts (in `/Central`):

- `index.main.appApproval.teal`: this is one of the intermediate teal files generated from compiling "index.rsh"
- `index.main.appClear.teal`: this is one of the intermediate teal files generated from compiling "index.rsh".
- `index.main.appCompanion.teal`: this is one of the intermediate teal files generated from compiling "index.rsh"..


### Setup / Compile Reach Code

- [Install Reach](https://docs.reach.sh/)
- Run `./reach compile` and check the 'build' directory in your current folder

## Authors
- [Sunday Akinbowale](https://twitter.com/asolpshinning)
- [Cooperativ.io](https://twitter.com/cooperativ_io)
