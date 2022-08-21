//SDPX-License-Identifier:MIT

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

pragma solidity ^0.8.0;

contract LogicV2 is Initializable, UUPSUpgradeable, OwnableUpgradeable{
    uint public count;
    
    function initialize() initializer public{
        __Ownable_init();
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}

    function add(uint _value) public{
        count += _value;
    }

    function sub(uint _value) public{
        count -= _value;
    }

    function mul(uint _value) public{
        count *= _value;
    }
}