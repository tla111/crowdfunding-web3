import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0xdb727aE4aE51ceC4311a2DD39b7104D08245c5D5');
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();
}

export const useStateContext = () => useContext(StateContext);