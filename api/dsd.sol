pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
contract dsd{
	 struct Tracker{
	 uint Authors;
	 string DOCUMENT;
	 string Object_Identifier;
	 uint ;
	 uint SAMPLE;
	}
	 Tracker[] public book; 
function AddData(uint _Authors,string memory _DOCUMENT,string memory _Object_Identifier,uint _,uint _SAMPLE) public { 
	Tracker memory track;
	track.Authors= _Authors;
	track.DOCUMENT= _DOCUMENT;
	track.Object_Identifier= _Object_Identifier;
	track.= _;
	track.SAMPLE= _SAMPLE;
	book.push(track); 
	}
function getAllData() public view returns(Tracker[] memory) { 
	return book;
	}
}
