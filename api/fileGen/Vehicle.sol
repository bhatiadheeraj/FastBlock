pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
contract Vehicle{
	 struct Tracker{
	 string Model;
	 string Color;
	 string GasType;
	}
	 Tracker[] public book; 
function AddData(string memory _Model,string memory _Color,string memory _GasType) public { 
	Tracker memory track;
	track.Model= _Model;
	track.Color= _Color;
	track.GasType= _GasType;
	book.push(track); 
	}
function getAllData() public view returns(Tracker[] memory) { 
	return book;
	}
}
