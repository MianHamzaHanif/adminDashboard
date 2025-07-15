import { Contract, ethers } from "ethers";
import { APOLLOMASS_ADDRESS } from "../addresses/addresses";
import appolomassAbi from "../abis/appolomass.json";
import { APOLLOTOKEN_ADDRESS } from "../addresses/addresses";
import appolotokenAbi from "../abis/appolotoken.json";
import { zeroAddress } from "viem";
import { parseEther } from "ethers";

// Set up provider and signer


const BSC_MAINNET_RPC = 'https://bsc-dataseed1.binance.org';

function getReadProvider() {
  return new ethers.JsonRpcProvider(BSC_MAINNET_RPC);
}



export const getDetails = async (packageType, user, level) => {
  try {
    // const provider = new ethers.BrowserProvider(window.ethereum);
  const provider = getReadProvider();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.getDetails(packageType, user, level);
    // result: [address[], string[]]
    return result;
  } catch (error) {
    console.error("Error fetching referral details:", error);
    throw error;
  }
};


export const getAllPackage = async (userAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.userDetailsP20(userAddress);
    // console.log("result", result);
    return result;
  } catch (error) {
    console.error("Error fetching all packages:", error);
    throw error;
  }
};


export const getUserPackageDetails = async (packageAmount, userAddress) => {
  try {
    // const provider = new ethers.BrowserProvider(window.ethereum);
    const provider = getReadProvider();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    let result;
    switch (packageAmount) {
      case 20:
        result = await contract.userDetailsP20(userAddress);
        break;
      case 50:
        result = await contract.userDetails(50, userAddress);
        break;
      case 100:
        result = await contract.userDetails(100, userAddress);
        break;
      case 500:
        result = await contract.userDetails(500, userAddress);
        break;
      case 1000:
        result = await contract.userDetails(1000, userAddress);
        break;
      case 5000:
        result = await contract.userDetails(5000, userAddress);
        break;
      default:
        throw new Error('Invalid package amount');
    }
    return result;
  } catch (error) {
    console.error('Error fetching user package details:', error);
    throw error;
  }
};

export const getTotalReward = async (userAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.getcurrentReward(userAddress);
    // console.log("Total reward:", result);
    return result;
  } catch (error) {
    console.error('Error fetching total reward:', error);
    throw error;
  }
};

export const withdrawReward = async () => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, signer);
    const tx = await contract.withdraw();
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error withdrawing reward:', error);
    throw error;
  }
};

export const getUserBonesInfo = async (userAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.userBonusInfo(userAddress);
    return result;
  } catch (error) {
    console.error('Error fetching user bonus info:', error);
    throw error;
  }
};

export const getUserTotalWithdraw = async (userAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.userTotalWithdraw(userAddress);
    return result;
  } catch (error) {
    console.error('Error fetching user total withdraw:', error);
    throw error;
  }
};

export const getUserTotalDeposit = async (userAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.usertotalDeposit(userAddress);
    // console.log("User total deposit amount:", result);
    return result;
  } catch (error) {
    console.error('Error fetching user total deposit:', error);
    throw error;
  }
};

export const getReferralReward = async (userAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.getReferralReward(userAddress);
    return result;
  } catch (error) {
    console.error('Error fetching referral reward:', error);
    throw error;
  }
};

export const getBonusReward = async (userAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.getBonusReward(userAddress);
    return result;
  } catch (error) {
    console.error('Error fetching bonus reward:', error);
    throw error;
  }
};

export const getWithdrawLength = async (userAddress) => {
  try {
    // const provider = new ethers.BrowserProvider(window.ethereum);
    const provider = getReadProvider();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.getWithdrawLength(userAddress);
    return result;
  } catch (error) {
    console.error('Error fetching withdraw length:', error);
    throw error;
  }
};

export const userAllWithdrawInfo = async (userAddress, index) => {
  try {
    // const provider = new ethers.BrowserProvider(window.ethereum);
    const provider = getReadProvider();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.userAllWithdrawInfo(userAddress, index);
    return result;
  } catch (error) {
    console.error('Error fetching user withdraw info:', error);
    throw error;
  }
};

export const withdrawDetailsP20 = async (userAddress, index) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    return await contract.withdrawDetailsP20(userAddress, index);
  } catch (error) {
    console.error('Error fetching withdrawDetailsP20:', error);
    throw error;
  }
};

export const withdrawDetailsP50 = async (userAddress, index) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    return await contract.withdrawDetailsP50(userAddress, index);
  } catch (error) {
    console.error('Error fetching withdrawDetailsP50:', error);
    throw error;
  }
};

export const withdrawDetailsP100 = async (userAddress, index) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    return await contract.withdrawDetailsP100(userAddress, index);
  } catch (error) {
    console.error('Error fetching withdrawDetailsP100:', error);
    throw error;
  }
};

export const withdrawDetailsP500 = async (userAddress, index) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    return await contract.withdrawDetailsP500(userAddress, index);
  } catch (error) {
    console.error('Error fetching withdrawDetailsP500:', error);
    throw error;
  }
};

export const withdrawDetailsP1000 = async (userAddress, index) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    return await contract.withdrawDetailsP1000(userAddress, index);
  } catch (error) {
    console.error('Error fetching withdrawDetailsP1000:', error);
    throw error;
  }
};

