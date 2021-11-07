pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
contract UBHACKING{
	 struct Tracker{
	 uint Photo;
	 string ProjectName;
	 string Data;
	}
	 Tracker[] public book; 
function AddData(uint _Photo,string memory _ProjectName,string memory _Data) public { 
	Tracker memory track;
	track.Photo= _Photo;
	track.ProjectName= _ProjectName;
	track.Data= _Data;
	book.push(track); 
	}
function getAllData() public view returns(Tracker[] memory) { 
	return book;
	}
}
