pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
contract MKJ{
	 struct Tracker{
	 uint Photo;
	 string Captions;
	 string DATE;
	}
	 Tracker[] public book; 
function AddData(uint _Photo,string memory _Captions,string memory _DATE) public { 
	Tracker memory track;
	track.Photo= _Photo;
	track.Captions= _Captions;
	track.DATE= _DATE;
	book.push(track); 
	}
function getAllData() public view returns(Tracker[] memory) { 
	return book;
	}
}
