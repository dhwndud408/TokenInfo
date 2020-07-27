import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Web3 from 'web3';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      token_address: "",
      token_abi: [],
      token_name: "",
      token_symbol: "",
      token_decimal: 1,
      token_contract: null,
      account_acctress: "",
      account_total_token: 0,
      account_current_lock_token:0,
      account_current_release_lock_token:0
    }

  }

  async componentDidMount() {
    // *** 비동기로 MetaMask(Web3) 연결 *** //
    await this.ConnectMetaMask();

    // // *** 비동기로 Token (Smart Contract) 연결 *** //
    // await this.SetSmartContract("0x13DEa094877Af3e7A9D2A355357955917d64849C");

    // // *** 비동기로 Account 연결 *** //
    // let accounts = await this.web3.eth.getAccounts();
    // await this.SetAccount(accounts[0]);


    // Test
    await this.SetContractTest("0x56b7479dc839124878A03F1C8f43907f7eb5b966");

    // Token (Smart Contract)의 함수 호출
    // 값만 가져올 때  : let results = await "계약명".methods."함수명"("함수인자").call();
    // payalbe 함수   :  let results = await "계약명".methods."함수명"("함수인자").send({from:"송금 주소", value:"송금 금액(wei)", gas:"gas 량", nonce:"재접속한 횟수"});
    //                  (참고 : let nonce = await this.web3.eth.getTransactionCount("target addresss"); )
    // Event 가져올 때 : let event = await "계약명".getPastEvents("이벤트명", {fromBlock:0, toBlock:'latest'});

    // ************** 값 확인 ************** //
    console.log('Target Token (Smart Contract) Address : '+ this.state.token_address);
    console.log('Target Token (Smart Contract) Name : '+ this.state.token_name);
    console.log('Target Token (Smart Contract) Symbol  : '+ this.state.token_symbol);
    console.log('Target Token (Smart Contract) Decimal  : '+ this.state.token_decimal);
    console.log('Target Contract Details : ');
    console.log(this.state.token_contract);
    console.log('현재 Account : '+ this.state.account_acctress);
    console.log('Target Token Balance : '+ this.state.account_total_token);
    console.log(this.state);

  }

  ConnectMetaMask = async () => {
    if (window.ethereum) {
      console.log(' MetaMask 연결 최신 방법 ');
      this.web3 = new Web3(window.ethereum);
      try {
          await window.ethereum.enable();
      } catch (error) {
          console.log(`User denied account access error : ${error}`)
      }
    }
    else if (window.web3) {
      console.log(' MetaMask 연결 이전 방법 ');
      this.web3 = new Web3(Web3.currentProvider);
    }
    else {
      console.log('ERORR! MetaMask not installed');
    }    
  }

  SetSmartContract = async(contract_address) =>{
    //const contract = require("truffle-contract");

    const _token_address = contract_address;
    const _token_abi = [{"constant": false,"inputs": [{"internalType": "address","name": "sender","type": "address"},{"internalType": "address","name": "recipient","type": "address"},{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "_transfer","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "target","type": "address"},{"internalType": "uint256","name": "num_token","type": "uint256"}],"name": "addLockedToken","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "spender","type": "address"},{"internalType": "uint256","name": "value","type": "uint256"}],"name": "approve","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "spender","type": "address"},{"internalType": "uint256","name": "subtractedValue","type": "uint256"}],"name": "decreaseAllowance","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "renounceOwnership","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "uint256","name": "_release_timestamp","type": "uint256"}],"name": "setReleaseDate","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "recipient","type": "address"},{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "transfer","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "spender","type": "address"},{"indexed": false,"internalType": "uint256","name": "value","type": "uint256"}],"name": "Approval","type": "event"},{"constant": false,"inputs": [{"internalType": "address","name": "spender","type": "address"},{"internalType": "uint256","name": "addedValue","type": "uint256"}],"name": "increaseAllowance","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"constant": false,"inputs": [{"internalType": "uint256","name": "_ratio_per_day","type": "uint256"}],"name": "setReleaseRatioPerDay","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "uint256","name": "_ratio","type": "uint256"}],"name": "setTokenPerEthRatio","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"},{"indexed": true,"internalType": "address","name": "to","type": "address"},{"indexed": false,"internalType": "uint256","name": "value","type": "uint256"}],"name": "Transfer","type": "event"},{"constant": false,"inputs": [{"internalType": "address","name": "sender","type": "address"},{"internalType": "address","name": "recipient","type": "address"},{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "transferFrom","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"payable": true,"stateMutability": "payable","type": "fallback"},{"constant": true,"inputs": [{"internalType": "uint256","name": "temp_num_init_locked","type": "uint256"}],"name": "_calCapableLockedToken","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "address","name": "spender","type": "address"}],"name": "allowance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "account","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "decimals","outputs": [{"internalType": "uint8","name": "","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "target","type": "address"}],"name": "GetCurrentLockedToken","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "target","type": "address"}],"name": "GetCurrentReleasedToken","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "isOwner","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}];
    const _token_contract = new this.web3.eth.Contract(_token_abi, _token_address);
    const _token_name = await _token_contract.methods.name().call();
    const _token_symbol = await _token_contract.methods.symbol().call();
    const _token_decimal = await _token_contract.methods.decimals().call();

    this.setState({
      token_address: _token_address,
      token_abi: _token_abi,
      token_name: _token_name,
      token_symbol: _token_symbol,
      token_decimal: Number(_token_decimal),
      token_contract: _token_contract,
    });
  }

  SetContractTest = async(proxy_address) => {

    const _contract_address = "0xC2343d16663d15004f4aD7719e40FB84dd4b2fe8";
    const _contract_abi = [{"constant": false,"inputs": [{"name": "_address","type": "address"}],"name": "setTargetAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [{"name": "_address","type": "address"}],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"payable": false,"stateMutability": "nonpayable","type": "fallback"}];
    const _contract = new this.web3.eth.Contract(_contract_abi, _contract_address);
    // console.log("test");
    // const data__ = this.web3.utils.bytesToHex("0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000");
    // console.log(data__);
    // var txObject = { 
    //   nonce: nonce, 
    //   gasPrice: gasPrice, 
    //   gasLimit: gasLimit, 
    //   to: toAddress, 
    //   from: ownerAddress, 
    //   value: value 
    // };

  
    // var test1 = await this.web3.eth.sendTransaction({
    //                                         from:"0xc249f1B41BeaA159674F6959F79Fcc6fC5671520",
    //                                         to:"0xC2343d16663d15004f4aD7719e40FB84dd4b2fe8", 
    //                                         data:this.web3.eth.abi.encodeFunctionSignature("hit()")
    //                                         }, function(error, hash){
    //                                           console.log("Test1");
    //                                           console.log(error);
    //                                           console.log(hash);
    //                                         });
    // console.log("tttt")
    // console.log(test1);

    // var test2 = await this.web3.eth.sendTransaction({
    //                                           from:"0xc249f1B41BeaA159674F6959F79Fcc6fC5671520",
    //                                           to:"0xd73C285332112A61707EdBA6E01740D2181eF39e", 
    //                                           data:this.web3.eth.abi.encodeFunctionSignature("name()")
    //                                         }).then(console.log);  
    // console.log("tttt");
    // console.log(test2);
    // test2 = await this.web3.eth.sendTransaction({
    //   from:"0xc249f1B41BeaA159674F6959F79Fcc6fC5671520",
    //   to:"0x89302dD2078A92fd52D4dE61837C23E89Ab1632e", 
    //   data:this.web3.eth.abi.encodeFunctionSignature("hit()")
    // }).then(console.log);  
    // console.log("tttt");
    // console.log(test2);                                 
    var test3 = await this.web3.eth.call({
                                              from:"0xc249f1B41BeaA159674F6959F79Fcc6fC5671520",
                                              to:"0x9CA9f38048EB7e2Cec1e454D9C4070a80E2C2bc4", 
                                              data:this.web3.eth.abi.encodeFunctionSignature("decimals()")
                                            }).then(console.log);                                     
    console.log("tttt");
    console.log(test3);
  
    
  //   test2 = await this.web3.eth.call({
  //         from:"0xc249f1B41BeaA159674F6959F79Fcc6fC5671520",
  //         to:"0x89302dD2078A92fd52D4dE61837C23E89Ab1632e", 
  //         data:this.web3.eth.abi.encodeFunctionSignature("hit()")
  //       }).then(console.log);  
  //   console.log("tttt");
  //   console.log(test2);

  //   test3 = await this.web3.eth.call({
  //         from:"0xc249f1B41BeaA159674F6959F79Fcc6fC5671520",
  //         to:"0x89302dD2078A92fd52D4dE61837C23E89Ab1632e", 
  //         data:this.web3.eth.abi.encodeFunctionSignature("score()")
  //       }).then(console.log);                                     
  //   console.log("tttt")
  //   console.log(test3);
  }

  SetAccount = async(account_address) => {
    const _account_balance = await this.state.token_contract.methods.balanceOf(account_address).call();
    //const _account_balance2 = _account_balance / Math.pow(10, this.state.token_decimal);

    const _current_token = await this.state.token_contract.methods.GetCurrentLockedToken(account_address).call();
    //const _current_token2 = _current_token / Math.pow(10, this.state.token_decimal);

    const _release_token = await this.state.token_contract.methods.GetCurrentReleasedToken(account_address).call();
    //const _release_token2 = _release_token / Math.pow(10, this.state.token_decimal);

    
    this.setState({
      account_acctress: account_address,
      account_total_token: _account_balance/ Math.pow(10, this.state.token_decimal),
      account_current_lock_token:_current_token/ Math.pow(10, this.state.token_decimal),
      account_current_release_lock_token:_release_token/ Math.pow(10, this.state.token_decimal)
    });
  }

  SetSmartContractAddressFromTextInput = async(event) =>{
    event.preventDefault();
    await this.SetSmartContract(event.target.value);
    await this.SetAccount(this.state.account_acctress);
  }

  SetAccountAddressFromTextInput = async(event) =>{
    event.preventDefault();
    await this.SetAccount(event.target.value);
  }



  render() {
  
    return (
      <div className="App">
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code> src/App.js</code> and save to reload.
            </p>      
            <a className="App-link" href="https://react.org" target="_blank" >
            </a>  */}
            <div>
              <p>Token Address : <input type="text" id="in_contract_addr" onChange = {this.SetSmartContractAddressFromTextInput}></input></p> 
              <p>Token Address :  {this.state.token_address}</p>
              <p>Token Name :  {this.state.token_name}</p>
            </div>
            
            <div>
              <p>Account Address : <input type="text" id="in_account_addr" onChange = {this.SetAccountAddressFromTextInput}></input></p>
              <p>Account Address :  {this.state.account_acctress}</p>
              <p>Balance :  {this.state.account_total_token} {this.state.token_symbol}</p>
              <p>Locked Token :  {this.state.account_current_lock_token} {this.state.token_symbol}</p>             
              <p>Released Token :  {this.state.account_current_release_lock_token} {this.state.token_symbol}</p>             
            </div>

        </header>
        
      </div>
    );
  }
}
// index address challenge answer pot status answerBlockNumber
export default App;