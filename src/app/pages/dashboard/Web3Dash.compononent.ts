import { Reward } from './../../../model/Reward';
import { Story } from './../../../model/Story';
import { ProjectService } from './../../@core/data/project.service';
import { Project } from './../../../model/Project';
import { Component, HostListener, NgZone, Input, Injectable } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
const Web3 = require('web3');
const contract = require('truffle-contract');
const metaincoinArtifacts = require('../../../../build/contracts/MetaCoin.json');
import { canBeNumber } from '../../../util/validation';
const postProject  = require('../../../../build/contracts/Projects.json');
const Adoption  = require('../../../../build/contracts/Adoption.json');
const Projects  = require('../../../../build/contracts/Projects.json');
declare var window: any;
const Voting  = require('../../../../build/contracts/Voting.json');
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var BigNumber = require('bignumber.js');
@Component({
  selector: 'web3component',
  templateUrl: './Web3Dash.component.html'
})

export class Web3DashComponent {

  MetaCoin = contract(metaincoinArtifacts);
   PostProject  = contract(postProject);
  varVoting  = contract(postProject);
  varAdoption  = contract(Adoption);
  Projects = contract(Projects);
  // TODO add proper types these variables
  account: any;
  accounts: any;
  web3: any;

  balance: number;
  sendingAmount: number;
  recipientAddress: string;
  status: string;
  canBeNumber = canBeNumber;

 _projectservice ;


  constructor(private _ngZone: NgZone, projectservice: ProjectService) {

    this._projectservice = projectservice;

  }


  @HostListener('window:load')
  windowLoaded() {
    this.checkAndInstantiateWeb3();
    this.onReady();
    this.TestpostaProject(0);
  }

  checkAndInstantiateWeb3 = () => {
    
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      console.warn(' http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.warn(
        ' http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(
        new Web3.providers.HttpProvider('http://localhost:8545')
      );
    }
  };

  onReady = () => {
    // Bootstrap the MetaCoin abstraction for Use.
    this.MetaCoin.setProvider(this.web3.currentProvider);

    this.varAdoption.setProvider(this.web3.currentProvider);
     this.PostProject.setProvider(this.web3.currentProvider);
    this.varVoting.setProvider(this.web3.currentProvider);
    this.Projects.setProvider(this.web3.currentProvider);
    // Get the initial account balance so it can be displayed.
    this.web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        alert('There was an error fetching your accounts.');
        return;
      }

      if (accs.length === 0) {
        alert(
          'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
        );
        return;
      }
      this.accounts = accs;
      this.account = this.accounts[0];

      // This is run from window:load and ZoneJS is not aware of it we
      // need to use _ngZone.run() so that the UI updates on promise resolution
      this._ngZone.run(() =>
        this.refreshBalance()
      );
    });

    console.log("ready")


  };

  refreshBalance = () => {
     var  balanceAccount  = this.account;
    let meta;
    this.varVoting

      .deployed()
      .then(instance => {
     
        meta = instance;
        return meta.getBalance.call(balanceAccount, {
          from: this.account
        });
      })
      .then(value => {
        this.balance = value;

     
      })
      .catch(e => {
        console.log(e);
        this.setStatus('Error getting balance; see log.');
      });


      
  };

  myRefreshBalance = () => {

    console.log('in')

    let meta;
    this.PostProject.deployed().then( instance => {
      console.log(instance)
    })


  }

  setStatus = message => {
    this.status = message;
  };

  sendCoin = () => {
    const amount = this.sendingAmount;
    const receiver = this.recipientAddress;
    let meta;

    this.setStatus('Initiating transaction... (please wait)');

    this.varVoting
      .deployed()
      .then(instance => {
      console.log(instance)
        
        meta = instance;
        /*
        
        return meta.sendCoin(receiver, amount, {
          from: this.account
        });
*/
        return instance.getName.call({
          from: this.account
        });
       
      })
      .then(function(adopters) {

         console.log(adopters)
  
})
      .catch(e => {
        console.log(e);
        this.setStatus('Error sending coin; see log.');
      });
  };
  testfun(){
  
}
markAdopted = async() =>{

}

testing = async() =>{

          var ProjectsContract  =  this.Projects;
          var adoptionInstance1;
          this.web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      
    ProjectsContract.deployed().then(function(instance) {
        adoptionInstance1 = instance;
          console.log(instance.address)

        return adoptionInstance1;
      }).then(function(result) {
        console.log("results")
      
       

        return result
      }).catch(function(err) {
        console.log(err.message);
      });
});       

}
  

   postaProject = async (_pro: Project) => {
     


   }// end of postproject

    TestpostaProject = async (id: number) => {
     
  
    event.preventDefault();

    var petId = 2;
var projectId = parseInt("1");
        var adoptionInstance1;
        let rewardcount:number;
        var ProjectsContract  =  this.Projects;
        var modelproject  = new Project();
        var modelstory  = new Story();
        
     var myprojectservice  = this._projectservice;
    var totoalproject: number;

    // getting totoalprojects

this.web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

    ProjectsContract.deployed().then(function(instance) {
        adoptionInstance1 = instance;
      
          console.log(instance)
         console.log("couting reward");
        return adoptionInstance1.getCountReward.call(0);
      }).then(function(result) {
        console.log(" toal reward count")
        rewardcount = result.toNumber();
        console.log(result.toNumber())
         for (var i = 0 ; i <  result.toNumber(); i++){
              ProjectsContract.deployed().then(function(instance) {
                      adoptionInstance1 = instance;
                        console.log(instance)

                      return adoptionInstance1.getReward.call(0);
                    }).then(function(result) {
                      console.log(" Reward found")
                      console.log(result)
     var modelreward = new Reward();
        modelreward.Description = result[1]
        modelreward.Title = result[0];
        modelreward.EstimatedDilivery = result[3];
        modelreward.PledgeAmount =  result[2];
        modelreward.ShippingDetails = result[4];
        modelproject.RewardList.push(modelreward);

                      return result
                    }).catch(function(err) {
                      console.log(err.message);
                    });


         }
         
        return result
      }).catch(function(err) {
        console.log(err.message);
      });
});
 var localweb3 = this.web3;
