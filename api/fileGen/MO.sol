pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
contract MO{
	 struct Tracker{
	 string Authors;
	 uint VI;
	 string KK;
	}
	 Tracker[] public book; 
function AddData(string memory _Authors,uint _VI,string memory _KK) public { 
	Tracker memory track;
	track.Authors= _Authors;
	track.VI= _VI;
	track.KK= _KK;
	book.push(track); 
	}
function getAllData() public view returns(Tracker[] memory) { 
	return book;
	}
}
