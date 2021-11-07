pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
contract SmartContract{
	 struct Tracker{
	 string Authors;
	 uint DOCUMENT;
	 string Object_Identifier;
	}
	 Tracker[] public book; 
function AddData(string memory _Authors,uint _DOCUMENT,string memory _Object_Identifier) public { 
	Tracker memory track;
	track.Authors= _Authors;
	track.DOCUMENT= _DOCUMENT;
	track.Object_Identifier= _Object_Identifier;
	book.push(track); 
	}
function getAllData() public view returns(Tracker[] memory) { 
	return book;
	}
}
