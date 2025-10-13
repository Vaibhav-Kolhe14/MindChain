// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MindChain {
    
    struct MindShare {
        address author;
        string mood;
        string message;
        uint256 timestamp;
    }


    MindShare[] public mindShares;

    function shareMind(string memory _mood, string memory _message) public {
        require(bytes(_message).length > 0, "Message cannot be empty");
        
        MindShare memory newShare = MindShare({
            author: msg.sender,
            mood: _mood,
            message: _message,
            timestamp: block.timestamp
        });

        mindShares.push(newShare);
    }

   
    function getAllMindShares() public view returns (MindShare[] memory) {
        return mindShares;
    }

   
    function getPostsByAuthor(address _author) public view returns (MindShare[] memory) {
        uint count = 0;

       
        for (uint i = 0; i < mindShares.length; i++) {
            if (mindShares[i].author == _author) {
                count++;
            }
        }

    
        MindShare[] memory userPosts = new MindShare[](count);
        uint j = 0;

        for (uint i = 0; i < mindShares.length; i++) {
            if (mindShares[i].author == _author) {
                userPosts[j] = mindShares[i];
                j++;
            }
        }

        return userPosts;
    }


    function getTotalPosts() public view returns (uint256) {
        return mindShares.length;
    }
}
