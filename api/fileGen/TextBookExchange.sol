pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
contract TextBookExchange{
	 struct Tracker{
	 string DOI;
	 string NAME;
	 string Author;
	 string Year;
	 uint PDF;
	}
	 Tracker[] public book; 
function AddData(string memory _DOI,string memory _NAME,string memory _Author,string memory _Year,uint _PDF) public { 
	Tracker memory track;
	track.DOI= _DOI;
	track.NAME= _NAME;
	track.Author= _Author;
	track.Year= _Year;
	track.PDF= _PDF;
	book.push(track); 
	}
function getAllData() public view returns(Tracker[] memory) { 
	return book;
	}
}
