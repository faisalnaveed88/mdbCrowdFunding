pragma solidity ^0.4.2;

contract Voting{
    uint8 a = 10;
    mapping (bytes32 => uint8 ) public votesReceived;
    bytes32[] public candidateList;
    function Voting(bytes32[] _candidateNames){
        candidateList = _candidateNames;
    }

    function totalVotesFor( bytes32 _candidate) returns (uint8){
        return votesReceived[_candidate];
    }

    function voteForCandidate(bytes32 _candidate){
        votesReceived[_candidate] +=  1;
    }
    function setnew(){
         a = 1 ;
    }

    function getName() public returns (uint8){
        return a;
    }
}