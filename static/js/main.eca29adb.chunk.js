(this["webpackJsonptoken-web"]=this["webpackJsonptoken-web"]||[]).push([[0],{196:function(e,t,n){e.exports=n(493)},201:function(e,t,n){},203:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},204:function(e,t,n){},214:function(e,t){},223:function(e,t){},241:function(e,t){},243:function(e,t){},260:function(e,t){},261:function(e,t){},263:function(e,t){},264:function(e,t){},338:function(e,t){},340:function(e,t){},349:function(e,t){},351:function(e,t){},376:function(e,t){},378:function(e,t){},384:function(e,t){},386:function(e,t){},397:function(e,t){},400:function(e,t){},416:function(e,t){},419:function(e,t){},424:function(e,t){},436:function(e,t){},437:function(e,t){},439:function(e,t){},493:function(e,t,n){"use strict";n.r(t);var a=n(15),s=n.n(a),o=n(193),r=n.n(o),i=(n(201),n(14)),c=n.n(i),u=n(32),p=n(4),l=n(5),y=n(9),d=n(8),m=(n(203),n(204),n(73)),b=n.n(m),f=function(e){Object(y.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).ConnectMetaMask=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return console.log(" MetaMask \uc5f0\uacb0 \ucd5c\uc2e0 \ubc29\ubc95 "),a.web3=new b.a(window.ethereum),e.prev=3,e.next=6,window.ethereum.enable();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log("User denied account access error : ".concat(e.t0));case 11:e.next=14;break;case 13:window.web3?(console.log(" MetaMask \uc5f0\uacb0 \uc774\uc804 \ubc29\ubc95 "),a.web3=new b.a(b.a.currentProvider)):console.log("ERORR! MetaMask not installed");case 14:case"end":return e.stop()}}),e,null,[[3,8]])}))),a.SetSmartContract=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,s,o,r,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,s=[{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"_transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"target",type:"address"},{internalType:"uint256",name:"num_token",type:"uint256"}],name:"addLockedToken",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"_release_timestamp",type:"uint256"}],name:"setReleaseDate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!1,inputs:[{internalType:"uint256",name:"_ratio_per_day",type:"uint256"}],name:"setReleaseRatioPerDay",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"_ratio",type:"uint256"}],name:"setTokenPerEthRatio",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{constant:!0,inputs:[{internalType:"uint256",name:"temp_num_init_locked",type:"uint256"}],name:"_calCapableLockedToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"target",type:"address"}],name:"GetCurrentLockedToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"target",type:"address"}],name:"GetCurrentReleasedToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],o=new a.web3.eth.Contract(s,n),e.next=5,o.methods.name().call();case 5:return r=e.sent,e.next=8,o.methods.symbol().call();case 8:return i=e.sent,e.next=11,o.methods.decimals().call();case 11:u=e.sent,a.setState({token_address:n,token_abi:s,token_name:r,token_symbol:i,token_decimal:Number(u),token_contract:o});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.SetContractTest=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0xC2343d16663d15004f4aD7719e40FB84dd4b2fe8",n=[{constant:!1,inputs:[{name:"_address",type:"address"}],name:"setTargetAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_address",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!1,stateMutability:"nonpayable",type:"fallback"}],new a.web3.eth.Contract(n,"0xC2343d16663d15004f4aD7719e40FB84dd4b2fe8"),e.next=5,a.web3.eth.call({from:"0xc249f1B41BeaA159674F6959F79Fcc6fC5671520",to:"0x9CA9f38048EB7e2Cec1e454D9C4070a80E2C2bc4",data:a.web3.eth.abi.encodeFunctionSignature("decimals()")}).then(console.log);case 5:s=e.sent,console.log("tttt"),console.log(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.SetAccount=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.state.token_contract.methods.balanceOf(t).call();case 2:return n=e.sent,e.next=5,a.state.token_contract.methods.GetCurrentLockedToken(t).call();case 5:return s=e.sent,e.next=8,a.state.token_contract.methods.GetCurrentReleasedToken(t).call();case 8:o=e.sent,a.setState({account_acctress:t,account_total_token:n/Math.pow(10,a.state.token_decimal),account_current_lock_token:s/Math.pow(10,a.state.token_decimal),account_current_release_lock_token:o/Math.pow(10,a.state.token_decimal)});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.SetSmartContractAddressFromTextInput=function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.SetSmartContract(t.target.value);case 3:return e.next=5,a.SetAccount(a.state.account_acctress);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.SetAccountAddressFromTextInput=function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.SetAccount(t.target.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={token_address:"",token_abi:[],token_name:"",token_symbol:"",token_decimal:1,token_contract:null,account_acctress:"",account_total_token:0,account_current_lock_token:0,account_current_release_lock_token:0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ConnectMetaMask();case 2:return e.next=4,this.SetContractTest("0x56b7479dc839124878A03F1C8f43907f7eb5b966");case 4:console.log("Target Token (Smart Contract) Address : "+this.state.token_address),console.log("Target Token (Smart Contract) Name : "+this.state.token_name),console.log("Target Token (Smart Contract) Symbol  : "+this.state.token_symbol),console.log("Target Token (Smart Contract) Decimal  : "+this.state.token_decimal),console.log("Target Contract Details : "),console.log(this.state.token_contract),console.log("\ud604\uc7ac Account : "+this.state.account_acctress),console.log("Target Token Balance : "+this.state.account_total_token),console.log(this.state);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("div",null,s.a.createElement("p",null,"Token Address : ",s.a.createElement("input",{type:"text",id:"in_contract_addr",onChange:this.SetSmartContractAddressFromTextInput})),s.a.createElement("p",null,"Token Address :  ",this.state.token_address),s.a.createElement("p",null,"Token Name :  ",this.state.token_name)),s.a.createElement("div",null,s.a.createElement("p",null,"Account Address : ",s.a.createElement("input",{type:"text",id:"in_account_addr",onChange:this.SetAccountAddressFromTextInput})),s.a.createElement("p",null,"Account Address :  ",this.state.account_acctress),s.a.createElement("p",null,"Balance :  ",this.state.account_total_token," ",this.state.token_symbol),s.a.createElement("p",null,"Locked Token :  ",this.state.account_current_lock_token," ",this.state.token_symbol),s.a.createElement("p",null,"Released Token :  ",this.state.account_current_release_lock_token," ",this.state.token_symbol))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[196,1,2]]]);
//# sourceMappingURL=main.eca29adb.chunk.js.map