// getting project basic information
    this.web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      
    ProjectsContract.deployed().then(function(instance) {
        adoptionInstance1 = instance;
          console.log(instance)

        return adoptionInstance1.getProject.call(id);
      }).then(function(result) {
        console.log("results")
        console.log(result)
        modelproject.Catagory = result[0];
        modelproject.Title = result[1];
        modelproject.Loucation = result[2];
        modelproject.TotalFuneded = localweb3.fromWei(result[3].toNumber(),"ether");
        modelproject.ToalVoteCount = result[4].toNumber();
       

        return result
      }).catch(function(err) {
        console.log(err.message);
      });
});

      //getting detail information 

      this.web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

    ProjectsContract.deployed().then(function(instance) {
        adoptionInstance1 = instance;
          console.log(instance)

        return adoptionInstance1.getProjectDetails.call(id);
      }).then(function(result) {
        console.log("detail results")
        console.log(result)
        modelproject.FundingDuration = result[0].toNumber();
        modelproject.FundingGoal = result[1].toNumber();
        modelproject.ImageUrl = result[2];
        modelproject.ShortDescription = result[3];
        return result
      }).catch(function(err) {
        console.log(err.message);
      });
});
var account ;
// getting story of project 
this.web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

       accounts[0];

    ProjectsContract.deployed().then(function(instance) {
        adoptionInstance1 = instance;
          console.log(instance)

        return adoptionInstance1.getProjectStory.call(id);
      }).then(function(result) {
        console.log("story results")
        console.log(result)
        modelstory.Description = result[0];
        modelstory.RiskAndChallanges = result[1];
        modelstory.VedioUrl = result[2];
        modelproject.ProjectStory = modelstory;
           if ( modelproject.Title !=""){
                    console.log("total project retrived");
                    console.log(modelproject);
                myprojectservice.AddProject(modelproject)
              }
       
        return result
      }).catch(function(err) {
        console.log(err.message);
      });
});


   }// end of postproject

   

TestReward = async (id: number) => {
   event.preventDefault();

    var petId = 2;
var projectId = parseInt("1");
        var adoptionInstance1;

        var ProjectsContract  =  this.Projects;
        var modelproject  = new Project();
        var modelstory  = new Story();
     var myprojectservice  = this._projectservice;
    var totoalproject: number;

    // getting totoalprojects
   
 
  this.web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      
      var account = accounts[0];
      
    ProjectsContract.deployed().then(function(instance) {
        adoptionInstance1 = instance;
          console.log(instance)
      
        return adoptionInstance1.getReward.call(id);
      }).then(function(result) {
        console.log(" toal projectsresults")
        console.log(result)

      
       


     
        return result
      }).catch(function(err) {
        console.log(err.message);
      });
});




   
}

VoteOnproject = async (_proID:number)=> {
    var ProjectsContract  =  this.Projects;
    var projectContractInstance ;

    
  this.web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      
      var account = accounts[0];
    
       ProjectsContract.deployed().then(function(instance) {
        
         projectContractInstance = instance;
         return projectContractInstance.VoteProject(1, {from:account});

       }).then(function(result) {
       
        return result
      }).catch(function(err) {
        console.log(err.message);
      });

  })


}

TransferFunds = async (_account:any, _reward:Reward) => {
  console.log("trafering funds")
  var adoptionInstance1;
        var ProjectsContract  =  this.Projects;
       
     var myprojectservice  = this._projectservice;
    var totoalproject: number;

    // getting totoalprojects
    /*
   this.web3.eth.sendTransaction({from: this.accounts[0], to: this.accounts[1], 
   value: this.web3.toWei(_reward.PledgeAmount, "ether")},function(error, result) {
     console.log(result)
     
   });*/
   var localweb3e  = this.web3;
   var account  = this.accounts[0];
   var account1 = this.accounts[1];
   ProjectsContract.deployed().then(function(instance) {
          console.log( instance)
      
    localweb3e.eth.sendTransaction({from: account, to: instance.address, 
   value: localweb3e.toWei(_reward.PledgeAmount, "ether")},function(error, result) {
     console.log(result)
     
   });
   })
   
     var web3local = this.web3;
/*
   this.web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      
      var account = accounts[0];
    
      
    ProjectsContract.deployed().then(function(instance) {
        adoptionInstance1 = instance;
          console.log(instance)
      
        return adoptionInstance1.TransferFunds(account,1, {from:account,value: web3local.toWei(_reward.PledgeAmount, "ether")});
      }).then(function(result) {
        console.log(" toal projectsresults")
        console.log(result)

      
       


     
        return result
      }).catch(function(err) {
        console.log(err.message);
      });
});*/
 
 
}






   
}//end of main