export const withdrawDetailsP5000 = async (userAddress, index) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    return await contract.withdrawDetailsP5000(userAddress, index);
  } catch (error) {
    console.error('Error fetching withdrawDetailsP5000:', error);
    throw error;
  }
};

export const userBonusInfo = async (userAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.checkBonusReward(userAddress);
    return result;
  } catch (error) {
    console.error('Error fetching user bonus info:', error);
    throw error;
  }
};

export const getOwnerAddress = async () => {
  try {
    // const provider = new ethers.BrowserProvider(window.ethereum);
    const provider = getReadProvider();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const owner = await contract.owner();
    return owner;
  } catch (error) {
    console.error('Error fetching owner address:', error);
    throw error;
  }
};

export const getUserIdP20 = async (userAddress) => {
  try {
    // const provider = new ethers.BrowserProvider(window.ethereum);
    const provider = getReadProvider();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const result = await contract.userDetailsP20(userAddress);
    // console.log("result of userDetailsP20", result);
    // result: [userIDP, directAddress, referrerAddress, registrationTime, totalTeamMember, totalDepositedAmount, totalReward, totalWithdraw, checkFirstTimeDeposit]
    return result; // userIDP
  } catch (error) {
    console.error('Error fetching userIDP from userDetailsP20:', error);
    throw error;
  }
};

export const getAddressFromUniqueId = async (uniqueId) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const address = await contract.getUniqueID(uniqueId);
    return address;
  } catch (error) {
    console.error('Error fetching address from unique ID:', error);
    throw error;
  }
};

// Approve tokens and then invest in package
// export async function approveAndInvest(inviterOrAmount, joiningAmount, amountInWei) {
//   // amountInWei: string or BigInt, the amount to approve (in wei)
//   const provider = new ethers.BrowserProvider(window.ethereum);
//   const signer = await provider.getSigner();
//   // Approve step
//   const tokenContract = new Contract(APOLLOTOKEN_ADDRESS, appolotokenAbi, signer);
//   const approveTx = await tokenContract.approve(APOLLOMASS_ADDRESS, amountInWei);
//   await approveTx.wait();
//   // Invest step (calls buyPackage as before)
//   return await buyPackage(inviterOrAmount, joiningAmount);
// }

// Approve tokens for spending by the contract
export async function approveTokens(amountInWei) {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const tokenContract = new Contract(APOLLOTOKEN_ADDRESS, appolotokenAbi, signer);
  const approveTx = await tokenContract.approve(APOLLOMASS_ADDRESS, amountInWei);
  await approveTx.wait();
  return approveTx;
}

// Get Apollo token balance for a user
export async function getTokenBalance(userAddress) {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const tokenContract = new Contract(APOLLOTOKEN_ADDRESS, appolotokenAbi, provider);
  return await tokenContract.balanceOf(userAddress);
}


export const getReferralTree = async (rootAddress) => {
  const provider = getReadProvider();
  const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
  const addresses = [];
  // Helper function for recursion
  async function fetchChildren(address) {
    for (let idx = 1; idx <= 2; idx++) {
      const child = await contract.referralNodeAddress(address, 1, idx);
      if (child && child !== zeroAddress && child !== '0x0000000000000000000000000000000000000000') {
        addresses.push(child);
        await fetchChildren(child);
      }
    }
  }
  await fetchChildren(rootAddress);
  console.log("addresses", addresses);
  return addresses;
};


export const getUserDepositWithdraw = async (address) => {
  const provider = getReadProvider();
  const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
  const deposit = await contract.usertotalDeposit(address);
  const withdraw = await contract.userTotalWithdraw(address);
  return {
    deposit: deposit.toString(),
    withdraw: withdraw.toString(),
  };
};


export const getReferralTreeWithBalances = async (rootAddress) => {
  const addresses = await getReferralTree(rootAddress);
  // Include the root address itself
  addresses.unshift(rootAddress);
  const results = await Promise.all(
    addresses.map(async (address) => {
      const { deposit, withdraw } = await getUserDepositWithdraw(address);
      return { address, deposit, withdraw };
    })
  );
  console.log("results", results);
  return results;
};

export const updatePreviousBuyRecord = async (_userAddress, _inviter, _packageNo) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, signer);
    const tx = await contract.updatePreviousBuyRecord(_userAddress, _inviter, _packageNo);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error calling updatePreviousBuyRecord:', error);
    throw error;
  }
};

export const updatePreviousWithdrawRecord = async (_userAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, signer);
    const tx = await contract.updatePreviousWithdrawRecord(_userAddress);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error calling updatePreviousWithdrawRecord:', error);
    throw error;
  }
};

export const updateAllowedUser = async (_userAddres, status) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, signer);
    const tx = await contract.updateAllowedUser(_userAddres, status);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error calling updateAllowedUser:', error);
    throw error;
  }
};

export const updateAllowedWithdraw = async (_userAddres, status) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, signer);
    const tx = await contract.updateAllowedWithdraw(_userAddres, status);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error calling updateAllowedUser:', error);
    throw error;
  }
};

export const emergencyWithdraw = async (_owner, _amount) => {
  console.log("amount ", _amount)
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, signer);
    const amountParsed = parseEther(_amount.toString());
    console.log("amount ", amountParsed)

    const tx = await contract.emergencyWithdraw(_owner, amountParsed);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error calling emergencyWithdraw:', error);
    throw error;
  }
}; 