pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
contract UBHACK{
	 struct Tracker{
	 string StudentName;
	 uint ProjectDescription;
	 uint Identifier;
	 uint Image;
	}
	 Tracker[] public book; 
function AddData(string memory _StudentName,uint _ProjectDescription,uint _Identifier,uint _Image) public { 
	Tracker memory track;
	track.StudentName= _StudentName;
	track.ProjectDescription= _ProjectDescription;
	track.Identifier= _Identifier;
	track.Image= _Image;
	book.push(track); 
	}
function getAllData() public view returns(Tracker[] memory) { 
	return book;
	}
}
